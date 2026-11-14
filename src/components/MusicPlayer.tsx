import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// ─────────────────────────────────────────────────────────────────────────────
// MUSIC PLAYER – Authentic Jain Navkar (Namokar) Mantra Audio
// Plays the genuine traditional 5-line Namokar Mantra recitation:
//   णमो अरिहंताणं।
//   णमो सिद्धाणं।
//   णमो आयरियाणं।
//   णमो उवज्झायाणं।
//   णमो लोए सव्वसाहूणं॥
// 
// Controls:
// - User must click the button to start music (no autoplay policy compliance).
// - Music loops seamlessly without unnecessary restarts.
// - Compatible with both mobile (iOS/Android) and desktop browsers.
// ─────────────────────────────────────────────────────────────────────────────

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = () => {
  const { t, language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Toggle playback on user click
  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.warn('Audio playback error:', err);
            setIsPlaying(false);
          });
      }
    }
  };

  // Synchronize state with audio element native events
  const handleAudioPlay = () => setIsPlaying(true);
  const handleAudioPause = () => setIsPlaying(false);
  const handleAudioEnded = () => {
    // If loop is true, this won't fire often, but just in case:
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(() => setIsPlaying(false));
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.addEventListener('play', handleAudioPlay);
    audio.addEventListener('pause', handleAudioPause);
    audio.addEventListener('ended', handleAudioEnded);

    return () => {
      audio.removeEventListener('play', handleAudioPlay);
      audio.removeEventListener('pause', handleAudioPause);
      audio.removeEventListener('ended', handleAudioEnded);
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2">
      {/* Hidden HTML5 Audio Element playing the authentic Namokar Mantra */}
      <audio
        ref={audioRef}
        src="/audio.mpeg"
        loop
        preload="metadata"
        playsInline
      >
        <source src="/audio.mpeg" type="audio/mpeg" />
      </audio>

      <button
        onClick={togglePlay}
        aria-label={isPlaying ? t.musicStopBtn : t.musicPlayBtn}
        title={isPlaying ? 'संगीत बंद करें (Mute)' : 'णमोकार मंत्र सुनें (Play Namokar Mantra)'}
        className="group relative flex items-center gap-2.5 px-3.5 sm:px-4 py-2.5 rounded-full border-2 border-gold-antique bg-gradient-to-r from-maroon-deep via-maroon-burgundy to-maroon-darkest text-gold-champagne shadow-2xl hover:shadow-gold-md hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
      >
        {/* Pulsing Aura when playing */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-gold-champagne/40 animate-ping opacity-30 pointer-events-none" />
        )}

        {/* Music Icon */}
        <div className="relative">
          {isPlaying ? (
            <Volume2 className="w-5 h-5 text-gold-pale animate-pulse" />
          ) : (
            <VolumeX className="w-5 h-5 text-gold-antique/70" />
          )}
        </div>

        {/* Text and Mantra Status */}
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-devanagari font-bold tracking-wider leading-normal py-0.5">
            {isPlaying
              ? language === 'hi'
                ? 'णमोकार मंत्र'
                : 'Namokar Mantra'
              : language === 'hi'
              ? 'संगीत चालू करें'
              : 'Play Music'}
          </span>
          <span className="text-[9px] font-cormorant text-gold-champagne/75 uppercase tracking-widest leading-none mt-0.5">
            {isPlaying ? 'Devotional Chant' : 'Namokar Mantra'}
          </span>
        </div>

        {/* Animated Equalizer Bars */}
        {isPlaying ? (
          <div className="flex items-end gap-[2px] h-4 ml-1">
            <span
              className="w-[2.5px] bg-gold-champagne rounded-full animate-bounce h-2"
              style={{ animationDelay: '0.1s' }}
            />
            <span
              className="w-[2.5px] bg-gold-pale rounded-full animate-bounce h-4"
              style={{ animationDelay: '0.3s' }}
            />
            <span
              className="w-[2.5px] bg-gold-antique rounded-full animate-bounce h-3"
              style={{ animationDelay: '0.2s' }}
            />
          </div>
        ) : (
          <Music className="w-3.5 h-3.5 text-gold-antique/60 ml-0.5" />
        )}
      </button>
    </div>
  );
};
