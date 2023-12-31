import { Metadata } from "next";
import IssueFormSkeleton from "../_components/IssueFormSkeleton";
import dynamic from "next/dynamic";

const IssueForm = dynamic(() => import("@/app/issues/_components/IssueForm"), {
  ssr: false,
  loading: () => <IssueFormSkeleton />,
});

const NewIssue = () => {
  return (
    <div>
      <IssueForm />
    </div>
  );
};
export const metadata: Metadata = {
  title: "Bug Monitor - new issue",
  description: "Add a new issue ",
};
export default NewIssue;
