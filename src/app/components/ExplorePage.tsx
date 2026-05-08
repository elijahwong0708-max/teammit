import { useState } from "react";
import { Search, CreditCard, ShoppingBag, Activity, BookOpen, Timer, CalendarDays, Utensils, Users, Leaf, Landmark, Map, Heart, Layers, Megaphone, Briefcase, MapPin, Brain, Bus, Home, GraduationCap } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Sidebar from "./Sidebar";
import ProfileModal from "./ProfileModal";

interface Project {
  id: number;
  title: string;
  description: string;
  roles: string[];
  effort: string;
  duration: string;
  teamCount: string;
  accent: string;
  Icon: LucideIcon;
}

const PROJECTS: Project[] = [
  { id: 1,  title: "Mobile Banking Redesign",       description: "Redesign core user flows for a mobile banking app, focusing on transfers and bill payments.", roles: ["UX", "Developer"],                   effort: "Medium · 4–6h/week", duration: "2w", teamCount: "2 / 5", accent: "#6C7CFF", Icon: CreditCard    },
  { id: 2,  title: "E-commerce Checkout Flow",       description: "Streamline the checkout experience for a fashion e-commerce platform.",                       roles: ["UX", "Researcher"],                  effort: "Medium · 4–6h/week", duration: "3w", teamCount: "3 / 5", accent: "#9B7BFF", Icon: ShoppingBag   },
  { id: 3,  title: "Fitness Tracking Dashboard",     description: "Build an activity and goal-tracking dashboard for fitness app users.",                          roles: ["Developer", "Designer"],             effort: "Light · 2–4h/week",  duration: "2w", teamCount: "1 / 5", accent: "#4EC970", Icon: Activity      },
  { id: 4,  title: "Recipe Sharing Platform",        description: "Design and build a community space for sharing and discovering recipes.",                        roles: ["Developer", "UX", "Content"],        effort: "High · 6–8h/week",   duration: "3w", teamCount: "2 / 5", accent: "#D7BA7D", Icon: BookOpen      },
  { id: 5,  title: "Productivity Timer App",         description: "Create a focused work timer app with task management and analytics.",                            roles: ["Developer", "Designer"],             effort: "Medium · 4–6h/week", duration: "2w", teamCount: "4 / 5", accent: "#F16D6D", Icon: Timer         },
  { id: 6,  title: "Community Events Platform",      description: "Platform for discovering and organizing local community events and workshops.",                   roles: ["Developer", "UX"],                   effort: "Light · 2–4h/week",  duration: "3w", teamCount: "1 / 5", accent: "#6C7CFF", Icon: CalendarDays  },
  { id: 7,  title: "Campus Food Review App",         description: "Help students compare dining spots around campus based on price, wait time, and quality.",        roles: ["UX", "Researcher", "Developer"],     effort: "Medium · 4–6h/week", duration: "2w", teamCount: "2 / 4", accent: "#CE9178", Icon: Utensils      },
  { id: 8,  title: "Study Group Matcher",            description: "Create a tool that helps students find study partners based on course, schedule, and goals.",     roles: ["Product", "UX", "Developer"],        effort: "Medium · 4–6h/week", duration: "3w", teamCount: "3 / 6", accent: "#4EC970", Icon: Users         },
  { id: 9,  title: "Sustainable Shopping Guide",     description: "Build a lightweight guide that helps users compare products by sustainability signals.",           roles: ["Researcher", "Content", "Designer"], effort: "Light · 2–4h/week",  duration: "2w", teamCount: "2 / 5", accent: "#4EC970", Icon: Leaf          },
  { id: 10, title: "Museum Visit Companion",         description: "Design a calm navigation tool for visitors who need a lower-stress museum experience.",            roles: ["UX", "Accessibility", "Researcher"], effort: "High · 6–8h/week",   duration: "3w", teamCount: "3 / 5", accent: "#4FC1FF", Icon: Landmark      },
  { id: 11, title: "Budget Travel Planner",          description: "Create a travel planning tool that helps students compare routes, costs, and trip tradeoffs.",     roles: ["UX", "Developer", "Data"],           effort: "Medium · 4–6h/week", duration: "3w", teamCount: "2 / 6", accent: "#6C7CFF", Icon: Map           },
  { id: 12, title: "Mental Wellness Check-in",       description: "Design a simple daily check-in system for students to track mood, workload, and support needs.",   roles: ["UX", "Researcher", "Content"],       effort: "Light · 2–4h/week",  duration: "2w", teamCount: "1 / 4", accent: "#9B7BFF", Icon: Heart         },
  { id: 13, title: "Portfolio Feedback Exchange",    description: "Build a peer review space where students can upload portfolio pieces and receive structured feedback.", roles: ["UX", "Developer", "Visual"],      effort: "Medium · 4–6h/week", duration: "2w", teamCount: "4 / 6", accent: "#9B7BFF", Icon: Layers        },
  { id: 14, title: "Club Event Promotion Kit",       description: "Create a toolkit for student clubs to plan, promote, and evaluate campus events.",                  roles: ["Content", "Brand", "Marketing"],     effort: "Light · 2–4h/week",  duration: "1w", teamCount: "2 / 5", accent: "#CE9178", Icon: Megaphone     },
  { id: 15, title: "Internship Tracker",             description: "Design a dashboard for students to track applications, deadlines, referrals, and interview stages.", roles: ["Product", "Developer", "UX"],        effort: "Medium · 4–6h/week", duration: "3w", teamCount: "3 / 5", accent: "#6C7CFF", Icon: Briefcase     },
  { id: 16, title: "Local Volunteer Map",            description: "Build a map-based tool that helps students find volunteer opportunities near campus.",               roles: ["Developer", "Researcher", "UX"],     effort: "Medium · 4–6h/week", duration: "2w", teamCount: "2 / 5", accent: "#4EC970", Icon: MapPin        },
  { id: 17, title: "AI Study Notes Organizer",       description: "Create a study note organizer that groups lecture notes, summaries, and review tasks.",             roles: ["Developer", "UX", "Data"],           effort: "High · 6–8h/week",   duration: "3w", teamCount: "3 / 6", accent: "#9B7BFF", Icon: Brain         },
  { id: 18, title: "Public Transit Delay Reporter",  description: "Design a lightweight reporting tool for students to share transit delays and commute issues.",       roles: ["UX", "Developer", "Researcher"],     effort: "Light · 2–4h/week",  duration: "2w", teamCount: "1 / 5", accent: "#4FC1FF", Icon: Bus           },
  { id: 19, title: "Apartment Search Helper",        description: "Create a comparison tool for students searching for housing based on rent, commute, and safety.",    roles: ["UX", "Data", "Content"],             effort: "Medium · 4–6h/week", duration: "3w", teamCount: "2 / 5", accent: "#D7BA7D", Icon: Home          },
  { id: 20, title: "Course Project Showcase",        description: "Build a gallery where students can publish class projects and find collaborators for future iterations.", roles: ["Developer", "Visual", "Content"], effort: "Medium · 4–6h/week", duration: "2w", teamCount: "4 / 6", accent: "#9B7BFF", Icon: GraduationCap },
];

