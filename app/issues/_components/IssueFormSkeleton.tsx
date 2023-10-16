import { Box } from "@radix-ui/themes";
import React from "react";
import { Skeleton } from "@/app/components";
const IssueFormSkeleton = () => {
  return (
    <Box className="max-w-xl  p-5 mx-auto">
      <Skeleton height="2rem" className="mb-5" />
      <Skeleton height="22rem" />
      <Skeleton height="2rem" width="9rem" className="mt-[3rem]" />
    </Box>
  );
};

export default IssueFormSkeleton;
