import { describe, it, expect, vi, beforeEach } from "vitest";
import { Request, Response } from "express";

vi.mock("../prisma.js", () => ({
  prisma: {
    user: {
      findMany: vi.fn(),
    },
  },
}));

import { prisma } from "../prisma.js";
import { getAllUsers } from "../controllers/user.controller.js";

describe("getAllUsers", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("returns all users with their relations", async () => {
    const mockUsers = [
      {
        id: "1",
        name: "John Doe",
        email: "john@example.com",
        wilaya: { id: 1, name: "Alger" },
        skills: [{ skill: { id: 1, name: "TypeScript" } }],
      },
    ];
    vi.mocked(prisma.user.findMany).mockResolvedValue(mockUsers as any);

    const req = {} as Request;
    const json = vi.fn();
    const res = { json, status: vi.fn(() => ({ json })) } as unknown as Response;

    await getAllUsers(req, res);

    expect(json).toHaveBeenCalledWith(mockUsers);
  });

  it("returns 500 on error", async () => {
    vi.mocked(prisma.user.findMany).mockRejectedValue(new Error("DB error"));

    const req = {} as Request;
    const json = vi.fn();
    const status = vi.fn(() => ({ json }));
    const res = { json, status } as unknown as Response;

    await getAllUsers(req, res);

    expect(status).toHaveBeenCalledWith(500);
    expect(json).toHaveBeenCalledWith({ error: "Failed to fetch users" });
  });
});
