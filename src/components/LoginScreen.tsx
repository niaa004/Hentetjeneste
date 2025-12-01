import { useState } from 'react';

interface LoginScreenProps {
  onLogin: () => void;
}

export function LoginScreen({ onLogin }: LoginScreenProps) {
  const [activeTab, setActiveTab] = useState<'login' | 'register'>('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-6">
      <div className="w-full max-w-md">
        {/* Logo & Title */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
            <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
            </svg>
          </div>
          <h1 className="text-3xl text-gray-900 mb-2">Krysselista</h1>
          <p className="text-gray-600">Sikker og enkel henting fra barnehagen</p>
        </div>

        {/* Form Card */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8">
          {/* Tabs */}
          <div className="flex mb-8 bg-white rounded-xl p-1 border border-gray-200">
            <button
              onClick={() => setActiveTab('login')}
              className={`flex-1 py-3 rounded-lg transition-all ${
                activeTab === 'login'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Logg inn
            </button>
            <button
              onClick={() => setActiveTab('register')}
              className={`flex-1 py-3 rounded-lg transition-all ${
                activeTab === 'register'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              Registrer
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {activeTab === 'register' && (
              <>
                <div>
                  <input
                    type="text"
                    placeholder="Fullt navn"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-12 bg-white rounded-xl border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                    required={activeTab === 'register'}
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Telefon"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-12 bg-white rounded-xl border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                    required={activeTab === 'register'}
                  />
                </div>
              </>
            )}
            
            <div>
              <input
                type="email"
                placeholder="E-post"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-12 bg-white rounded-xl border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                required
              />
            </div>
            
            <div>
              <input
                type="password"
                placeholder="Passord"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-12 bg-white rounded-xl border border-gray-200 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-shadow"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full h-12 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl transition-colors shadow-sm mt-6"
            >
              {activeTab === 'login' ? 'Logg inn' : 'Opprett konto'}
            </button>

            {activeTab === 'login' && (
              <div className="text-center pt-4">
                <a href="#" className="text-sm text-blue-600 hover:text-blue-700 hover:underline">
                  Glemt passord?
                </a>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
