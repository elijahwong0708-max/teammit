import { useState, useRef, useEffect } from "react";
import { Send } from "lucide-react";
import { useSearchParams } from "react-router";
import { toast } from "sonner";
import Sidebar from "./Sidebar";
import ProfileModal, { type ProfileUser } from "./ProfileModal";

const PALETTE = ["#6C7CFF", "#9B7BFF", "#4EC970", "#D7BA7D", "#F16D6D"];
function avatarBg(name: string) { return PALETTE[name.charCodeAt(0) % PALETTE.length]; }
function initials(name: string) { return name.split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase(); }

const TEAMS = [
  {
    project: "Mobile Banking Redesign",
    color: "#6C7CFF",
    members: [
      { name: "Sarah Chen", role: "UX Researcher" },
      { name: "Marcus Liu", role: "Developer" },
      { name: "Anna Kim", role: "UX Designer" },
    ],
  },
  {
    project: "E-commerce Checkout",
    color: "#9B7BFF",
    members: [
      { name: "David Lin", role: "Developer" },
      { name: "Kevin Zhao", role: "Designer" },
    ],
  },
  {
    project: "Fitness Dashboard",
    color: "#4EC970",
    members: [
      { name: "Olivia Park", role: "Product Designer" },
      { name: "Jason Miller", role: "Frontend Developer" },
      { name: "Maya Chen", role: "UX Researcher" },
    ],
  },
];

const MEMBER_PROFILES: Record<string, ProfileUser> = {
  "Sarah Chen": { name: "Sarah Chen", role: "UX Researcher", intro: "Focused on user research and usability testing.", skills: ["User Research", "Figma", "Survey Design"], availability: "4–6h/week", completed: 3, leftEarly: 0 },
  "Marcus Liu": { name: "Marcus Liu", role: "Developer",     intro: "Full-stack developer comfortable with React and TypeScript.", skills: ["React", "TypeScript", "Node.js"], availability: "6–8h/week", completed: 5, leftEarly: 1 },
  "Anna Kim":   { name: "Anna Kim",   role: "UX Designer",   intro: "Visual designer with a focus on accessibility and design systems.", skills: ["Figma", "Motion Design", "Accessibility"], availability: "2–4h/week", completed: 2, leftEarly: 0 },
  "David Lin":  { name: "David Lin",  role: "Developer",     intro: "Frontend developer specializing in e-commerce flows.", skills: ["React", "CSS", "Figma"], availability: "4–6h/week", completed: 4, leftEarly: 0 },
  "Kevin Zhao": { name: "Kevin Zhao", role: "Designer",      intro: "UI designer with experience in brand and product design.", skills: ["Figma", "Illustration", "Brand Design"], availability: "2–4h/week", completed: 2, leftEarly: 1 },
  "Olivia Park": { name: "Olivia Park", role: "Product Designer", intro: "Designs dashboard layouts and visual systems for analytics products.", skills: ["Dashboard Design", "Figma", "UX"], availability: "4–6h/week", completed: 4, leftEarly: 0 },
  "Jason Miller": { name: "Jason Miller", role: "Frontend Developer", intro: "Builds data-rich interfaces with React and charting libraries.", skills: ["React", "Charts", "TypeScript"], availability: "6–8h/week", completed: 5, leftEarly: 0 },
  "Maya Chen": { name: "Maya Chen", role: "UX Researcher", intro: "Focuses on fitness behavior research and usability feedback.", skills: ["User Research", "Interviews", "Synthesis"], availability: "4–6h/week", completed: 3, leftEarly: 0 },
};

type Messages = Record<string, Array<{ sender: string; text: string; time: string }>>;

