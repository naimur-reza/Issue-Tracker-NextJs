"use client";

import { Button, TextArea, TextField, TextFieldInput } from "@radix-ui/themes";

const NewIssue = () => {
  return (
    <div className="max-w-xl p-5 space-y-4">
      <TextField.Root>
        <TextFieldInput placeholder="Type the issue" />
      </TextField.Root>
      <TextArea placeholder="Description" />
      <Button>Submit the issue</Button>
    </div>
  );
};

export default NewIssue;
