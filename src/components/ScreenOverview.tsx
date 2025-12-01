import { Users, UserCheck, Clock, CheckCircle, Send, Plus, MessageCircle } from 'lucide-react';

export function ScreenOverview() {
  return (
    <div className="max-w-[2000px] mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="mb-8 text-center">
        <h2 className="text-gray-900 mb-2">Design Sprint - Krysselista</h2>
        <p className="text-gray-600">Komplett skjermoversikt - iPhone 16 format</p>
        <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-sm text-gray-600">12 interaktive skjermer</span>
        </div>
      </div>

      {/* Screens Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        
        {/* 1. Login */}
        <ScreenCard title="Login" category="Autentisering">
          <div className="flex-1 flex flex-col bg-white">
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl text-gray-900 mb-1">Krysselista</h3>
              <p className="text-xs text-gray-600 mb-6 text-center">Sikker og enkel henting fra barnehagen</p>
              
              <div className="w-full max-w-xs bg-gray-50 rounded-2xl border border-gray-200 p-5">
                <div className="flex mb-5 bg-white rounded-xl p-1 border border-gray-200">
                  <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-xs transition-all">
                    Logg inn
                  </button>
                  <button className="flex-1 py-2 text-gray-600 rounded-lg text-xs">
                    Registrer
                  </button>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <input 
                      type="email" 
                      placeholder="E-post" 
                      className="w-full h-10 bg-white rounded-xl border border-gray-200 px-3 text-xs"
                      disabled
                    />
                  </div>
                  <div>
                    <input 
                      type="password" 
                      placeholder="Passord" 
                      className="w-full h-10 bg-white rounded-xl border border-gray-200 px-3 text-xs"
                      disabled
                    />
                  </div>
                  <button className="w-full h-10 bg-blue-600 text-white rounded-xl text-xs shadow-sm mt-4">
                    Logg inn
                  </button>
                  <div className="text-center pt-3">
                    <a href="#" className="text-xs text-blue-600">Glemt passord?</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScreenCard>

        {/* 2. Registrer */}
        <ScreenCard title="Registrer" category="Autentisering">
          <div className="flex-1 flex flex-col bg-white">
            <div className="flex-1 flex flex-col items-center justify-center p-6 overflow-y-auto">
              <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
              <h3 className="text-xl text-gray-900 mb-1">Krysselista</h3>
              <p className="text-xs text-gray-600 mb-6 text-center">Sikker og enkel henting fra barnehagen</p>
              
              <div className="w-full max-w-xs bg-gray-50 rounded-2xl border border-gray-200 p-5">
                <div className="flex mb-5 bg-white rounded-xl p-1 border border-gray-200">
                  <button className="flex-1 py-2 text-gray-600 rounded-lg text-xs">
                    Logg inn
                  </button>
                  <button className="flex-1 py-2 bg-blue-600 text-white rounded-lg text-xs transition-all">
                    Registrer
                  </button>
                </div>
                
                <div className="space-y-2.5">
                  <div>
                    <input 
                      type="text" 
                      placeholder="Fullt navn" 
                      className="w-full h-9 bg-white rounded-xl border border-gray-200 px-3 text-xs"
                      disabled
                    />
                  </div>
                  <div>
                    <input 
                      type="email" 
                      placeholder="E-post" 
                      className="w-full h-9 bg-white rounded-xl border border-gray-200 px-3 text-xs"
                      disabled
                    />
                  </div>
                  <div>
                    <input 
                      type="tel" 
                      placeholder="Telefon" 
                      className="w-full h-9 bg-white rounded-xl border border-gray-200 px-3 text-xs"
                      disabled
                    />
                  </div>
                  <div>
                    <input 
                      type="password" 
                      placeholder="Passord" 
                      className="w-full h-9 bg-white rounded-xl border border-gray-200 px-3 text-xs"
                      disabled
                    />
                  </div>
                  <button className="w-full h-9 bg-blue-600 text-white rounded-xl text-xs shadow-sm mt-4">
                    Opprett konto
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScreenCard>

        {/* 3. Onboarding - Ingen barn */}
        <ScreenCard title="Onboarding - Ingen barn" category="Autentisering">
          <div className="flex-1 flex flex-col bg-gray-50">
            <div className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-sm text-gray-900">Krysselista</div>
                  <div className="text-xs text-gray-500">Forelder</div>
                </div>
              </div>
              <button className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <svg className="w-4 h-4 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
              </button>
            </div>
            
            <div className="flex-1 flex flex-col items-center justify-center p-6">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-base text-gray-900 mb-2">Ingen barn registrert</h3>
              <p className="text-xs text-gray-500 text-center mb-6">Kom i gang ved å legge til ditt barn</p>
              
              <div className="w-full max-w-xs bg-white rounded-2xl border border-gray-200 p-5 mb-5">
                <h4 className="text-sm text-gray-900 mb-4">Kom i gang</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 text-xs text-blue-600">1</div>
                    <div className="flex-1 pt-1">
                      <div className="text-xs text-gray-900 mb-0.5">Kontakt barnehagen</div>
                      <div className="text-xs text-gray-500">Be om tilgang til systemet</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 text-xs text-blue-600">2</div>
                    <div className="flex-1 pt-1">
                      <div className="text-xs text-gray-900 mb-0.5">Få konto opprettet</div>
                      <div className="text-xs text-gray-500">Personalet kobler deg til ditt barn</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-7 h-7 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0 text-xs text-blue-600">3</div>
                    <div className="flex-1 pt-1">
                      <div className="text-xs text-gray-900 mb-0.5">Start å bruke appen</div>
                      <div className="text-xs text-gray-500">Se oppmøte og godkjenn hentere</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <button className="w-full max-w-xs h-10 bg-blue-600 text-white rounded-lg text-sm shadow-sm flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                Last inn demodata for testing
              </button>
            </div>
          </div>
        </ScreenCard>

        {/* 4. Forelder: Hjem (med barn) */}
        <ScreenCard title="Forelder: Hjem" category="Forelder">
          <div className="flex-1 flex flex-col p-4 bg-gray-50">
            <div className="mb-4">
              <h3 className="text-base text-gray-900 mb-1">Mitt barn</h3>
              <p className="text-xs text-gray-500">Klikk på kortet for mer informasjon</p>
            </div>
            <div className="bg-white rounded-xl border-2 border-blue-600 shadow-md p-4 mb-3 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-3 mb-3">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white text-xl shadow-md">
                  E
                </div>
                <div className="flex-1 pt-1">
                  <div className="text-base text-gray-900 mb-0.5">Emma Hansen</div>
                  <div className="text-xs text-gray-500">Blåklokka avdeling</div>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-100 text-green-700 rounded-full text-xs mb-3">
                <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
                I barnehagen
              </div>
              <div className="text-xs text-gray-600 space-y-1.5 pt-2 border-t border-gray-100">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                  <span>Krysset inn: 08:24</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-center">
              <p className="text-xs text-blue-800">👆 Klikk på barnet for å se flere detaljer</p>
            </div>
          </div>
        </ScreenCard>

        {/* 5. Forelder: Hente barn */}
        <ScreenCard title="Hente barn" category="Forelder">
          <div className="flex-1 flex flex-col p-4 bg-gray-50 overflow-y-auto">
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full flex items-center justify-center text-white text-sm">
                  E
                </div>
                <div>
                  <div className="text-sm text-gray-900">Emma Hansen</div>
                  <div className="text-xs text-green-600">I barnehagen</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 space-y-4">
              <div>
                <label className="block text-xs text-gray-700 mb-2">Anslått ankomst</label>
                <select className="w-full h-10 bg-white border border-gray-300 rounded-lg px-3 text-sm appearance-none">
                  <option>Om 15 minutter</option>
                </select>
              </div>
              <div>
                <label className="block text-xs text-gray-700 mb-2">Hvem henter?</label>
                <div className="grid grid-cols-3 gap-2">
                  <button className="p-2 bg-blue-50 border-2 border-blue-600 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-1"></div>
                    <div className="text-xs text-gray-900">Martin</div>
                    <div className="text-xs text-gray-500">Far</div>
                  </button>
                  <button className="p-2 bg-gray-50 border border-gray-200 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-pink-400 to-red-500 rounded-full mx-auto mb-1"></div>
                    <div className="text-xs text-gray-900">Mormor</div>
                    <div className="text-xs text-gray-500">Best.</div>
                  </button>
                  <button className="p-2 bg-gray-50 border border-gray-200 rounded-lg">
                    <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-1"></div>
                    <div className="text-xs text-gray-900">Tante</div>
                    <div className="text-xs text-gray-500">Tante</div>
                  </button>
                </div>
              </div>
              <button className="w-full h-11 bg-blue-600 text-white rounded-lg flex items-center justify-center gap-2 shadow-md text-sm">
                <Send className="w-4 h-4" />
                <span>Hente barn</span>
              </button>
              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2 p-2 bg-green-50 rounded-lg border border-green-200">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <p className="text-xs text-green-800">Godkjennes automatisk</p>
                </div>
              </div>
            </div>
          </div>
        </ScreenCard>

        {/* 6. Forelder: Godkjente personer */}
        <ScreenCard title="Godkjente personer" category="Forelder">
          <div className="flex-1 flex flex-col p-4 bg-gray-50 overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-sm text-gray-900">Godkjente hentepersoner</h3>
                <p className="text-xs text-gray-500">Emma Hansen</p>
              </div>
              <button className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center shadow-md hover:bg-blue-700">
                <Plus className="w-5 h-5 text-white" />
              </button>
            </div>
            <div className="space-y-2">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full flex items-center justify-center text-white text-sm">
                  MA
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900">Mormor Anne</div>
                  <div className="text-xs text-gray-500">Besteforelder</div>
                  <div className="text-xs text-gray-400 mt-0.5">Godkjent: 27.11.2025</div>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 bg-green-100 text-green-700 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  <span className="text-xs">Godkjent</span>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center text-white text-sm">
                  TL
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900">Tante Lisa</div>
                  <div className="text-xs text-gray-500">Tante</div>
                  <div className="text-xs text-gray-400 mt-0.5">Godkjent: 27.11.2025</div>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 bg-green-100 text-green-700 rounded-full">
                  <CheckCircle className="w-3 h-3" />
                  <span className="text-xs">Godkjent</span>
                </div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-yellow-500 rounded-full flex items-center justify-center text-white text-sm">
                  SH
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-900">Stine Henting</div>
                  <div className="text-xs text-gray-500">Annen</div>
                </div>
                <div className="flex items-center gap-1 px-2.5 py-1 bg-yellow-100 text-yellow-700 rounded-full">
                  <Clock className="w-3 h-3" />
                  <span className="text-xs">Ventende</span>
                </div>
              </div>
            </div>
          </div>
        </ScreenCard>

        {/* 7. Forelder: Oppmøte */}
        <ScreenCard title="Oppmøte i dag" category="Forelder">
          <div className="flex-1 flex flex-col p-4 bg-gray-50">
            <div className="mb-4">
              <h3 className="text-sm text-gray-900 mb-1">Oppmøte i dag</h3>
              <p className="text-xs text-gray-500">Emma Hansen - Blåklokka</p>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4 space-y-3">
              <div className="flex items-start gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-green-900 mb-0.5">Krysset inn</div>
                  <div className="text-xs text-green-700">Kl. 08:24</div>
                  <div className="text-xs text-green-600 mt-1">✓ Registrert av personalet</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg border border-blue-200">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-blue-900 mb-0.5">I barnehagen nå</div>
                  <div className="text-xs text-blue-700">Venter på uthenting</div>
                  <div className="text-xs text-blue-600 mt-1">Oppholdstid: 3t 15min</div>
                </div>
              </div>
              <div className="pt-2 border-t border-gray-100">
                <button className="w-full h-10 bg-blue-600 text-white rounded-lg text-sm flex items-center justify-center gap-2">
                  <MessageCircle className="w-4 h-4" />
                  Chat med barnehagen
                </button>
              </div>
            </div>
          </div>
        </ScreenCard>

        {/* 8. Forelder: Chat */}
        <ScreenCard title="Chat" category="Forelder">
          <div className="flex-1 flex flex-col p-4 bg-gray-50">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h3 className="text-sm text-gray-900">Chat med barnehagen</h3>
                <p className="text-xs text-gray-500">Emma Hansen</p>
              </div>
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <MessageCircle className="w-4 h-4 text-blue-600" />
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm flex-1 flex flex-col">
              <div className="flex-1 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MessageCircle className="w-6 h-6 text-gray-400" />
                  </div>
                  <div className="text-sm text-gray-500 mb-1">Ingen meldinger ennå</div>
                  <div className="text-xs text-gray-400">Start en samtale med barnehagen</div>
                </div>
              </div>
              <div className="p-3 border-t border-gray-100">
                <div className="mb-2 p-2 bg-yellow-50 border border-yellow-200 rounded-lg flex items-start gap-2">
                  <svg className="w-4 h-4 text-yellow-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                  <p className="text-xs text-yellow-800">Meldinger slettes automatisk etter 24 timer (GDPR)</p>
                </div>
                <div className="relative">
                  <input 
                    type="text" 
                    placeholder="Skriv en melding..." 
                    className="w-full h-9 bg-gray-50 border border-gray-300 rounded-lg px-3 pr-10 text-sm"
                    disabled
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScreenCard>

        {/* 9. Ansatt: Dashboard */}
        <ScreenCard title="Ansatt: Dashboard" category="Ansatt">
          <div className="flex-1 flex flex-col p-4 bg-gray-50 overflow-y-auto">
            <h3 className="text-base text-gray-900 mb-4">Oversikt</h3>
            <div className="grid grid-cols-3 gap-2 mb-4">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">
                <div className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-lg mb-2">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
                <div className="text-xs text-gray-600 mb-1">Barn totalt</div>
                <div className="text-2xl text-gray-900">45</div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">
                <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded-lg mb-2">
                  <Clock className="w-5 h-5 text-yellow-600" />
                </div>
                <div className="text-xs text-gray-600 mb-1">Ventende</div>
                <div className="text-2xl text-gray-900">2</div>
              </div>
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">
                <div className="flex items-center justify-center w-10 h-10 bg-green-100 rounded-lg mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="text-xs text-gray-600 mb-1">Godkjente</div>
                <div className="text-2xl text-gray-900">5</div>
              </div>
            </div>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-900">Oppmøte</span>
                <span className="text-sm text-gray-600">16 av 45</span>
              </div>
              <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full bg-gradient-to-r from-green-500 to-green-600 rounded-full" style={{ width: '35%' }}></div>
              </div>
              <div className="text-xs text-gray-500 mt-2">35% av barna er til stede</div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="bg-green-50 border border-green-200 rounded-lg p-3 text-center">
                <div className="text-xl text-green-700 mb-0.5">16</div>
                <div className="text-xs text-green-600">Til stede</div>
              </div>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-center">
                <div className="text-xl text-gray-700 mb-0.5">29</div>
                <div className="text-xs text-gray-600">Hjemme</div>
              </div>
            </div>
          </div>
        </ScreenCard>

        {/* 10. Ansatt: Barn oversikt */}
        <ScreenCard title="Ansatt: Barn oversikt" category="Ansatt">
          <div className="flex-1 flex flex-col bg-white">
            <div className="flex border-b border-gray-200 bg-gray-50">
              <div className="px-4 py-3 border-b-2 border-blue-600 text-xs text-blue-600">Inn/Ut</div>
              <div className="px-4 py-3 text-xs text-gray-500">Ventende (2)</div>
              <div className="px-4 py-3 text-xs text-gray-500">Godkjente</div>
            </div>
            <div className="p-4 bg-gray-50 flex-1 overflow-y-auto">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="text-sm text-gray-900">Alle barn</h3>
                  <p className="text-xs text-gray-500">16 av 45 til stede</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="bg-white rounded-xl border-2 border-blue-600 shadow-md p-3">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full text-white flex items-center justify-center text-sm">
                      E
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">Emma Hansen</div>
                      <div className="text-xs text-gray-500">Blåklokka</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs mb-2">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full"></span>
                    Til stede
                  </div>
                  <div className="text-xs text-gray-600 mb-2 flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Inn: 08:24
                  </div>
                  <button className="w-full h-8 bg-gray-600 hover:bg-gray-700 rounded-lg text-white flex items-center justify-center text-xs gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 17l-5-5m0 0l5-5m-5 5h12" />
                    </svg>
                    Kryss ut
                  </button>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-full text-white flex items-center justify-center text-sm">
                      L
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">Lucas Berg</div>
                      <div className="text-xs text-gray-500">Blåklokka</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gray-100 text-gray-700 rounded-full text-xs mb-2">
                    <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
                    Hjemme
                  </div>
                  <button className="w-full h-8 bg-blue-600 hover:bg-blue-700 rounded-lg text-white flex items-center justify-center text-xs gap-1">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                    Kryss inn
                  </button>
                </div>
              </div>
            </div>
          </div>
        </ScreenCard>

        {/* 11. Ansatt: Ventende */}
        <ScreenCard title="Ansatt: Ventende hentinger" category="Ansatt">
          <div className="flex-1 flex flex-col bg-white">
            <div className="flex border-b border-gray-200 bg-gray-50">
              <div className="px-4 py-3 text-xs text-gray-500">Inn/Ut</div>
              <div className="px-4 py-3 border-b-2 border-blue-600 text-xs text-blue-600">Ventende (2)</div>
              <div className="px-4 py-3 text-xs text-gray-500">Godkjente</div>
            </div>
            <div className="p-4 bg-gray-50 flex-1 overflow-y-auto">
              <div className="mb-3">
                <h3 className="text-sm text-gray-900 mb-1">Ventende hentinger</h3>
                <p className="text-xs text-gray-500">Krever godkjenning</p>
              </div>
              <div className="space-y-2">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-red-500 rounded-full text-white flex items-center justify-center text-sm">
                      S
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">Sofia Larsen</div>
                      <div className="text-xs text-gray-500">Solstråla</div>
                    </div>
                  </div>
                  <div className="p-2.5 bg-yellow-50 border border-yellow-200 rounded-lg mb-2.5">
                    <div className="flex items-center gap-2 text-xs text-yellow-800 mb-1">
                      <Clock className="w-4 h-4" />
                      <span>Henting forespurt</span>
                    </div>
                    <div className="text-xs text-yellow-700 ml-6">
                      <div>Person: Bestemor Anne</div>
                      <div>Ankomst: Om 15 min</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="h-8 bg-green-600 hover:bg-green-700 rounded-lg text-white text-xs">
                      Godkjenn
                    </button>
                    <button className="h-8 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 text-xs">
                      Avvis
                    </button>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-teal-500 rounded-full text-white flex items-center justify-center text-sm">
                      N
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">Noah Nilsen</div>
                      <div className="text-xs text-gray-500">Blåklokka</div>
                    </div>
                  </div>
                  <div className="p-2.5 bg-yellow-50 border border-yellow-200 rounded-lg mb-2.5">
                    <div className="flex items-center gap-2 text-xs text-yellow-800 mb-1">
                      <Clock className="w-4 h-4" />
                      <span>Henting forespurt</span>
                    </div>
                    <div className="text-xs text-yellow-700 ml-6">
                      <div>Person: Pappa</div>
                      <div>Ankomst: Om 5 min</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="h-8 bg-green-600 hover:bg-green-700 rounded-lg text-white text-xs">
                      Godkjenn
                    </button>
                    <button className="h-8 bg-gray-200 hover:bg-gray-300 rounded-lg text-gray-700 text-xs">
                      Avvis
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScreenCard>

        {/* 12. Ansatt: Godkjente */}
        <ScreenCard title="Ansatt: Godkjente hentinger" category="Ansatt">
          <div className="flex-1 flex flex-col bg-white">
            <div className="flex border-b border-gray-200 bg-gray-50">
              <div className="px-4 py-3 text-xs text-gray-500">Inn/Ut</div>
              <div className="px-4 py-3 text-xs text-gray-500">Ventende</div>
              <div className="px-4 py-3 border-b-2 border-blue-600 text-xs text-blue-600">Godkjente (5)</div>
            </div>
            <div className="p-4 bg-gray-50 flex-1 overflow-y-auto">
              <div className="mb-3">
                <h3 className="text-sm text-gray-900 mb-1">Godkjente hentinger</h3>
                <p className="text-xs text-gray-500">Venter på henting</p>
              </div>
              <div className="space-y-2">
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full text-white flex items-center justify-center text-sm">
                      M
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">Maja Johansen</div>
                      <div className="text-xs text-gray-500">Solstråla</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs mb-2">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Godkjent
                  </div>
                  <div className="p-2 bg-blue-50 border border-blue-200 rounded-lg text-xs">
                    <div className="text-blue-900 mb-0.5">Hentes av: Mamma</div>
                    <div className="text-blue-700">Godkjent kl. 11:45</div>
                    <div className="text-blue-700">Ankomst: Om 10 min</div>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-3">
                  <div className="flex items-start gap-3 mb-2">
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full text-white flex items-center justify-center text-sm">
                      F
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-gray-900">Filip Pedersen</div>
                      <div className="text-xs text-gray-500">Blåklokka</div>
                    </div>
                  </div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs mb-2">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Godkjent
                  </div>
                  <div className="p-2 bg-blue-50 border border-blue-200 rounded-lg text-xs">
                    <div className="text-blue-900 mb-0.5">Hentes av: Pappa</div>
                    <div className="text-blue-700">Godkjent kl. 12:00</div>
                    <div className="text-blue-700">Ankomst: Om 5 min</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScreenCard>

      </div>

      {/* Legend & Summary */}
      <div className="mt-8 grid md:grid-cols-2 gap-6">
        <div className="p-6 bg-white rounded-xl border border-gray-200 shadow-sm">
          <h3 className="text-gray-900 mb-4">Skjermkategorier</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Autentisering</span>
              </div>
              <span className="text-sm text-gray-900">3 skjermer</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Forelder</span>
              </div>
              <span className="text-sm text-gray-900">5 skjermer</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Ansatt</span>
              </div>
              <span className="text-sm text-gray-900">4 skjermer</span>
            </div>
          </div>
        </div>
        
        <div className="p-6 bg-blue-50 rounded-xl border border-blue-200">
          <h3 className="text-gray-900 mb-4">Design-inspirasjon</h3>
          <div className="space-y-3 text-sm text-gray-700">
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Spond - minimalistisk & ren</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>Gradient bakgrunn & tabs</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>iPhone 16 format (19.5:9)</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
              </svg>
              <span>GDPR-fokusert design</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface ScreenCardProps {
  title: string;
  category: 'Autentisering' | 'Forelder' | 'Ansatt';
  children: React.ReactNode;
}

function ScreenCard({ title, category, children }: ScreenCardProps) {
  const getCategoryColor = () => {
    switch (category) {
      case 'Autentisering':
        return 'bg-purple-100 text-purple-700 border-purple-200';
      case 'Forelder':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'Ansatt':
        return 'bg-green-100 text-green-700 border-green-200';
    }
  };

  return (
    <div className="group">
      {/* iPhone 16 Frame */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl hover:scale-105 transition-transform duration-300">
        {/* Dynamic Island */}
        <div className="bg-black rounded-[2.5rem] overflow-hidden relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-7 bg-black rounded-b-3xl z-10"></div>
          
          {/* Screen Content - iPhone 16 aspect ratio (19.5:9) */}
          <div className="bg-white aspect-[9/19.5] flex flex-col relative">
            {/* Status Bar */}
            <div className="h-12 bg-white flex items-center justify-between px-6 pt-2">
              <span className="text-xs">9:41</span>
              <div className="flex items-center gap-1">
                <div className="w-4 h-3 border border-black rounded-sm"></div>
                <div className="w-3 h-3 border border-black rounded-full"></div>
                <div className="flex gap-0.5">
                  <div className="w-1 h-3 bg-black rounded-full"></div>
                  <div className="w-1 h-3 bg-black rounded-full opacity-60"></div>
                  <div className="w-1 h-3 bg-black rounded-full opacity-30"></div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
              {children}
            </div>
          </div>
        </div>
      </div>
      
      {/* Label below phone */}
      <div className="mt-4 text-center space-y-2">
        <h3 className="text-sm text-gray-900">{title}</h3>
        <span className={`inline-block px-3 py-1 rounded-full text-xs border ${getCategoryColor()}`}>
          {category}
        </span>
      </div>
    </div>
  );
}
