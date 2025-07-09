import connectMongoDB from "@/libs/mongoose"
import Client from "@/models/clients"
import { NextResponse } from "next/server"

export async function GET(req, { params }) {
    const { id } = params
    await connectMongoDB()
    const client = await Client.findById(id)
    return NextResponse.json(client, { status: 200 })
}

export async function PUT(req, { params }) {
    const { id } = params
    const { name, phone, address, delivery, orders, points } = await req.json()
    await connectMongoDB()
    await Client.findByIdAndUpdate(id, { name, phone, address, delivery, orders, points })
    return NextResponse.json({ message: 'Client Updated' }, { status: 200 })
}

export async function DELETE(req, { params }) {
    const { id } = params
    await connectMongoDB()
    await Client.findByIdAndDelete(id)
    return NextResponse.json({ message: "Client Deleted" }, { status: 200 })
}
