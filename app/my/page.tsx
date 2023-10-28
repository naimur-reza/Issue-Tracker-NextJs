import prisma from "@/prisma/client";
import { Card, Flex, Grid, Text } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../auth/authOptions";
import AssignedTable from "./AssignedTable";

const MyAssigned = async () => {
  const session = await getServerSession(authOptions);
  if (!session || !session.user?.email) return;
  const issues = await prisma.user.findUnique({
    where: {
      email: session?.user?.email,
    },
    select: {
      assignedIssues: true,
    },
  });

  const closedIssue = issues?.assignedIssues?.filter(
    (issue) => issue.status === "CLOSED"
  );
  const ongoingIssue = issues?.assignedIssues?.filter(
    (issue) => issue.status === "IN_PROGRESS"
  );
  return (
    <Grid columns={{ initial: "1", md: "2" }} gap="2">
      <Flex gap="2" align={"start"}>
        <Card>
          <Flex direction={"column"}>
            <Text>Closed Issue</Text>
            <Text>{closedIssue?.length}</Text>
          </Flex>
        </Card>
        <Card>
          <Flex direction={"column"}>
            <Text>Ongoing Issues</Text>
            <Text>{ongoingIssue?.length}</Text>
          </Flex>
        </Card>
      </Flex>
      <AssignedTable assignedIssues={issues?.assignedIssues!} />
    </Grid>
  );
};

export default MyAssigned;
