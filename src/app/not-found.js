// 'use client'
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white px-6">
            <div className="text-center max-w-xl">

                {/* Big 404 */}
                <h1 className="text-8xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-indigo-400 drop-shadow-lg">
                    404
                </h1>

                {/* Title */}
                <h2 className="mt-6 text-3xl font-semibold tracking-wide">
                    Oops! Page not found
                </h2>

                {/* Description */}
                <p className="mt-4 text-gray-300">
                    The page you're looking for doesn’t exist or has been moved.
                    Don’t worry, you can go back to the homepage.
                </p>

                {/* Buttons */}
                <div className="mt-8 flex justify-center gap-4">
                    <Link
                        href="/"
                        className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 hover:scale-105 transition-transform shadow-lg"
                    >
                        Go Home
                    </Link>

                    {/* <button
                        onClick={() => history.back()}
                        className="px-6 py-3 rounded-xl border border-gray-500 hover:bg-white/10 transition"
                    >
                        Go Back
                    </button> */}
                </div>

                {/* Decorative Glow */}
                <div className="absolute top-10 left-10 w-72 h-72 bg-purple-600 opacity-20 blur-3xl rounded-full"></div>
                <div className="absolute bottom-10 right-10 w-72 h-72 bg-pink-600 opacity-20 blur-3xl rounded-full"></div>
            </div>
        </div>
    );
}