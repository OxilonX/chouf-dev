import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Button } from "@/components/ui/button";
import type { User } from "@project/shared";

describe("Button", () => {
  it("renders with text", () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
  });

  it("applies variant classes", () => {
    render(<Button variant="destructive">Delete</Button>);
    const button = screen.getByRole("button");
    expect(button).toHaveClass("bg-destructive/10");
  });

  it("renders disabled button", () => {
    render(<Button disabled>Disabled</Button>);
    const button = screen.getByRole("button");
    expect(button).toBeDisabled();
  });

  it("can use shared User type", () => {
    const user: User = {
      id: "1",
      name: "Test",
      email: "test@test.com",
      emailVerified: true,
      image: null,
      createdAt: "",
      updatedAt: "",
      isOnboarded: true,
      bio: null,
      wilayaId: null,
      wilaya: null,
      githubUsername: null,
      publicEmail: null,
      phoneNumber: null,
      skills: [],
      portfolioPosts: [],
    };
    expect(user.name).toBe("Test");
  });
});
