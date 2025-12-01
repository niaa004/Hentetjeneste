import { useState, useMemo } from 'react';
import { Users, Clock, CheckCircle, UserCheck, Plus, FileText, Calendar } from 'lucide-react';
import { ChildCard } from './ChildCard';
import { IncidentReport } from './IncidentReport';
import { DailyInfoView } from './DailyInfoView';
import { mockChildren, mockDailyInfo } from '../data/mockData';

type Tab = 'all' | 'pending' | 'approved' | 'picked-up';

export function StaffView() {
  const [activeTab, setActiveTab] = useState<Tab>('all');
  const [selectedChildId, setSelectedChildId] = useState<string | null>(null);
  const [showMenu, setShowMenu] = useState(false);
  const [showIncidentReport, setShowIncidentReport] = useState(false);
  const [showDailyInfo, setShowDailyInfo] = useState(false);

  const selectedChild = mockChildren.find(c => c.id === selectedChildId);

  const stats = useMemo(() => {
    const total = mockChildren.length;
    const present = mockChildren.filter(c => c.status === 'present').length;
    const pending = mockChildren.filter(c => c.pickupStatus === 'pending').length;
    const approved = mockChildren.filter(c => c.pickupStatus === 'approved').length;
    
    return { total, present, pending, approved };
  }, []);

  const filteredChildren = useMemo(() => {
    switch (activeTab) {
      case 'pending':
        return mockChildren.filter(c => c.pickupStatus === 'pending');
      case 'approved':
        return mockChildren.filter(c => c.pickupStatus === 'approved');
      case 'picked-up':
        return mockChildren.filter(c => c.status === 'home');
      default:
        return mockChildren;
    }
  }, [activeTab]);

  const handleIncidentSubmit = (incident: any) => {
    // Handle incident submission
    console.log('Incident reported:', incident);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 pt-6 pb-24 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl text-gray-900">Krysselista</h1>
            <p className="text-sm text-gray-600">Ansatt</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          {/* NEW: Quick Actions */}
          <button 
            onClick={() => setShowIncidentReport(true)}
            className="h-10 px-4 bg-red-50 hover:bg-red-100 text-red-700 rounded-xl border border-red-200 transition-colors flex items-center gap-2"
            title="Rapporter hendelse"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">Hendelse</span>
          </button>
          <button 
            onClick={() => setShowDailyInfo(!showDailyInfo)}
            className="h-10 px-4 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-xl border border-purple-200 transition-colors flex items-center gap-2"
            title="Daglig info"
          >
            <Calendar className="w-4 h-4" />
            <span className="hidden sm:inline">Daglig info</span>
          </button>
          <button className="w-10 h-10 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 flex items-center justify-center transition-colors">
            <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
      </div>

      {/* NEW: Daily Info Section (expandable) */}
      {showDailyInfo && (
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Calendar className="w-5 h-5 text-purple-600" />
            <h2 className="text-gray-900">Daglig info</h2>
          </div>
          <DailyInfoView info={mockDailyInfo} />
        </div>
      )}

      {/* Dashboard Stats */}
      <div className="grid gap-4 sm:grid-cols-3 mb-8">
        <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
          <p className="text-5xl text-blue-600 mb-2">{stats.total}</p>
          <p className="text-sm text-gray-600">Barn totalt</p>
        </div>

        <div className="bg-orange-50 rounded-2xl border border-orange-200 p-8 text-center">
          <p className="text-5xl text-orange-600 mb-2">{stats.pending}</p>
          <p className="text-sm text-gray-600">Ventende</p>
        </div>

        <div className="bg-green-50 rounded-2xl border border-green-200 p-8 text-center">
          <p className="text-5xl text-green-600 mb-2">{stats.approved}</p>
          <p className="text-sm text-gray-600">Godkjente i dag</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white rounded-t-2xl border border-gray-200 mb-0">
        <div className="flex overflow-x-auto">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-6 py-4 text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'all'
                ? 'text-blue-600 border-blue-600'
                : 'text-gray-600 hover:text-gray-900 border-transparent'
            }`}
          >
            Inn/Ut
          </button>
          <button
            onClick={() => setActiveTab('pending')}
            className={`px-6 py-4 text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'pending'
                ? 'text-blue-600 border-blue-600'
                : 'text-gray-600 hover:text-gray-900 border-transparent'
            }`}
          >
            Ventende
          </button>
          <button
            onClick={() => setActiveTab('approved')}
            className={`px-6 py-4 text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'approved'
                ? 'text-blue-600 border-blue-600'
                : 'text-gray-600 hover:text-gray-900 border-transparent'
            }`}
          >
            Godkjente
          </button>
          <button
            onClick={() => setActiveTab('picked-up')}
            className={`px-6 py-4 text-sm whitespace-nowrap border-b-2 transition-colors ${
              activeTab === 'picked-up'
                ? 'text-blue-600 border-blue-600'
                : 'text-gray-600 hover:text-gray-900 border-transparent'
            }`}
          >
            Hentet
          </button>
        </div>
      </div>

      {/* Overview */}
      {activeTab === 'all' && (
        <div className="bg-gradient-to-br from-blue-50 to-white border-x border-gray-200 p-8">
          <div className="flex items-center gap-3 mb-4">
            <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h3 className="text-gray-900">Oversikt</h3>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-6xl text-blue-600">{stats.present}</p>
            <div>
              <p className="text-gray-900">av {stats.total} barn til stede</p>
              <p className="text-sm text-gray-500 mt-1">Oppdatert nå nettopp</p>
            </div>
            <div className="ml-auto">
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Content */}
      <div className="bg-white rounded-b-2xl border border-gray-200 border-t-0">
        <div className="p-6">
          <div className="mb-6">
            <h3 className="text-gray-900">
              {activeTab === 'all' && 'Alle barn'}
              {activeTab === 'pending' && 'Ventende hentinger'}
              {activeTab === 'approved' && 'Godkjente hentinger'}
              {activeTab === 'picked-up' && 'Hentet i dag'}
            </h3>
          </div>

          {/* Children List - Grid Layout for "all" tab */}
          {activeTab === 'all' ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredChildren.map(child => (
                <div
                  key={child.id}
                  className="flex items-center justify-between p-4 bg-white hover:bg-blue-50 rounded-xl border border-gray-200 hover:border-blue-200 transition-all"
                >
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white flex-shrink-0 shadow-sm">
                      {child.name.charAt(0)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-gray-900 mb-0.5 truncate">{child.name}</p>
                      {child.checkInTime && (
                        <p className="text-xs text-gray-500">Inn: {child.checkInTime}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-shrink-0">
                    {child.status === 'present' ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                        <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                        Til stede
                      </span>
                    ) : (
                      <button
                        onClick={() => setSelectedChildId(child.id)}
                        className="h-9 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-sm text-sm"
                      >
                        Kryss inn
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Other tabs keep list layout */
            <div className="space-y-2">
              {filteredChildren.map(child => (
                <div
                  key={child.id}
                  className="flex items-center justify-between p-5 bg-white hover:bg-gray-50 rounded-xl border border-gray-200 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl shadow-sm">
                      {child.name.charAt(0)}
                    </div>
                    <div>
                      <p className="text-gray-900 mb-1">{child.name}</p>
                      {child.checkInTime && (
                        <p className="text-sm text-gray-500">Inn: {child.checkInTime}</p>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    {child.status === 'present' ? (
                      <>
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-green-100 text-green-700 rounded-full">
                          Til stede
                        </span>
                        <button className="h-11 px-5 bg-white hover:bg-gray-50 text-gray-700 rounded-xl border border-gray-200 transition-colors flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
                          </svg>
                          Kryss ut
                        </button>
                      </>
                    ) : (
                      <button
                        onClick={() => setSelectedChildId(child.id)}
                        className="h-11 px-5 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl transition-colors shadow-sm flex items-center gap-2"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                        Kryss inn
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {filteredChildren.length === 0 && (
            <div className="text-center py-12">
              <UserCheck className="w-12 h-12 text-gray-300 mx-auto mb-3" />
              <p className="text-gray-500">Ingen barn i denne kategorien</p>
            </div>
          )}
        </div>
      </div>

      {/* NEW: Incident Report Modal */}
      {showIncidentReport && selectedChild && (
        <IncidentReport
          childId={selectedChild.id}
          childName={selectedChild.name}
          onClose={() => setShowIncidentReport(false)}
          onSubmit={handleIncidentSubmit}
        />
      )}
    </div>
  );
}