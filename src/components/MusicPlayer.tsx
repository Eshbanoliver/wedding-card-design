import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlayTrigger }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const isRunningRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  // Traditional Indian Wedding Shehnai & Tanpura Synthesizer (Raag Bilawal / Yaman notes)
  // Scale frequencies (Sa, Re, Ga, Ma, Pa, Dha, Ni, Sa') in Hz for warm shehnai reed timbre
  const notes = [
    261.63, // Sa (C4)
    293.66, // Re (D4)
    329.63, // Ga (E4)
    349.23, // Ma (F4)
    392.0,  // Pa (G4)
    440.0,  // Dha (A4)
    493.88, // Ni (B4)
    523.25, // Tar Sa (C5)
    587.33, // Tar Re (D5)
  ];

  // Raga melody sequence evocative of royal wedding shehnai
  const melody = [
    { n: 0, d: 0.8 }, // Sa
    { n: 1, d: 0.6 }, // Re
    { n: 2, d: 1.0 }, // Ga
    { n: 4, d: 1.2 }, // Pa
    { n: 3, d: 0.6 }, // Ma
    { n: 2, d: 0.8 }, // Ga
    { n: 1, d: 0.6 }, // Re
    { n: 0, d: 1.4 }, // Sa
    { n: 4, d: 0.8 }, // Pa
    { n: 5, d: 0.8 }, // Dha
    { n: 6, d: 0.6 }, // Ni
    { n: 7, d: 1.5 }, // Tar Sa
    { n: 6, d: 0.8 }, // Ni
    { n: 5, d: 0.8 }, // Dha
    { n: 4, d: 1.0 }, // Pa
    { n: 2, d: 0.8 }, // Ga
    { n: 1, d: 0.8 }, // Re
    { n: 0, d: 2.0 }, // Sa
  ];

  const startShehnaiMusic = () => {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }

      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      const ctx = audioContextRef.current;
      isRunningRef.current = true;
      setIsPlaying(true);

      // 1. Continuous Soft Tanpura Drone (Sa & Pa)
      const droneMaster = ctx.createGain();
      droneMaster.gain.setValueAtTime(0.04, ctx.currentTime);
      droneMaster.connect(ctx.destination);

      const drone1 = ctx.createOscillator();
      drone1.type = 'sawtooth';
      drone1.frequency.setValueAtTime(130.81, ctx.currentTime); // C3 (Mandra Sa)
      const filter1 = ctx.createBiquadFilter();
      filter1.type = 'lowpass';
      filter1.frequency.setValueAtTime(400, ctx.currentTime);
      drone1.connect(filter1);
      filter1.connect(droneMaster);
      drone1.start();

      const drone2 = ctx.createOscillator();
      drone2.type = 'sine';
      drone2.frequency.setValueAtTime(196.0, ctx.currentTime); // G3 (Mandra Pa)
      drone2.connect(droneMaster);
      drone2.start();

      // 2. Play Shehnai melody loop
      let stepIndex = 0;
      const playNextNote = () => {
        if (!isRunningRef.current || !audioContextRef.current) return;
        const currentNote = melody[stepIndex];
        const freq = notes[currentNote.n];
        const now = ctx.currentTime;

        // Shehnai dual-reed oscillator (rich harmonics + subtle vibrato)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const vibrato = ctx.createOscillator();
        const vibratoGain = ctx.createGain();
        const noteGain = ctx.createGain();
        const shehnaiFilter = ctx.createBiquadFilter();

        osc1.type = 'sawtooth';
        osc2.type = 'triangle';
        osc1.frequency.setValueAtTime(freq, now);
        osc2.frequency.setValueAtTime(freq * 1.002, now); // gentle natural chorus

        // Shehnai nasal resonance filter
        shehnaiFilter.type = 'bandpass';
        shehnaiFilter.frequency.setValueAtTime(1200, now);
        shehnaiFilter.Q.setValueAtTime(1.8, now);

        // Natural Vibrato (5.5 Hz)
        vibrato.frequency.setValueAtTime(5.5, now);
        vibratoGain.gain.setValueAtTime(3.5, now);
        vibrato.connect(osc1.frequency);
        vibrato.connect(osc2.frequency);
        vibrato.start(now);

        // Envelope: soft attack, gentle decay (Shehnai breath effect)
        noteGain.gain.setValueAtTime(0, now);
        noteGain.gain.linearRampToValueAtTime(0.065, now + 0.15);
        noteGain.gain.exponentialRampToValueAtTime(0.001, now + currentNote.d);

        osc1.connect(shehnaiFilter);
        osc2.connect(shehnaiFilter);
        shehnaiFilter.connect(noteGain);
        noteGain.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + currentNote.d);
        osc2.stop(now + currentNote.d);
        vibrato.stop(now + currentNote.d);

        stepIndex = (stepIndex + 1) % melody.length;
        timerRef.current = window.setTimeout(playNextNote, currentNote.d * 1000);
      };

      playNextNote();
    } catch {
      // Audio fallback handling
    }
  };

  const stopMusic = () => {
    isRunningRef.current = false;
    setIsPlaying(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }
    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.suspend();
    }
  };

  const toggleMusic = () => {
    setHasInteracted(true);
    if (isPlaying) {
      stopMusic();
    } else {
      startShehnaiMusic();
    }
  };

  // If user clicked "आमंत्रण देखें" (Open Invitation), start music if not already playing
  useEffect(() => {
    if (autoPlayTrigger && !isPlaying && !hasInteracted) {
      setHasInteracted(true);
      startShehnaiMusic();
    }
  }, [autoPlayTrigger, hasInteracted, isPlaying]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isRunningRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2">
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? 'संगीत बंद करें' : 'शहनाई संगीत शुरू करें'}
        title={isPlaying ? 'Mute Royal Shehnai' : 'Play Royal Wedding Shehnai Music'}
        className="group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full border-2 border-gold-antique bg-gradient-to-r from-maroon-deep via-maroon-burgundy to-maroon-darkest text-gold-champagne shadow-2xl hover:shadow-gold-md hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
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

        {/* Text and Soundwaves */}
        <div className="flex flex-col text-left">
          <span className="text-[11px] font-devanagari font-bold tracking-wider leading-normal py-0.5">
            {isPlaying ? 'शहनाई वादन' : 'संगीत चालू करें'}
          </span>
          <span className="text-[9px] font-cormorant text-gold-champagne/75 uppercase tracking-widest leading-none mt-0.5">
            {isPlaying ? 'Royal Shehnai' : 'Play Music'}
          </span>
        </div>

        {/* Animated Equalizer Bars */}
        {isPlaying ? (
          <div className="flex items-end gap-[2px] h-4 ml-1">
            <span className="w-[2.5px] bg-gold-champagne rounded-full animate-bounce h-2" style={{ animationDelay: '0.1s' }} />
            <span className="w-[2.5px] bg-gold-pale rounded-full animate-bounce h-4" style={{ animationDelay: '0.3s' }} />
            <span className="w-[2.5px] bg-gold-antique rounded-full animate-bounce h-3" style={{ animationDelay: '0.2s' }} />
          </div>
        ) : (
          <Music className="w-3.5 h-3.5 text-gold-antique/60 ml-0.5" />
        )}
      </button>
    </div>
  );
};

