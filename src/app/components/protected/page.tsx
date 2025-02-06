"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

interface ProtectedRouteProps {
  children?: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isLoggedIn = localStorage.getItem("isLoggedIn");
      if (!isLoggedIn) {
        router.push("/admin");
      }
    }
  }, [router]);

  return <>{children}</>;
};

export default ProtectedRoute;
