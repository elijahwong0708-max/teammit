import { Compass, FolderOpen, CalendarDays, MessageSquare, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

interface SidebarProps {
  activePage?: string;
  isCollapsed: boolean;
  onToggle: () => void;
  onAvatarClick: () => void;
}

const NAV_ITEMS = [
  { id: "explore", label: "Explore", href: "/", Icon: Compass },
  { id: "my-projects", label: "My Projects", href: "/my-projects", Icon: FolderOpen },
  { id: "my-schedule", label: "My Schedule", href: "/my-schedule", Icon: CalendarDays },
  { id: "messaging", label: "Messaging", href: "/messaging", Icon: MessageSquare },
];

export default function Sidebar({ activePage, isCollapsed, onToggle, onAvatarClick }: SidebarProps) {
  return (
    <aside
      className="h-screen border-r border-[#333333] bg-[#181818] flex-shrink-0 flex flex-col overflow-hidden transition-[width] duration-200 ease-out"
      style={{ width: isCollapsed ? '72px' : '256px' }}
    >
      {/* Logo + collapse */}
      <div className="flex items-center justify-between h-16 px-3 border-b border-[#333333] flex-shrink-0">
        <span
          className={`text-[15px] font-semibold text-[#E8E8E8] tracking-tight select-none whitespace-nowrap transition-all duration-150 ${
            isCollapsed ? 'opacity-0 -translate-x-2 w-0 overflow-hidden' : 'opacity-100 translate-x-0'
          }`}
        >
          Teammit
        </span>
        <button
          onClick={onToggle}
          className={`w-10 h-10 flex items-center justify-center rounded-md text-[#8A8A8A] hover:text-[#E8E8E8] hover:bg-[#2F2F2F] transition-colors duration-150 flex-shrink-0 ${isCollapsed ? 'mx-auto' : ''}`}
        >
          {isCollapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>

      {/* User */}
      <div className="px-3 py-3 border-b border-[#333333] flex-shrink-0">
        <button
          onClick={onAvatarClick}
          className={`w-full h-12 flex items-center rounded-md hover:bg-[#2F2F2F] transition-colors duration-150 ${
            isCollapsed ? 'justify-center px-0' : 'gap-3 px-2.5'
          }`}
        >
          <div className="w-8 h-8 rounded-full bg-[#6C7CFF] flex items-center justify-center flex-shrink-0 text-[10px] font-semibold text-white leading-none transition-shadow hover:ring-2 hover:ring-[#6C7CFF]/40">
            EW
          </div>
          <span
            className={`text-[13px] text-[#E8E8E8] truncate text-left whitespace-nowrap transition-all duration-150 ${
              isCollapsed ? 'opacity-0 -translate-x-2 w-0 overflow-hidden' : 'opacity-100 translate-x-0'
            }`}
          >
            Elijah Wang
          </span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-3 space-y-1.5">
        {NAV_ITEMS.map(({ id, label, href, Icon }) => {
          const isActive = activePage === id;
          return (
            <a
              key={id}
              href={href}
              title={isCollapsed ? label : undefined}
              className={`flex h-12 items-center rounded-md transition-colors duration-150 relative ${
                isCollapsed ? 'justify-center px-0' : 'gap-3 px-3'
              } ${
                isActive
                  ? 'bg-[#2F2F2F] text-[#E8E8E8]'
                  : 'text-[#B8B8B8] hover:bg-[#2B2B2B] hover:text-[#E8E8E8]'
              }`}
            >
              {isActive && (
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-0.5 bg-[#6C7CFF] rounded-r-full transition-all duration-150 ${
                  isCollapsed ? 'h-5' : 'h-6'
                }`} />
              )}
              <Icon
                size={18}
                className={`flex-shrink-0 transition-colors duration-150 ${isActive ? 'text-[#6C7CFF]' : ''}`}
              />
              <span
                className={`text-[13px] whitespace-nowrap transition-all duration-150 ${
                  isCollapsed ? 'opacity-0 -translate-x-2 w-0 overflow-hidden' : 'opacity-100 translate-x-0'
                }`}
              >
                {label}
              </span>
            </a>
          );
        })}
      </nav>

      {/* New project */}
      <div className="px-3 py-3 border-t border-[#333333] flex-shrink-0">
        <a
          href="/create-project/0"
          title={isCollapsed ? 'New Project' : undefined}
          className={`flex items-center h-12 rounded-md border border-[#3A3A3A] text-[#B8B8B8] hover:text-[#E8E8E8] hover:border-[#6C7CFF] hover:bg-[#2F2F2F] transition-all duration-150 text-[13px] ${
            isCollapsed ? 'justify-center px-0' : 'gap-3 px-3'
          }`}
        >
          <Plus size={18} />
          <span
            className={`whitespace-nowrap transition-all duration-150 ${
              isCollapsed ? 'opacity-0 -translate-x-2 w-0 overflow-hidden' : 'opacity-100 translate-x-0'
            }`}
          >
            New Project
          </span>
        </a>
      </div>
    </aside>
  );
}
