"use client";

import LoginForm from "@/components/Authentication/LoginForm";
import SignUpForm from "@/components/Authentication/RegisterForm";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "../../hooks/useUser";

export default function Auth() {
  const [authMethod, setAuthMethod] = useState("login");
  const router = useRouter();
  const { data: user } = useUser();

  useEffect(() => {
    if (user) {
      router.push("/menu");
    }
  }, [user, router]);

  return (
    <main>
      {authMethod === "login" ? (
        <LoginForm changeMethod={() => setAuthMethod("register")} />
      ) : (
        <SignUpForm changeMethod={() => setAuthMethod("login")} />
      )}
    </main>
  );
}
