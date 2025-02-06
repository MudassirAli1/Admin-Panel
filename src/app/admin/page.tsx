"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();

        // Clear previous error
        setError(null);

        // Validate email and password
        if (!email || !password) {
            setError("Please enter both email and password.");
            return;
        }

        // Email format validation using regex
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setError("Please enter a valid email.");
            return;
        }

        setLoading(true);

        setTimeout(() => {
            if (email === "Mudassir@gmail.com" && password === "Mudassir123") {
                setLoading(false);
                router.push("/dashboard");
            } else {
                setLoading(false);
                setError("Invalid credentials!");
            }
        }, 1000); // Simulate a loading time
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-full sm:w-[450px] transition-transform transform hover:scale-105 duration-300">
                <h2 className="text-black text-2xl font-bold text-center mb-6">Admin Login</h2>
                <form onSubmit={handleLogin}>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="text-black mt-1 p-3 w-full border rounded-lg focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type={showPassword ? "text" : "password"} // Toggle between text and password
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="text-black mt-1 p-3 w-full border rounded-lg focus:ring focus:ring-blue-300"
                            required
                        />
                    </div>
                    <div className="flex justify-between text-sm mb-4">
                        <div></div>
                        <Link href="/" className="text-blue-500 hover:underline">
                            Forgot Password?
                        </Link>
                    </div>
                    {/* Show Password Button */}
                    <div className="flex items-center justify-start mb-4">
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)} // Toggle showPassword state
                            className="text-sm text-blue-500 hover:underline"
                        >
                            {showPassword ? "Hide Password" : "Show Password"}
                        </button>
                    </div>
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
                        disabled={loading}
                    >
                        {loading ? (
                            <div className="flex justify-center items-center">
                                <div className="w-5 h-5 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
                            </div>
                        ) : (
                            "Login"
                        )}
                    </button>
                </form>
            </div>
        </div>
    );
}
