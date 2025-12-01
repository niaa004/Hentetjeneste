import { useState } from 'react';
import { LoginScreen } from './components/LoginScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { ParentView } from './components/ParentView';
import { StaffView } from './components/StaffView';
import { ScreenOverview } from './components/ScreenOverview';
import { BottomNavigation } from './components/BottomNavigation';
import { NotificationsTab } from './components/NotificationsTab';
import { ProfileTab } from './components/ProfileTab';
import { ChatModal } from './components/ChatModal';
import { InstallPWA } from './components/InstallPWA';
import { Layout } from 'lucide-react';

type UserRole = 'parent' | 'staff';
type ViewMode = 'app' | 'overview';
type AppState = 'login' | 'onboarding' | 'main';

export default function App() {
  const [currentRole, setCurrentRole] = useState<UserRole>('parent');
  const [viewMode, setViewMode] = useState<ViewMode>('overview');
  const [appState, setAppState] = useState<AppState>('login');
  const [activeTab, setActiveTab] = useState<string>('home');
  const [showChat, setShowChat] = useState(false);

  const handleLogin = () => {
    setAppState('onboarding');
  };

  const handleLoadDemo = () => {
    setAppState('main');
  };

  const handleLogout = () => {
    setAppState('login');
  };

  // Show overview mode
  if (viewMode === 'overview') {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white border-b border-gray-200 sticky top-0 z-10">
          <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <h1 className="text-gray-900">Krysselista</h1>
                  <p className="text-sm text-gray-500">Skjermoversikt</p>
                </div>
              </div>
              
              <button
                onClick={() => setViewMode('app')}
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
              >
                <Layout className="w-4 h-4" />
                <span className="text-sm">Åpne app</span>
              </button>
            </div>
          </div>
        </header>
        <main>
          <ScreenOverview />
        </main>
      </div>
    );
  }

  // Show login screen
  if (appState === 'login') {
    return <LoginScreen onLogin={handleLogin} />;
  }

  // Show onboarding screen
  if (appState === 'onboarding') {
    return <OnboardingScreen onLoadDemo={handleLoadDemo} onLogout={handleLogout} />;
  }

  // Determine active tab label based on role
  const getActiveTabLabel = () => {
    if (currentRole === 'parent') {
      if (activeTab === 'home') return 'home';
      if (activeTab === 'checklist') return 'home'; // Parent doesn't have checklist
      return activeTab;
    } else {
      if (activeTab === 'home') return 'checklist'; // Staff sees checklist instead
      if (activeTab === 'stats') return 'stats';
      return activeTab;
    }
  };

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    if (tab === 'chat') {
      setShowChat(true);
    } else {
      setShowChat(false);
    }
  };

  const renderContent = () => {
    const currentTab = getActiveTabLabel();
    
    if (currentTab === 'notifications') {
      return <NotificationsTab role={currentRole} />;
    }
    if (currentTab === 'profile') {
      return <ProfileTab role={currentRole} onRoleToggle={() => setCurrentRole(currentRole === 'parent' ? 'staff' : 'parent')} />;
    }
    if (currentTab === 'home') {
      return <ParentView />;
    }
    if (currentTab === 'checklist' || currentTab === 'stats') {
      return <StaffView />;
    }
    
    return <ParentView />;
  };

  // Show main app
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Only show on overview mode button */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${
                currentRole === 'parent' 
                  ? 'bg-gradient-to-br from-purple-500 to-purple-600' 
                  : 'bg-gradient-to-br from-blue-500 to-blue-600'
              } rounded-xl flex items-center justify-center shadow-sm`}>
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <div>
                <h1 className="text-gray-900">Hentetjeneste</h1>
                <p className="text-sm text-gray-500">
                  {currentRole === 'parent' ? 'Forelder-modus' : 'Ansatt-modus'}
                </p>
              </div>
            </div>
            
            <button
              onClick={() => setViewMode('overview')}
              className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
            >
              <Layout className="w-4 h-4 text-gray-700" />
              <span className="text-sm text-gray-700">Oversikt</span>
            </button>
          </div>
        </div>
      </header>

      <main className="bg-gray-50">
        {renderContent()}
      </main>

      <BottomNavigation 
        role={currentRole}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      />

      {showChat && (
        <ChatModal
          childName="Emma Nordmann"
          onClose={() => {
            setShowChat(false);
            setActiveTab('home');
          }}
        />
      )}

      {/* PWA Install Banner */}
      <InstallPWA />
    </div>
  );
}