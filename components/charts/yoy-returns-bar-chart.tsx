"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { yoyReturns } from "@/lib/data/content";

function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: { name: string; value: number; color: string }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass rounded-xl px-4 py-3 space-y-1">
      <div className="text-xs text-text-muted mb-1">{label}</div>
      {payload.map((p) => (
        <div key={p.name} className="text-sm font-medium" style={{ color: p.color }}>
          {p.name}: {p.value}%
        </div>
      ))}
    </div>
  );
}

export function YoyReturnsBarChart() {
  return (
    <div className="h-72 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={[...yoyReturns]} margin={{ top: 8, right: 8, left: -20, bottom: 0 }} barGap={6}>
          <CartesianGrid stroke="rgba(15,23,42,0.08)" vertical={false} />
          <XAxis dataKey="year" stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={{ stroke: "rgba(15,23,42,0.12)" }} />
          <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} width={36} unit="%" />
          <Tooltip content={<ChartTooltip />} cursor={{ fill: "rgba(15,23,42,0.04)" }} />
          <Legend
            wrapperStyle={{ fontSize: 12, color: "#94A3B8" }}
            formatter={(value) => <span style={{ color: "#CBD5E1" }}>{value}</span>}
          />
          <Bar dataKey="realEstate" name="Real Estate" fill="#244D9A" radius={[6, 6, 0, 0]} animationDuration={1000} />
          <Bar dataKey="venture" name="Venture Capital" fill="#C79B42" radius={[6, 6, 0, 0]} animationDuration={1000} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
