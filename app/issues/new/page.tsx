"use client";

import { Button, TextField, TextFieldInput } from "@radix-ui/themes";
import "easymde/dist/easymde.min.css";
import SimpleMdeReact from "react-simplemde-editor";

const NewIssue = () => {
  return (
    <div className="max-w-xl p-5 space-y-4">
      <TextField.Root>
        <TextFieldInput placeholder="Type the issue" />
      </TextField.Root>
      <SimpleMdeReact placeholder="Description" />
      <Button>Submit the issue</Button>
    </div>
  );
};

export default NewIssue;
