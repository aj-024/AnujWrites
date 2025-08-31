import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { useNavigate } from 'react-router-dom';

function LogoutBtn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout());
      navigate('/login');
    });
  };

  return (
    <button
      onClick={logoutHandler}
      className="inline-block px-4 py-2 rounded-full bg-red-500 text-white font-medium hover:bg-red-600 transition-colors duration-200"
    >
      Logout
    </button>
  );
}

export default LogoutBtn;
