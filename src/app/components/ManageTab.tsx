import { useRef, useState } from "react";
import { Plus, Trash2, GripVertical, Frame, Search, MousePointer2, GitBranch, ChevronDown, ChevronRight, CalendarDays, Upload } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { toast } from "sonner";
import { UserAvatar } from "./UserAvatar";

function taskTypeIcon(title: string): { Icon: LucideIcon; color: string } {
  const t = title.toLowerCase();
  if (t.includes("wireframe") || t.includes("design") || t.includes("screen") || t.includes("refine")) return { Icon: Frame,         color: "#9B7BFF" };
  if (t.includes("research") || t.includes("review") || t.includes("identify") || t.includes("collect")) return { Icon: Search,       color: "#CE9178" };
  if (t.includes("prototype") || t.includes("figma") || t.includes("test"))                              return { Icon: MousePointer2, color: "#6C7CFF" };
  if (t.includes("flow") || t.includes("map") || t.includes("define"))                                   return { Icon: GitBranch,     color: "#6C7CFF" };
  return { Icon: Frame, color: "#9B7BFF" };
}

interface SubTask {
  id: string;
  name: string;
  explanation: string;
}

interface TaskBlock {
  id: string;
  title: string;
  instructions: string;
  subtasks: SubTask[];
  assignedTo: string;
  deadline: string;
  requiresUpload: boolean;
}

type DropPosition = "before" | "after";
type SaveState = "editing" | "saving" | "saved";

const INITIAL_TASKS: TaskBlock[] = [
  {
    id: "1",
    title: "Create wireframes for transfer flow",
    instructions: "Focus on flow clarity first. Keep the structure simple before visual refinement.",
    subtasks: [
      { id: "1a", name: "Sketch", explanation: "Create a rough layout of the transfer flow and identify the key screens." },
      { id: "1b", name: "Refine", explanation: "Clean up the wireframes and improve screen-to-screen logic." },
      { id: "1c", name: "Final",  explanation: "Prepare a review-ready version for team feedback." },
    ],
    assignedTo: "Sarah Chen",
    deadline: "Day 8, 11:59 PM",
    requiresUpload: true,
  },
  {
    id: "2",
    title: "Build prototype in Figma",
    instructions: "Prioritize the core transfer interaction. The prototype should be clickable end-to-end.",
    subtasks: [
      { id: "2a", name: "Setup",  explanation: "Organise the Figma file and import the wireframe components." },
      { id: "2b", name: "Build",  explanation: "Wire up the screens and add micro-interactions where needed." },
      { id: "2c", name: "Review", explanation: "Walk through the prototype as a user and fix any dead-end states." },
    ],
    assignedTo: "Anna Kim",
    deadline: "Day 10, 11:59 PM",
    requiresUpload: true,
  },
];

const textareaBase =
  "w-full bg-[#202020] border border-[#3A3A3A] rounded-[8px] px-3 py-2 text-[13px] text-[#E8E8E8] placeholder:text-[#8A8A8A] outline-none focus:border-[#6C7CFF] transition-colors resize-none";

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider mb-2">
      {label}
    </div>
  );
}

function DragDots({ active = false }: { active?: boolean }) {
  return (
    <span className={`grid grid-cols-2 gap-x-1 gap-y-0.5 transition-colors ${active ? "text-[#D8D8D8]" : "text-[#5A5A5A] group-hover/step:text-[#A8A8A8]"}`}>
      {Array.from({ length: 6 }).map((_, idx) => (
        <span key={idx} className="h-0.5 w-0.5 rounded-full bg-current" />
      ))}
    </span>
  );
}

