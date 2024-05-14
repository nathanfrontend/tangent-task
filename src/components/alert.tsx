import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

type MessageProps = {
  message: string;
};
export function ErrorAlert({ message }: MessageProps) {
  return (
    <Alert className="flex justify-center items-center" variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>{message}</AlertDescription>
    </Alert>
  );
}
