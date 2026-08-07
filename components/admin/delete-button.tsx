"use client";

import { useState, useTransition } from "react";

export function DeleteButton({
  id,
  action,
  label,
}: {
  id: string;
  action: (id: string) => Promise<void>;
  label: string;
}) {
  const [confirming, setConfirming] = useState(false);
  const [isPending, startTransition] = useTransition();

  if (confirming) {
    return (
      <span className="inline-flex items-center gap-2">
        <span className="text-red-400 text-xs">Delete this {label}?</span>
        <button
          onClick={() => startTransition(() => action(id))}
          disabled={isPending}
          className="text-red-400 hover:underline text-xs font-semibold"
        >
          {isPending ? "..." : "Yes"}
        </button>
        <button onClick={() => setConfirming(false)} className="text-white/50 hover:underline text-xs">
          Cancel
        </button>
      </span>
    );
  }

  return (
    <button onClick={() => setConfirming(true)} className="text-red-400/80 hover:text-red-400 hover:underline">
      Delete
    </button>
  );
}
