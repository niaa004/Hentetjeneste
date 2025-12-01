import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';
import { Button } from './ui/button';

export function InstallPWA() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    // Check if already installed
    const isInstalled = window.matchMedia('(display-mode: standalone)').matches;
    
    if (isInstalled) {
      return; // Don't show banner if already installed
    }

    const handler = (e: Event) => {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault();
      // Save the event so it can be triggered later
      setDeferredPrompt(e);
      // Show the install banner
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      return;
    }

    // Show the install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    
    console.log(`User response to the install prompt: ${outcome}`);

    // Clear the deferredPrompt
    setDeferredPrompt(null);
    setShowInstallBanner(false);
  };

  const handleDismiss = () => {
    setShowInstallBanner(false);
    // Store dismissal in localStorage
    localStorage.setItem('pwa-install-dismissed', 'true');
  };

  // Don't show if dismissed before
  useEffect(() => {
    const dismissed = localStorage.getItem('pwa-install-dismissed');
    if (dismissed === 'true') {
      setShowInstallBanner(false);
    }
  }, []);

  if (!showInstallBanner || !deferredPrompt) {
    return null;
  }

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 animate-in slide-in-from-bottom-5">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl shadow-2xl p-4 text-white">
        <div className="flex items-start gap-3">
          <div className="bg-white/20 rounded-full p-2 shrink-0">
            <Download className="size-5" />
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold mb-1">Installer appen</h3>
            <p className="text-sm text-white/90 mb-3">
              Få raskere tilgang og bedre opplevelse ved å legge til Hentetjeneste på hjemskjermen.
            </p>
            
            <div className="flex gap-2">
              <Button
                onClick={handleInstallClick}
                className="bg-white text-blue-600 hover:bg-white/90 flex-1"
                size="sm"
              >
                Installer
              </Button>
              <Button
                onClick={handleDismiss}
                variant="ghost"
                className="text-white hover:bg-white/20"
                size="sm"
              >
                <X className="size-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
