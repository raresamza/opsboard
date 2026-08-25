import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type StatCardProps = {
  title: string;
  count: number;
  change: string;
  icon: React.ReactNode;
};

const StatCard = (cardData: StatCardProps) => {
  return (
    <Card>
      <CardHeader className="flex justify-between items-center">
        <CardTitle>{cardData.title}</CardTitle>
        {cardData.icon}
      </CardHeader>
      <CardContent>
        <div>{cardData.count}</div>
        <p>{cardData.change}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;
