"use client";

import {
  Button,
  CalloutRoot,
  CalloutText,
  TextField,
  TextFieldInput,
} from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Controller, useForm } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";

interface IssueForm {
  title: string;
  description: string;
}

const NewIssue = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<IssueForm>();
  const onsubmit = async (data: IssueForm) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/");
    } catch (error) {
      setError("An unexpected error occurred!");
    }
  };
  return (
    <div className="max-w-xl  p-5 ">
      {error && (
        <CalloutRoot color="red" className="mb-5">
          <CalloutText>{error}</CalloutText>
        </CalloutRoot>
      )}
      <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
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
    </div>
  );
};

export default NewIssue;
