import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { RoyalBackground } from './components/RoyalBackground';
import { ToranHeader } from './components/ToranHeader';
import { HeroOpening } from './components/HeroOpening';
import { Mangalacharan } from './components/Mangalacharan';
import { CoupleSection } from './components/CoupleSection';
import { CelebrationsTimeline } from './components/CelebrationsTimeline';
import { VenueSection } from './components/VenueSection';
import { FamilyWelcome } from './components/FamilyWelcome';
import { GrandClosing } from './components/GrandClosing';
import { RoyalFooter } from './components/RoyalFooter';
import { MusicPlayer } from './components/MusicPlayer';
import { ShareControls } from './components/ShareControls';
import { LanguageToggle } from './components/LanguageToggle';
import { triggerPetalShower } from './components/PetalShower';

export const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [musicTrigger, setMusicTrigger] = useState(false);

  const handleOpenInvitation = () => {
    setIsOpen(true);
    setMusicTrigger(true);
    triggerPetalShower();

    // Smoothly scroll to the sacred Mangalacharan section
    const target = document.getElementById('mangalacharan');
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <LanguageProvider>
      <RoyalBackground>
        {/* Top Auspicious Toran with Hanging Bells */}
        <ToranHeader />

        {/* Floating Top Controls (WhatsApp Share, Petal Shower, Copy Link) */}
        <ShareControls />

        {/* Fixed Left-Side Language Toggle (हिंदी / ENG) */}
        <LanguageToggle />

        <main className="w-full flex flex-col items-center">
          {/* Section 1: Grand Opening Screen */}
          <HeroOpening onOpenInvitation={handleOpenInvitation} isOpen={isOpen} />

          {/* Section 2: Sacred Jain Mangalacharan */}
          <Mangalacharan />

          {/* Section 3: Royal Couple Introduction (वर एवं वधु) */}
          <CoupleSection />

          {/* Section 4: Wedding Celebrations Timeline (हल्दी, मेहंदी, शुभ विवाह + Countdown) */}
          <CelebrationsTimeline />

          {/* Section 5: Royal Wedding Venue & Google Maps Navigation (Hotel Madurai, Udaipur) */}
          <VenueSection />

          {/* Section 6: Family Welcome (सादर स्वागत एवं अभिनंदन) */}
          <FamilyWelcome />

          {/* Section 7: Grand Closing Invitation */}
          <GrandClosing />
        </main>

        {/* Section 8: Royal Footer with Continuous Background */}
        <RoyalFooter />

        {/* Floating Namokar Mantra Music Control (bottom-right) */}
        <MusicPlayer autoPlayTrigger={musicTrigger} />
      </RoyalBackground>
    </LanguageProvider>
  );
};

export default App;
