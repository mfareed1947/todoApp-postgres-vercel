import { NextRequest, NextResponse } from "next/server";
import { db, todoTable, Todo, newTodo } from "../../lib/drizzle"
import { sql } from "@vercel/postgres";

export async function GET(request: NextRequest) {

  try {
    await sql`CREATE TABLE IF NOT EXISTS todos(id SERIAL , task VARCHAR(255))`;
    const res = await db.select().from(todoTable);
    console.log(res)
    return NextResponse.json({ message: res })
  } catch (error) {
    console.log((error as { message: string }).message)
    return NextResponse.json({ message: 'apna kaam sahi se check karo' })
  }
}


export async function POST(request: NextRequest) {
  const req = await request.json();

  try {
    if (req.task) {
      const res = await db.insert(todoTable).values({
        task: req.task,
      }).returning(); 
      console.log(res)
      return NextResponse.json({ message: 'Data added successfully' })
    } else {
      throw new Error("task field is required");
    }
  } catch (error) {
    return NextResponse.json({ message: (error as { message: string }).message })
  }
}