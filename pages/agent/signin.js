import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/agent/signin",
        { email, password }
      );
      console.log("res: " + response.data);

      sessionStorage.setItem("email", response.data);
      router.push("/agent/dashboard");
    } catch (error) {
      console.log("error22: " + error.message);
      setError("Invalid Information");
    }
  };

  return (
    <>
      <div class="p-24 ">
        <section className="text-gray-600 body-font mx-auto w-96">
          <form onSubmit={handleSubmit}>
            <div className="bg-gray-700 rounded-lg p-8 md:ml-auto w-auto mt-10 md:mt-0">
              <h2 className="text-gray-100 text-2xl font-bold title-font mb-5">
                Sign In
              </h2>

              <div className="relative mb-4">
                <label for="full-name" className="leading-7 text-sm text-gray-100">Email</label>
                <input
                  type="email"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="relative mb-4">
                <label for="password" className="leading-7 text-sm text-gray-100">Password</label>
                <input
                  type="password"
                  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Sign In</button>
              {error && (
                <div>
                  <p
                    id="outlined_error_help"
                    class="mt-2 text-xs text-red-600 dark:text-red-400"
                  >
                    <span class="font-medium">{error}</span>
                  </p>
                </div>
              )}
            </div>
          </form>
        </section>
      </div>
    </>
  );
}
