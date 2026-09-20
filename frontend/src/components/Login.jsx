import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import auth from "../config/firebase";

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);

        auth.onAuthStateChanged(function (user) {
            if (user) {
                navigate("/home");
            }
        });
    }, []);

    const handleLogin = (e) => {
        e.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then((res) => {
                navigate("/home");
            })
            .catch(() => {
                setErr("Error signin please try again");
            });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f0b2e] via-[#24104f] to-[#7b1fa2] flex items-center justify-center px-6">

            <form
                onSubmit={handleLogin}
                className="w-full max-w-2xl p-10 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-xl"
            >

                <h2 className="text-3xl font-bold mb-8 text-white">
                    Login
                </h2>


                {/* EMAIL */}

                <div className="mb-6">

                    <label className="block text-gray-200 font-medium mb-2">
                        Email:
                    </label>

                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="mt-1 p-3 w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 outline-none focus:border-fuchsia-400"
                    />

                </div>


                {/* PASSWORD */}

                <div className="relative">

                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="mt-1 p-3 pr-12 w-full bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 outline-none focus:border-fuchsia-400"
                    />

                    <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-300 hover:text-white"
                    >
                        <FontAwesomeIcon
                            icon={showPassword ? faEyeSlash : faEye}
                        />
                    </button>

                </div>


                {/* ERROR */}

                <p className="text-red-400 my-3">
                    {err}
                </p>


                {/* REGISTER */}

                <p
                    className="text-fuchsia-400 cursor-pointer my-4 hover:text-fuchsia-300 transition"
                    onClick={() => navigate("/signup")}
                >
                    New user? Register here
                </p>


                {/* LOGIN BUTTON */}

                <button
                    type="submit"
                    className="bg-fuchsia-500 text-white py-3 px-7 rounded-lg font-semibold hover:bg-fuchsia-600 transition"
                >
                    Login
                </button>

            </form>

        </div>
    );
}

export default Login;