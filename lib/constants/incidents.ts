export enum IncidentSeverityEnum {
  InProgress = "IN_PROGRESS",
  ToDo = "TODO",
  Review = "REVIEW",
  Done = "DONE",
}

export enum IncidentPriorityEnum {
  Low = "LOW",
  Medium = "MEDIUM",
  High = "HIGH",
  Critical = "CRITICAL",
}

export type IncidentProps = {
  id: string;
  title: string;
  status: IncidentSeverityEnum;
  priority: IncidentPriorityEnum;
  assignee: string;
  startedAt?: Date;
  duration?: Date;
};

export const statusStyles = {
  [IncidentSeverityEnum.InProgress]: "bg-blue-500/15 text-blue-400",

  [IncidentSeverityEnum.ToDo]: "bg-slate-500/15 text-slate-300",

  [IncidentSeverityEnum.Review]: "bg-violet-500/15 text-violet-400",

  [IncidentSeverityEnum.Done]: "bg-green-500/15 text-green-400",
};

export const priorityStyles = {
  [IncidentPriorityEnum.Low]: "text-green-400",

  [IncidentPriorityEnum.Medium]: "text-yellow-400",

  [IncidentPriorityEnum.High]: "text-orange-400",

  [IncidentPriorityEnum.Critical]: "text-red-400",
};
