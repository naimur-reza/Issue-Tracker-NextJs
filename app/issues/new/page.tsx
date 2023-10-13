"use client";

import {
  Button,
  CalloutRoot,
  CalloutText,
  Text,
  TextField,
  TextFieldInput,
} from "@radix-ui/themes";
import axios from "axios";
import "easymde/dist/easymde.min.css";
import { useRouter } from "next/navigation";
import { useState } from "react";

import { Controller, useForm } from "react-hook-form";
import SimpleMdeReact from "react-simplemde-editor";
import { z } from "zod";
import { createdIssueSchema } from "@/app/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import ErrorMessage from "@/app/components/ErrorMessage";

// use previous created validation schema for reduce redundancy
type IssueForm = z.infer<typeof createdIssueSchema>;

const NewIssue = () => {
  const [error, setError] = useState("");
  const router = useRouter();

  // This is how we can validate our zod schema in client side using react hook from zod resolver method
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(createdIssueSchema),
  });
  const onsubmit = async (data: IssueForm) => {
    try {
      await axios.post("/api/issues", data);
      router.push("/");
    } catch (error) {
      setError("An unexpected error occurred!");
    }
  };
  return (
    <div className="max-w-xl  p-5 mx-auto">
      {error && (
        <CalloutRoot color="red" className="mb-5">
          <CalloutText>{error}</CalloutText>
        </CalloutRoot>
      )}
      <form onSubmit={handleSubmit(onsubmit)} className="space-y-4">
        <TextField.Root>
          <TextFieldInput {...register("title")} placeholder="Title" />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMdeReact placeholder="Description" {...field} />
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button>Submit the issue</Button>
      </form>
    </div>
  );
};

export default NewIssue;
