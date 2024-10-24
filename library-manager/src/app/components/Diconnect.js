"use client"
import React from "react";
import {useRouter} from "next/navigation";

export default function Disconnect() {
    const router = useRouter();

    const handleDisconnect = () => {
        // Add your disconnect logic here (e.g., clearing user session)
        router.push("/login");
    };

    return (
        <button onClick={handleDisconnect} className="px-4 py-2 bg-red-500 text-white rounded m-4">
            Disconnect
        </button>
    );

}