import { TrashIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import React from "react";

const DeleteIssueButton = () => {
  return (
    <Button>
      <TrashIcon />
      Delete
    </Button>
  );
};

export default DeleteIssueButton;
