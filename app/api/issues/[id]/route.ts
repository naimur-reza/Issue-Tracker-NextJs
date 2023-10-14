import { patchIssueSchema } from "@/app/validationSchema";
import prisma from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  // validated the issue before delete the issue

  const issue = await prisma.issue.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!issue)
    return NextResponse.json({ error: "Invalid Issue" }, { status: 401 });

  await prisma.issue.delete({
    where: {
      id: issue.id,
    },
  });
  return NextResponse.json({});
}

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const body = await request.json();

  const validation = patchIssueSchema.safeParse(body);

  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });
  const { title, description } = body;

  const issue = await prisma.issue.findUnique({
    where: {
      id: params.id,
    },
  });
  if (!issue)
    return NextResponse.json({ error: "Invalid Issue" }, { status: 401 });

  // update the issue
  const updateIssue = await prisma.issue.update({
    where: {
      id: params.id,
    },
    data: {
      title,
      description,
    },
  });
  return NextResponse.json(updateIssue);
}
