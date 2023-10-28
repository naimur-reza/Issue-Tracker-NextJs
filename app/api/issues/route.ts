import { NextRequest, NextResponse } from "next/server";
import { createdIssueSchema } from "../../validationSchema";
import prisma from "@/prisma/client";
import { Session, getServerSession } from "next-auth";
import { authOptions } from "@/app/auth/authOptions";

export async function POST(request: NextRequest) {
  const session = getServerSession(authOptions);

  if (!session) return NextResponse.json({}, { status: 401 });
  const body = await request.json();
  const validation = createdIssueSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  const newIssue = await prisma.issue.create({
    data: { title: body.title, description: body.description },
  });
  return NextResponse.json(newIssue, { status: 200 });
}

export async function GET(request: NextRequest) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user?.email) {
    return NextResponse.json({}, { status: 401 });
  }

  const issues = await prisma.user.findUnique({
    where: {
      email: session.user.email,
    },
    select: {
      assignedIssues: true,
    },
  });

  return NextResponse.json(issues, { status: 200 });
}
