import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

// ─────────────────────────────────────────────────────────────────────────────
// MUSIC PLAYER – Jain Namokar Mantra Audio Player
// Uses Web Audio API to synthesize a devotional Namokar Mantra melody.
// Falls back gracefully if audio is unavailable.
// No autoplay – user must click to start music.
// ─────────────────────────────────────────────────────────────────────────────

interface MusicPlayerProps {
  autoPlayTrigger?: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ autoPlayTrigger }) => {
  const { t } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const isRunningRef = useRef(false);
  const timerRef = useRef<number | null>(null);
  const droneNodesRef = useRef<AudioNode[]>([]);

  // ─── Namokar Mantra inspired melody ─────────────────────────────────────
  // The Namokar Mantra is chanted in a pentatonic scale with a devotional drone.
  // Notes approximate the traditional Jain chanting scale (Sa Re Ga Pa Dha – Bhairav feel)
  const namokarNotes = [
    261.63, // Sa (C4)
    277.18, // Komal Re (Db4)  ← Bhairav characteristic
    311.13, // Komal Ga (Eb4)
    349.23, // Ma (F4)
    392.0,  // Pa (G4)
    415.30, // Komal Dha (Ab4) ← Bhairav characteristic
    493.88, // Ni (B4)
    523.25, // Tar Sa (C5)
  ];

  // Namokar syllable-inspired melodic sequence (devotional, meditative pace)
  const namokarMelody = [
    // "Na-mo Ar-i-han-ta-nam"
    { n: 0, d: 0.7 },  // Na
    { n: 2, d: 0.5 },  // mo
    { n: 4, d: 0.9 },  // A
    { n: 3, d: 0.6 },  // ri
    { n: 2, d: 0.5 },  // han
    { n: 1, d: 0.6 },  // ta
    { n: 0, d: 1.2 },  // nam
    // "Na-mo Si-dha-nam"
    { n: 2, d: 0.6 },  // Na
    { n: 4, d: 0.5 },  // mo
    { n: 5, d: 0.7 },  // Si
    { n: 4, d: 0.5 },  // dha
    { n: 2, d: 1.2 },  // nam
    // "Na-mo A-ya-ri-ya-nam"
    { n: 0, d: 0.6 },  // Na
    { n: 2, d: 0.5 },  // mo
    { n: 4, d: 0.6 },  // A
    { n: 5, d: 0.5 },  // ya
    { n: 7, d: 0.7 },  // ri
    { n: 5, d: 0.5 },  // ya
    { n: 4, d: 1.3 },  // nam
    // "Na-mo U-va-jjha-ya-nam"
    { n: 2, d: 0.6 },  // Na
    { n: 4, d: 0.5 },  // mo
    { n: 5, d: 0.6 },  // U
    { n: 4, d: 0.5 },  // va
    { n: 3, d: 0.6 },  // jjha
    { n: 2, d: 0.5 },  // ya
    { n: 0, d: 1.4 },  // nam
    // "Na-mo Lo-e Sa-vva Sa-hu-nam" (rising resolve)
    { n: 0, d: 0.5 },
    { n: 2, d: 0.5 },
    { n: 4, d: 0.6 },
    { n: 5, d: 0.6 },
    { n: 7, d: 0.8 },
    { n: 5, d: 0.5 },
    { n: 4, d: 0.5 },
    { n: 2, d: 0.5 },
    { n: 0, d: 2.0 },  // final resolve on Sa
  ];

  const startMusic = useCallback(() => {
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioCtx();
      }
      if (audioContextRef.current.state === 'suspended') {
        audioContextRef.current.resume();
      }

      const ctx = audioContextRef.current;
      isRunningRef.current = true;
      setIsPlaying(true);

      // ─── Tanpura Drone – Sa + Pa + Sa (octave) ───────────────────────
      const droneMaster = ctx.createGain();
      droneMaster.gain.setValueAtTime(0.035, ctx.currentTime);
      droneMaster.connect(ctx.destination);

      const createDroneOsc = (freq: number, type: OscillatorType, gain: number) => {
        const osc = ctx.createOscillator();
        const g = ctx.createGain();
        osc.type = type;
        osc.frequency.setValueAtTime(freq, ctx.currentTime);
        g.gain.setValueAtTime(gain, ctx.currentTime);
        osc.connect(g);
        g.connect(droneMaster);
        osc.start();
        droneNodesRef.current.push(osc, g);
        return osc;
      };

      createDroneOsc(130.81, 'sawtooth', 0.5);  // Mandra Sa
      createDroneOsc(196.0, 'sine', 0.4);         // Mandra Pa
      createDroneOsc(261.63, 'sine', 0.3);         // Madhya Sa
      droneNodesRef.current.push(droneMaster);

      // ─── Main Chanting Melody ─────────────────────────────────────────
      let stepIndex = 0;

      const playNextNote = () => {
        if (!isRunningRef.current || !audioContextRef.current) return;

        const step = namokarMelody[stepIndex];
        const freq = namokarNotes[step.n];
        const now = ctx.currentTime;

        // Soft sarangi/harmonium-style tone (suitable for mantra chanting)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const noteGain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc1.type = 'triangle';
        osc2.type = 'sine';
        osc1.frequency.setValueAtTime(freq, now);
        osc2.frequency.setValueAtTime(freq * 2.001, now); // octave shimmer

        // Warm low-pass for harmonium-like tone
        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(1800, now);
        filter.Q.setValueAtTime(0.7, now);

        // ADSR envelope – gentle devotional feel
        noteGain.gain.setValueAtTime(0, now);
        noteGain.gain.linearRampToValueAtTime(0.07, now + 0.08);
        noteGain.gain.setValueAtTime(0.06, now + step.d * 0.6);
        noteGain.gain.linearRampToValueAtTime(0, now + step.d * 0.95);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(noteGain);
        noteGain.connect(ctx.destination);

        osc1.start(now);
        osc2.start(now);
        osc1.stop(now + step.d);
        osc2.stop(now + step.d);

        stepIndex = (stepIndex + 1) % namokarMelody.length;
        timerRef.current = window.setTimeout(playNextNote, step.d * 1000);
      };

      playNextNote();
    } catch {
      // Audio API unavailable – silent fail
    }
  }, []);

  const stopMusic = useCallback(() => {
    isRunningRef.current = false;
    setIsPlaying(false);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    // Disconnect drone nodes
    droneNodesRef.current.forEach((node) => {
      try {
        if (node instanceof OscillatorNode) node.stop();
      } catch {
        // already stopped
      }
    });
    droneNodesRef.current = [];

    if (audioContextRef.current && audioContextRef.current.state !== 'closed') {
      audioContextRef.current.suspend();
    }
  }, []);

  const toggleMusic = () => {
    setHasInteracted(true);
    if (isPlaying) {
      stopMusic();
    } else {
      startMusic();
    }
  };

  // If user clicked "आमंत्रण देखें", auto-start music (once, on first click)
  useEffect(() => {
    if (autoPlayTrigger && !isPlaying && !hasInteracted) {
      setHasInteracted(true);
      startMusic();
    }
  }, [autoPlayTrigger, hasInteracted, isPlaying, startMusic]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      isRunningRef.current = false;
      if (timerRef.current) clearTimeout(timerRef.current);
      droneNodesRef.current.forEach((node) => {
        try {
          if (node instanceof OscillatorNode) node.stop();
        } catch {
          // silent
        }
      });
      if (audioContextRef.current) {
        audioContextRef.current.close().catch(() => {});
      }
    };
  }, []);

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2">
      <button
        onClick={toggleMusic}
        aria-label={isPlaying ? t.musicStopBtn : t.musicPlayBtn}
        title={isPlaying ? t.musicStopBtn : t.musicPlayBtn}
        className="group relative flex items-center gap-2.5 px-3 sm:px-4 py-2.5 rounded-full border-2 border-gold-antique bg-gradient-to-r from-maroon-deep via-maroon-burgundy to-maroon-darkest text-gold-champagne shadow-2xl hover:shadow-gold-md hover:scale-105 active:scale-95 transition-all duration-300 backdrop-blur-md"
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
            {isPlaying ? t.musicPlayingLabel : t.musicStoppedLabel}
          </span>
          <span className="text-[9px] font-cormorant text-gold-champagne/75 uppercase tracking-widest leading-none mt-0.5">
            {isPlaying ? t.musicPlayingSub : t.musicStoppedSub}
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
