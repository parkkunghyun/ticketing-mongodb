import Ticket from "../../(models)/Ticket"; // 상대 경로로 수정 // Ticket 모델 임포트
import { NextResponse } from "next/server"; // NextResponse 임포트

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;

    await Ticket.create(ticketData);

    // 성공 응답 반환
    return NextResponse.json({ message: "Ticket created" }, { status: 201 });
  } catch (err) {
    console.error(err);

    // 오류 응답 반환
    return NextResponse.json({ message: "Error", error: err.message }, { status: 500 });
  }
}


export async function GET() {
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets });

  } catch (err) {
    console.error(err);

    // 오류 응답 반환
    return NextResponse.json({ message: "Error", error: err.message }, { status: 500 });
  }
}