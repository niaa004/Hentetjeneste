import { User, Settings, Bell, Lock, Globe, LogOut, ArrowLeftRight, Info } from 'lucide-react';
import { useState } from 'react';
import { ValueProposition } from './ValueProposition';
import { QRCodeShare } from './QRCodeShare';

interface ProfileTabProps {
  role: 'parent' | 'staff';
  onRoleToggle: () => void;
}

export function ProfileTab({ role, onRoleToggle }: ProfileTabProps) {
  const [showValueProp, setShowValueProp] = useState(false);

  return (
    <div className="pb-24 px-4">
      <div className="max-w-md mx-auto pt-6">
        {/* Profile Header */}
        <div className="mb-8">
          <div className="flex flex-col items-center text-center mb-6">
            <div className={`w-24 h-24 ${
              role === 'parent' 
                ? 'bg-gradient-to-br from-purple-500 to-purple-600' 
                : 'bg-gradient-to-br from-blue-500 to-blue-600'
            } rounded-full flex items-center justify-center text-white text-3xl mb-4 shadow-lg`}>
              <User className="w-12 h-12" />
            </div>
            <h2 className="text-2xl text-gray-900 mb-1">
              {role === 'parent' ? 'Kari Nordmann' : 'Ola Pedagog'}
            </h2>
            <p className="text-gray-600">
              {role === 'parent' ? 'Forelder' : 'Pedagogisk leder'}
            </p>
          </div>
        </div>

        {/* Role Toggle Card */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200 p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center">
              <ArrowLeftRight className="w-6 h-6 text-amber-700" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-1">Bytt modus</h3>
              <p className="text-sm text-gray-600">
                Du er nå i <span className="font-semibold">{role === 'parent' ? 'forelder' : 'ansatt'}</span>-modus
              </p>
            </div>
          </div>
          <button
            onClick={onRoleToggle}
            className={`w-full h-12 ${
              role === 'parent'
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800'
                : 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800'
            } text-white rounded-xl transition-all shadow-sm flex items-center justify-center gap-2`}
          >
            <ArrowLeftRight className="w-5 h-5" />
            Bytt til {role === 'parent' ? 'ansatt' : 'forelder'}
          </button>
        </div>

        {/* NEW: Why Hentetjeneste? */}
        <button 
          onClick={() => setShowValueProp(!showValueProp)}
          className="w-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-purple-200 p-6 mb-6 text-left hover:shadow-md transition-shadow"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Info className="w-6 h-6 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-gray-900 mb-1">Hvorfor Hentetjeneste?</h3>
              <p className="text-sm text-gray-600">
                Se hva som gjør oss unike
              </p>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </button>

        {/* Settings Menu */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden mb-6">
          <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
              <Settings className="w-5 h-5 text-gray-600" />
            </div>
            <span className="flex-1 text-left text-gray-900">Innstillinger</span>
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
              <Bell className="w-5 h-5 text-gray-600" />
            </div>
            <span className="flex-1 text-left text-gray-900">Varsler</span>
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors border-b border-gray-100">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              <Lock className="w-5 h-5 text-blue-600" />
            </div>
            <span className="flex-1 text-left text-gray-900">Personvern og sikkerhet</span>
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 transition-colors">
            <div className="w-10 h-10 bg-gray-100 rounded-xl flex items-center justify-center">
              <Globe className="w-5 h-5 text-gray-600" />
            </div>
            <div className="flex-1 text-left">
              <p className="text-gray-900">Språk</p>
              <p className="text-sm text-gray-600">Norsk</p>
            </div>
            <svg className="w-5 h-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* GDPR Info */}
        <div className="bg-blue-50 rounded-2xl border border-blue-200 p-6 mb-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
              <Lock className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <h3 className="text-gray-900 mb-2">GDPR-kompatibel</h3>
              <p className="text-sm text-gray-700 mb-3">
                Dine data er trygt lagret og behandles i henhold til GDPR-regelverket.
              </p>
              <button className="text-sm text-blue-600 hover:text-blue-700">
                Les mer om personvern →
              </button>
            </div>
          </div>
        </div>

        {/* QR Code Share - For demo/presentation */}
        <QRCodeShare />

        {/* Logout */}
        <button className="w-full flex items-center justify-center gap-3 h-12 bg-white hover:bg-red-50 text-red-600 rounded-xl border border-gray-200 hover:border-red-200 transition-colors mt-6">
          <LogOut className="w-5 h-5" />
          Logg ut
        </button>
      </div>

      {/* NEW: Value Proposition Modal */}
      {showValueProp && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
          <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full my-8 p-8">
            <ValueProposition onClose={() => setShowValueProp(false)} />
          </div>
        </div>
      )}
    </div>
  );
}