"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/firebase/client";

export default function PostAuthRedirectPage() {
    const router = useRouter();

    useEffect(() => {
        const user = auth.currentUser;
        if (user) {
            router.push("/");
        } else {
            // Optionally, redirect to sign-in if no user
            router.push("/sign-in");
        }
    }, [router]);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <p className="text-gray-600 text-lg">Please wait... redirecting you 👀</p>
        </div>
    );
}
