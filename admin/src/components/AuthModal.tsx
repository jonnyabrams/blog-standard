import { useState } from "react";
import { toast } from "react-toastify";

import client from "../api/client";

const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [err, setErr] = useState("");

  const clearAllInputs = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  const handleClick = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErr("Passwords do not motch");
    } else {
      const newUser = {
        username,
        email,
        password,
      };
      try {
        await client.post("/auth/register", newUser);
        clearAllInputs();
        setIsLogin(true);
        setErr("");
        toast("Success! Please log in to continue");
      } catch (error: any) {
        console.log(error.response.data);
      }
    }
  };

  const inputClasses =
    "border border-gray-300 rounded-md py-2 my-2 px-4 focus:outline";

  return (
    // outer div positions it in middle
    <div className="fixed inset-0 flex items-center justify-center z-20">
      <div
        className="bg-white w-[400px] h-[600px] rounded-md flex flex-col items-center"
        style={{
          boxShadow: "0 0 0 10000px rgba(0, 0, 0, 0.8)",
        }}
      >
        <div className="bg-white py-6 flex flex-col items-center">
          <h1 className="pb-6">New to Blog Standard?</h1>
          <span>{isLogin ? "LOG IN!" : "SIGN UP!"}</span>
        </div>

        <form className="flex flex-col items-center pt-8">
          {!isLogin && (
            <input
              className={inputClasses}
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          )}
          <input
            className={inputClasses}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={inputClasses}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!isLogin && (
            <input
              className={inputClasses}
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          )}

          {err && (
            <span style={{ color: "red", fontSize: "10px" }}>* {err}</span>
          )}

          <button
            className="w-[50%] h-8 rounded text-white mt-8 bg-[var(--main-blue)] hover:text-[var(--main-blue)] hover:bg-white hover:border hover:border-[var(--main-blue)]"
            onClick={handleClick}
          >
            {isLogin ? "Log In" : "Register"}
          </button>
        </form>

        <span className="mt-20 text-[var(--main-blue)]">
          {isLogin ? "Don't have an account?" : "Already a member?"}{" "}
          <span
            onClick={() => (isLogin ? setIsLogin(false) : setIsLogin(true))}
            className="font-bold cursor-pointer"
          >
            {isLogin ? "Sign up!" : "Log in!"}
          </span>
        </span>
      </div>
    </div>
  );
};

export default AuthModal;
