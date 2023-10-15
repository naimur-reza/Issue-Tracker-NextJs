import prisma from "@/prisma/client";
import IssueChart from "./IssueChart";
import { Box, Flex, Grid } from "@radix-ui/themes";
import IssueSummery from "./IssueSummery";
import LatestIssues from "./LatestIssues";
import { Metadata } from "next";

const HomePage = async () => {
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const open = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const closed = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  return (
    <Grid columns={{ initial: "1", sm: "2" }} gap="3">
      <Flex direction="column" gap="3">
        <IssueSummery inProgress={inProgress} open={open} closed={closed} />
        <IssueChart inProgress={inProgress} open={open} closed={closed} />
      </Flex>
      <LatestIssues />
    </Grid>
  );
};

export const metadata: Metadata = {
  title: "Issue Tracker - Dashboard",
  description: "View a summary of project issues",
};

export default HomePage;
