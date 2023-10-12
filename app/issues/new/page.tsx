"use client";

import { Button, TextField, TextFieldInput } from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";

import { Controller, useForm } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssue = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const onsubmit = async (data: IssueForm) => {
    await axios.post("/api/issues", data);
    router.push("/");
  };
  return (
    <form onSubmit={handleSubmit(onsubmit)} className="max-w-xl p-5 space-y-4">
      <TextField.Root>
        <TextFieldInput {...register("title")} placeholder="Title" />
      </TextField.Root>
      <Controller
        name="description"
        control={control}
        render={({ field }) => (
          <SimpleMdeReact placeholder="Description" {...field} />
        )}
      />

      <Button>Submit the issue</Button>
    </form>
  );
};

export default NewIssue;
