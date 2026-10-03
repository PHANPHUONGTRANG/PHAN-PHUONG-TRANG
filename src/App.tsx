/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { QuizConfig, Question } from './types';
import { generateQuizQuestions } from './data/questionSupplier';
import { Header } from './components/Header';
import { ConfigSection } from './components/ConfigSection';
import { QuizView } from './components/QuizView';
import { ResultView } from './components/ResultView';
import { FormulaView } from './components/FormulaView';
import { TutorChatView } from './components/TutorChatView';

export default function App() {
  // Navigation tabs
  const [currentTab, setCurrentTab] = useState<'quiz' | 'formulas' | 'history' | 'ai_tutor'>('quiz');
  
  // App view mode for the 'quiz' tab
  const [quizMode, setQuizMode] = useState<'config' | 'active' | 'result'>('config');

  // Quiz configuration
  const [config, setConfig] = useState<QuizConfig>(() => {
    const savedName = localStorage.getItem('giasu_student_name') || '';
    const savedClass = localStorage.getItem('giasu_student_class') || '';
    return {
      studentName: savedName,
      gradeClass: savedClass,
      volume: 'all',
      chapterId: 'all',
      lessonId: 'all',
      level: 'tong_hop',
      questionCount: 10,
      timerEnabled: true,
    };
  });

  // Current active questions and responses
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({});
  const [flaggedQuestions, setFlaggedQuestions] = useState<Record<string, boolean>>({});

  // Sync student credentials to local storage
  useEffect(() => {
    if (config.studentName) {
      localStorage.setItem('giasu_student_name', config.studentName);
    }
    if (config.gradeClass) {
      localStorage.setItem('giasu_student_class', config.gradeClass);
    }
  }, [config.studentName, config.gradeClass]);

  // Generate question set with GUARANTEED exact count (up to 30)
  const handleStartQuiz = () => {
    const selected = generateQuizQuestions(config);

    setActiveQuestions(selected);
    setUserAnswers({});
    setFlaggedQuestions({});
    setQuizMode('active');
    setCurrentTab('quiz');
  };

  const handleSelectAnswer = (questionId: string, answer: string) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleToggleFlag = (questionId: string) => {
    setFlaggedQuestions((prev) => ({
      ...prev,
      [questionId]: !prev[questionId],
    }));
  };

  const handleSubmitQuiz = () => {
    setQuizMode('result');
  };

  const handleRetryQuiz = () => {
    setUserAnswers({});
    setFlaggedQuestions({});
    setQuizMode('active');
  };

  const handleNewQuiz = () => {
    setQuizMode('config');
  };

  return (
    <div className="min-h-screen bg-slate-50/70 text-slate-900 flex flex-col font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* Universal Top Header */}
      <Header
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        studentName={config.studentName}
        gradeClass={config.gradeClass}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1 pb-16">
        {currentTab === 'quiz' && (
          <>
            {quizMode === 'config' && (
              <ConfigSection
                config={config}
                onChangeConfig={setConfig}
                onStartQuiz={handleStartQuiz}
              />
            )}

            {quizMode === 'active' && (
              <QuizView
                config={config}
                questions={activeQuestions}
                userAnswers={userAnswers}
                flaggedQuestions={flaggedQuestions}
                onSelectAnswer={handleSelectAnswer}
                onToggleFlag={handleToggleFlag}
                onSubmitQuiz={handleSubmitQuiz}
                onExitQuiz={handleNewQuiz}
              />
            )}

            {quizMode === 'result' && (
              <ResultView
                config={config}
                questions={activeQuestions}
                userAnswers={userAnswers}
                onRetryQuiz={handleRetryQuiz}
                onNewQuiz={handleNewQuiz}
              />
            )}
          </>
        )}

        {currentTab === 'formulas' && (
          <FormulaView
            onSelectChapterToPractice={(chapterId) => {
              setConfig((prev) => ({
                ...prev,
                chapterId,
                lessonId: 'all',
              }));
              setCurrentTab('quiz');
              setQuizMode('config');
            }}
          />
        )}

        {currentTab === 'ai_tutor' && (
          <TutorChatView
            studentName={config.studentName}
            gradeClass={config.gradeClass}
          />
        )}
      </main>

      {/* Footer copyright */}
      <footer className="bg-white border-t border-blue-100 py-4 text-center text-xs text-slate-500 print:hidden">
        <p className="font-bold text-blue-950">
          GIA SƯ TOÁN 9 • Tác giả: <span className="text-blue-700">Cô Phương Trang AI</span>
        </p>
        <p className="text-[11px] text-slate-400 mt-0.5">
          Tài liệu chuẩn theo Bộ Sách Giáo Khoa Toán 9 – Kết nối tri thức với cuộc sống (Tập 1 & Tập 2)
        </p>
      </footer>

    </div>
  );
}
