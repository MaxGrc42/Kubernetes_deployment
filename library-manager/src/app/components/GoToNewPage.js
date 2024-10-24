"use client"
import React from "react";
import {useRouter} from "next/navigation";

export default function GoToNewPage() {
    const router = useRouter();

    const handleURL = () => {
        router.push("/libraryAddBook");
    };

    return (
        <button onClick={handleURL} className="px-4 py-2 bg-blue-500 text-white rounded m-4">
            Ajouter un livre
        </button>
    );

}