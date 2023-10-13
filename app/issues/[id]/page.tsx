import React from "react";
import IssueDetails from "./IssueDetails";
import { PrismaClient } from "@prisma/client";
import { notFound } from "next/navigation";

interface Props {
  params: { id: string };
}
const prisma = new PrismaClient();
const page = async ({ params }: Props) => {
  const issue = await prisma.issue.findUnique({
    where: { id: params.id },
  });

  if (!issue) notFound();
  console.log(issue);
  return (
    <div>
      Details
      <IssueDetails issue={issue} />
    </div>
  );
};

export default page;
