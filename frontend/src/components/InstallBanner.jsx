import React, { useEffect, useState } from "react";
import { Smartphone, Apple, X, Download } from "lucide-react";

export default function InstallBanner() {
  const [show, setShow] = useState(false);
  const [installEvent, setInstallEvent] = useState(null);

  useEffect(() => {
    if (sessionStorage.getItem("installDismissed")) return;
    const onPrompt = (e) => {
      e.preventDefault();
      setInstallEvent(e);
      setShow(true);
    };
    window.addEventListener("beforeinstallprompt", onPrompt);

    // iOS Safari fallback (no beforeinstallprompt)
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.navigator.standalone || window.matchMedia("(display-mode: standalone)").matches;
    if (isIOS && !isStandalone) setShow(true);

    return () => window.removeEventListener("beforeinstallprompt", onPrompt);
  }, []);

  const install = async () => {
    if (installEvent) {
      installEvent.prompt();
      await installEvent.userChoice;
      setShow(false);
    }
  };

  const dismiss = () => {
    sessionStorage.setItem("installDismissed", "1");
    setShow(false);
  };

  if (!show) return null;
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <div
      data-testid="install-banner"
      className="fixed bottom-20 lg:bottom-4 left-4 right-4 lg:left-auto lg:right-24 lg:w-80 z-[78] glass border border-gold/40 rounded-2xl p-4 shadow-2xl"
    >
      <button
        onClick={dismiss}
        data-testid="install-close"
        aria-label="Dismiss install"
        className="absolute top-2 right-2 w-7 h-7 rounded-full hover:bg-white/10 flex items-center justify-center text-white/40"
      >
        <X className="w-3.5 h-3.5" />
      </button>
      <div className="flex items-center gap-2 mb-2">
        {isIOS ? <Apple className="w-4 h-4 text-gold" /> : <Smartphone className="w-4 h-4 text-gold" />}
        <span className="text-[10px] uppercase tracking-[0.25em] text-gold font-bold">Install Tony Taxi</span>
      </div>
      <p className="text-xs text-white/80 mb-3 leading-snug">
        {isIOS
          ? "Tap the Share icon in Safari, then 'Add to Home Screen' — Tony Taxi opens like a native app."
          : "Add Tony Taxi to your home screen for one-tap booking, push-style alerts, and offline access."}
      </p>
      {!isIOS && installEvent && (
        <button
          onClick={install}
          data-testid="install-action"
          className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl gold-foil font-semibold text-sm hover:scale-[1.02] transition-transform"
        >
          <Download className="w-4 h-4" /> Install App
        </button>
      )}
    </div>
  );
}
