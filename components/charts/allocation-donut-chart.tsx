"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { portfolioAllocation } from "@/lib/data/content";

function ChartTooltip({ active, payload }: { active?: boolean; payload?: { name: string; value: number }[] }) {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass rounded-xl px-4 py-3">
      <div className="text-xs text-text-muted">{payload[0].name}</div>
      <div className="text-lg font-heading font-semibold text-gold">{payload[0].value}%</div>
    </div>
  );
}

export function AllocationDonutChart() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="h-56 w-56 shrink-0">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={[...portfolioAllocation]}
              dataKey="value"
              nameKey="name"
              innerRadius={62}
              outerRadius={90}
              paddingAngle={3}
              animationDuration={1000}
              stroke="none"
            >
              {portfolioAllocation.map((entry) => (
                <Cell key={entry.name} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip content={<ChartTooltip />} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <ul className="flex-1 space-y-3 w-full">
        {portfolioAllocation.map((item) => (
          <li key={item.name} className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2.5 text-text-secondary">
              <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ backgroundColor: item.color }} />
              {item.name}
            </span>
            <span className="font-heading font-semibold text-text">{item.value}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
