import prisma from "@/prisma/client";
import IssueChart from "./IssueChart";
import { Box, Flex, Grid } from "@radix-ui/themes";
import IssueSummery from "./IssueSummery";

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
    <Grid>
      <Flex direction="column" gap="3">
        <IssueSummery inProgress={inProgress} open={open} closed={closed} />
        <IssueChart inProgress={inProgress} open={open} closed={closed} />
      </Flex>
    </Grid>
  );
};

export default HomePage;
