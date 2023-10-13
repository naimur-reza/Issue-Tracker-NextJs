import { PrismaClient } from "@prisma/client";
import { Flex } from "@radix-ui/themes";
import React from "react";
import IssueTable, { IssueQuery } from "./IssueTable";
import IssueAction from "./IssueAction";

interface Props {
  searchParams: IssueQuery;
}
const IssuesPage = async ({ searchParams }: Props) => {
  const prisma = new PrismaClient();
  const issues = await prisma.issue.findMany({});

  return (
    <Flex direction="column" gap="3">
      <IssueAction />
      <IssueTable searchParams={searchParams} issues={issues} />
    </Flex>
  );
};

export default IssuesPage;
