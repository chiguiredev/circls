export default async function RegisterPage() {
  return (
    <main className="flex flex-col items-center justify-center h-dvh">
      <form className="flex flex-col items-center justify-center">
        <h1 className="text-4xl text-center font-semibold text-gray-900 my-4 sm:text-5xl md:text-6xl lg:text-7xl">
          Register
        </h1>
        <input
          type="email"
          placeholder="Enter your email"
          className="p-2 m-2 border-2 border-gray-300 rounded-md text-gray-700 text-lg
          focus:border-blue-500 focus:ring focus:ring-blue-200
          placeholder-gray-400 w-full h-10 shadow transition ease-in-out duration-150"
        />
        <input
          type="email"
          placeholder="Enter your password"
          className="p-2 m-2 border-2 border-gray-300 rounded-md text-gray-700 text-lg
          focus:border-blue-500 focus:ring focus:ring-blue-200
          placeholder-gray-400 w-full h-10 shadow transition ease-in-out duration-150"
        />
        <button type="submit">Register</button>
      </form>
    </main>
  )
}
