import { useRef, useState } from "react";
import { ChevronRight, Frame, Search, MousePointer2, GitBranch } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { toast } from "sonner";
import TaskDetailPanel from "./TaskDetailPanel";
import ProfileModal, { type ProfileUser } from "./ProfileModal";
import HoverProfileCard from "./HoverProfileCard";
import { UserAvatar } from "./UserAvatar";

function Avatar({ name }: { name: string }) {
  return <UserAvatar name={name} size="sm" interactive />;
}

function taskTypeIcon(title: string): { Icon: LucideIcon; color: string } {
  const t = title.toLowerCase();
  if (t.includes("wireframe") || t.includes("design") || t.includes("screen") || t.includes("refine")) return { Icon: Frame,         color: "#9B7BFF" };
  if (t.includes("research") || t.includes("review") || t.includes("identify") || t.includes("collect")) return { Icon: Search,       color: "#CE9178" };
  if (t.includes("prototype") || t.includes("figma") || t.includes("test"))                              return { Icon: MousePointer2, color: "#6C7CFF" };
  if (t.includes("flow") || t.includes("map") || t.includes("define"))                                   return { Icon: GitBranch,     color: "#6C7CFF" };
  return { Icon: Frame, color: "#9B7BFF" };
}

const MY_TASK_STATUS: Record<string, string> = {
  "In progress": "bg-[#2A3152] text-[#6C7CFF] border border-[#3A4578]",
  "Not started": "bg-[#252526] text-[#8A8A8A] border border-[#3A3A3A]",
  "Done":        "bg-[#1E3A28] text-[#4EC970] border border-[#2F6240]",
  "Submitted":   "bg-[#1E3A28] text-[#4EC970] border border-[#2F6240]",
  "Not submitted": "bg-[#3A3020] text-[#D7BA7D] border border-[#5A4B2B]",
};

const ALL_TASK_STATUS: Record<string, string> = {
  "Submitted":     "bg-[#1E3A28] text-[#4EC970] border border-[#2F6240]",
  "Not submitted": "bg-[#3A3020] text-[#D7BA7D] border border-[#5A4B2B]",
};

