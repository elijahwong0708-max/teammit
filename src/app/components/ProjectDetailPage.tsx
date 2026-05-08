import { useState } from "react";
import { ArrowLeft, CheckCircle2, Code2, CreditCard, PenTool, Search, Users } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Sidebar from "./Sidebar";
import ProfileModal, { type ProfileUser } from "./ProfileModal";

const PALETTE = ["#6C7CFF", "#9B7BFF", "#4EC970", "#D7BA7D", "#F16D6D"];
function avatarBg(name: string) { return PALETTE[name.charCodeAt(0) % PALETTE.length]; }
function initials(name: string) { return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase(); }

const MEMBER_PROFILES: Record<string, ProfileUser> = {
  "Elijah Wang": { name: "Elijah Wang", role: "UX Designer",   intro: "Designing intuitive financial experiences with a focus on clarity and trust.", skills: ["Figma", "Wireframing", "Prototyping", "User Research"], availability: "4–6h/week", completed: 3, leftEarly: 0 },
  "Sarah Chen":  { name: "Sarah Chen",  role: "UX Designer",   intro: "Interested in product flows and accessibility. I enjoy working on complex user journeys.", skills: ["Figma", "Wireframing", "Research", "Prototyping"], availability: "4–6h/week", completed: 3, leftEarly: 0 },
  "Marcus Liu":  { name: "Marcus Liu",  role: "Developer",     intro: "Full-stack developer comfortable with React, TypeScript, and mobile app prototyping.", skills: ["React", "TypeScript", "Node.js", "Mobile Dev"], availability: "6–8h/week", completed: 5, leftEarly: 1 },
};

