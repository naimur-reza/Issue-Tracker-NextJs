"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";

const UpdateIssue = ({ id, status }: { id: string; status: Status }) => {
  const router = useRouter();
  const handleUpdate = (value: Status) => {
    try {
      axios
        .patch("/api/issues/" + id, { status: value })
        .then(() => router.refresh());
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Select.Root
      defaultValue={status}
      aria-label="Status"
      onValueChange={handleUpdate}>
      <Select.Trigger />
      <Select.Content>
        {options.map((item) => (
          <Select.Item key={item.value} value={item.value}>
            {item.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

const options: { label: string; value: Status }[] = [
  { label: "Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
  { label: "Open", value: "OPEN" },
];

export default UpdateIssue;
