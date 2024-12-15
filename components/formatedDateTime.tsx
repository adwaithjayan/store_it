import React from "react";
import { cn, formatDateTime } from "@/lib/utils";

const FormatedDateTime = ({
  date,
  className,
}: {
  date: string;
  className?: string;
}) => {
  return (
    <p className={cn("body-1 text-light-200", className)}>
      {formatDateTime(date)}
    </p>
  );
};
export default FormatedDateTime;