export default function ProjectDetailPage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileUser, setProfileUser] = useState<ProfileUser | null>(null);

  const openProfile = (name: string) => {
    const profile = MEMBER_PROFILES[name];
    if (profile) { setProfileUser(profile); setProfileOpen(true); }
  };

  const project = {
    title: "Mobile Banking Redesign",
    tagline: "Redesign core user flows for a mobile banking app",
    overview: "Redesign core user flows for a mobile banking app. Focus on improving usability and reducing friction in common tasks like transfers and bill payments.",
    creatorNote: "This is an idea I've been thinking about for a while. I'm not aiming for a perfect product, but I want to explore the core flow. I prefer working with people who are consistent and take responsibility.",
    effort: "Medium effort (4–6h/week)",
    duration: "2 weeks",
    accent: "#6C7CFF",
    roles: [
      { title: "UX Designer", Icon: PenTool, tasks: ["Create user flows", "Design wireframes", "Prepare review-ready screens"] },
      { title: "Frontend Developer", Icon: Code2, tasks: ["Build prototype", "Implement core transfer flow", "Connect basic interaction states"] },
      { title: "UX Researcher", Icon: Search, tasks: ["Review existing banking apps", "Identify friction points", "Summarize user flow issues"] },
    ],
    workflow: [
      { week: "Week 1", description: "Research · User flow · Initial wireframes" },
      { week: "Week 2", description: "Refine design · Prototype · Final review" },
    ],
    creator: {
      name: "Elijah Wang",
      role: "UX Designer",
      completed: 3,
      leftEarly: 0,
    },
    members: [
      { name: "Sarah Chen", role: "UX Designer", skills: "Figma · Wireframing", availability: "4–6h/week" },
      { name: "Marcus Liu", role: "Developer", skills: "React · JS", availability: "6h/week" },
    ],
    totalSlots: 5,
  };
  const openRoles = project.roles.map(role => role.title);

  return (
    <div className="flex h-screen bg-[#1E1E1E] overflow-hidden">
      <Sidebar
        activePage="explore"
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        onAvatarClick={() => setProfileOpen(true)}
      />

      <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
        <div className="border-b border-[#3A3A3A] bg-[#1B1B1B] px-8 py-4 flex-shrink-0">
          <a href="/" className="flex items-center gap-1.5 text-[13px] text-[#8A8A8A] hover:text-[#E8E8E8] transition-colors w-fit">
            <ArrowLeft size={13} />
            Back to Explore
          </a>
        </div>

        <main className="flex-1 overflow-auto bg-[#202020] px-8 py-6">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex gap-8">
              {/* Left: main content */}
              <div className="flex-1 min-w-0">
                {/* Project header */}
                <div className="mb-7">
                  <div className="flex items-start gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-[10px] flex items-center justify-center flex-shrink-0 border border-[#3A3A3A]"
                      style={{ backgroundColor: `${project.accent}18` }}
                    >
                      <CreditCard size={18} style={{ color: project.accent }} />
                    </div>
                    <div className="min-w-0">
                      <h1 className="text-[26px] font-semibold text-[#E8E8E8] tracking-tight leading-tight mb-1.5">{project.title}</h1>
                      <p className="text-[14px] text-[#B8B8B8] leading-relaxed">{project.tagline}.</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 pl-[52px]">
                    {[project.effort, project.duration, `${project.members.length} / ${project.totalSlots} joined`].map(meta => (
                      <span
                        key={meta}
                        className="inline-flex h-6 items-center rounded-full border border-[#3A3A3A] bg-[#252526] px-2.5 text-[12px] text-[#B8B8B8]"
                      >
                        {meta}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Creator */}
                <div className="bg-[#252526] border border-[#3A3A3A] rounded-[12px] p-4 mb-6">
                  <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-[0.04em] mb-3">Created by</div>
                  <button
                    className="flex items-center gap-3 text-left hover:opacity-80 transition-opacity w-fit"
                    onClick={() => openProfile(project.creator.name)}
                    title="View profile"
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center text-[12px] font-semibold text-white flex-shrink-0"
                      style={{ backgroundColor: avatarBg(project.creator.name) }}
                    >
                      {initials(project.creator.name)}
                    </div>
                    <div className="min-w-0">
                      <div className="text-[13px] font-medium text-[#E8E8E8] hover:text-white transition-colors">{project.creator.name}</div>
                      <div className="text-[12px] text-[#B8B8B8]">{project.creator.role}</div>
                      <div className="text-[11px] text-[#8A8A8A] mt-0.5">Completed {project.creator.completed} · Left early {project.creator.leftEarly}</div>
                    </div>
                  </button>
                </div>

                {/* Overview */}
                <div className="mb-6">
                  <h2 className="text-[13px] font-semibold text-[#E8E8E8] mb-2">Project Overview</h2>
                  <p className="text-[13px] text-[#B8B8B8] leading-relaxed">{project.overview}</p>
                </div>

                {/* Creator Note */}
                <div className="mb-6">
                  <h2 className="text-[13px] font-semibold text-[#E8E8E8] mb-2">Creator Note</h2>
                  <div className="bg-[#252526] border border-[#3A3A3A] border-l-2 rounded-[10px] px-4 py-3" style={{ borderLeftColor: project.accent }}>
                    <p className="text-[13px] text-[#B8B8B8] italic leading-relaxed">"{project.creatorNote}"</p>
                  </div>
                </div>

                {/* Roles */}
                <div className="mb-6 border-t border-[#3A3A3A] pt-6">
                  <h2 className="text-[13px] font-semibold text-[#E8E8E8] mb-4">Roles & Responsibilities</h2>
                  <div className="grid grid-cols-3 gap-3">
                    {project.roles.map(r => (
                      <div key={r.title} className="bg-[#252526] border border-[#3A3A3A] rounded-[10px] p-3.5">
                        <div className="flex items-center gap-2 mb-2.5">
                          <RoleIcon Icon={r.Icon} accent={project.accent} />
                          <div className="text-[13px] font-medium text-[#E8E8E8]">{r.title}</div>
                        </div>
                        <ul className="space-y-1.5">
                          {r.tasks.map(task => (
                            <li key={task} className="text-[12px] text-[#B8B8B8] leading-snug flex items-start gap-1.5">
                              <CheckCircle2 size={11} className="text-[#8A8A8A] mt-0.5 flex-shrink-0" />
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Workflow */}
                <div className="mb-6">
                  <h2 className="text-[13px] font-semibold text-[#E8E8E8] mb-3">Workflow</h2>
                  <div className="flex gap-3">
                    {project.workflow.map(w => (
                      <div key={w.week} className="flex-1 bg-[#252526] border border-[#3A3A3A] rounded-[10px] p-4">
                        <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-[0.04em] mb-1">{w.week}</div>
                        <div className="text-[13px] text-[#D8D8D8] leading-snug">{w.description}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Collaboration */}
                <div className="border-t border-[#303030] pt-5">
                  <h2 className="text-[13px] font-semibold text-[#E8E8E8] mb-2">How collaboration works</h2>
                  <p className="text-[12px] text-[#8A8A8A] leading-relaxed">
                    Tasks will be assigned after the team is formed. Submissions and feedback happen inside the project workspace.
                  </p>
                </div>
              </div>

              {/* Right: sticky team panel */}
              <div className="w-[300px] flex-shrink-0">
                <div className="sticky top-0 bg-[#252526] border border-[#3A3A3A] rounded-[12px] overflow-hidden">
                  <div className="px-5 py-4 border-b border-[#3A3A3A]">
                    <div className="flex items-center gap-2 mb-1">
                      <Users size={14} className="text-[#B8B8B8]" />
                      <span className="text-[13px] font-semibold text-[#E8E8E8]">Team</span>
                    </div>
                    <div className="text-[12px] text-[#B8B8B8]">
                      {project.members.length} / {project.totalSlots} joined
                    </div>
                  </div>

                  <div className="px-5 py-4 border-b border-[#3A3A3A]">
                    <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-[0.04em] mb-2.5">Open roles</div>
                    <div className="space-y-1.5">
                      {openRoles.map(role => (
                        <div key={role} className="flex items-center gap-2 text-[12px] text-[#D8D8D8]">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: project.accent }} />
                          {role}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="px-5 py-4 space-y-3">
                    <div className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-[0.04em]">Current members</div>
                    {project.members.map(m => (
                      <button
                        key={m.name}
                        className="flex items-start gap-3 text-left w-full hover:opacity-80 transition-opacity"
                        onClick={() => openProfile(m.name)}
                        title="View profile"
                      >
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 text-[11px] font-semibold text-white"
                          style={{ backgroundColor: avatarBg(m.name) }}
                        >
                          {initials(m.name)}
                        </div>
                        <div className="min-w-0">
                          <div className="text-[13px] font-medium text-[#E8E8E8] hover:text-white transition-colors">{m.name}</div>
                          <div className="text-[11px] text-[#8A8A8A]">{m.role}</div>
                        </div>
                      </button>
                    ))}
                  </div>

                  <div className="px-5 pb-5">
                    <a
                      href="/commit/1"
                      className="block w-full h-9 flex items-center justify-center rounded-[8px] bg-[#6C7CFF] text-white text-[13px] font-medium hover:bg-[#7D8AFF] transition-colors"
                    >
                      Join Project
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} user={profileUser ?? undefined} />
    </div>
  );
}

function RoleIcon({ Icon, accent }: { Icon: LucideIcon; accent: string }) {
  return (
    <div
      className="w-6 h-6 rounded-[6px] flex items-center justify-center flex-shrink-0"
      style={{ backgroundColor: `${accent}18` }}
    >
      <Icon size={12} style={{ color: accent }} />
    </div>
  );
}