export default function ManageTab() {
  const [tasks, setTasks] = useState<TaskBlock[]>(INITIAL_TASKS);
  const [expandedTasks, setExpandedTasks] = useState<Set<string>>(
    () => new Set(INITIAL_TASKS.map(task => task.id))
  );
  const [draggingTaskId, setDraggingTaskId] = useState<string | null>(null);
  const [draggingSubtask, setDraggingSubtask] = useState<{ taskId: string; subtaskId: string } | null>(null);
  const [dropTarget, setDropTarget] = useState<{ taskId: string; position: DropPosition } | null>(null);
  const [subtaskDropTarget, setSubtaskDropTarget] = useState<{ taskId: string; subtaskId: string; position: DropPosition } | null>(null);
  const [saveStates, setSaveStates] = useState<Record<string, SaveState>>({});
  const saveTimers = useRef<Record<string, ReturnType<typeof setTimeout>[]>>({});

  const addTask = () => {
    const newId = Date.now().toString();
    setTasks(prev => [
      ...prev,
      {
        id: newId,
        title: "",
        instructions: "",
        subtasks: [{ id: `${newId}-a`, name: "", explanation: "" }],
        assignedTo: "",
        deadline: "",
        requiresUpload: false,
      },
    ]);
    setExpandedTasks(prev => new Set(prev).add(newId));
    toast("Task updated");
  };

  const toggleTaskExpanded = (taskId: string) => {
    setExpandedTasks(prev => {
      const next = new Set(prev);
      next.has(taskId) ? next.delete(taskId) : next.add(taskId);
      return next;
    });
  };

  const scheduleAutosave = (taskId: string) => {
    saveTimers.current[taskId]?.forEach(timer => clearTimeout(timer));
    setSaveStates(prev => ({ ...prev, [taskId]: "editing" }));

    const savingTimer = setTimeout(() => {
      setSaveStates(prev => ({ ...prev, [taskId]: "saving" }));
    }, 450);

    const savedTimer = setTimeout(() => {
      setSaveStates(prev => ({ ...prev, [taskId]: "saved" }));
    }, 950);

    const clearTimer = setTimeout(() => {
      setSaveStates(prev => {
        const next = { ...prev };
        delete next[taskId];
        return next;
      });
    }, 3200);

    saveTimers.current[taskId] = [savingTimer, savedTimer, clearTimer];
  };

  const updateTask = (taskId: string, field: keyof TaskBlock, value: any) => {
    setTasks(prev => prev.map(t => t.id === taskId ? { ...t, [field]: value } : t));
    scheduleAutosave(taskId);
  };

  const deleteTask = (taskId: string) => {
    setTasks(prev => prev.filter(t => t.id !== taskId));
    setExpandedTasks(prev => {
      const next = new Set(prev);
      next.delete(taskId);
      return next;
    });
    toast("Task updated");
  };

  const handleDragStart = (event: React.DragEvent, taskId: string) => {
    event.stopPropagation();
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", taskId);
    setDraggingTaskId(taskId);
  };

  const handleDragEnd = () => {
    setDraggingTaskId(null);
    setDropTarget(null);
  };

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>, taskId: string) => {
    if (!draggingTaskId || draggingTaskId === taskId) {
      setDropTarget(null);
      return;
    }

    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    const rect = event.currentTarget.getBoundingClientRect();
    const position: DropPosition = event.clientY < rect.top + rect.height / 2 ? "before" : "after";
    setDropTarget({ taskId, position });
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>, taskId: string) => {
    event.preventDefault();
    const draggedId = draggingTaskId ?? event.dataTransfer.getData("text/plain");
    const position = dropTarget?.taskId === taskId ? dropTarget.position : "after";

    if (!draggedId || draggedId === taskId) {
      handleDragEnd();
      return;
    }

    setTasks(prev => {
      const draggedTask = prev.find(task => task.id === draggedId);
      if (!draggedTask) return prev;

      const reordered = prev.filter(task => task.id !== draggedId);
      const targetIndex = reordered.findIndex(task => task.id === taskId);
      if (targetIndex === -1) return prev;

      const insertIndex = position === "after" ? targetIndex + 1 : targetIndex;
      reordered.splice(insertIndex, 0, draggedTask);
      return reordered;
    });
    handleDragEnd();
  };

  const handleSubtaskDragStart = (event: React.DragEvent, taskId: string, subtaskId: string) => {
    event.stopPropagation();
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/plain", subtaskId);
    setDraggingSubtask({ taskId, subtaskId });
  };

  const handleSubtaskDragEnd = () => {
    setDraggingSubtask(null);
    setSubtaskDropTarget(null);
  };

  const handleSubtaskDragOver = (event: React.DragEvent<HTMLDivElement>, taskId: string, subtaskId: string) => {
    if (!draggingSubtask || draggingSubtask.taskId !== taskId || draggingSubtask.subtaskId === subtaskId) {
      setSubtaskDropTarget(null);
      return;
    }

    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    const rect = event.currentTarget.getBoundingClientRect();
    const position: DropPosition = event.clientY < rect.top + rect.height / 2 ? "before" : "after";
    setSubtaskDropTarget({ taskId, subtaskId, position });
  };

  const handleSubtaskDrop = (event: React.DragEvent<HTMLDivElement>, taskId: string, subtaskId: string) => {
    event.preventDefault();
    event.stopPropagation();
    const draggedSubtaskId = draggingSubtask?.subtaskId ?? event.dataTransfer.getData("text/plain");
    const position = subtaskDropTarget?.taskId === taskId && subtaskDropTarget.subtaskId === subtaskId
      ? subtaskDropTarget.position
      : "after";

    if (!draggedSubtaskId || draggedSubtaskId === subtaskId) {
      handleSubtaskDragEnd();
      return;
    }

    setTasks(prev => prev.map(task => {
      if (task.id !== taskId) return task;

      const draggedSubtask = task.subtasks.find(subtask => subtask.id === draggedSubtaskId);
      if (!draggedSubtask) return task;

      const reordered = task.subtasks.filter(subtask => subtask.id !== draggedSubtaskId);
      const targetIndex = reordered.findIndex(subtask => subtask.id === subtaskId);
      if (targetIndex === -1) return task;

      const insertIndex = position === "after" ? targetIndex + 1 : targetIndex;
      reordered.splice(insertIndex, 0, draggedSubtask);
      return { ...task, subtasks: reordered };
    }));
    scheduleAutosave(taskId);
    handleSubtaskDragEnd();
  };

  const addSubtask = (taskId: string) => {
    setTasks(prev => prev.map(t =>
      t.id === taskId
        ? { ...t, subtasks: [...t.subtasks, { id: Date.now().toString(), name: "", explanation: "" }] }
        : t
    ));
  };

  const updateSubtask = (taskId: string, subtaskId: string, field: "name" | "explanation", value: string) => {
    setTasks(prev => prev.map(t =>
      t.id === taskId
        ? { ...t, subtasks: t.subtasks.map(st => st.id === subtaskId ? { ...st, [field]: value } : st) }
        : t
    ));
    scheduleAutosave(taskId);
  };

  const deleteSubtask = (taskId: string, subtaskId: string) => {
    setTasks(prev => prev.map(t =>
      t.id === taskId
        ? { ...t, subtasks: t.subtasks.filter(st => st.id !== subtaskId) }
        : t
    ));
  };

  return (
    <div
      style={{ width: "70vw", maxWidth: "1280px", minWidth: "980px" }}
    >
      {/* Page header */}
      <div className="mb-5">
        <div className="min-w-0">
          <h2 className="text-[16px] font-semibold text-[#E8E8E8]">Manage Project</h2>
          <p className="text-[13px] text-[#B8B8B8] mt-0.5">Build tasks, define steps, assign owners, and set deadlines.</p>
        </div>
        <button
          onClick={addTask}
          className="mt-4 flex items-center gap-2 h-8 px-4 rounded-[8px] bg-[#6C7CFF] text-white text-[13px] font-medium hover:bg-[#7D8AFF] transition-colors"
        >
          <Plus size={13} />
          Add Task
        </button>
      </div>

      {/* Task blocks */}
      <div className="w-full space-y-5">
	        {tasks.map((task, taskIdx) => {
		          const { Icon, color } = taskTypeIcon(task.title);
		          const isExpanded = expandedTasks.has(task.id);
		          const saveState = saveStates[task.id] ?? "saved";
		          const saveText = saveState === "editing" ? "Editing..." : saveState === "saving" ? "Saving..." : "Changes saved";
	          return (
	            <div
	              key={task.id}
	              className={`relative bg-[#252526] border rounded-[14px] overflow-hidden group transition-[border-color,box-shadow,transform] duration-150 ${
		                draggingTaskId === task.id
		                  ? "border-[#6C7CFF] shadow-[0_10px_30px_rgba(0,0,0,0.28)] scale-[1.002]"
		                  : "border-[#3A3A3A]"
		              }`}
		              onDragOver={event => handleDragOver(event, task.id)}
		              onDrop={event => handleDrop(event, task.id)}
		            >
		              {dropTarget?.taskId === task.id && dropTarget.position === "before" && (
		                <div className="absolute left-4 right-4 top-0 z-20 h-px bg-[#6C7CFF]" />
		              )}
		              {dropTarget?.taskId === task.id && dropTarget.position === "after" && (
		                <div className="absolute left-4 right-4 bottom-0 z-20 h-px bg-[#6C7CFF]" />
		              )}
		              {/* Task block header row */}
	              <div
	                className={`flex items-center gap-3 px-5 bg-[#2B2B2B] hover:bg-[#2F2F2F] transition-colors duration-150 cursor-pointer ${
	                  isExpanded ? "py-3.5 border-b border-[#3A3A3A]" : "py-3"
	                }`}
	                onClick={() => toggleTaskExpanded(task.id)}
	              >
		                <div
		                  draggable
		                  onClick={e => e.stopPropagation()}
		                  onDragStart={event => handleDragStart(event, task.id)}
		                  onDragEnd={handleDragEnd}
		                  className={`w-6 h-7 flex items-center justify-center text-[#5A5A5A] hover:text-[#A8A8A8] transition-colors flex-shrink-0 ${
		                    draggingTaskId === task.id ? "cursor-grabbing text-[#E8E8E8]" : "cursor-grab"
		                  }`}
		                  title="Drag to reorder"
		                >
		                  <GripVertical size={15} />
		                </div>
	                <button
	                  type="button"
	                  onClick={e => {
	                    e.stopPropagation();
	                    toggleTaskExpanded(task.id);
	                  }}
	                  className="w-6 h-6 flex items-center justify-center rounded-[6px] text-[#A8A8A8] hover:text-[#E8E8E8] hover:bg-[#333333] transition-colors flex-shrink-0"
	                  title={isExpanded ? "Collapse task" : "Expand task"}
	                >
	                  {isExpanded ? <ChevronDown size={15} /> : <ChevronRight size={15} />}
	                </button>
	                <div
	                  className="w-7 h-7 rounded-[7px] flex items-center justify-center flex-shrink-0"
	                  style={{ backgroundColor: `${color}18` }}
                >
                  <Icon size={13} style={{ color }} />
                </div>
                <input
	                  type="text"
	                  value={task.title}
	                  onChange={e => updateTask(task.id, "title", e.target.value)}
	                  onClick={e => e.stopPropagation()}
	                  placeholder="Task title"
	                  className="flex-1 bg-transparent text-[14px] font-semibold text-[#E8E8E8] placeholder:text-[#5A5A5A] outline-none"
	                />
	                <div className="flex items-center gap-3 flex-shrink-0">
	                  {!isExpanded && (
	                    <>
	                      <span className="text-[12px] text-[#B8B8B8]">{task.assignedTo || "Unassigned"}</span>
	                      <span className="text-[12px] text-[#8A8A8A]">{task.deadline || "No deadline"}</span>
	                      {task.requiresUpload && (
	                        <span className="h-6 inline-flex items-center rounded-full border border-[#3A3A3A] bg-[#252526] px-2 text-[11px] text-[#B8B8B8]">
	                          Requires upload
	                        </span>
	                      )}
	                    </>
	                  )}
	                  <span className="text-[11px] text-[#6A6A6A]">Task {taskIdx + 1}</span>
		                  {isExpanded && <span className="text-[11px] text-[#5A5A5A] transition-opacity duration-150">{saveText}</span>}
	                </div>
	              </div>

	              {/* Body */}
	              <div
	                className={`overflow-hidden transition-[max-height,opacity] duration-150 ease-out ${
	                  isExpanded ? "max-h-[2400px] opacity-100" : "max-h-0 opacity-0"
	                }`}
	              >
	              <div className="px-5 py-5 space-y-5">

                {/* Task instructions */}
                <div>
                  <SectionLabel label="Task Instructions" />
                  <textarea
                    value={task.instructions}
                    onChange={e => updateTask(task.id, "instructions", e.target.value)}
                    placeholder="Explain what this task requires and what good output looks like."
                    rows={2}
                    className={textareaBase}
                  />
                </div>

                {/* Subtasks */}
                <div>
                  <SectionLabel label="Subtasks / Steps" />
                  <p className="text-[12px] text-[#6A6A6A] mb-3">
                    Break the main task into smaller steps. Each step can have its own short explanation.
                  </p>

                  <div className="overflow-hidden rounded-[12px] border border-[#3A3A3A] bg-[#1F1F1F]">
                    {task.subtasks.map((subtask, idx) => (
                      <div
                        key={subtask.id}
                        className={`group/step relative grid min-h-[68px] grid-cols-[24px_28px_1fr_32px] items-center gap-2 border-b border-white/[0.06] px-3.5 py-3 transition-colors hover:bg-[#242424] ${
                          draggingSubtask?.subtaskId === subtask.id ? "bg-[#272738]" : ""
                        }`}
                        onDragOver={event => handleSubtaskDragOver(event, task.id, subtask.id)}
                        onDrop={event => handleSubtaskDrop(event, task.id, subtask.id)}
                      >
                        {subtaskDropTarget?.subtaskId === subtask.id && subtaskDropTarget.position === "before" && (
                          <div className="absolute left-3 right-3 top-0 z-10 h-px bg-[#8B7CFF]" />
                        )}
                        {subtaskDropTarget?.subtaskId === subtask.id && subtaskDropTarget.position === "after" && (
                          <div className="absolute bottom-0 left-3 right-3 z-10 h-px bg-[#8B7CFF]" />
                        )}

                        <div
                          draggable
                          onDragStart={event => handleSubtaskDragStart(event, task.id, subtask.id)}
                          onDragEnd={handleSubtaskDragEnd}
                          className={`flex h-8 items-center justify-center rounded-[6px] transition-colors hover:bg-[#2E2E2E] ${
                            draggingSubtask?.subtaskId === subtask.id ? "cursor-grabbing" : "cursor-grab"
                          }`}
                          title="Drag to reorder step"
                        >
                          <DragDots active={draggingSubtask?.subtaskId === subtask.id} />
                        </div>

                        <div className="flex h-6 w-6 items-center justify-center rounded-full border border-[#8B7CFF] bg-[#22222A] text-[11px] font-medium text-[#8B7CFF]">
                          {idx + 1}
                        </div>

                        <div className="min-w-0 space-y-1">
                          <div className="flex min-w-0 items-center gap-1">
                            <span className="flex-shrink-0 text-[13px] font-medium text-[#E8E8E8]">
                              Step {idx + 1} -
                            </span>
                            <input
                              type="text"
                              value={subtask.name}
                              onChange={e => updateSubtask(task.id, subtask.id, "name", e.target.value)}
                              placeholder="Step title"
                              className="min-w-0 flex-1 rounded-[6px] border border-transparent bg-transparent px-1 py-0.5 text-[13px] font-medium text-[#E8E8E8] outline-none transition-colors placeholder:text-[#5A5A5A] hover:border-[#333333] focus:border-[#8B7CFF] focus:bg-[#202020]"
                              aria-label={`Step ${idx + 1} title`}
                            />
                          </div>
                          <textarea
                            value={subtask.explanation}
                            onChange={e => updateSubtask(task.id, subtask.id, "explanation", e.target.value)}
                            placeholder="What should this step accomplish?"
                            rows={2}
                            className="w-full resize-none rounded-[6px] border border-transparent bg-transparent px-1 py-0.5 text-[12px] leading-snug text-[#8A8A8A] outline-none transition-colors placeholder:text-[#5A5A5A] hover:border-[#333333] focus:border-[#8B7CFF] focus:bg-[#202020] focus:text-[#B8B8B8]"
                            aria-label={`Step ${idx + 1} explanation`}
                          />
                        </div>

                        <button
                          onClick={() => deleteSubtask(task.id, subtask.id)}
                          disabled={task.subtasks.length === 1}
                          className="flex h-8 w-8 items-center justify-center rounded-[7px] text-[#5A5A5A] transition-colors hover:bg-[#2E2E2E] hover:text-[#F16D6D] disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:bg-transparent disabled:hover:text-[#5A5A5A]"
                          title="Remove step"
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    ))}

                    <button
                      onClick={() => addSubtask(task.id)}
                      className="flex h-10 w-full items-center gap-2 px-3.5 text-[12px] font-medium text-[#8B7CFF] transition-colors hover:bg-[#29283A]"
                    >
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[#8B7CFF]/70">
                        <Plus size={11} />
                      </span>
                      Add step
                    </button>
                  </div>
                </div>

                {/* Assignment, Deadline & Requirement */}
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <SectionLabel label="Assign To" />
                    <div className="relative flex h-10 items-center gap-2 rounded-[9px] border border-[#3A3A3A] bg-[#202020] px-3 transition-colors hover:border-[#4A4A4A] focus-within:border-[#8B7CFF]">
                      {task.assignedTo ? (
                        <UserAvatar name={task.assignedTo} size="sm" />
                      ) : (
                        <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[#3A3A3A] text-[10px] text-[#6A6A6A]">--</span>
                      )}
                      <span className={`min-w-0 flex-1 truncate text-[13px] ${task.assignedTo ? "text-[#E8E8E8]" : "text-[#6A6A6A]"}`}>
                        {task.assignedTo || "Select team member"}
                      </span>
                      <ChevronDown size={14} className="text-[#8A8A8A]" />
                      <select
                        value={task.assignedTo}
                        onChange={e => updateTask(task.id, "assignedTo", e.target.value)}
                        className="absolute inset-0 cursor-pointer opacity-0"
                        aria-label="Assign to"
                      >
                        <option value="">Select team member</option>
                        <option>Sarah Chen</option>
                        <option>Marcus Liu</option>
                        <option>Anna Kim</option>
                        <option>Elijah Wang</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <SectionLabel label="Deadline" />
                    <div className="relative flex h-10 items-center gap-2 rounded-[9px] border border-[#3A3A3A] bg-[#202020] px-3 transition-colors hover:border-[#4A4A4A] focus-within:border-[#8B7CFF]">
                      <CalendarDays size={14} className="flex-shrink-0 text-[#8B7CFF]" />
                      <input
                        type="text"
                        value={task.deadline}
                        onChange={e => updateTask(task.id, "deadline", e.target.value)}
                        placeholder="Day X, 11:59 PM"
                        className="min-w-0 flex-1 bg-transparent text-[13px] text-[#E8E8E8] outline-none placeholder:text-[#6A6A6A]"
                      />
                      <ChevronDown size={14} className="flex-shrink-0 text-[#8A8A8A]" />
                    </div>
                  </div>
                  <div>
                    <SectionLabel label="Requirement" />
                    <button
                      type="button"
                      onClick={() => updateTask(task.id, "requiresUpload", !task.requiresUpload)}
                      className={`flex h-10 w-full items-center gap-2 rounded-[9px] border bg-[#202020] px-3 text-left transition-colors hover:border-[#4A4A4A] ${
                        task.requiresUpload ? "border-[#8B7CFF]/60" : "border-[#3A3A3A]"
                      }`}
                    >
                      <Upload size={14} className={task.requiresUpload ? "text-[#8B7CFF]" : "text-[#8A8A8A]"} />
                      <span className="min-w-0 flex-1 truncate text-[13px] text-[#E8E8E8]">
                        {task.requiresUpload ? "Requires upload" : "No upload required"}
                      </span>
                      <ChevronDown size={14} className="text-[#8A8A8A]" />
                    </button>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-[#333333]">
                  <button
                    onClick={() => deleteTask(task.id)}
                    className="flex items-center gap-1.5 text-[12px] text-[#6A6A6A] hover:text-[#F16D6D] transition-colors"
                  >
                    <Trash2 size={12} />
                    Delete Task
                  </button>
	                  <span className="text-[11px] text-[#5A5A5A]">Task {taskIdx + 1}</span>
	                </div>
	              </div>
	              </div>
	            </div>
          );
        })}
      </div>
    </div>
  );
}
