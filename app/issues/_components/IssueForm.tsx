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
import Spinner from "@/app/components/Spinner";
import { Issue } from "@prisma/client";

// use previous created validation schema like this in client side for reduce redundancy
type IssueFormProps = z.infer<typeof createdIssueSchema>;

const IssueForm = ({ issue }: { issue?: Issue }) => {
  const [isSubmitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  // This is how we can validate our zod schema in client side using react hook from zod resolver method
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueFormProps>({
    resolver: zodResolver(createdIssueSchema),
  });
  const onsubmit = async (data: IssueFormProps) => {
    try {
      setSubmitting(true);

      if (issue) await axios.patch("/api/issues/" + issue.id, data);
      else await axios.post("/api/issues", data);
      router.push("/issues/list");
    } catch (error) {
      setSubmitting(false);
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
          <TextFieldInput
            defaultValue={issue?.title}
            {...register("title")}
            placeholder="Title"
          />
        </TextField.Root>
        <ErrorMessage>{errors.title?.message}</ErrorMessage>
        <Controller
          name="description"
          defaultValue={issue?.description}
          control={control}
          render={({ field }) => (
            <SimpleMdeReact placeholder="Description" {...field} />
          )}
        />

        <ErrorMessage>{errors.description?.message}</ErrorMessage>

        <Button disabled={isSubmitting}>
          {issue ? "Update the issue" : "Submit the issue"}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};

export default IssueForm;
