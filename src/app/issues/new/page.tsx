"use client";
import { Button, TextArea, TextField } from "@radix-ui/themes";

export default function NewIssuePage() {
  return (
    <div className=" max-w-sm p-3 space-y-3">
      <TextField.Input placeholder="Title" />
      <TextArea placeholder="Reply to comment…" />
      <Button>Submit new Issue</Button>
    </div>
  );
}
