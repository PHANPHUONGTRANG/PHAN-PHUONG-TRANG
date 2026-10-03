import { Question, QuizConfig } from '../types';
import { QUESTIONS_VOLUME_1 } from './questionsVolume1';
import { QUESTIONS_VOLUME_2 } from './questionsVolume2';

// Base static pool combining both volumes
const combinedMap = new Map<string, Question>();
[...QUESTIONS_VOLUME_1, ...QUESTIONS_VOLUME_2].forEach((q) => {
  combinedMap.set(q.id, q);
});

export const QUESTION_BANK: Question[] = Array.from(combinedMap.values());

/**
 * Fisher-Yates array shuffle for uniform randomness
 */
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

/**
 * Generates dynamic variation questions if a student asks for up to 30 questions
 * on a single lesson that has fewer static questions.
 */
function createTopicVariation(base: Question, index: number): Question {
  return {
    ...base,
    id: `${base.id}_var_${index}_${Date.now().toString(36)}`,
    content: `${base.content} (Bài luyện tập ${index + 1})`,
  };
}

/**
 * Main quiz question generator
 * GUARANTEES that the returned question count EXACTLY matches config.questionCount (up to 30)
 */
export function generateQuizQuestions(config: QuizConfig): Question[] {
  const targetCount = Math.min(Math.max(config.questionCount, 1), 30);
  const selected: Question[] = [];
  const selectedIds = new Set<string>();

  const addQuestions = (candidates: Question[], limit: number) => {
    const shuffled = shuffleArray(candidates);
    for (const q of shuffled) {
      if (selected.length >= targetCount) break;
      if (!selectedIds.has(q.id)) {
        selected.push(q);
        selectedIds.add(q.id);
        if (selected.length >= limit) break;
      }
    }
  };

  // 1. Filter pool by user's selections
  let pool = [...QUESTION_BANK];

  if (config.volume !== 'all') {
    pool = pool.filter((q) => q.volume === config.volume);
  }

  if (config.chapterId !== 'all') {
    pool = pool.filter((q) => q.chapterId === config.chapterId);
  }

  if (config.lessonId !== 'all' && !config.lessonId.startsWith('all_')) {
    pool = pool.filter((q) => q.lessonId === config.lessonId);
  }

  // Distribution if "Tổng hợp 3 mức độ"
  if (config.level === 'tong_hop') {
    const nbPool = pool.filter((q) => q.level === 'nhan_biet');
    const thPool = pool.filter((q) => q.level === 'thong_hieu');
    const vdPool = pool.filter((q) => q.level === 'van_dung');

    const nbTarget = Math.max(1, Math.round(targetCount * 0.4));
    const thTarget = Math.max(1, Math.round(targetCount * 0.4));
    const vdTarget = Math.max(1, targetCount - nbTarget - thTarget);

    addQuestions(nbPool, nbTarget);
    addQuestions(thPool, selected.length + thTarget);
    addQuestions(vdPool, selected.length + vdTarget);
  } else {
    // Specific level
    const levelPool = pool.filter((q) => q.level === config.level);
    addQuestions(levelPool, targetCount);
  }

  // Tier 2: If still not enough, take from remaining in the same lesson pool
  if (selected.length < targetCount) {
    addQuestions(pool, targetCount);
  }

  // Tier 3: If still not enough, take from same chapter
  if (selected.length < targetCount && config.chapterId !== 'all') {
    const chapterPool = QUESTION_BANK.filter((q) => q.chapterId === config.chapterId);
    // Prioritize same level if specific level was chosen
    if (config.level !== 'tong_hop') {
      const sameLevelInChapter = chapterPool.filter((q) => q.level === config.level);
      addQuestions(sameLevelInChapter, targetCount);
    }
    if (selected.length < targetCount) {
      addQuestions(chapterPool, targetCount);
    }
  }

  // Tier 4: If still not enough, take from same volume
  if (selected.length < targetCount && config.volume !== 'all') {
    const volumePool = QUESTION_BANK.filter((q) => q.volume === config.volume);
    addQuestions(volumePool, targetCount);
  }

  // Tier 5: If still not enough, take from entire QUESTION_BANK
  if (selected.length < targetCount) {
    addQuestions(QUESTION_BANK, targetCount);
  }

  // Tier 6: Guaranteed fallback - if targetCount still not met, generate topic variations
  if (selected.length < targetCount && selected.length > 0) {
    let varIndex = 1;
    const baseList = [...selected];
    while (selected.length < targetCount) {
      for (const baseQ of baseList) {
        if (selected.length >= targetCount) break;
        const newQ = createTopicVariation(baseQ, varIndex++);
        selected.push(newQ);
      }
    }
  }

  // Final random shuffle so levels/topics are naturally distributed
  return shuffleArray(selected).slice(0, targetCount);
}
