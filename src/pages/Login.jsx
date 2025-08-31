import React from "react";
import { Login as LoginComponent } from "../components";

function Login() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">Login</h1>
        <LoginComponent />
      </div>
    </div>
  );
}

export default Login;
