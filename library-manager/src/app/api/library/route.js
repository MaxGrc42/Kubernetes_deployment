import pool from "@/app/libs/mysql";

export async function GET() {
  const req = await pool.query('SELECT title,author,date,id_user FROM Books')
  const data = req[0]
  return Response.json({ data })
}