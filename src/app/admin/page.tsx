// pages/admin/login.tsx
"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";



export default function AdminLogin() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const router = useRouter();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        
        if (!email || !password) {
            alert("Please enter both email and password.");
            return;
        }

        if (email === "admin@example.com" && password === "admin123") {
            alert("Login successful!");
            router.push("/dashboard");
        } else {
            alert("Invalid credentials!");
        }
    };

    return (
        
            <div className="bg-white p-8 rounded-2xl shadow-2xl w-[450px]">
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
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
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
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
       
    );
}
