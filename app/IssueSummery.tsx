import { Status } from "@prisma/client";
import { Text, Card, Flex, Grid } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

interface Props {
  open: number;
  inProgress: number;
  closed: number;
}

const IssueSummery = ({ inProgress, open, closed }: Props) => {
  const containers: { label: string; status: Status; value: number }[] = [
    { label: "Open issues", value: open, status: "OPEN" },
    { label: "In Progress issues", value: inProgress, status: "IN_PROGRESS" },
    { label: "Closed issues", value: closed, status: "CLOSED" },
  ];
  return (
    <Flex gap="3">
      {containers.map((container) => (
        <Card key={container.value}>
          <Flex direction="column">
            <Link
              className="text-sm font-medium"
              href={"/issues/list?status=" + container.status}>
              {container.label}
            </Link>
            <Text size="4" className="font-bold">
              {container.value}
            </Text>
          </Flex>
        </Card>
      ))}
    </Flex>
  );
};

export default IssueSummery;
