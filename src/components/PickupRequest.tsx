import { useState } from 'react';
import { Clock, Send } from 'lucide-react';
import type { Child } from '../data/mockData';

interface PickupRequestProps {
  child: Child;
  onRequestPickup: () => void;
}

export function PickupRequest({ child, onRequestPickup }: PickupRequestProps) {
  const [selectedPerson, setSelectedPerson] = useState('');
  const [estimatedTime, setEstimatedTime] = useState('15');

  const pickupPersons = [
    { id: 'parent', name: 'Martin', relation: 'Forelder' },
    { id: 'mormor', name: 'Mormor Anne', relation: 'Besteforelder' },
    { id: 'tante', name: 'Tante Lisa', relation: 'Tante' },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPerson) {
      onRequestPickup();
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h3 className="mb-6 text-gray-900">Hente barn</h3>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Estimated Arrival Time */}
        <div>
          <label className="block text-sm text-gray-700 mb-2">Anslått ankomst</label>
          <select
            value={estimatedTime}
            onChange={(e) => setEstimatedTime(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="5">Om 5 minutter</option>
            <option value="10">Om 10 minutter</option>
            <option value="15">Om 15 minutter</option>
            <option value="20">Om 20 minutter</option>
            <option value="30">Om 30 minutter</option>
          </select>
        </div>

        {/* Who's Picking Up */}
        <div>
          <label className="block text-sm text-gray-700 mb-3">Hvem henter?</label>
          <div className="grid gap-3 sm:grid-cols-3">
            {pickupPersons.map(person => (
              <button
                key={person.id}
                type="button"
                onClick={() => setSelectedPerson(person.id)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${
                  selectedPerson === person.id
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center mb-2">
                  <span className="text-white text-sm">{person.name.charAt(0)}</span>
                </div>
                <p className="text-gray-900 text-sm">{person.name}</p>
                <p className="text-xs text-gray-500">{person.relation}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!selectedPerson}
          className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
        >
          <Send className="w-5 h-5" />
          <span>Hente barn</span>
        </button>

        {/* Info Messages */}
        <div className="space-y-2">
          <div className="flex items-start gap-2 p-3 bg-green-50 rounded-lg border border-green-200">
            <svg className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <p className="text-sm text-green-800">Henting godkjennes automatisk</p>
          </div>
          
          <div className="flex items-start gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
            <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <p className="text-sm text-blue-800">Personalet verifiserer alltid legitimasjon fysisk</p>
          </div>
        </div>
      </form>
    </div>
  );
}
