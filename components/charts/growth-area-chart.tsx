"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { portfolioGrowth } from "@/lib/data/content";

function ChartTooltip({ active, payload, label }: { active?: boolean; payload?: { value: number }[]; label?: string }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass rounded-xl px-4 py-3">
      <div className="text-xs text-text-muted">{label}</div>
      <div className="text-lg font-heading font-semibold text-gold">Index {payload[0].value}</div>
    </div>
  );
}

export function GrowthAreaChart() {
  return (
    <div className="h-64 w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={[...portfolioGrowth]} margin={{ top: 8, right: 8, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="growthFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#C79B42" stopOpacity={0.45} />
              <stop offset="100%" stopColor="#C79B42" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke="rgba(255,255,255,0.06)" vertical={false} />
          <XAxis
            dataKey="year"
            stroke="#94A3B8"
            fontSize={12}
            tickLine={false}
            axisLine={{ stroke: "rgba(255,255,255,0.08)" }}
          />
          <YAxis stroke="#94A3B8" fontSize={12} tickLine={false} axisLine={false} width={36} />
          <Tooltip content={<ChartTooltip />} cursor={{ stroke: "#C79B42", strokeWidth: 1, strokeDasharray: "4 4" }} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="#C79B42"
            strokeWidth={2.5}
            fill="url(#growthFill)"
            animationDuration={1200}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
