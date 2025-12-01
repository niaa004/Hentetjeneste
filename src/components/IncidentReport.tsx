import { useState } from 'react';
import { X, AlertCircle } from 'lucide-react';

interface IncidentReportProps {
  childId: string;
  childName: string;
  onClose: () => void;
  onSubmit: (incident: any) => void;
}

export function IncidentReport({ childId, childName, onClose, onSubmit }: IncidentReportProps) {
  const [type, setType] = useState<'injury' | 'illness' | 'info' | 'emergency'>('info');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<'low' | 'medium' | 'high'>('low');
  const [actionTaken, setActionTaken] = useState('');
  const [notifyParents, setNotifyParents] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const incident = {
      id: `incident-${Date.now()}`,
      childId,
      type,
      title,
      description,
      reportedBy: 'Pedagog Anna Berg', // Mock user
      reportedAt: new Date().toISOString(),
      severity,
      actionTaken,
      notifiedParents: notifyParents,
    };

    onSubmit(incident);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-2xl shadow-xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between rounded-t-2xl">
          <div>
            <h2 className="text-xl text-gray-900">Rapporter hendelse</h2>
            <p className="text-sm text-gray-600">For {childName}</p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-xl flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Type */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Type hendelse</label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setType('injury')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  type === 'injury'
                    ? 'border-red-500 bg-red-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">🤕</div>
                  <div className="text-sm text-gray-900">Skade</div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setType('illness')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  type === 'illness'
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">🤒</div>
                  <div className="text-sm text-gray-900">Sykdom</div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setType('info')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  type === 'info'
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">ℹ️</div>
                  <div className="text-sm text-gray-900">Info</div>
                </div>
              </button>
              <button
                type="button"
                onClick={() => setType('emergency')}
                className={`p-4 rounded-xl border-2 transition-all ${
                  type === 'emergency'
                    ? 'border-red-700 bg-red-100'
                    : 'border-gray-200 bg-white hover:border-gray-300'
                }`}
              >
                <div className="text-center">
                  <div className="text-2xl mb-1">🚨</div>
                  <div className="text-sm text-gray-900">Nødstilfelle</div>
                </div>
              </button>
            </div>
          </div>

          {/* Title */}
          <div>
            <label htmlFor="title" className="block text-sm text-gray-700 mb-2">
              Tittel
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="F.eks. 'Fall på lekeplassen'"
              className="w-full h-12 px-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm text-gray-700 mb-2">
              Beskrivelse
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Beskriv hva som skjedde..."
              rows={4}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              required
            />
          </div>

          {/* Severity */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">Alvorlighetsgrad</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => setSeverity('low')}
                className={`p-3 rounded-xl border-2 text-sm transition-all ${
                  severity === 'low'
                    ? 'border-green-500 bg-green-50 text-green-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                Lav
              </button>
              <button
                type="button"
                onClick={() => setSeverity('medium')}
                className={`p-3 rounded-xl border-2 text-sm transition-all ${
                  severity === 'medium'
                    ? 'border-orange-500 bg-orange-50 text-orange-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                Medium
              </button>
              <button
                type="button"
                onClick={() => setSeverity('high')}
                className={`p-3 rounded-xl border-2 text-sm transition-all ${
                  severity === 'high'
                    ? 'border-red-500 bg-red-50 text-red-700'
                    : 'border-gray-200 bg-white text-gray-700 hover:border-gray-300'
                }`}
              >
                Høy
              </button>
            </div>
          </div>

          {/* Action Taken */}
          <div>
            <label htmlFor="actionTaken" className="block text-sm text-gray-700 mb-2">
              Tiltak utført (valgfritt)
            </label>
            <textarea
              id="actionTaken"
              value={actionTaken}
              onChange={(e) => setActionTaken(e.target.value)}
              placeholder="F.eks. 'Rengjort sår, påført plaster'"
              rows={3}
              className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
            />
          </div>

          {/* Notify Parents */}
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={notifyParents}
                onChange={(e) => setNotifyParents(e.target.checked)}
                className="w-5 h-5 text-blue-600 rounded border-gray-300 focus:ring-2 focus:ring-blue-500 mt-0.5"
              />
              <div className="flex-1">
                <div className="text-sm text-gray-900 mb-1">Varsle foreldre umiddelbart</div>
                <div className="text-xs text-gray-600">
                  Foreldre vil motta push-varsel og se hendelsen i sin app
                </div>
              </div>
            </label>
          </div>

          {/* Submit */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 h-12 px-4 bg-gray-100 hover:bg-gray-200 text-gray-900 rounded-xl transition-colors"
            >
              Avbryt
            </button>
            <button
              type="submit"
              className="flex-1 h-12 px-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-xl transition-all shadow-lg shadow-blue-200"
            >
              Rapporter hendelse
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
