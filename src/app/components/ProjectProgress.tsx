interface ProjectProgressProps {
  projectId: string;
}

export default function ProjectProgress({ projectId }: ProjectProgressProps) {
  const data = {
    progress: 42,
    currentDay: 6,
    totalDays: 14,
    nextTask: { name: "Create wireframes for transfer flow", daysLeft: 2 },
  };

  const deadlineProgress = Math.round(((data.totalDays - data.nextTask.daysLeft) / data.totalDays) * 100);

  return (
    <div className="border-b border-[#333333] bg-[#1B1B1B] px-8 py-3.5 flex-shrink-0">
      <div className="space-y-3">
        {/* Project Progress */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider">Project Progress</span>
            <span className="text-[12px] text-[#D8D8D8] tabular-nums">
              {data.progress}% · Day {data.currentDay} / {data.totalDays}
            </span>
          </div>
          <div className="h-[6px] bg-[#2F2F2F] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#6C7CFF] rounded-full transition-all duration-300"
              style={{ width: `${data.progress}%` }}
            />
          </div>
        </div>

        {/* Next Task Deadline */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider">Next Task Deadline</span>
            <span className="text-[12px] text-[#D7BA7D] tabular-nums">Due in {data.nextTask.daysLeft} days</span>
          </div>
          <div className="h-[6px] bg-[#2F2F2F] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#D7BA7D] rounded-full transition-all duration-300"
              style={{ width: `${deadlineProgress}%` }}
            />
          </div>
          <div className="mt-1 text-[11px] text-[#8A8A8A] truncate">{data.nextTask.name}</div>
        </div>
      </div>
    </div>
  );
}
