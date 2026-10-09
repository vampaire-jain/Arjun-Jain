import { useState, useEffect } from 'react';
import {
  TYPING_SPEED,
  DELETING_SPEED,
  WORD_PAUSE,
  DELETE_PAUSE,
} from '../config';

interface TypewriterProps {
  fixedPrefix?: string;
  className?: string;
  cursorClassName?: string;
}

const WORDS = ['Agarbatti', 'Dhoopbatti'];

export default function Typewriter({
  fixedPrefix = 'Choose your',
  className = '',
  cursorClassName = 'text-[#C9A86A]',
}: TypewriterProps) {
  // Check for reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  // Word index: 0 is "Agarbatti", 1 is "Dhoopbatti"
  const [wordIndex, setWordIndex] = useState(0);
  // Current text of the changing word (starts with full first word as requested)
  const [currentWordText, setCurrentWordText] = useState(WORDS[0]);
  // State: 'pausing_after_type' | 'deleting' | 'pausing_after_delete' | 'typing'
  const [phase, setPhase] = useState<'pausing_after_type' | 'deleting' | 'pausing_after_delete' | 'typing'>(
    'pausing_after_type'
  );

  useEffect(() => {
    if (prefersReducedMotion) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    const targetWord = WORDS[wordIndex];

    switch (phase) {
      case 'pausing_after_type': {
        // STEP 2 & 6: Word is fully typed, pause before deleting
        timeoutId = setTimeout(() => {
          setPhase('deleting');
        }, WORD_PAUSE);
        break;
      }

      case 'deleting': {
        // STEP 3: Delete one character from right to left
        if (currentWordText.length > 0) {
          timeoutId = setTimeout(() => {
            setCurrentWordText((prev) => prev.slice(0, -1));
          }, DELETING_SPEED);
        } else {
          // STEP 4: Word is completely deleted, pause briefly
          setPhase('pausing_after_delete');
        }
        break;
      }

      case 'pausing_after_delete': {
        // STEP 4: Pause after deletion, then advance to next word
        timeoutId = setTimeout(() => {
          setWordIndex((prev) => (prev + 1) % WORDS.length);
          setPhase('typing');
        }, DELETE_PAUSE);
        break;
      }

      case 'typing': {
        // STEP 5: Type the next word one character at a time
        if (currentWordText.length < targetWord.length) {
          timeoutId = setTimeout(() => {
            setCurrentWordText(targetWord.slice(0, currentWordText.length + 1));
          }, TYPING_SPEED);
        } else {
          // Finished typing this word, transition to pause
          setPhase('pausing_after_type');
        }
        break;
      }
    }

    return () => clearTimeout(timeoutId);
  }, [phase, currentWordText, wordIndex, prefersReducedMotion]);

  if (prefersReducedMotion) {
    return (
      <span className={className}>
        <span>{fixedPrefix} </span>
        <span className="text-[#E2C799]">Agarbatti &amp; Dhoopbatti</span>
      </span>
    );
  }

  return (
    <span className={className} aria-live="polite">
      {/* The fixed text: "Choose your " NEVER disappears */}
      <span className="text-[#FBF8F3]">{fixedPrefix} </span>
      {/* The dynamically typed/deleted product word */}
      <span className="text-[#E2C799] inline-block font-normal">
        {currentWordText}
      </span>
      {/* Blinking typewriter caret */}
      <span
        className={`inline-block font-thin ml-0.5 animate-pulse ${cursorClassName}`}
        aria-hidden="true"
      >
        |
      </span>
    </span>
  );
}
