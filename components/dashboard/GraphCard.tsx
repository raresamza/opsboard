"use client";

import React from "react";
import { Cell, Pie, PieChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import {
  GraphCardProps,
  priorityColors,
  statusColors,
} from "@/lib/constants/graphs";

const GraphCard = ({ title, data, graphType }: GraphCardProps) => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  const colors = graphType === "status" ? statusColors : priorityColors;

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent className="flex flex-1 items-center justify-between">
        {/* Donut */}
        <div className="relative h-44 w-44">
          <PieChart width={176} height={176}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="label"
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={75}
              stroke="none"
            >
              {data.map((item) => (
                <Cell key={item.label} fill={colors[item.label]?.color} />
              ))}
            </Pie>
          </PieChart>

          <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-2xl font-semibold">{total}</span>

            <span className="text-xs text-muted-foreground">Total</span>
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          {data.map((item) => {
            const percentage = Math.round((item.value / total) * 100);

            return (
              <div
                key={item.label}
                className="flex items-center justify-between gap-8"
              >
                <div className="flex items-center gap-2">
                  <span
                    className="size-2 rounded-full"
                    style={{
                      backgroundColor: colors[item.label]?.color,
                    }}
                  />

                  <span>{item.label}</span>
                </div>

                <span className="text-muted-foreground">
                  {item.value} ({percentage}%)
                </span>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};

export default GraphCard;
