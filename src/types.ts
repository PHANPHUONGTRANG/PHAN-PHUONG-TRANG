export type DifficultyLevel = 'nhan_biet' | 'thong_hieu' | 'van_dung' | 'tong_hop';

export type BookVolume = 'all' | 'tap1' | 'tap2';

export interface LessonItem {
  id: string;
  title: string;
  chapterId: string;
}

export interface Chapter {
  id: string;
  volume: 'tap1' | 'tap2';
  number: number;
  title: string;
  shortTitle: string;
  description: string;
  lessons: LessonItem[];
}

export interface QuestionOption {
  id: 'A' | 'B' | 'C' | 'D';
  text: string;
}

export interface Question {
  id: string;
  chapterId: string;
  lessonId: string;
  lessonTitle: string;
  volume: 'tap1' | 'tap2';
  level: 'nhan_biet' | 'thong_hieu' | 'van_dung';
  content: string;
  mathExpression?: string;
  options: QuestionOption[];
  correctAnswer: 'A' | 'B' | 'C' | 'D';
  explanation: string;
  formula?: string;
  tutorTip?: string;
}

export interface QuizConfig {
  studentName: string;
  gradeClass: string;
  volume: BookVolume;
  chapterId: string;
  lessonId: string;
  questionCount: number; // max 30
  level: DifficultyLevel;
  timerEnabled: boolean;
  timeLimitMinutes?: number;
}

export type QuizResult = QuizHistoryRecord;

export interface QuizHistoryRecord {
  id: string;
  timestamp: number;
  studentName: string;
  gradeClass: string;
  volumeTitle: string;
  chapterTitle: string;
  lessonTitle: string;
  levelTitle: string;
  score: number; // on scale of 10
  correctCount: number;
  totalQuestions: number;
  timeSpentSeconds: number;
}
