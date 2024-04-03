import React from "react";

export default function InputForm({
  symbol,
  onSymbolChange,
  fetchData,
}: {
  symbol: string;
  onSymbolChange: (symbol: string) => void;
  fetchData: (e: React.FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form className="space-y-2 md:space-y-0" onSubmit={fetchData}>
      <input
        type="text"
        value={symbol}
        placeholder="Enter stock symbol"
        className="border rounded-md px-2 mr-4 py-1 max-w-md w-full "
        onChange={(e) => onSymbolChange(e.target.value)}
      />
      <button
        className="bg-gray-800 text-white px-8 text-sm h-8 py-0.5 rounded-md"
        type="submit"
      >
        Fetch Data
      </button>
    </form>
  );
}
