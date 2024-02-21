"use client";
import { useRegistrationForm } from "@/userService/hooks/useRegistrationForm";
import { AuthForm } from "@/userService/components/AuthForm";

export default function RegisterPage() {

  const { error, handleSubmit } = useRegistrationForm();

  return (
    <main className="flex flex-col items-center justify-center h-dvh">
      <AuthForm
        error={error}
        handleSubmit={handleSubmit}
        copyText={{
          button: "Register",
          title: "Register"
        }}
      />
    </main>
  );
}
