import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export const useLoginForm = () => {

  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError(null);

    const form = new FormData(event.currentTarget);

    const email = form.get("email") as string;
    const password = form.get("password") as string;

    const authResponse = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (authResponse?.error) {
      setError("Invalid credentials");
      return;
    }

    router.push("/");
  }

  return {
    error,
    handleSubmit,
  };
};
