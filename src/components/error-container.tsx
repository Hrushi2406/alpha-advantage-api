import React from "react";

export default function ErrorContainer({ error }: { error: string }) {
  return <div className="bg-red-200 text-red-700 p-6 rounded-md">{error}</div>;
}
