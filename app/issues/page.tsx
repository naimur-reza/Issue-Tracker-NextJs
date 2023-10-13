import { Issue, PrismaClient, Status } from "@prisma/client";
import { Button, Flex } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import IssueTable, { IssueQuery } from "./list/IssueTable";
import IssueAction from "./list/IssueAction";

interface Props {
  searchParams: IssueQuery;
}
const IssuesPage = async ({ searchParams }: Props) => {
  const prisma = new PrismaClient();
  const issues = await prisma.issue.findMany({});
  console.log(issues);
  return (
    <Flex direction="column" gap="3">
      <IssueAction />
      <IssueTable searchParams={searchParams} issues={issues} />
    </Flex>
  );
};

export default IssuesPage;
