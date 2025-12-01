import { Home, Bell, MessageCircle, User, CheckSquare, BarChart3 } from 'lucide-react';

interface BottomNavigationProps {
  role: 'parent' | 'staff';
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export function BottomNavigation({ role, activeTab, onTabChange }: BottomNavigationProps) {
  const parentTabs = [
    { id: 'home', label: 'Hjem', icon: Home },
    { id: 'notifications', label: 'Varsler', icon: Bell },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'profile', label: 'Profil', icon: User },
  ];

  const staffTabs = [
    { id: 'checklist', label: 'Krysselista', icon: CheckSquare },
    { id: 'stats', label: 'Statistikk', icon: BarChart3 },
    { id: 'chat', label: 'Chat', icon: MessageCircle },
    { id: 'profile', label: 'Profil', icon: User },
  ];

  const tabs = role === 'parent' ? parentTabs : staffTabs;

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 safe-area-bottom z-50">
      <div className="max-w-md mx-auto px-2">
        <div className="flex items-center justify-around h-16">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => onTabChange(tab.id)}
                className={`flex flex-col items-center justify-center gap-1 flex-1 h-full transition-colors ${
                  isActive
                    ? role === 'parent'
                      ? 'text-purple-600'
                      : 'text-blue-600'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className={`w-6 h-6 ${isActive ? 'stroke-[2.5]' : 'stroke-2'}`} />
                <span className={`text-xs ${isActive ? 'font-medium' : ''}`}>
                  {tab.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
