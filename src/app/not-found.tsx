import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
    return (
        <section className="container mx-auto min-h-screen flex items-center justify-center">
            <div className="text-center max-w-2xl">
                <h1 className="text-9xl font-bold mb-4">404</h1>
                <h2 className="text-4xl font-semibold mb-6">Page Not Found</h2>
                <p className="text-xl text-gray-400 mb-12">
                    The page you're looking for doesn't exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-flex items-center border px-6 py-3 text-sm group hover:bg-foreground hover:text-background transition-colors"
                >
                    Return Home
                    <ArrowRight className="h-5 w-5 ml-3 transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </section>
    );
}
