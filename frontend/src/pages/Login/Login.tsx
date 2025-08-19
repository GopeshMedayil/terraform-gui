import AuthLayout from "../../layouts/AuthLayout";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    return (
        <AuthLayout>
            <div className="flex min-h-screen items-center justify-center bg-gray-100">
                <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
                    <h2 className="mb-6 text-center text-2xl font-bold text-gray-800">
                        Sign in to Your Account
                    </h2>

                    {/* Email */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="you@example.com"
                            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="••••••••"
                            className="mt-1 w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                        />
                    </div>

                    {/* Sign In button */}
                    <button className="mb-4 w-full rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 transition">
                        Sign In
                    </button>

                    {/* Divider */}
                    <div className="flex items-center justify-center my-4">
                        <div className="h-px flex-1 bg-gray-300"></div>
                        <span className="px-2 text-sm text-gray-500">or</span>
                        <div className="h-px flex-1 bg-gray-300"></div>
                    </div>

                    {/* Google Login */}
                    <button
                        className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white py-2 text-gray-700 shadow-sm hover:bg-gray-50 transition"
                    >
                        <FcGoogle className="text-xl" />
                        Continue with Google
                    </button>
                </div>
            </div>
        </AuthLayout>
    );
}

export default Login;