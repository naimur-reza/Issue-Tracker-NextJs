import { Button } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";

const Issues = () => {
  return (
    <div>
      <p className="pb-5">Charts & analytics coming soon!</p>
      <Button>
        <Link href={"/issues/list"}>Issue list</Link>
      </Button>
    </div>
  );
};

export default Issues;
