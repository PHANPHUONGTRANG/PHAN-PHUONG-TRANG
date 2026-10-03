import confetti from 'canvas-confetti';

/**
 * Web Audio API synthesizer for sound effects
 * Guarantees zero latency, zero 404 errors, and full offline compatibility.
 */

let audioCtx: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  try {
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtxClass) {
        audioCtx = new AudioCtxClass();
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  } catch (e) {
    console.warn('AudioContext not available:', e);
    return null;
  }
}

/**
 * ÂM THANH CHÚC MỪNG MẠNH MẼ, HOÀNH TRÁNG (Grand Fanfare & Victory Chimes)
 * Triumphant brass & trumpet fanfare with rich celebratory harmonics
 */
export function playCelebrationSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // Notes for celebratory fanfare: C4, E4, G4, C5, E5, G5
  // Triad crescendo + trumpet fanfare
  const fanfareNotes = [
    { freq: 261.63, start: 0.00, dur: 0.12, type: 'triangle' as OscillatorType, vol: 0.35 },
    { freq: 329.63, start: 0.10, dur: 0.12, type: 'triangle' as OscillatorType, vol: 0.40 },
    { freq: 392.00, start: 0.20, dur: 0.15, type: 'triangle' as OscillatorType, vol: 0.45 },
    { freq: 523.25, start: 0.35, dur: 0.22, type: 'sawtooth' as OscillatorType, vol: 0.50 },
    { freq: 659.25, start: 0.55, dur: 0.25, type: 'sawtooth' as OscillatorType, vol: 0.55 },
    { freq: 783.99, start: 0.75, dur: 0.55, type: 'sawtooth' as OscillatorType, vol: 0.60 },
    { freq: 1046.50, start: 0.75, dur: 0.70, type: 'sine' as OscillatorType, vol: 0.45 }, // High C spark
  ];

  fanfareNotes.forEach((note) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = note.type;
    osc.frequency.setValueAtTime(note.freq, now + note.start);

    // Filter to warm up the trumpet sound
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2200, now + note.start);

    gain.gain.setValueAtTime(0.001, now + note.start);
    gain.gain.exponentialRampToValueAtTime(note.vol, now + note.start + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + note.start + note.dur);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + note.start);
    osc.stop(now + note.start + note.dur + 0.05);
  });

  // Add rich celebratory bell shimmer
  const bellFreqs = [1046.5, 1318.5, 1567.98, 2093.0];
  bellFreqs.forEach((freq, idx) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, now + 0.75 + idx * 0.06);

    gain.gain.setValueAtTime(0.001, now + 0.75 + idx * 0.06);
    gain.gain.linearRampToValueAtTime(0.2, now + 0.75 + idx * 0.06 + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.75 + idx * 0.06 + 0.6);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + 0.75 + idx * 0.06);
    osc.stop(now + 0.75 + idx * 0.06 + 0.7);
  });
}

/**
 * ÂM THANH NHẸ NHÀNG KHÍCH LỆ (Gentle, warm, encouraging chime)
 * Soft warm piano / marimba notes that uplift and motivate without harshness
 */
export function playEncouragementSound() {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;

  // Gentle encouraging chord (D4 -> F#4 -> A4 -> B4)
  const notes = [
    { freq: 293.66, delay: 0.00, dur: 0.45 },
    { freq: 369.99, delay: 0.12, dur: 0.50 },
    { freq: 440.00, delay: 0.24, dur: 0.65 },
    { freq: 493.88, delay: 0.38, dur: 0.85 },
  ];

  notes.forEach((item) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(item.freq, now + item.delay);

    gain.gain.setValueAtTime(0.001, now + item.delay);
    gain.gain.linearRampToValueAtTime(0.22, now + item.delay + 0.04);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + item.delay + item.dur);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(now + item.delay);
    osc.stop(now + item.delay + item.dur + 0.05);
  });
}

/**
 * TUNG BÔNG TUNG HOA (Confetti Celebration Shower)
 * Launches vibrant celebration confetti with blue, orange, gold, and white particles
 */
export function triggerCelebrationConfetti() {
  try {
    // Center cannon blast
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#2563eb', '#f97316', '#38bdf8', '#fbbf24', '#ffffff', '#ea580c'],
      disableForReducedMotion: true,
    });

    // Side left burst
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0.1, y: 0.7 },
        colors: ['#2563eb', '#f97316', '#38bdf8', '#fbbf24'],
      });
    }, 150);

    // Side right burst
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 0.9, y: 0.7 },
        colors: ['#2563eb', '#f97316', '#38bdf8', '#fbbf24'],
      });
    }, 300);
  } catch (err) {
    console.warn('Confetti error:', err);
  }
}
