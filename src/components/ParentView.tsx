import { useState } from 'react';
import { MessageCircle, FileText, History, Calendar } from 'lucide-react';
import { ChildCard } from './ChildCard';
import { ApprovedPersons } from './ApprovedPersons';
import { PickupRequest } from './PickupRequest';
import { ChatModal } from './ChatModal';
import { IncidentList } from './IncidentList';
import { PickupLogView } from './PickupLogView';
import { DailyInfoView } from './DailyInfoView';
import { mockChildren, mockApprovedPersons, mockIncidents, mockPickupLogs, mockDailyInfo } from '../data/mockData';

export function ParentView() {
  const [selectedChildId, setSelectedChildId] = useState<string | null>(null);
  const [showPickupRequest, setShowPickupRequest] = useState(false);
  const [showChat, setShowChat] = useState(false);

  // For demo: parent only sees their own children
  const myChildren = mockChildren.filter(child => child.id === 'child-1');

  const selectedChild = myChildren.find(child => child.id === selectedChildId);
  
  // NEW: Filter incidents and logs for selected child
  const childIncidents = selectedChild ? mockIncidents.filter(i => i.childId === selectedChild.id) : [];
  const childPickupLogs = selectedChild ? mockPickupLogs.filter(l => l.childId === selectedChild.id) : [];
  const childGroup = selectedChild?.group;

  return (
    <div className="max-w-4xl mx-auto px-4 pt-6 pb-24 sm:px-6 lg:px-8">
      {/* Steps Indicator */}
      <section className="mb-8">
        <div className="flex items-center justify-center gap-8">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-2">
              <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-sm text-green-600">1. Velg</span>
          </div>
          <div className="w-12 h-0.5 bg-gray-200"></div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <span className="text-sm text-gray-500">2. Send</span>
          </div>
          <div className="w-12 h-0.5 bg-gray-200"></div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
              <svg className="w-8 h-8 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span className="text-sm text-gray-500">3. Hent</span>
          </div>
        </div>
      </section>

      {/* My Children */}
      <section className="mb-8">
        <h2 className="mb-6 text-gray-900">Mitt barn</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {myChildren.map(child => (
            <ChildCard
              key={child.id}
              child={child}
              onSelect={() => setSelectedChildId(child.id)}
              isSelected={selectedChildId === child.id}
              viewType="parent"
            />
          ))}
        </div>
      </section>

      {/* Selected Child Details */}
      {selectedChild && (
        <>
          {/* Child Profile Card */}
          <section className="mb-8">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border border-purple-200 p-8">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center text-white text-5xl shadow-lg">
                    {selectedChild.name.charAt(0)}
                  </div>
                  {selectedChild.status === 'present' && (
                    <div className="absolute bottom-0 right-0 w-10 h-10 bg-green-600 rounded-full flex items-center justify-center border-4 border-white shadow-md">
                      <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                </div>
                <h2 className="text-2xl text-gray-900 mb-3">{selectedChild.name}</h2>
                <span className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full mb-4">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  I barnehagen
                </span>
                {selectedChild.checkInTime && (
                  <p className="text-sm text-gray-600">Krysset inn kl. {selectedChild.checkInTime}</p>
                )}
              </div>
            </div>
          </section>

          {/* NEW: Daily Info Section */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-purple-600" />
              <h3 className="text-gray-900">I dag i barnehagen</h3>
            </div>
            <DailyInfoView info={mockDailyInfo} targetGroup={childGroup} />
          </section>

          {/* NEW: Recent Incidents */}
          {childIncidents.length > 0 && (
            <section className="mb-8">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="w-5 h-5 text-red-600" />
                <h3 className="text-gray-900">Hendelser</h3>
              </div>
              <IncidentList incidents={childIncidents} viewType="parent" />
            </section>
          )}

          {/* Estimated Arrival */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="text-gray-900 mb-4">Anslått ankomst</h3>
              <select className="w-full h-12 px-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow">
                <option>Om 15 minutter</option>
                <option>Om 30 minutter</option>
                <option>Om 1 time</option>
                <option>Om 2 timer</option>
              </select>
            </div>
          </section>

          {/* Who's Picking Up */}
          <section className="mb-8">
            <h3 className="mb-4 text-gray-900">Hvem henter?</h3>
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="grid grid-cols-2 gap-3 mb-6">
                {mockApprovedPersons
                  .filter(p => p.childId === selectedChild.id && p.status === 'approved')
                  .slice(0, 4)
                  .map(person => (
                    <div 
                      key={person.id} 
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-purple-50 hover:border-purple-200 border border-gray-100 transition-colors cursor-pointer"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-sm">
                        {person.name.charAt(0)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-gray-900 truncate font-medium">{person.name}</p>
                        <p className="text-xs text-gray-500">{person.relation}</p>
                      </div>
                    </div>
                  ))}
              </div>
              <button
                onClick={() => setShowPickupRequest(true)}
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 active:from-purple-800 active:to-purple-900 text-white rounded-xl transition-all shadow-lg shadow-purple-200 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                <span>Hente barn</span>
              </button>
              <p className="text-center text-sm text-gray-500 mt-3">Henting godkjennes automatisk</p>
            </div>
          </section>

          {/* Pickup Settings */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-gray-900">Godkjenning av henting</h3>
                  <p className="text-sm text-gray-600">Velg hvordan dine hentemeldinger skal håndteres</p>
                </div>
              </div>

              <div className="p-6 bg-gray-50 rounded-xl mb-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-gray-900 mb-1">Krever godkjenning fra personalet</h4>
                    <p className="text-sm text-gray-600">Hentemeldinger godkjennes automatisk - raskere og mer fleksibelt</p>
                  </div>
                  <button className="w-14 h-8 bg-gray-300 rounded-full relative transition-colors">
                    <div className="w-6 h-6 bg-white rounded-full absolute top-1 left-1 shadow-sm transition-transform"></div>
                  </button>
                </div>
              </div>

              <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
                    <svg className="w-5 h-5 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-gray-900 mb-2">Sikkerhet</h4>
                    <p className="text-sm text-gray-700 leading-relaxed">
                      Personalet verifiserer alltid identitet fysisk ved henting - uavhengig av denne innstillingen.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Activity Timeline */}
          <section className="mb-8">
            <div className="bg-gradient-to-br from-green-50 to-purple-50 rounded-2xl border border-gray-200 p-6">
              <div className="flex items-center gap-3 mb-6">
                <svg className="w-6 h-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-gray-900">Oppmøte i dag</h3>
              </div>

              <div className="space-y-4">
                {/* Check-in Event */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 mb-1">Krysset inn</p>
                    <p className="text-sm text-gray-600">00:24</p>
                  </div>
                </div>

                {/* Current Status */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-purple-600 mb-1">I barnehagen nå</p>
                    <p className="text-sm text-gray-600">Venter på uthenting</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Chat Button */}
          <section className="mb-8">
            <button
              onClick={() => setShowChat(true)}
              className="w-full h-14 bg-white hover:bg-gray-50 rounded-2xl border border-gray-200 transition-colors flex items-center justify-center gap-3"
            >
              <MessageCircle className="w-5 h-5 text-gray-600" />
              <span className="text-gray-900">Chat med barnehagen</span>
            </button>
          </section>

          {/* Approved Persons */}
          <section className="mb-8">
            <ApprovedPersons childId={selectedChild.id} />
          </section>

          {/* NEW: Pickup History Log */}
          <section className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <History className="w-5 h-5 text-gray-600" />
              <h3 className="text-gray-900">Hentingshistorikk</h3>
            </div>
            <PickupLogView logs={childPickupLogs} />
          </section>

          {/* Attendance Today */}
          <section className="mb-8">
            <div className="bg-white rounded-2xl border border-gray-200 p-6">
              <h3 className="mb-6 text-gray-900">Oppmøte i dag</h3>
              
              {selectedChild.checkInTime ? (
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                    <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-green-900 mb-1">Krysset inn</p>
                      <p className="text-sm text-green-700">Kl. {selectedChild.checkInTime}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-blue-900 mb-1">I barnehagen nå</p>
                      <p className="text-sm text-blue-700">Venter på uthenting</p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl border border-gray-200">
                  <div className="w-12 h-12 bg-gray-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-900">Ikke krysset inn ennå i dag</p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </>
      )}

      {/* Pickup Request Modal */}
      {showPickupRequest && selectedChild && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl shadow-xl max-w-md w-full p-8">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-xl text-gray-900 mb-2">Hentebeskjed sendt!</h3>
              <p className="text-gray-600 leading-relaxed">
                Barnehagen er varslet om at {selectedChild.name} skal hentes.
                Personalet vil godkjenne hentingen.
              </p>
            </div>
            <button
              onClick={() => setShowPickupRequest(false)}
              className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-xl transition-all shadow-sm"
            >
              Lukk
            </button>
          </div>
        </div>
      )}

      {/* Chat Modal */}
      {showChat && selectedChild && (
        <ChatModal
          childName={selectedChild.name}
          onClose={() => setShowChat(false)}
        />
      )}
    </div>
  );
}