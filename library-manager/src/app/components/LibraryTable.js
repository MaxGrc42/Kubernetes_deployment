"use client"
import React from "react";
import {useSearchParams} from "next/navigation";

export default function LibraryTable({ books }) {
    const searchParams = useSearchParams();
    const id_user = searchParams.get("userId");
    books.data = books.data.filter(book => book.id_user == id_user);
    return (
        <table className="min-w-full bg-white">
            <thead>
                <tr>
                    <th className="py-2 text-black">Titre</th>
                    <th className="py-2 text-black">Auteur</th>
                    <th className="py-2 text-black">Date</th>
                </tr>
            </thead>
            <tbody>
                {books.data.map((book, index) => (
                    <tr key={index}>
                        <td className="border px-4 py-2 text-black">{book.title}</td>
                        <td className="border px-4 py-2 text-black">{book.author}</td>
                        <td className="border px-4 py-2 text-black">{new Date(book.date).getFullYear()}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}