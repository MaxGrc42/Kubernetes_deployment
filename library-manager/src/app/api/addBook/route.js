import pool from "@/app/libs/mysql";

export async function POST(req) {
    const data = await req.json();
    console.log(data);
    let author = data.author
    let title = data.title
    let date = data.date
    let id_user = data.id_user
    const request = await pool.query('INSERT INTO Books (title, author, date, id_user) VALUES (?,?,?,?)', [title, author, date, id_user])
    return Response.json({message: "Book added"})
}