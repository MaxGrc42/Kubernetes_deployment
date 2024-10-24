"use client"
import React, {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {ReflectAdapter as searchParams} from "next/dist/server/web/spec-extension/adapters/reflect";

export default function AddBook() {
    const searchParams = useSearchParams();
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState("");
    const id_user = searchParams.get("userId");
    const router = useRouter();
    const addBook = async (event) => {
        event.preventDefault();
        console.log(title, author, date);
        const response = await fetch('/api/addBook', {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({
                title, author, date, id_user
            })
        });
        if (response.ok) {
            console.log("Book added");
            router.push("/library?userId="+id_user);
        } else {
            console.error("Error adding book");
        }
    }
    const cancel = () => {
        router.push("/library");
    }
    return (<form className="flex flex-col space-y-4">
        <input
            onChange = {(event)=> setTitle(event.target.value)}
            type="text"
            placeholder="Book Name"
            className="px-4 py-2 border text-black rounded"
        />
        <input
            onChange = {(event)=> setAuthor(event.target.value)}
            type="text"
            placeholder="Author"
            className="px-4 py-2 border text-black rounded"
        />
        <input
            onChange = {(event)=> setDate(event.target.value)}
            value={date}
            type="date"
            className="px-4 py-2 border text-black rounded"
        />
        <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={addBook}
        >
            Validate
        </button>
        <button
            type="cancel"
            className="px-4 py-2 bg-red-500 text-white rounded"
            onClick={cancel}
        >
            Cancel
        </button>
    </form>);

}