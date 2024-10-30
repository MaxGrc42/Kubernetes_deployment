import pool from "@/app/libs/mysql";

export async function GET() {
  const req = await pool.query('SELECT id,name FROM Users')
  const data = req[0]
  return Response.json({ data })
}