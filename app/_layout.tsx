import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { createContext, useContext, useMemo, useState } from 'react';

type AuthContextType = {
  isAuthenticated: boolean;
  email: string | null;
  login: (email: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};

export default function RootLayout() {
  const [email, setEmail] = useState<string | null>(null);

  const value = useMemo<AuthContextType>(() => ({
    isAuthenticated: !!email,
    email,
    login: setEmail,
    logout: () => setEmail(null),
  }), [email]);

  return (
    <AuthContext.Provider value={value}>
      <StatusBar style="light" backgroundColor="#0A0F0F" />
      <Stack screenOptions={{ headerShown: false, contentStyle: { backgroundColor: '#0A0F0F' } }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="payment" />
      </Stack>
    </AuthContext.Provider>
  );
}
