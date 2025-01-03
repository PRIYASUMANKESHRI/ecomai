export interface User {
  id: string;
  email: string;
  name: string;
  addresses: Address[];
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}
