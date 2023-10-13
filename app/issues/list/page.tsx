import { Status } from "@prisma/client";

import { Flex } from "@radix-ui/themes";
import React from "react";
import IssueTable, { IssueQuery, columnNames } from "./IssueTable";
import IssueAction from "./IssueAction";
import Pagination from "@/app/components/Pagination";
import prisma from "@/prisma/client";

interface Props {
  searchParams: IssueQuery;
}
const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;
  const where = { status };

  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;
  const itemCount = await prisma.issue.count({ where });
  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  return (
    <Flex direction="column" gap="3">
      <IssueAction />
      <IssueTable searchParams={searchParams} issues={issues} />
      <Pagination
        currentPage={page}
        itemCount={itemCount}
        pageSize={pageSize}
      />
    </Flex>
  );
};

export default IssuesPage;
