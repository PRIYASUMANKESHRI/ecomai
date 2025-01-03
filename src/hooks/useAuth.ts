import { useState, useCallback } from 'react';
import { User, AuthState } from '../types/auth';

export function useAuth() {
  const [auth, setAuth] = useState<AuthState>({
    user: null,
    isAuthenticated: false
  });

  const login = useCallback(async (email: string, password: string) => {
    // TODO: Implement actual authentication
    const mockUser: User = {
      id: '1',
      email,
      name: 'Test User',
      addresses: []
    };
    setAuth({ user: mockUser, isAuthenticated: true });
  }, []);

  const logout = useCallback(() => {
    setAuth({ user: null, isAuthenticated: false });
  }, []);

  return { ...auth, login, logout };
}
