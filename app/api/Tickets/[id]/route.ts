import Ticket from "../../../(models)/Ticket";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    try {
        const { id } = await params;
        await Ticket.findByIdAndDelete(id);
        return NextResponse.json({ message: "Ticket Deleted!!" });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 501 });
    }
}

export async function PUT(req, { params }) {
    try {
        const { id } = await params;
        const body = await req.json();
        const ticketData = body.formData;
        const updateTicketData = await Ticket.findByIdAndUpdate(id,
            { ...ticketData });
        return NextResponse.json({ message: "Ticket updated!!" });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 501 });
    }
}


export async function GET(req, { params }) {
    try {
        const { id } = await params;
        const foundTicket = await Ticket.findOne({ _id: id });
        return NextResponse.json({ foundTicket });
    } catch (error) {
        return NextResponse.json({ message: "Error", error }, { status: 501 });
    }
}
