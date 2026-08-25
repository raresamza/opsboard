import React from "react";

import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import {
  IncidentProps,
  priorityStyles,
  statusStyles,
} from "@/lib/constants/incidents";

type IncidentsCardProps = {
  incidents: IncidentProps[];
};

const IncidentsCard = ({ incidents }: IncidentsCardProps) => {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Recent Issues</CardTitle>
      </CardHeader>

      <CardContent>
        {incidents.map((incident) => (
          <div key={incident.id} className="grid grid-cols-12">
            <div className="col-span-2">{incident.id}</div>

            <div className="col-span-4">{incident.title}</div>

            <div className="col-span-2">
              <span
                className={`rounded-md px-2 py-1 text-xs ${statusStyles[incident.status]}`}
              >
                {incident.status}
              </span>
            </div>

            <div className={`col-span-2 ${priorityStyles[incident.priority]}`}>
              {incident.priority}
            </div>

            <div className="col-span-2">{incident.assignee}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default IncidentsCard;
