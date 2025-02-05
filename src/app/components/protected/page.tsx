"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, PropsWithChildren } from "react";

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
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
