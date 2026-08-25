import CompletedIssuesChart from "@/components/dashboard/CompletedIssuesChart";
import DeadlinesCard from "@/components/dashboard/DeadlinesCard";
import GraphCard from "@/components/dashboard/GraphCard";
import IncidentsCard from "@/components/dashboard/IncidentsCard";
import StatCard from "@/components/dashboard/StatCard";
import { Card } from "@/components/ui/card";
import {
  IncidentPriorityEnum,
  IncidentSeverityEnum,
} from "@/lib/constants/incidents";
import {
  Check,
  CircleAlert,
  Clock,
  FileText,
  User,
  UserRound,
} from "lucide-react";
import React from "react";

const incidents = [
  {
    id: "RIN-148",
    title: "Fix conversation persistence",
    status: IncidentSeverityEnum.ToDo,
    priority: IncidentPriorityEnum.High,
    assignee: "Rares",
  },
  {
    id: "RIN-149",
    title: "Update API client",
    status: IncidentSeverityEnum.InProgress,
    priority: IncidentPriorityEnum.Medium,
    assignee: "Andrei",
  },
  {
    id: "RIN-150",
    title: "Fix Docker startup",
    status: IncidentSeverityEnum.Review,
    priority: IncidentPriorityEnum.Critical,
    assignee: "Maria",
  },
  {
    id: "RIN-155",
    title: "Fix Docker entrypoint script",
    status: IncidentSeverityEnum.Done,
    priority: IncidentPriorityEnum.Low,
    assignee: "Maria",
  },
];

const deadlines = [
  {
    deadlineName: "RIN-142",
    deadlineDescription: "Fix conversation persistence",
    dueDate: new Date("2026-08-29"),
  },
  {
    deadlineName: "RIN-143",
    deadlineDescription: "Update API client",
    dueDate: new Date("2026-09-01"),
  },
  {
    deadlineName: "RIN-147",
    deadlineDescription: "Improve error handling",
    dueDate: new Date("2026-09-03"),
  },
];

const statusData = [
  {
    label: "To Do",
    value: 14,
  },
  {
    label: "In Progress",
    value: 10,
  },
  {
    label: "Review",
    value: 8,
  },
  {
    label: "Done",
    value: 10,
  },
];

const priorityData = [
  {
    label: "Critical",
    value: 5,
  },
  {
    label: "High",
    value: 10,
  },
  {
    label: "Medium",
    value: 18,
  },
  {
    label: "Low",
    value: 9,
  },
];

const DashboardPage = () => {
  return (
    <div className="grid h-full grid-cols-12 grid-rows-[auto_minmax(0,1fr)_auto] gap-4 p-4">
      {/* top */}
      <div className="col-span-3">
        <StatCard
          title="Open Issues"
          count={42}
          change="+12 this week"
          icon={
            <div className="flex size-9 items-center justify-center rounded-md bg-blue-500/20">
              <FileText size={18} />
            </div>
          }
        ></StatCard>
      </div>
      <div className="col-span-3">
        <StatCard
          title="Assigned to me"
          count={8}
          change="+2 this week"
          icon={
            <div className="flex size-9 items-center justify-center rounded-md bg-violet-500/20">
              <UserRound size={18} />
            </div>
          }
        ></StatCard>
      </div>
      <div className="col-span-3">
        <StatCard
          title="Overdue"
          count={3}
          change="+1 this week"
          icon={
            <div className="flex size-9 items-center justify-center rounded-md bg-red-500/30">
              <UserRound size={18} />
            </div>
          }
        ></StatCard>
      </div>
      <div className="col-span-3">
        <StatCard
          title="Completed this week"
          count={17}
          change="+5 this week"
          icon={
            <div className="flex size-9 items-center justify-center rounded-md bg-green-500/20">
              <Check size={18} />
            </div>
          }
        ></StatCard>
      </div>
      {/* middle */}
      <div className="col-span-4 ">
        <GraphCard
          title="Issues by Priority"
          data={statusData}
          graphType="status"
        ></GraphCard>
      </div>
      <div className="col-span-4">
        <GraphCard
          title="Issues by Priority"
          data={priorityData}
          graphType="priority"
        ></GraphCard>
      </div>
      <div className="col-span-4 ">
        <CompletedIssuesChart></CompletedIssuesChart>
      </div>
      {/* bottom */}
      <div className="col-span-8 ">
        <IncidentsCard incidents={incidents}></IncidentsCard>
      </div>
      <div className="col-span-4 ">
        <DeadlinesCard deadlines={deadlines}></DeadlinesCard>
      </div>
    </div>
  );
};

export default DashboardPage;
