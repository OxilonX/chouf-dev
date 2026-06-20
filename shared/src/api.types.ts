// User domain
export interface Wilaya {
  id: number;
  code: number;
  name: string;
  slug: string;
}

export interface Skill {
  id: number;
  name: string;
  slug: string;
}

export interface DeveloperSkill {
  userId: string;
  skillId: number;
  skill: Skill;
}

export interface PortfolioPost {
  id: string;
  userId: string;
  title: string;
  description: string;
  imageUrl: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  id: string;
  name: string | null;
  email: string;
  emailVerified: boolean;
  image: string | null;
  createdAt: string;
  updatedAt: string;
  isOnboarded: boolean;
  bio: string | null;
  wilayaId: number | null;
  wilaya: Wilaya | null;
  githubUsername: string | null;
  publicEmail: string | null;
  phoneNumber: string | null;
  skills: DeveloperSkill[];
  portfolioPosts: PortfolioPost[];
}

// API request / response shapes
export interface PaginationParams {
  page?: number;
  limit?: number;
}

export interface UserSearchParams extends PaginationParams {
  name?: string;
  wilayaId?: number;
  skillIds?: number[];
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  limit: number;
}
