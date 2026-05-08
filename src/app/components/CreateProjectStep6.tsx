import { useState } from "react";
import { LayoutGrid, Layers, Code2, Search, FileText, CalendarDays } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Sidebar from "./Sidebar";
import ProfileModal from "./ProfileModal";

function StepHeader({ step, total }: { step: number; total: number }) {
  return (
    <div className="border-b border-[#3A3A3A] bg-[#1B1B1B] px-8 py-4 flex-shrink-0">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[12px] text-[#8A8A8A]">Step {step} of {total}</span>
        <span className="text-[12px] text-[#8A8A8A]">{Math.round((step / total) * 100)}%</span>
      </div>
      <div className="h-[3px] bg-[#6C7CFF] rounded-full" />
    </div>
  );
}

interface Workflow {
  name: string;
  description: string;
  accent: string;
  Icon: LucideIcon;
}

const WORKFLOWS: Workflow[] = [
  { name: "General Project",         description: "A flexible task structure for mixed, unclear, or multi-track projects.",                  accent: "#B8B8B8", Icon: LayoutGrid  },
  { name: "Design-focused",          description: "UX, UI, branding, interaction design, or prototype work.",                                 accent: "#9B7BFF", Icon: Layers      },
  { name: "Build-focused",           description: "Websites, apps, coding, technical prototypes, or implementation.",                         accent: "#6C7CFF", Icon: Code2       },
  { name: "Research-focused",        description: "User research, market research, analysis, surveys, interviews, or reports.",                accent: "#4EC970", Icon: Search      },
  { name: "Content-focused",         description: "Writing, video, social media, presentations, storytelling, or campaign content.",           accent: "#D7BA7D", Icon: FileText    },
  { name: "Event / Campaign-focused",description: "Events, exhibitions, workshops, marketing campaigns, school clubs, or community activities.", accent: "#F16D6D", Icon: CalendarDays},
];

export default function CreateProjectStep6() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [selectedWorkflow, setSelectedWorkflow] = useState("General Project");

  return (
    <div className="flex h-screen bg-[#1E1E1E] overflow-hidden">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        onAvatarClick={() => setProfileOpen(true)}
      />

      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <StepHeader step={7} total={7} />

        <main className="flex-1 overflow-auto bg-[#202020] flex items-center justify-center py-12">
          <div className="w-[720px]">
            <h1 className="text-[22px] font-semibold text-[#E8E8E8] mb-1.5 tracking-tight">Choose a starting workflow</h1>
            <p className="text-[13px] text-[#8A8A8A] mb-8">
              Choose a template to generate default tasks. You can edit everything later in Manage.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-8">
              {WORKFLOWS.map(({ name, description, accent, Icon }) => {
                const isSelected = selectedWorkflow === name;
                return (
                  <button
                    key={name}
                    onClick={() => setSelectedWorkflow(name)}
                    className={`flex items-start gap-3.5 p-4 rounded-[12px] border text-left transition-all duration-150 ${
                      isSelected
                        ? "border-[#6C7CFF] bg-[#2A3152]"
                        : "border-[#3A3A3A] bg-[#252526] hover:bg-[#2F2F2F] hover:border-[#4A4A4A]"
                    }`}
                  >
                    <div
                      className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: isSelected ? `${accent}20` : "#2F2F2F" }}
                    >
                      <Icon size={15} style={{ color: isSelected ? accent : "#8A8A8A" }} />
                    </div>
                    <div>
                      <div className="text-[13px] font-semibold text-[#E8E8E8] mb-0.5">{name}</div>
                      <div className="text-[12px] text-[#8A8A8A] leading-relaxed">{description}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="flex justify-between border-t border-[#3A3A3A] pt-5">
              <a href="/create-project/5" className="h-9 px-5 rounded-[8px] border border-[#3A3A3A] text-[13px] text-[#B8B8B8] hover:text-[#E8E8E8] hover:border-[#6C7CFF] transition-all flex items-center">Back</a>
              <a
                href="/project/1/tasks"
                className="h-9 px-6 rounded-[8px] bg-[#6C7CFF] text-white text-[13px] font-medium hover:bg-[#7D8AFF] transition-colors flex items-center"
              >
                Publish Project
              </a>
            </div>
          </div>
        </main>
      </div>

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
