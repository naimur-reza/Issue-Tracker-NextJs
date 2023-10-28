import { Issue } from "@prisma/client";
import { Table } from "@radix-ui/themes";
import React from "react";
import UpdateIssue from "./UpdateIssue";
import { IssueStatusBadge } from "../components";

interface Props {
  assignedIssues: Issue[];
}

const AssignedTable = ({ assignedIssues }: Props) => {
  return (
    <div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            {columns.map((item) => (
              <Table.ColumnHeaderCell
                key={item.label}
                className={item.className}>
                {item.label}
              </Table.ColumnHeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {assignedIssues.map((issue) => (
            <Table.Row key={issue.id}>
              <Table.Cell>{issue.title}</Table.Cell>
              <Table.Cell>
                <IssueStatusBadge status={issue.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {issue.createdAt.toDateString()}
              </Table.Cell>
              <Table.Cell>
                <UpdateIssue id={issue.id} status={issue.status} />
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};

const columns: { label: string; value?: keyof Issue; className?: string }[] = [
  { label: "Issue", value: "title" },
  { label: "Status", value: "status" },
  { label: "CreatedAt", value: "createdAt", className: "hidden md:table-cell" },
  { label: "Action" },
];

export default AssignedTable;
