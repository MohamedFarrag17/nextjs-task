"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { verifyAccount } from "../lib/api";

export default function VerifyPage() {
  const router = useRouter();
  const [code, setCode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const res = await verifyAccount(token, code);
      alert("Account is now verified");
      router.push("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-center justify-center gap-3 bg-white p-20 rounded-lg shadow-md w-full max-w-md "
      >
        <input
          placeholder="Verification Code"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="w-full bg-[#BE968E] text-white py-2 rounded-lg hover:bg-black transition-colors duration-300 ease-in-out"
        >
          Verify
        </button>
      </form>
    </div>
  );
}
