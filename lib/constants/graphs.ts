type ColorConfig = {
  color: string;
  className: string;
};

export const statusColors: Record<string, ColorConfig> = {
  "To Do": {
    color: "#CBD5E1",
    className: "bg-slate-500/15 text-slate-300",
  },
  "In Progress": {
    color: "#60A5FA",
    className: "bg-blue-500/15 text-blue-400",
  },
  Review: {
    color: "#A78BFA",
    className: "bg-violet-500/15 text-violet-400",
  },
  Done: {
    color: "#4ADE80",
    className: "bg-green-500/15 text-green-400",
  },
};

export const priorityColors: Record<string, ColorConfig> = {
  Critical: {
    color: "#F87171",
    className: "text-red-400",
  },
  High: {
    color: "#FB923C",
    className: "text-orange-400",
  },
  Medium: {
    color: "#FACC15",
    className: "text-yellow-400",
  },
  Low: {
    color: "#4ADE80",
    className: "text-green-400",
  },
};
export type GraphItem = {
  label: string;
  value: number;
};

export type GraphCardProps = {
  title: string;
  data: GraphItem[];
  graphType: "status" | "priority";
};
