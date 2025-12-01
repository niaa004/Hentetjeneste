import { Clock, User, CheckCircle } from 'lucide-react';
import { PickupLog } from '../data/mockData';

interface PickupLogViewProps {
  logs: PickupLog[];
}

export function PickupLogView({ logs }: PickupLogViewProps) {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays === 0) {
      return 'I dag';
    } else if (diffDays === 1) {
      return 'I går';
    } else if (diffDays < 7) {
      return `${diffDays} dager siden`;
    } else {
      return date.toLocaleDateString('no-NO', { day: 'numeric', month: 'short', year: 'numeric' });
    }
  };

  if (logs.length === 0) {
    return (
      <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
        <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <Clock className="w-8 h-8 text-gray-400" />
        </div>
        <h3 className="text-gray-900 mb-2">Ingen hentinger ennå</h3>
        <p className="text-sm text-gray-600">
          Hentingshistorikk vil vises her
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {logs.map((log) => (
        <div
          key={log.id}
          className="bg-white rounded-2xl border border-gray-200 p-5 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0 text-white shadow-sm">
              {log.pickedUpBy.charAt(0)}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2 mb-2">
                <div>
                  <h4 className="text-gray-900">{log.pickedUpBy}</h4>
                  <p className="text-sm text-gray-600">{formatDate(log.pickedUpAt)}</p>
                </div>
                <div className="flex items-center gap-1 text-green-700">
                  <CheckCircle className="w-4 h-4" />
                  <span className="text-xs">Verifisert</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-3">
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-600">Hentet kl.</span>
                  </div>
                  <p className="text-sm text-gray-900">{log.checkedOutTime}</p>
                </div>
                <div className="bg-gray-50 rounded-xl p-3">
                  <div className="flex items-center gap-2 mb-1">
                    <User className="w-4 h-4 text-gray-500" />
                    <span className="text-xs text-gray-600">Godkjent av</span>
                  </div>
                  <p className="text-sm text-gray-900 truncate">{log.verifiedBy}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