function StatusPill({ status, map }: { status: string; map: Record<string, string> }) {
  const cls = map[status] ?? "bg-[#252526] text-[#8A8A8A] border border-[#3A3A3A]";
  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium ${cls}`}>
      {status}
    </span>
  );
}

const CURRENT_USER = "Elijah Wang";

const ALL_TASKS = [
  { task: "Research existing banking apps",         owner: "Sarah Chen",  status: "Submitted",     due: "Day 2, 11:59 PM",  file: "banking-app-review.pdf"      },
  { task: "Identify transfer flow pain points",     owner: "Sarah Chen",  status: "Submitted",     due: "Day 3, 11:59 PM",  file: "friction-points-notes.pdf"   },
  { task: "Define target user scenario",            owner: "Elijah Wang", status: "Submitted",     due: "Day 3, 11:59 PM",  file: "target-user-scenario.docx"   },
  { task: "Map current transfer flow",              owner: "Marcus Liu",  status: "Submitted",     due: "Day 4, 11:59 PM",  file: "current-flow-map.fig"        },
  { task: "Create improved user flow",              owner: "Marcus Liu",  status: "Not submitted", due: "Day 5, 11:59 PM",  file: null                          },
  { task: "Create wireframes for transfer flow",    owner: "Sarah Chen",  status: "Submitted",     due: "Day 8, 11:59 PM",  file: "wireframe-v2.fig"            },
  { task: "Review wireframe clarity",               owner: "Elijah Wang", status: "Submitted",     due: "Day 8, 11:59 PM",  file: "wireframe-review-notes.pdf"  },
  { task: "Define confirmation screen states",      owner: "Anna Kim",    status: "Not submitted", due: "Day 9, 11:59 PM",  file: null                          },
  { task: "Build prototype in Figma",               owner: "Anna Kim",    status: "Not submitted", due: "Day 10, 11:59 PM", file: null                          },
  { task: "Prepare interaction notes",              owner: "Marcus Liu",  status: "Not submitted", due: "Day 10, 11:59 PM", file: null                          },
  { task: "Test prototype with two users",          owner: "Sarah Chen",  status: "Not submitted", due: "Day 11, 11:59 PM", file: null                          },
  { task: "Collect feedback comments",              owner: "Elijah Wang", status: "Not submitted", due: "Day 11, 11:59 PM", file: null                          },
  { task: "Refine wireframes based on feedback",    owner: "Anna Kim",    status: "Not submitted", due: "Day 12, 11:59 PM", file: null                          },
  { task: "Prepare final presentation flow",        owner: "Elijah Wang", status: "Not submitted", due: "Day 13, 11:59 PM", file: null                          },
  { task: "Final design review",                    owner: "Marcus Liu",  status: "Not submitted", due: "Day 13, 11:59 PM", file: null                          },
  { task: "Submit final project package",           owner: "Elijah Wang", status: "Not submitted", due: "Day 14, 11:59 PM", file: null                          },
];

const MY_TASK_SUBTASKS: Record<string, Array<{ id: string; step: string; title: string; explanation: string; status: string }>> = {
  "Define target user scenario": [
    {
      id: "define-target-user-scenario-1",
      step: "Step 1",
      title: "Review target users",
      explanation: "Identify who uses the transfer feature and what they need during the process.",
      status: "Done",
    },
    {
      id: "define-target-user-scenario-2",
      step: "Step 2",
      title: "Write scenario summary",
      explanation: "Summarize the main user situation, goal, and friction points.",
      status: "Done",
    },
  ],
  "Review wireframe clarity": [
    {
      id: "review-wireframe-clarity-1",
      step: "Step 1",
      title: "Check screen order",
      explanation: "Review whether the transfer flow moves logically from entry to confirmation.",
      status: "Done",
    },
    {
      id: "review-wireframe-clarity-2",
      step: "Step 2",
      title: "Annotate unclear moments",
      explanation: "Mark places where users may feel confused or need more feedback.",
      status: "Done",
    },
    {
      id: "review-wireframe-clarity-3",
      step: "Step 3",
      title: "Submit review notes",
      explanation: "Upload concise notes for the designer to use in the next iteration.",
      status: "Done",
    },
  ],
  "Collect feedback comments": [
    {
      id: "collect-feedback-comments-1",
      step: "Step 1",
      title: "Review team comments",
      explanation: "Read feedback from teammates on the wireframes and prototype direction.",
      status: "Not started",
    },
    {
      id: "collect-feedback-comments-2",
      step: "Step 2",
      title: "Group feedback by issue",
      explanation: "Organize comments into flow, wording, layout, and confirmation feedback.",
      status: "Not started",
    },
    {
      id: "collect-feedback-comments-3",
      step: "Step 3",
      title: "Prepare summary notes",
      explanation: "Create a short feedback summary for the next design refinement.",
      status: "Not started",
    },
  ],
  "Prepare final presentation flow": [
    {
      id: "prepare-final-presentation-flow-1",
      step: "Step 1",
      title: "Create presentation outline",
      explanation: "Define the order of slides and key points for the final review.",
      status: "Not started",
    },
    {
      id: "prepare-final-presentation-flow-2",
      step: "Step 2",
      title: "Connect process to outcome",
      explanation: "Explain how research, flow mapping, and wireframes led to the final direction.",
      status: "Not started",
    },
    {
      id: "prepare-final-presentation-flow-3",
      step: "Step 3",
      title: "Prepare speaking notes",
      explanation: "Write short notes for presenting the project clearly.",
      status: "Not started",
    },
  ],
  "Submit final project package": [
    {
      id: "submit-final-project-package-1",
      step: "Step 1",
      title: "Collect final files",
      explanation: "Gather wireframes, prototype link, research notes, and presentation file.",
      status: "Not started",
    },
    {
      id: "submit-final-project-package-2",
      step: "Step 2",
      title: "Check submission requirements",
      explanation: "Confirm that all required materials are included before final submission.",
      status: "Not started",
    },
    {
      id: "submit-final-project-package-3",
      step: "Step 3",
      title: "Upload final package",
      explanation: "Submit the final project package to complete the task.",
      status: "Not started",
    },
  ],
};

const MY_TASKS = ALL_TASKS
  .filter(task => task.owner === CURRENT_USER)
  .map(task => {
    const subtasks = MY_TASK_SUBTASKS[task.task] ?? [];
    const completed = subtasks.filter(subtask => subtask.status === "Done").length;
    return {
      id: task.task,
      title: task.task,
      status: task.status,
      progress: `${completed} / ${subtasks.length}`,
      due: task.due,
      submission: task.file,
      subtasks,
    };
  });

const MEMBER_PROFILES: Record<string, ProfileUser> = {
  "Sarah Chen":  { name: "Sarah Chen",  role: "UX Researcher", intro: "Focused on user research and usability testing.", skills: ["User Research", "Figma", "Survey Design"], availability: "4–6h/week", completed: 3, leftEarly: 0 },
  "Anna Kim":    { name: "Anna Kim",    role: "UX Designer",   intro: "Visual designer with a focus on accessibility.", skills: ["Figma", "Motion Design", "Accessibility"], availability: "2–4h/week", completed: 2, leftEarly: 0 },
  "Marcus Liu":  { name: "Marcus Liu",  role: "Developer",     intro: "Full-stack developer with React and TypeScript experience.", skills: ["React", "TypeScript", "Node.js"], availability: "6–8h/week", completed: 5, leftEarly: 1 },
  "Elijah Wang": { name: "Elijah Wang", role: "UX Designer",   intro: "Designing intuitive financial experiences with a focus on clarity and trust.", skills: ["Figma", "Wireframing", "Prototyping", "User Research"], availability: "4–6h/week", completed: 3, leftEarly: 0 },
};

export default function TasksTab() {
  const [tasksView, setTasksView] = useState<"my" | "all">("my");
  const [expandedTask, setExpandedTask] = useState<string | null>(MY_TASKS[0]?.id ?? null);
  const [selectedTask, setSelectedTask] = useState<any>(null);
  const [selectedTaskId, setSelectedTaskId] = useState<string | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [profileUser, setProfileUser] = useState<ProfileUser | null>(null);
  const [profileOpen, setProfileOpen] = useState(false);
  const [hoverUser, setHoverUser] = useState<{ user: ProfileUser; position: { x: number; y: number } } | null>(null);
  const hoverCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openProfile = (ownerName: string, e: React.MouseEvent) => {
    e.stopPropagation();
    const profile = MEMBER_PROFILES[ownerName];
    if (profile) { setProfileUser(profile); setProfileOpen(true); }
  };

  const showHoverProfile = (ownerName: string, e: React.MouseEvent) => {
    const profile = MEMBER_PROFILES[ownerName];
    if (!profile) return;
    if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect();
    setHoverUser({ user: profile, position: { x: rect.right, y: rect.top } });
  };

  const scheduleHideHoverProfile = () => {
    if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
    hoverCloseTimer.current = setTimeout(() => setHoverUser(null), 120);
  };

  const openTaskDetail = (task: any, taskId: string) => {
    setSelectedTaskId(taskId);
    setSelectedTask({
      title: task.title,
      description: "Create wireframes for the transfer flow by designing a clear and simple end-to-end experience that allows users to send money with confidence and without confusion.",
      leaderNote: "Focus on flow clarity first. Keep the structure simple before visual refinement.",
      subtasks: task.subtasks?.map((st: any) => ({ id: st.id, title: st.title, completed: st.status === "Done" })),
      requiresUpload: true,
      uploadedFile: task.submission ?? null,
      status: "current" as const,
      comments: [{ author: "Marcus Liu", text: "Looking good so far!" }],
    });
    setDetailOpen(true);
  };

  const closeTaskDetail = () => {
    setDetailOpen(false);
    setSelectedTaskId(null);
  };

  return (
    <div>
      {/* Toggle */}
      <div className="flex items-center gap-1 mb-5 bg-[#252526] border border-[#3A3A3A] rounded-[10px] p-1 w-fit">
        {(["my", "all"] as const).map(v => (
          <button
            key={v}
            onClick={() => setTasksView(v)}
            className={`px-4 py-1.5 rounded-[8px] text-[13px] font-medium transition-colors duration-150 ${
              tasksView === v ? "bg-[#2F2F2F] text-[#E8E8E8]" : "text-[#8A8A8A] hover:text-[#B8B8B8]"
            }`}
          >
            {v === "my" ? "My Tasks" : "All Tasks"}
          </button>
        ))}
      </div>

	      {/* My Tasks */}
	      {tasksView === "my" && (
	        <div className="bg-[#252526] border border-[#3A3A3A] rounded-[12px] overflow-hidden">
	          {/* Header row */}
	          <div className="grid px-4 py-2.5 border-b border-[#3A3A3A]" style={{ gridTemplateColumns: "4fr 0.9fr 1.2fr 1.2fr 1.7fr" }}>
	            {["Task", "Progress", "Due", "Status", "Submission"].map(h => (
	              <div key={h} className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider">{h}</div>
	            ))}
	          </div>

          {MY_TASKS.map(task => {
            const { Icon, color } = taskTypeIcon(task.title);
            const isExpanded = expandedTask === task.id;
            return (
              <div key={task.id}>
                {/* Parent row */}
		                <div
		                  className={`grid px-4 py-3 border-b border-[#3A3A3A] cursor-pointer transition-colors duration-150 items-center relative ${
		                    selectedTaskId === task.id ? "bg-[#333333]" : "hover:bg-[#2F2F2F]"
		                  }`}
		                  style={{ gridTemplateColumns: "4fr 0.9fr 1.2fr 1.2fr 1.7fr" }}
		                  onClick={() => {
		                    setExpandedTask(isExpanded ? null : task.id);
		                    openTaskDetail(task, task.id);
		                  }}
		                >
		                  {selectedTaskId === task.id && <span className="absolute left-0 top-2 bottom-2 w-0.5 rounded-r-full bg-[#6C7CFF]" />}
                  <div className="flex items-center gap-2.5">
                    <ChevronRight
                      size={13}
                      className={`text-[#8A8A8A] transition-transform duration-150 flex-shrink-0 ${isExpanded ? "rotate-90" : ""}`}
                    />
                    {/* Task type icon */}
                    <div
                      className="w-6 h-6 rounded-[6px] flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${color}18` }}
                    >
                      <Icon size={12} style={{ color }} />
                    </div>
                    <span className="text-[13px] text-[#E8E8E8] font-medium">{task.title}</span>
                  </div>
	                  <span className="text-[13px] text-[#D8D8D8] tabular-nums">{task.progress}</span>
	                  <span className="text-[12px] text-[#8A8A8A]">{task.due}</span>
	                  <StatusPill status={task.status} map={MY_TASK_STATUS} />
	                  <div className="text-[12px] text-[#D8D8D8] min-w-0">
	                    {task.submission ? (
	                      <span className="flex items-center gap-1.5 min-w-0">
	                        <span className="truncate">{task.submission}</span>
	                        <button
	                          className="text-[11px] text-[#6C7CFF] hover:text-[#7D8AFF] hover:bg-[#2F2F2F] rounded px-1 py-0.5 flex-shrink-0 transition-all"
	                          onClick={e => { e.stopPropagation(); toast("File preview opened"); }}
	                        >
	                          View
	                        </button>
	                      </span>
	                    ) : (
	                      <button
	                        className="h-7 px-3 rounded-[7px] border border-[#3A3A3A] text-[12px] text-[#B8B8B8] hover:text-[#E8E8E8] hover:border-[#6C7CFF] transition-all"
	                        onClick={e => { e.stopPropagation(); toast("File uploaded"); }}
	                      >
	                        Upload File
	                      </button>
	                    )}
	                  </div>
	                </div>

	                {/* Subtask rows */}
	                {isExpanded && task.subtasks.map((subtask, sIdx) => (
	                  <div
	                    key={subtask.id}
	                    className="grid border-b border-[#2F2F2F] last:border-b-0 bg-[#1E1E1E] hover:bg-[#2F2F2F] cursor-pointer transition-colors duration-100 items-center"
	                    style={{ gridTemplateColumns: "4fr 0.9fr 1.2fr 1.2fr 1.7fr" }}
		                    onClick={e => { e.stopPropagation(); openTaskDetail(task, task.id); }}
	                  >
	                    <div className="flex items-stretch h-full">
	                      {/* Connecting line + dot */}
	                      <div className="flex items-stretch h-full pl-[30px] py-2.5">
	                        <div className="flex flex-col items-center self-stretch mr-2.5">
	                          <div className={`w-px flex-1 ${sIdx === 0 ? "bg-transparent" : "bg-[#3A3A3A]"}`} />
	                          <div className="w-1.5 h-1.5 rounded-full border border-[#4A4A4A] bg-[#3A3A3A] flex-shrink-0" />
	                          <div className={`w-px flex-1 ${sIdx === task.subtasks.length - 1 ? "bg-transparent" : "bg-[#3A3A3A]"}`} />
	                        </div>
	                        <div className="min-w-0">
	                          <div className="text-[11px] font-medium text-[#8A8A8A] mb-0.5">{subtask.step}</div>
	                          <div className={`text-[12px] font-medium ${subtask.status === "Done" ? "text-[#B8B8B8] line-through" : "text-[#D8D8D8]"}`}>
	                            {subtask.title}
	                          </div>
	                          <div className="text-[12px] text-[#8A8A8A] leading-snug mt-0.5">{subtask.explanation}</div>
	                        </div>
	                      </div>
	                    </div>
	                    <span />
	                    <span className="text-[12px] text-[#8A8A8A] py-2.5">{task.due}</span>
	                    <div className="py-2.5">
	                      <span className={`text-[11px] font-medium ${subtask.status === "Done" ? "text-[#4EC970]" : "text-[#8A8A8A]"}`}>
	                        {subtask.status}
	                      </span>
	                    </div>
	                    <span className="text-[12px] text-[#8A8A8A] py-2.5">Uses parent submission</span>
	                  </div>
	                ))}
              </div>
            );
          })}
        </div>
      )}

      {/* All Tasks */}
      {tasksView === "all" && (
        <div className="bg-[#252526] border border-[#3A3A3A] rounded-[12px] overflow-hidden">
          <div className="grid px-4 py-2.5 border-b border-[#3A3A3A]" style={{ gridTemplateColumns: "4fr 1.2fr 1fr 1.2fr 1.5fr" }}>
            {["Task", "Owner", "Status", "Due", "File"].map(h => (
              <div key={h} className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider">{h}</div>
            ))}
          </div>

          {ALL_TASKS.map((task, idx) => {
            const { Icon, color } = taskTypeIcon(task.task);
            return (
	              <div
	                key={idx}
	                className={`grid px-4 py-3 border-b border-[#3A3A3A] last:border-b-0 cursor-pointer transition-colors duration-150 items-center relative ${
	                  selectedTaskId === `all-${idx}` ? "bg-[#333333]" : "hover:bg-[#2F2F2F]"
	                }`}
	                style={{ gridTemplateColumns: "4fr 1.2fr 1fr 1.2fr 1.5fr" }}
	                onClick={() => {
	                  setSelectedTaskId(`all-${idx}`);
	                  setSelectedTask({
                    title: task.task,
                    description: "Review submitted work for this task.",
                    status: "past" as const,
                    uploadedFile: task.file ?? null,
                    requiresUpload: true,
                    comments: [],
                  });
                  setDetailOpen(true);
                }}
	              >
	                {selectedTaskId === `all-${idx}` && <span className="absolute left-0 top-2 bottom-2 w-0.5 rounded-r-full bg-[#6C7CFF]" />}
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-6 h-6 rounded-[6px] flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: `${color}18` }}
                  >
                    <Icon size={12} style={{ color }} />
                  </div>
                  <span className="text-[13px] text-[#E8E8E8]">{task.task}</span>
                </div>
	                <button
	                  className="flex items-center gap-2 hover:opacity-90 transition-opacity cursor-pointer"
	                  onClick={e => openProfile(task.owner, e)}
	                  onMouseEnter={e => showHoverProfile(task.owner, e)}
	                  onMouseLeave={scheduleHideHoverProfile}
	                >
	                  <Avatar name={task.owner} />
	                  <span className="text-[12px] text-[#D8D8D8] hover:text-[#E8E8E8] transition-colors">{task.owner}</span>
	                </button>
                <StatusPill status={task.status} map={ALL_TASK_STATUS} />
                <span className="text-[12px] text-[#8A8A8A]">{task.due}</span>
                <div className="text-[12px] text-[#D8D8D8]">
                  {task.file ? (
                    <span className="flex items-center gap-1.5">
	                      <span className="truncate hover:text-[#E8E8E8] hover:underline cursor-pointer transition-colors">{task.file}</span>
	                      <button
	                        className="text-[11px] text-[#6C7CFF] hover:text-[#7D8AFF] hover:bg-[#2F2F2F] rounded px-1 py-0.5 flex-shrink-0 transition-all"
	                        onClick={e => { e.stopPropagation(); toast("File preview opened"); }}
	                      >
                        View
                      </button>
                    </span>
                  ) : "—"}
                </div>
              </div>
            );
          })}
        </div>
      )}

      <TaskDetailPanel
        isOpen={detailOpen}
        onClose={closeTaskDetail}
        task={selectedTask}
      />

      <ProfileModal
        isOpen={profileOpen}
        onClose={() => setProfileOpen(false)}
        user={profileUser ?? undefined}
      />
      {hoverUser && (
        <HoverProfileCard
          user={{ name: hoverUser.user.name, role: hoverUser.user.role, bio: hoverUser.user.intro }}
          position={hoverUser.position}
          onMouseEnter={() => {
            if (hoverCloseTimer.current) clearTimeout(hoverCloseTimer.current);
          }}
          onMouseLeave={scheduleHideHoverProfile}
        />
      )}
    </div>
  );
}