const selectClass =
  "h-9 bg-[#252526] border border-[#3A3A3A] rounded-[8px] px-3 text-[13px] text-[#B8B8B8] outline-none focus:border-[#6C7CFF] transition-colors cursor-pointer hover:border-[#4A4A4A]";

export default function ExplorePage() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [search, setSearch] = useState("");

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
          <h1 className="text-[20px] font-semibold text-[#E8E8E8] tracking-tight">Explore</h1>
          <p className="text-[13px] text-[#B8B8B8] mt-0.5">Discover open student projects and join teams that match your skills and availability.</p>
        </div>

        <main className="flex-1 overflow-auto bg-[#202020] py-6">
          <div className="w-[980px] mx-auto">

            <div className="flex items-center justify-between gap-4 mb-5">
              <div className="relative w-[300px] flex-shrink-0">
                <Search size={13} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8A8A8A]" />
                <input
                  type="text"
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search projects"
                  className="h-9 w-full bg-[#252526] border border-[#3A3A3A] rounded-[8px] pl-8 pr-3 text-[13px] text-[#E8E8E8] placeholder:text-[#8A8A8A] outline-none focus:border-[#6C7CFF] transition-colors"
                />
              </div>
              <div className="flex items-center gap-2">
                <select className={selectClass}><option value="">Role</option><option>UX Designer</option><option>Developer</option><option>Researcher</option></select>
                <select className={selectClass}><option value="">Duration</option><option>2 weeks</option><option>3 weeks</option></select>
                <select className={selectClass}><option value="">Effort</option><option>Light (2–4h/week)</option><option>Medium (4–6h/week)</option><option>High (6–8h/week)</option></select>
                <select className={selectClass}><option value="">Team Size</option><option>2–3</option><option>4–5</option></select>
              </div>
            </div>

            <div className="mb-3 text-[12px] text-[#8A8A8A]">{PROJECTS.length} open projects</div>

            <div className="space-y-2">
              {PROJECTS.map(({ id, title, description, roles, effort, duration, teamCount, accent, Icon }) => (
                <a
                  key={id}
                  href={`/project/${id}`}
                  className="flex items-center bg-[#252526] border border-[#3A3A3A] rounded-[12px] hover:bg-[#2F2F2F] hover:border-[#4A4A4A] transition-all duration-150 group overflow-hidden"
                >
                  <div className="flex-1 min-w-0 flex items-center justify-between gap-5 px-4 py-3.5">
                    {/* Icon */}
                    <div
                      className="w-8 h-8 rounded-[8px] flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${accent}18` }}
                    >
                      <Icon size={15} style={{ color: accent }} />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: accent }} />
                        <h2 className="text-[14px] font-semibold text-[#E8E8E8] group-hover:text-white transition-colors">
                          {title}
                        </h2>
                      </div>
                      <p className="text-[12px] text-[#B8B8B8] mb-2.5 leading-[1.4] ml-3.5">{description}</p>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <div className="flex items-center gap-1.5">
                          {roles.map(role => (
                            <span key={role} className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-[#2F2F2F] text-[#B8B8B8] border border-[#3A3A3A]">
                              {role}
                            </span>
                          ))}
                        </div>
                        <span className="text-[#3A3A3A] text-[10px] select-none">·</span>
                        <span className="text-[12px] text-[#8A8A8A]">{effort}</span>
                        <span className="text-[#3A3A3A] text-[10px] select-none">·</span>
                        <span className="text-[12px] text-[#8A8A8A]">{duration}</span>
                      </div>
                    </div>

                    {/* Right */}
                    <div className="flex items-center gap-2.5 flex-shrink-0">
                      <span className="text-[12px] text-[#B8B8B8] tabular-nums">{teamCount} joined</span>
                      <span className="text-[#4A4A4A] group-hover:text-[#8A8A8A] transition-colors text-[13px] leading-none">→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

          </div>
        </main>
      </div>

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
