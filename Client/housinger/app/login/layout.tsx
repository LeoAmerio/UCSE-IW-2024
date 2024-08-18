"use client";

import { useAuthStore } from "@/store/auth/auth.store";
import { useRouter } from "next/navigation";
import { ReactNode } from "react";

export const AuthLayout = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const authStatus = useAuthStore((state) => state.status);
  const checkAuthStatus = useAuthStore((state) => state.checkAuthStatus);

  if (authStatus === "Pending") {
    checkAuthStatus();
    return <div>Loading...</div>;
  }

  if (authStatus === "Authorized") router.push("/dashboard");

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:flex lg:flex-col items-center justify-center bg-indigo-700">
        {/* <span className="text-white font-bold text-9xl">Zustand</span> */}
        <img
          src="https://placehold.co/1440/0070F3/ffffff.png?text=Housinger&font=Montserrat"
          alt="Placeholder Image"
          className="object-cover w-full h-full"
        />
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;
