"use client";
import { useState } from "react";

export default async function RegisterPage() {

  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setError(null);

    const form = new FormData(event.currentTarget);

    const email = form.get("email") as string;
    const password = form.get("password") as string;

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.ok) {
        window.location.href = "/login";
      } else {
        const data = await response.json();
        setError(data.error);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="flex flex-col items-center justify-center h-dvh">
      <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center font-semibold text-gray-900 my-4 sm:text-5xl md:text-6xl lg:text-7xl">
          Register
        </h1>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
          className="p-2 m-2 border-2 border-gray-300 rounded-md text-gray-700 text-lg
          focus:border-blue-500 focus:ring focus:ring-blue-200
          placeholder-gray-400 w-full h-10 shadow transition ease-in-out duration-150"
        />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
          className="p-2 m-2 border-2 border-gray-300 rounded-md text-gray-700 text-lg
          focus:border-blue-500 focus:ring focus:ring-blue-200
          placeholder-gray-400 w-full h-10 shadow transition ease-in-out duration-150"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded
          transition duration-150 ease-in-out shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          type="submit"
        >
          Register
        </button>
      </form>
    </main>
  )
}
