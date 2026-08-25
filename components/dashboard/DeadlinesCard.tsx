import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

type Deadline = {
  deadlineName: string;
  deadlineDescription: string;
  dueDate: Date;
};

type DeadlinesCardProps = {
  deadlines: Deadline[];
};

const time = Date.now();

const DeadlinesCard = ({ deadlines }: DeadlinesCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Deadlines</CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {deadlines.map((deadline) => (
          <div key={deadline.deadlineName} className="flex justify-between">
            {/* left */}
            <div>
              <div>{deadline.deadlineName}</div>
              <div>{deadline.deadlineDescription}</div>
            </div>

            {/* right */}
            <div className="text-right">
              <div>
                {Math.ceil(
                  (deadline.dueDate.getTime() - time) / (1000 * 60 * 60 * 24),
                )}{" "}
                days left
              </div>

              <div>
                {deadline.dueDate.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                })}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default DeadlinesCard;
