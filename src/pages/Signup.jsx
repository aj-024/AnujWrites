import React from 'react';
import { Signup as SignupComponent } from '../components';

function Signup() {
  return (
    <div className="bg-[#F9FAFB] min-h-screen py-12">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create an Account
        </h1>
        <SignupComponent />
      </div>
    </div>
  );
}

export default Signup;