const CONVERSATIONS: Messages = {
  "Sarah Chen": [
    { sender: "Sarah Chen", text: "Can you review the flow?", time: "2:14 PM" },
    { sender: "You", text: "Yes, I'll check tonight.", time: "2:18 PM" },
    { sender: "Sarah Chen", text: "Thanks! I updated the wireframes.", time: "2:20 PM" },
  ],
  "Marcus Liu": [
    { sender: "Marcus Liu", text: "The prototype is ready for testing", time: "10:05 AM" },
    { sender: "You", text: "Great, I'll test it this afternoon", time: "10:12 AM" },
  ],
  "Anna Kim": [
    { sender: "You", text: "Do you need help with the research?", time: "Yesterday" },
    { sender: "Anna Kim", text: "Yes, that would be helpful", time: "Yesterday" },
  ],
  "David Lin": [
    { sender: "David Lin", text: "The checkout flow looks good", time: "Mon" },
    { sender: "You", text: "Thanks for the feedback", time: "Mon" },
  ],
  "Kevin Zhao": [
    { sender: "You", text: "When can we review the designs?", time: "Mon" },
    { sender: "Kevin Zhao", text: "Tomorrow afternoon works", time: "Mon" },
  ],
  "Olivia Park": [
    { sender: "Olivia Park", text: "Can you check the dashboard layout?", time: "9:24 AM" },
    { sender: "You", text: "Yes, I'll review it tonight.", time: "9:31 AM" },
    { sender: "Olivia Park", text: "Thanks. I updated the activity chart section too.", time: "9:35 AM" },
  ],
  "Jason Miller": [
    { sender: "Jason Miller", text: "I updated the activity chart.", time: "Yesterday" },
    { sender: "You", text: "Nice, I'll take a look after class.", time: "Yesterday" },
  ],
  "Maya Chen": [
    { sender: "Maya Chen", text: "Tomorrow afternoon works for me.", time: "Tue" },
    { sender: "You", text: "Great, let's review the dashboard flow then.", time: "Tue" },
  ],
};

