import prisma from "@/prisma/client"
import { NextRequest, NextResponse } from "next/server"


export async function DELETE(request: NextRequest, {params} : { params: {id : string} }) {


    // validated the issue before delete the issue

    const issue = await prisma.issue.findUnique({
        where: {
            id: params.id
        }
    })
    if (!issue) 
        return NextResponse.json({error: 'Invalid Issue'}, {status: 401})

    await prisma.issue.delete({
        where: {
            id: issue.id
        }
    })
    return NextResponse.json({})
}