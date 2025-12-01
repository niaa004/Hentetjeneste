import { Users } from 'lucide-react';

interface OnboardingScreenProps {
  onLoadDemo: () => void;
  onLogout: () => void;
}

export function OnboardingScreen({ onLoadDemo, onLogout }: OnboardingScreenProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
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
                <p className="text-sm text-gray-500">Forelder</p>
              </div>
            </div>
            
            <button
              onClick={onLogout}
              className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-2xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Users className="w-10 h-10 text-gray-400" />
          </div>
          <h2 className="text-2xl text-gray-900 mb-3">Ingen barn registrert</h2>
          <p className="text-gray-600">Kom i gang ved å legge til ditt barn</p>
        </div>

        {/* Getting Started Guide */}
        <div className="bg-white rounded-2xl border border-gray-200 p-8 mb-8">
          <h3 className="text-lg text-gray-900 mb-8">Kom i gang</h3>
          
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600">1</span>
              </div>
              <div className="flex-1 pt-2">
                <h4 className="text-gray-900 mb-2">Kontakt barnehagen</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Ta kontakt med barnehagen din og be om tilgang til Krysselista-systemet.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600">2</span>
              </div>
              <div className="flex-1 pt-2">
                <h4 className="text-gray-900 mb-2">Få konto opprettet</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Personalet vil opprette din konto og koble deg til ditt barn i systemet.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                <span className="text-blue-600">3</span>
              </div>
              <div className="flex-1 pt-2">
                <h4 className="text-gray-900 mb-2">Start å bruke appen</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Når alt er satt opp kan du se oppmøte, godkjenne hentepersoner og chatte med barnehagen.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Data Button */}
        <div className="bg-blue-50 rounded-2xl border border-blue-200 p-8">
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm">
              <svg className="w-6 h-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="flex-1 pt-1">
              <h4 className="text-gray-900 mb-2">Vil du teste systemet?</h4>
              <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                Last inn demodata for å utforske funksjonene før du får tilgang til ekte data.
              </p>
              <button
                onClick={onLoadDemo}
                className="w-full sm:w-auto px-6 py-3 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl transition-colors shadow-sm flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>Last inn demodata for testing</span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
