import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { supabase } from "@/services/supabase.ts";
import {
  Session,
  SignInWithPasswordCredentials,
  User,
  AuthResponse,
  AuthError
} from "@supabase/supabase-js";

type AuthData = {
  email: string;
  password: string;
  options: {
    data: {
      fullName: string;
      admin: boolean;
    };
  };
};

type AuthContextType = {
  user: User | null;
  session: Session | null;
  signUp: (data: AuthData) => Promise<AuthResponse>;
  signIn: (data: SignInWithPasswordCredentials) => Promise<AuthResponse>;
  signOut: () => Promise<{ error: AuthError | null }>;
};

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [session, setSession] = useState<Session | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const gotSession = localStorage.getItem("authSession");
    if (gotSession) {
      setSession(JSON.parse(gotSession));
      setUser(JSON.parse(gotSession));
    }

    async function getSession() {
      const {
        data: { subscription }
      } = supabase.auth.onAuthStateChange(async (_, session) => {
        if (session) {
          setUser(session.user);
          localStorage.setItem("authSession", JSON.stringify(session));
          setSession(session);
        } else {
          localStorage.removeItem("authSession");
          setSession(null);
          setUser(null);
        }
      });
      return () => {
        subscription?.unsubscribe();
      };
    }

    getSession();
  }, []);

  const value = {
    signUp: (data: AuthData) => supabase.auth.signUp(data),
    signIn: (data: SignInWithPasswordCredentials) => supabase.auth.signInWithPassword(data),
    signOut: () => supabase.auth.signOut(),
    user,
    session
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthContextProvider.");
  }
  return context;
};
