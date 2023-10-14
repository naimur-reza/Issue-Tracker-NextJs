import prisma from "@/prisma/client";
import IssueChart from "./IssueChart";

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
    <>
      <IssueChart inProgress={inProgress} open={open} closed={closed} />
    </>
  );
};

export default HomePage;
