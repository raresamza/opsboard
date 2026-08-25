"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

const chartData = [
  { date: "May 1", completed: 0 },
  { date: "May 5", completed: 6 },
  { date: "May 10", completed: 7 },
  { date: "May 15", completed: 18 },
  { date: "May 20", completed: 20 },
  { date: "May 25", completed: 21 },
  { date: "May 31", completed: 30 },
];

const chartConfig = {
  completed: {
    label: "Completed",
    color: "var(--primary)",
  },
} satisfies ChartConfig;

const CompletedIssuesChart = () => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Completed Issues</CardTitle>
        <p className="text-sm text-muted-foreground">This month</p>
      </CardHeader>

      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart data={chartData}>
            <CartesianGrid vertical={false} />

            <XAxis dataKey="date" tickLine={false} axisLine={false} />

            <YAxis tickLine={false} axisLine={false} />

            <ChartTooltip content={<ChartTooltipContent />} />

            <Line
              type="monotone"
              dataKey="completed"
              stroke="var(--color-completed)"
              strokeWidth={2}
              dot
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default CompletedIssuesChart;
