import Link from 'next/link';

export default function PageNotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-white font-raleway px-4">
            <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-xl font-medium text-gray-700 mb-2">Page Not Found</h2>
            <p className="text-base text-gray-500 mb-6 text-center max-w-md">
                Looks like you got tangled in the yarn! This page doesn’t exist, but you can always find comfort on the homepage.
            </p>
            <Link href="/">
                <button className="bg-black text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200">
                    Back to Home
                </button>
            </Link>
        </div>
    );
}