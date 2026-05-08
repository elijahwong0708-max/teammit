import { useState } from "react";
import { useParams } from "react-router";
import { CreditCard } from "lucide-react";
import Sidebar from "./Sidebar";
import ProfileModal from "./ProfileModal";
import ProjectProgress from "./ProjectProgress";
import OverviewTab from "./OverviewTab";
import TasksTab from "./TasksTab";
import TeamScheduleTab from "./TeamScheduleTab";
import ManageTab from "./ManageTab";

const TABS = [
  { id: "overview",       label: "Overview" },
  { id: "tasks",          label: "Tasks" },
  { id: "team-schedule",  label: "Team Schedule" },
  { id: "manage",         label: "Manage" },
];

export default function DashboardPage() {
  const { id } = useParams();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex h-screen bg-[#1E1E1E] overflow-hidden">
      <Sidebar
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        onAvatarClick={() => setProfileOpen(true)}
      />

      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        {/* Project Title Header */}
        <div className="border-b border-[#333333] bg-[#1B1B1B] px-8 py-4 flex-shrink-0">
          <div className="flex items-center gap-3 mb-1">
            <div
              className="w-8 h-8 rounded-[9px] flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: "#6C7CFF18" }}
            >
              <CreditCard size={16} className="text-[#6C7CFF]" />
            </div>
            <h1 className="text-[18px] font-semibold text-[#E8E8E8] tracking-tight">Mobile Banking Redesign</h1>
          </div>
          <p className="text-[13px] text-[#B8B8B8] pl-11">Improving the transfer experience for clarity and efficiency</p>
        </div>

        {/* Tab bar */}
        <div className="border-b border-[#333333] bg-[#1B1B1B] flex flex-shrink-0">
          {TABS.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-3 text-[13px] font-medium relative transition-colors duration-150 flex-shrink-0 ${
                activeTab === tab.id
                  ? "text-[#E8E8E8]"
                  : "text-[#8A8A8A] hover:text-[#B8B8B8]"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <span className="absolute bottom-0 left-0 right-0 h-px bg-[#6C7CFF]" />
              )}
            </button>
          ))}
        </div>

        {/* Progress Status Area */}
        <ProjectProgress projectId={id || "1"} />

        <main className="flex-1 overflow-auto bg-[#1E1E1E] px-8 py-6">
          {activeTab === "overview"       && <OverviewTab />}
          {activeTab === "tasks"          && <TasksTab />}
          {activeTab === "team-schedule"  && <TeamScheduleTab />}
          {activeTab === "manage"         && <ManageTab />}
        </main>
      </div>

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
