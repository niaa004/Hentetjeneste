import { Shield, Users, Smartphone, Lock, TrendingUp, Heart } from 'lucide-react';

interface ValuePropositionProps {
  onClose?: () => void;
}

export function ValueProposition({ onClose }: ValuePropositionProps) {
  const benefits = [
    {
      icon: Users,
      title: 'For foreldre',
      color: 'purple',
      items: [
        'Slutt på usikkerhet om hvem som kan hente',
        'Enkel godkjenning av besteforeldre/venner',
        'Chat direkte med barnehagen',
        'Full oversikt over barnet ditt',
        'Logg over alle hentinger',
      ],
    },
    {
      icon: Shield,
      title: 'For barnehagen',
      color: 'blue',
      items: [
        'Erstatter usikre Excel-ark',
        'GDPR-sikker håndtering av sensitiv data',
        'Ingen telefonkø for å godkjenne henting',
        'Digital krysselista (inn/ut)',
        'Oversikt over alle barn',
      ],
    },
    {
      icon: Heart,
      title: 'For barn',
      color: 'pink',
      items: [
        'Tryggere henting',
        'Bare godkjente personer',
        'Raskere kommunikasjon ved hendelser',
        'Foreldre og barnehage samarbeider bedre',
      ],
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'purple':
        return {
          bg: 'bg-purple-100',
          text: 'text-purple-600',
          border: 'border-purple-200',
          gradient: 'from-purple-500 to-purple-600',
        };
      case 'blue':
        return {
          bg: 'bg-blue-100',
          text: 'text-blue-600',
          border: 'border-blue-200',
          gradient: 'from-blue-500 to-blue-600',
        };
      case 'pink':
        return {
          bg: 'bg-pink-100',
          text: 'text-pink-600',
          border: 'border-pink-200',
          gradient: 'from-pink-500 to-pink-600',
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-600',
          border: 'border-gray-200',
          gradient: 'from-gray-500 to-gray-600',
        };
    }
  };

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border border-gray-200 p-8 text-center">
        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
          <Shield className="w-10 h-10 text-white" />
        </div>
        <h2 className="text-2xl text-gray-900 mb-3">Hvorfor Hentetjeneste?</h2>
        <p className="text-gray-700 leading-relaxed max-w-2xl mx-auto">
          Vi erstatter usikre Excel-løsninger med en moderne, GDPR-sikker app som gir trygghet til foreldre, 
          pedagoger og barn. Enkel å bruke, trygg å stole på.
        </p>
      </div>

      {/* Benefits Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        {benefits.map((benefit) => {
          const Icon = benefit.icon;
          const colors = getColorClasses(benefit.color);
          
          return (
            <div
              key={benefit.title}
              className={`bg-white rounded-2xl border ${colors.border} p-6 hover:shadow-lg transition-shadow`}
            >
              <div className={`w-14 h-14 bg-gradient-to-br ${colors.gradient} rounded-2xl flex items-center justify-center mb-4 shadow-sm`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-lg text-gray-900 mb-4">{benefit.title}</h3>
              <ul className="space-y-3">
                {benefit.items.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full mt-2 flex-shrink-0`}></div>
                    <span className="text-sm text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      {/* Security Focus */}
      <div className="bg-white rounded-2xl border border-blue-200 p-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center flex-shrink-0">
            <Lock className="w-6 h-6 text-blue-600" />
          </div>
          <div className="flex-1">
            <h3 className="text-gray-900 mb-2">GDPR-sikker fra dag 1</h3>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              Hentetjeneste er designet med personvern i fokus. All sensitiv data håndteres i henhold til GDPR, 
              med kryptering, rollebasert tilgang og full sporbarhet.
            </p>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-50 rounded-xl p-3">
                <div className="text-sm text-blue-900">✓ End-to-end kryptering</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-3">
                <div className="text-sm text-blue-900">✓ Rollebasert tilgang</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-3">
                <div className="text-sm text-blue-900">✓ Full logg</div>
              </div>
              <div className="bg-blue-50 rounded-xl p-3">
                <div className="text-sm text-blue-900">✓ Norske servere</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Competitor Comparison */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-6 h-6 text-gray-600" />
          <h3 className="text-gray-900">Hvorfor velge oss?</h3>
        </div>
        
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-50 rounded-xl p-4">
              <h4 className="text-sm text-gray-900 mb-2">Andre løsninger</h4>
              <ul className="space-y-2 text-xs text-gray-600">
                <li>❌ Kompliserte grensesnitt</li>
                <li>❌ Kun krysseliste ELLER henting</li>
                <li>❌ Desktop-fokusert</li>
                <li>❌ GDPR etterpåklemt</li>
                <li>❌ Dyr månedspris</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-4 border border-green-200">
              <h4 className="text-sm text-gray-900 mb-2">Hentetjeneste</h4>
              <ul className="space-y-2 text-xs text-gray-700">
                <li>✅ Spond-enkel UX</li>
                <li>✅ Alt-i-ett løsning</li>
                <li>✅ Mobilvennlig først</li>
                <li>✅ GDPR-first design</li>
                <li>✅ Rettferdig pris</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
            <div className="flex items-start gap-3">
              <Smartphone className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-sm text-purple-900 mb-1">Inspirert av Spond</h4>
                <p className="text-xs text-purple-700 leading-relaxed">
                  Vi har tatt lærdom fra Norges mest populære gruppe-app. Folk kjenner allerede designspråket, 
                  så det er null læringskurve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Close Button (if onClose provided) */}
      {onClose && (
        <button
          onClick={onClose}
          className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl transition-all shadow-lg"
        >
          Lukk
        </button>
      )}
    </div>
  );
}
