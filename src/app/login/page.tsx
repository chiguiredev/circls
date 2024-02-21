"use client";
import { AuthForm } from "@/userService/components/AuthForm";
import { useLoginForm } from "@/userService/hooks/useLoginForm";

export default function LoginPage() {
  const { error, handleSubmit } = useLoginForm();

  return (
    <main className="flex flex-col items-center justify-center h-dvh">
      <AuthForm
        error={error}
        handleSubmit={handleSubmit}
        copyText={{
          button: "Login",
          title: "Login"
        }}
      />
    </main>
  )
}