export default function MessagingPage() {
  const [searchParams] = useSearchParams();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(true);
  const [profileOpen, setProfileOpen] = useState(false);
  const [profileUser, setProfileUser] = useState<ProfileUser | null>(null);
  const [selectedUser, setSelectedUser] = useState("Sarah Chen");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Messages>(CONVERSATIONS);
  const bottomRef = useRef<HTMLDivElement>(null);

  const openProfile = (name: string) => {
    const profile = MEMBER_PROFILES[name];
    if (profile) { setProfileUser(profile); setProfileOpen(true); }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedUser, messages]);

  useEffect(() => {
    const user = searchParams.get("user");
    if (user && MEMBER_PROFILES[user]) setSelectedUser(user);
  }, [searchParams]);

  const handleSend = () => {
    if (!message.trim()) return;
    setMessages(prev => ({
      ...prev,
      [selectedUser]: [
        ...(prev[selectedUser] ?? []),
        { sender: "You", text: message.trim(), time: "Just now" },
      ],
    }));
    setMessage("");
    toast("Message sent");
  };

  const currentMessages = messages[selectedUser] ?? [];
  const selectedTeam = TEAMS.find(team => team.members.some(member => member.name === selectedUser));

  return (
    <div className="flex h-screen bg-[#1E1E1E] overflow-hidden">
      <Sidebar
        activePage="messaging"
        isCollapsed={sidebarCollapsed}
        onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        onAvatarClick={() => setProfileOpen(true)}
      />

      <div className="flex-1 min-w-0 flex overflow-hidden">
        {/* Contact list */}
        <div className="w-[260px] border-r border-[#333333] bg-[#1B1B1B] flex flex-col flex-shrink-0 overflow-hidden">
          <div className="border-b border-[#333333] px-5 py-4">
            <h2 className="text-[16px] font-semibold text-[#E8E8E8]">Messages</h2>
          </div>

          <div className="flex-1 overflow-y-auto py-2">
            {TEAMS.map(team => (
              <div key={team.project}>
                <div className="px-4 py-2 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: team.color }} />
                  <span className="text-[11px] font-semibold text-[#8A8A8A] uppercase tracking-wider">{team.project}</span>
                </div>

                {team.members.map(member => {
                  const isSelected = selectedUser === member.name;
                  const lastMsg = messages[member.name]?.at(-1);
                  return (
                    <div
                      key={`${team.project}-${member.name}`}
                      className={`flex items-center gap-3 px-4 py-2.5 transition-colors duration-100 ${
                        isSelected ? "bg-[#2F2F2F]" : "hover:bg-[#2F2F2F]"
                      }`}
                    >
                      <button
                        onClick={() => openProfile(member.name)}
                        className="flex-shrink-0 hover:opacity-80 transition-opacity"
                        title="View profile"
                      >
                        <div
                          className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-semibold text-white"
                          style={{ backgroundColor: avatarBg(member.name) }}
                        >
                          {initials(member.name)}
                        </div>
                      </button>
                      <button
                        className="flex-1 min-w-0 text-left"
                        onClick={() => setSelectedUser(member.name)}
                      >
                        <div className="text-[13px] font-medium text-[#E8E8E8] truncate hover:text-white transition-colors">{member.name}</div>
                        {lastMsg && (
                          <div className="text-[12px] text-[#8A8A8A] truncate">{lastMsg.text}</div>
                        )}
                      </button>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>

        {/* Chat area */}
        <div className="flex-1 min-w-0 flex flex-col overflow-hidden">
          {/* Chat header */}
          <div className="border-b border-[#333333] bg-[#1B1B1B] px-6 py-4 flex items-center gap-3 flex-shrink-0">
            <button
              className="flex items-center gap-3 hover:opacity-80 transition-opacity"
              onClick={() => openProfile(selectedUser)}
              title="View profile"
            >
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-semibold text-white flex-shrink-0"
                style={{ backgroundColor: avatarBg(selectedUser) }}
              >
                {initials(selectedUser)}
              </div>
	              <div className="text-left">
	                <div className="text-[14px] font-semibold text-[#E8E8E8] hover:text-white transition-colors">{selectedUser}</div>
	                {selectedTeam && (
	                  <div className="text-[11px] text-[#8A8A8A] mt-0.5">{selectedTeam.project}</div>
	                )}
	              </div>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto bg-[#202020] px-6 py-5 space-y-4">
            {currentMessages.map((msg, idx) => {
              const isYou = msg.sender === "You";
              return (
                <div key={idx} className={`flex items-end gap-2.5 ${isYou ? "flex-row-reverse" : ""}`}>
                  {!isYou && (
                    <button
                      className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-[10px] font-semibold text-white mb-px hover:opacity-75 transition-opacity"
                      style={{ backgroundColor: avatarBg(msg.sender) }}
                      onClick={() => openProfile(msg.sender)}
                      title="View profile"
                    >
                      {initials(msg.sender)}
                    </button>
                  )}
                  <div className={`max-w-[420px] ${isYou ? "items-end" : "items-start"} flex flex-col`}>
                    <div
                      className={`px-3.5 py-2.5 rounded-[12px] text-[13px] leading-relaxed ${
                        isYou
                          ? "bg-[#6C7CFF] text-white rounded-br-[4px]"
                          : "bg-[#2B2B2B] border border-[#3A3A3A] text-[#E8E8E8] rounded-bl-[4px]"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <div className="text-[11px] text-[#8A8A8A] mt-1 px-1">{msg.time}</div>
                  </div>
                </div>
              );
            })}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="border-t border-[#333333] bg-[#1B1B1B] px-6 py-4 flex-shrink-0">
            <div className="flex items-center gap-2.5">
              <input
                type="text"
                value={message}
                onChange={e => setMessage(e.target.value)}
                onKeyDown={e => e.key === "Enter" && handleSend()}
                placeholder={`Message ${selectedUser}...`}
                className="flex-1 h-10 bg-[#252526] border border-[#3A3A3A] rounded-[10px] px-4 text-[13px] text-[#E8E8E8] placeholder:text-[#8A8A8A] outline-none focus:border-[#6C7CFF] transition-colors"
              />
              <button
                onClick={handleSend}
                disabled={!message.trim()}
                className="w-10 h-10 rounded-[10px] bg-[#6C7CFF] flex items-center justify-center text-white hover:bg-[#7D8AFF] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
              >
                <Send size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} user={profileUser ?? undefined} />
    </div>
  );
}
