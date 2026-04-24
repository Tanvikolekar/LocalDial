import React, { useState } from "react";
import { loginUser } from "../apiCalls";
import { useNavigate, useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = () => {
  // State hooks for form data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle form submission

  const navigate = useNavigate();
  const location = useLocation();
  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!email || !password) {
    setError("All fields are required.");
    return;
  }

  try {
    setLoading(true);
    setError("");

    const response = await loginUser({ email, password });

    if (response.success) {
      // ✅ SAVE LOGIN
     localStorage.setItem("token", response.token);
      localStorage.setItem("user", JSON.stringify(response.user || {}));

      // 🔁 REDIRECT BACK
      const from = location.state?.from?.pathname || "/";
      navigate(from);

    } else {
      setError(response.message || "Invalid credentials.");
    }
  } catch (err) {
    setError("Error during login. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="p-8 rounded-xl shadow-lg w-full max-w-sm transform transition hover:scale-105 duration-300">
        <h2 className="text-2xl font-extrabold mb-6 text-center text-orange-700">
          Welcome Back!
        </h2>
        <p className="text-center text-gray-600 mb-6">
          Please log in to continue.
        </p>
        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-orange-500 focus:outline-none text-gray-800 placeholder-gray-400"
              required
            />
          </div>

          {/* Display Error */}
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-orange-500 text-white py-3 rounded-lg shadow-md hover:bg-orange-600 hover:shadow-lg transform transition hover:scale-105 duration-300"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Forgot Password Link */}
        <div className="mt-4 text-center">
  <Link
    to="/resetPassword"
    className="text-orange-500 hover:underline transition duration-300"
  >
    Reset Password
  </Link>
</div>

<p className="mt-6 text-center text-sm text-gray-600">
  Don’t have an account?{" "}
  <Link
    to="/register"
    className="text-orange-500 hover:underline transition duration-300"
  >
    Sign up
  </Link>
</p>
      </div>
    </div>
  );
};

export default Login;
