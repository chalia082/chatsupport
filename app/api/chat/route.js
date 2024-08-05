import { NextResponse } from "next/server";
import OpenAI from "openai";
const openai = new OpenAI();

export function GET() {
    return NextResponse.json({message: 'Hello again.'})
}

export async function POST (req) {

    const completion = await openai.chat.completions.create({
        messages: [{ role: "system", content: "You are a helpful assistant." }],
        model: "gpt-3.5-turbo",
    })

    console.log(completion.choices[0]);

    const data = await req.json()
    console.log(data);
    return NextResponse.json({message: 'Hello from the server!'})
    
}