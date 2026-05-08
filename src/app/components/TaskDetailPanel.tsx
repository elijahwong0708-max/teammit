import { useState } from "react";
import { X, AlignLeft, Quote, ListChecks, Upload, MessageSquare, Frame } from "lucide-react";
import { toast } from "sonner";
import { UserAvatar } from "./UserAvatar";

interface TaskDetailPanelProps {
  isOpen: boolean;
  onClose: () => void;
  task: {
    title: string;
    description: string;
    leaderNote?: string;
    subtasks?: Array<{ id: string; title: string; completed: boolean }>;
    requiresUpload: boolean;
    uploadedFile?: string | null;
    status: "current" | "past" | "future";
    comments?: Array<{ author: string; text: string }>;
  } | null;
}

function SectionLabel({ icon: Icon, label }: { icon: typeof AlignLeft; label: string }) {
  return (
    <div className="flex items-center gap-1.5 mb-2">
      <Icon size={11} className="text-[#8A8A8A]" />
      <span className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider">{label}</span>
    </div>
  );
}

export default function TaskDetailPanel({ isOpen, onClose, task }: TaskDetailPanelProps) {
  const [newComment, setNewComment] = useState("");

  return (
    <>
      {isOpen && <div className="fixed inset-0 z-40" onClick={onClose} />}

      <div
        className={`fixed top-0 right-0 h-full w-[460px] bg-[#252526] border-l border-[#3A3A3A] z-50 flex flex-col transition-transform duration-200 ease-out shadow-2xl ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {!task ? null : (
          <>
            {/* Header */}
            <div className="flex items-start justify-between px-6 py-5 border-b border-[#3A3A3A] flex-shrink-0">
              <div className="flex items-start gap-3 pr-4">
                <div className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0 mt-px" style={{ backgroundColor: "#9B7BFF18" }}>
                  <Frame size={15} className="text-[#9B7BFF]" />
                </div>
                <h2 className="text-[15px] font-semibold text-[#E8E8E8] leading-snug">{task.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="w-7 h-7 flex items-center justify-center rounded-md text-[#8A8A8A] hover:text-[#E8E8E8] hover:bg-[#2F2F2F] transition-colors flex-shrink-0 mt-px"
              >
                <X size={14} />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto px-6 py-5 space-y-6">
              {task.status !== "future" && (
                <>
                  {task.description && (
                    <div>
                      <SectionLabel icon={AlignLeft} label="Description" />
                      <p className="text-[13px] text-[#D8D8D8] leading-relaxed">{task.description}</p>
                    </div>
                  )}

                  {task.leaderNote && (
                    <div>
                      <SectionLabel icon={Quote} label="Leader Note" />
                      <div className="border-l-2 border-[#6C7CFF] pl-3">
                        <p className="text-[13px] text-[#D8D8D8] italic leading-relaxed">{task.leaderNote}</p>
                      </div>
                    </div>
                  )}

                  {task.status === "current" && task.subtasks && task.subtasks.length > 0 && (
                    <div>
                      <SectionLabel icon={ListChecks} label="Subtasks" />
                      <div className="space-y-2">
                        {task.subtasks.map(subtask => (
                          <div key={subtask.id} className="flex items-center gap-2.5">
                            <div className={`w-4 h-4 rounded border flex items-center justify-center flex-shrink-0 transition-colors ${
                              subtask.completed ? "bg-[#6C7CFF] border-[#6C7CFF]" : "border-[#3A3A3A]"
                            }`}>
                              {subtask.completed && (
                                <svg width="9" height="7" viewBox="0 0 9 7" fill="none">
                                  <path d="M1 3.5L3.5 6L8 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              )}
                            </div>
                            <span className={`text-[13px] ${subtask.completed ? "text-[#8A8A8A] line-through" : "text-[#D8D8D8]"}`}>
                              {subtask.title}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {task.status === "current" && (
                    <div>
                      <SectionLabel icon={Upload} label="Submission" />
                      {task.uploadedFile ? (
                        <div className="flex items-center justify-between bg-[#252526] border border-[#3A3A3A] rounded-[8px] px-3 py-2.5">
                          <span className="text-[13px] text-[#D8D8D8] truncate hover:text-[#E8E8E8] hover:underline cursor-pointer transition-colors">{task.uploadedFile}</span>
                          <button
                            className="text-[13px] text-[#6C7CFF] hover:text-[#7D8AFF] hover:bg-[#2F2F2F] rounded px-1.5 py-0.5 flex-shrink-0 ml-3 transition-all"
                            onClick={() => toast("File uploaded")}
                          >
                            Replace
                          </button>
                        </div>
                      ) : (
                        <button
                          className="h-8 px-5 rounded-[8px] bg-[#6C7CFF] text-white text-[13px] font-medium hover:bg-[#7D8AFF] transition-colors"
                          onClick={() => toast(task.requiresUpload ? "File uploaded" : "Task updated")}
                        >
                          {task.requiresUpload ? "Upload File" : "Mark Complete"}
                        </button>
                      )}
                    </div>
                  )}

                  {task.status === "past" && task.uploadedFile && (
                    <div>
                      <SectionLabel icon={Upload} label="Submitted File" />
                      <div className="flex items-center justify-between bg-[#252526] border border-[#3A3A3A] rounded-[8px] px-3 py-2.5">
                        <span className="text-[13px] text-[#D8D8D8] hover:text-[#E8E8E8] hover:underline cursor-pointer transition-colors">{task.uploadedFile}</span>
                        <button
                          className="text-[13px] text-[#6C7CFF] hover:text-[#7D8AFF] hover:bg-[#2F2F2F] rounded px-1.5 py-0.5 transition-all"
                          onClick={() => toast("File preview opened")}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  )}

                  {(task.status === "past" || task.status === "current") && (
                    <div>
                      <SectionLabel icon={MessageSquare} label="Comments" />
                      <div className="space-y-3 mb-3">
                        {(task.comments ?? []).length > 0 ? (
                          (task.comments ?? []).map((comment, idx) => (
                            <div key={idx} className="flex gap-2.5">
                              <UserAvatar name={comment.author} size="sm" />
                              <div>
                                <div className="text-[12px] font-semibold text-[#D8D8D8] mb-0.5">{comment.author}</div>
                                <div className="text-[13px] text-[#B8B8B8] leading-relaxed">{comment.text}</div>
                              </div>
                            </div>
                          ))
                        ) : (
                          <div className="text-[12px] text-[#8A8A8A] rounded-[8px] border border-[#3A3A3A] bg-[#202020] px-3 py-2">
                            No comments yet
                          </div>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <input
                          value={newComment}
                          onChange={e => setNewComment(e.target.value)}
                          placeholder="Add comment..."
                          className="flex-1 h-9 bg-[#252526] border border-[#3A3A3A] rounded-[8px] px-3 text-[13px] text-[#E8E8E8] placeholder:text-[#8A8A8A] outline-none focus:border-[#6C7CFF] transition-colors"
                        />
                        <button
                          className="h-9 px-4 rounded-[8px] bg-[#2F2F2F] border border-[#3A3A3A] text-[13px] text-[#B8B8B8] hover:text-[#E8E8E8] hover:border-[#6C7CFF] transition-all"
                          onClick={() => {
                            if (!newComment.trim()) return;
                            setNewComment("");
                            toast("Comment sent");
                          }}
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  )}
                </>
              )}

              {task.status === "future" && (
                <div>
                  <SectionLabel icon={AlignLeft} label="Description" />
                  <p className="text-[13px] text-[#D8D8D8] leading-relaxed">{task.description}</p>
                </div>
              )}
            </div>
          </>
        )}
      </div>
    </>
  );
}
