import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import ButtonCustom from "../Components/ButtonCustom";

function LoginPage() {
  return (
    <div className="flex flex-col items-center h-screen bg-custom-blue">
      <div className="w-2/5 mt-4">
        <img src="/Jakala_logo_rgb_full_neg.png" alt="Logo" />
      </div>
      <div className="bg-custom-grey border rounded-lg p-6 shadow-lg w-96 mt-4">
        <h2 className="text-2xl font-bold text-center text-color mb-4">
          Login
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-color"
            >
              Nome utente
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-color"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2 border rounded-md"
            />
          </div>
          <div className="text-center">
            <Link to="/homepage">
              <ButtonCustom text="Accedi"></ButtonCustom>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
