import React, { useState, useEffect } from 'react';
import { Question, QuizConfig } from '../types';
import { 
  Clock, 
  ChevronLeft, 
  ChevronRight, 
  Send, 
  AlertTriangle,
  Sparkles,
  Bookmark,
  Volume2,
  VolumeX,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Lightbulb,
  Award
} from 'lucide-react';
import { playCelebrationSound, playEncouragementSound, triggerCelebrationConfetti } from '../utils/audio';

interface QuizViewProps {
  config: QuizConfig;
  questions: Question[];
  userAnswers: Record<string, string>;
  flaggedQuestions: Record<string, boolean>;
  onSelectAnswer: (questionId: string, answer: string) => void;
  onToggleFlag: (questionId: string) => void;
  onSubmitQuiz: () => void;
  onExitQuiz: () => void;
}

export const QuizView: React.FC<QuizViewProps> = ({
  config,
  questions,
  userAnswers,
  flaggedQuestions,
  onSelectAnswer,
  onToggleFlag,
  onSubmitQuiz,
  onExitQuiz,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [lastFeedback, setLastFeedback] = useState<{ isCorrect: boolean; qId: string } | null>(null);
  const [showHint, setShowHint] = useState(false);

  // Timer
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  const currentQ = questions[currentIndex];
  const answeredCount = Object.keys(userAnswers).length;
  const totalCount = questions.length;
  const unansweredCount = totalCount - answeredCount;

  const currentAnswer = currentQ ? userAnswers[currentQ.id] : undefined;
  const isCurrentFlagged = currentQ ? Boolean(flaggedQuestions[currentQ.id]) : false;

  // Handle option select with sound & confetti
  const handleAnswerClick = (optId: string) => {
    if (!currentQ) return;
    const isCorrect = optId === currentQ.correctAnswer;

    // Record answer
    onSelectAnswer(currentQ.id, optId);
    setLastFeedback({ isCorrect, qId: currentQ.id });

    // Audio & Confetti triggers as requested:
    // "KHI HỌC SINH TRẢ LỜI ĐÚNG HÃY CÓ ÂM THANH CHÚC MỪNG MẠNH MẼ, HOÀNH TRÁNG. CÓ TUNG BÔNG TUNG HOA.
    //  KHI TRẢ LỜI SAI CÓ ÂM THANH NHẸ NHÀNG KHÍCH LỆ HỌC SINH."
    if (soundEnabled) {
      if (isCorrect) {
        playCelebrationSound();
        triggerCelebrationConfetti();
      } else {
        playEncouragementSound();
      }
    } else if (isCorrect) {
      triggerCelebrationConfetti();
    }
  };

  // Reset hint state when navigating questions
  useEffect(() => {
    setShowHint(false);
  }, [currentIndex]);

  const getLevelBadge = (level: string) => {
    switch (level) {
      case 'nhan_biet':
        return { text: 'Nhận biết', bg: 'bg-blue-50 text-blue-700 border-blue-200' };
      case 'thong_hieu':
        return { text: 'Thông hiểu', bg: 'bg-orange-50 text-orange-700 border-orange-200' };
      case 'van_dung':
        return { text: 'Vận dụng', bg: 'bg-amber-50 text-amber-700 border-amber-200' };
      default:
        return { text: 'Toán 9', bg: 'bg-slate-50 text-slate-700 border-slate-200' };
    }
  };

  if (!currentQ) {
    return (
      <div className="max-w-md mx-auto my-12 p-6 bg-white rounded-3xl text-center shadow-sm border border-blue-100">
        <AlertTriangle className="w-10 h-10 text-orange-500 mx-auto mb-3" />
        <p className="text-slate-800 font-bold mb-4">Không tìm thấy câu hỏi phù hợp.</p>
        <button
          onClick={onExitQuiz}
          className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm shadow-md"
        >
          Quay lại cấu hình
        </button>
      </div>
    );
  }

  const badge = getLevelBadge(currentQ.level);
  const isAnsweredThisQ = currentAnswer !== undefined;
  const isThisQCorrect = currentAnswer === currentQ.correctAnswer;

  return (
    <div className="max-w-5xl mx-auto py-4 sm:py-6 px-4 sm:px-6">
      
      {/* Top Test Navigation Bar - Bright Blue & Orange */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-sm border border-blue-100 mb-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
          <div className="text-left">
            <span className="text-[11px] font-bold tracking-wider text-blue-600 uppercase">Học sinh ôn tập</span>
            <h3 className="text-base font-extrabold text-blue-950 leading-tight">
              {config.studentName} {config.gradeClass ? `• Lớp ${config.gradeClass}` : ''}
            </h3>
          </div>
          <div className="h-8 w-px bg-blue-100 hidden sm:block"></div>
          <div className="text-left hidden sm:block">
            <span className="text-[11px] font-bold tracking-wider text-slate-400 uppercase">Tiến độ bài làm</span>
            <p className="text-sm font-extrabold text-orange-600">
              Đã làm {answeredCount}/{totalCount} câu
            </p>
          </div>
        </div>

        {/* Timer, Sound Toggle & Controls */}
        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto justify-between sm:justify-end flex-wrap">
          {/* Sound Toggle Button */}
          <button
            type="button"
            onClick={() => setSoundEnabled(!soundEnabled)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-bold transition-all ${
              soundEnabled
                ? 'bg-blue-50 text-blue-700 border-blue-200 hover:bg-blue-100'
                : 'bg-slate-100 text-slate-400 border-slate-200 hover:bg-slate-200'
            }`}
            title={soundEnabled ? 'Đang bật âm thanh chúc mừng/khích lệ' : 'Đã tắt âm thanh'}
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-blue-600" /> : <VolumeX className="w-4 h-4 text-slate-400" />}
            <span className="hidden md:inline">{soundEnabled ? 'Âm thanh: BẬT' : 'Âm thanh: TẮT'}</span>
          </button>

          {config.timerEnabled && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-orange-50 border border-orange-200 text-orange-800 rounded-xl font-mono text-sm font-extrabold shadow-2xs">
              <Clock className="w-4 h-4 text-orange-600 animate-pulse" />
              <span>{formatTime(elapsedSeconds)}</span>
            </div>
          )}

          <button
            type="button"
            onClick={() => onToggleFlag(currentQ.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
              isCurrentFlagged
                ? 'bg-orange-500 text-white border-orange-600 shadow-xs'
                : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isCurrentFlagged ? 'fill-current' : ''}`} />
            <span className="hidden sm:inline">{isCurrentFlagged ? 'Đã đánh dấu' : 'Đánh dấu'}</span>
          </button>

          <button
            type="button"
            onClick={() => setShowConfirmModal(true)}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 transition-all active:scale-98"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Nộp bài</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-start">
        
        {/* Main Question Area (3 cols) */}
        <div className="lg:col-span-3 space-y-4 sm:space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-blue-100">
            
            {/* Question Meta badges */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-extrabold bg-blue-600 text-white px-3 py-1 rounded-xl shadow-xs">
                  Câu {currentIndex + 1} / {totalCount}
                </span>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-lg border ${badge.bg}`}>
                  {badge.text}
                </span>
              </div>
              <span className="text-xs text-slate-500 font-medium truncate max-w-[250px] sm:max-w-none">
                {currentQ.lessonTitle}
              </span>
            </div>

            {/* Question Content */}
            <div className="text-base sm:text-lg font-bold text-slate-900 leading-relaxed mb-6">
              {currentQ.content}
            </div>

            {/* Options List */}
            <div className="space-y-3">
              {currentQ.options.map((opt) => {
                const isSelected = currentAnswer === opt.id;
                const isCorrectOption = opt.id === currentQ.correctAnswer;
                
                // Styling when answered
                let cardStyle = 'border-slate-200 bg-white hover:bg-slate-50 text-slate-800';
                let circleStyle = 'bg-slate-100 text-slate-700 border-slate-300';

                if (isSelected) {
                  if (isCorrectOption) {
                    cardStyle = 'border-blue-500 bg-blue-50/80 text-blue-950 ring-2 ring-blue-400/30 shadow-xs';
                    circleStyle = 'bg-blue-600 text-white shadow-xs';
                  } else {
                    cardStyle = 'border-orange-400 bg-orange-50/70 text-orange-950 ring-2 ring-orange-400/30 shadow-xs';
                    circleStyle = 'bg-orange-500 text-white shadow-xs';
                  }
                }

                return (
                  <button
                    key={opt.id}
                    type="button"
                    onClick={() => handleAnswerClick(opt.id)}
                    className={`w-full p-4 rounded-2xl border text-left flex items-start gap-3.5 transition-all cursor-pointer ${cardStyle}`}
                  >
                    <div
                      className={`w-7 h-7 rounded-full flex items-center justify-center font-bold text-xs shrink-0 mt-0.5 transition-all border ${circleStyle}`}
                    >
                      {opt.id}
                    </div>
                    <div className="text-sm sm:text-base leading-snug font-medium pt-0.5 flex-1">
                      {opt.text}
                    </div>
                    {isSelected && (
                      <div className="shrink-0 mt-0.5">
                        {isCorrectOption ? (
                          <CheckCircle2 className="w-5 h-5 text-blue-600 animate-bounce" />
                        ) : (
                          <XCircle className="w-5 h-5 text-orange-500" />
                        )}
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Instant Audio Feedback & Encouragement Banner */}
            {isAnsweredThisQ && (
              <div className="mt-5 pt-4 border-t border-slate-100">
                {isThisQCorrect ? (
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 flex items-start gap-3 shadow-xs">
                    <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Sparkles className="w-5 h-5 text-amber-300 animate-spin" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-blue-900 flex items-center gap-1.5">
                        <span>🎉 CHÚC MỪNG EM! ĐÁP ÁN CHÍNH XÁC!</span>
                      </h4>
                      <p className="text-xs text-blue-800 mt-1 leading-relaxed">
                        Cô Phương Trang khen ngợi em đã tư duy rất chuẩn xác! Hãy tiếp tục duy trì phong độ xuất sắc này nhé!
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 flex items-start gap-3 shadow-xs">
                    <div className="w-9 h-9 rounded-xl bg-orange-500 text-white flex items-center justify-center shrink-0 shadow-xs">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-orange-900 flex items-center gap-1.5">
                        <span>🌱 CHƯA CHÍNH XÁC RỒI NÈ EM! ĐỪNG NẢN LÒNG NHÉ!</span>
                      </h4>
                      <p className="text-xs text-orange-800 mt-1 leading-relaxed">
                        Cô Phương Trang khích lệ em: Toán 9 cần sự kiên trì và tỉ mỉ. Em có thể bấm xem gợi ý bên dưới để ôn lại công thức và làm tốt câu sau nhé!
                      </p>
                    </div>
                  </div>
                )}

                {/* Toggle Hint & Formula button */}
                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setShowHint(!showHint)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 bg-blue-50/80 px-3 py-1.5 rounded-xl border border-blue-200 transition-all cursor-pointer"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-orange-500" />
                    <span>{showHint ? 'Ẩn lời giải & gợi ý' : 'Xem gợi ý giải nhanh từ Cô Phương Trang'}</span>
                  </button>
                </div>

                {showHint && (
                  <div className="mt-3 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                    {currentQ.formula && (
                      <div className="font-mono bg-white p-2 rounded-xl border border-slate-200 text-blue-900 font-bold">
                        📌 Công thức trọng tâm: {currentQ.formula}
                      </div>
                    )}
                    <p className="text-slate-700 leading-relaxed">
                      <strong>💡 Lời giải chi tiết:</strong> {currentQ.explanation}
                    </p>
                    {currentQ.tutorTip && (
                      <p className="text-orange-700 font-medium italic">
                        💬 Lời khuyên của cô: {currentQ.tutorTip}
                      </p>
                    )}
                  </div>
                )}
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex items-center justify-between mt-8 pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                disabled={currentIndex === 0}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  currentIndex === 0
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-slate-700 hover:bg-blue-50 active:scale-95'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Câu trước</span>
              </button>

              <div className="text-xs text-slate-500 font-bold">
                {answeredCount} / {totalCount} câu đã làm
              </div>

              <button
                type="button"
                onClick={() => setCurrentIndex((prev) => Math.min(totalCount - 1, prev + 1))}
                disabled={currentIndex === totalCount - 1}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  currentIndex === totalCount - 1
                    ? 'text-slate-300 cursor-not-allowed'
                    : 'text-blue-700 hover:bg-blue-50 active:scale-95'
                }`}
              >
                <span>Câu tiếp theo</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

          </div>
        </div>

        {/* Sidebar Question Palette (1 col) */}
        <div className="space-y-4">
          <div className="bg-white rounded-3xl p-5 shadow-sm border border-blue-100">
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-blue-900 mb-3 flex items-center justify-between">
              <span>Bảng câu hỏi ({totalCount} câu)</span>
              <span className="font-bold text-orange-600">{answeredCount}/{totalCount}</span>
            </h4>

            {/* Grid of question buttons */}
            <div className="grid grid-cols-5 gap-2">
              {questions.map((q, idx) => {
                const isAnswered = Boolean(userAnswers[q.id]);
                const isFlagged = Boolean(flaggedQuestions[q.id]);
                const isCurrent = idx === currentIndex;

                let btnClass = 'bg-slate-50 text-slate-600 hover:bg-blue-50 border-slate-200';

                if (isAnswered) {
                  btnClass = 'bg-blue-600 text-white font-extrabold border-blue-700 shadow-2xs';
                }
                if (isCurrent) {
                  btnClass += ' ring-2 ring-orange-500 ring-offset-2';
                }

                return (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`relative h-9 rounded-xl border text-xs font-bold transition-all flex items-center justify-center cursor-pointer ${btnClass}`}
                  >
                    <span>{idx + 1}</span>
                    {isFlagged && (
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-orange-500 rounded-full ring-2 ring-white"></span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Legend */}
            <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5 text-[11px] text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-md bg-blue-600"></div>
                <span>Đã làm ({answeredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-md bg-slate-100 border border-slate-300"></div>
                <span>Chưa làm ({unansweredCount})</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-orange-500"></div>
                <span>Đã đánh dấu xem lại</span>
              </div>
            </div>

            {/* Bottom button to submit */}
            <button
              type="button"
              onClick={() => setShowConfirmModal(true)}
              className="mt-5 w-full py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md shadow-orange-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Nộp bài & Nhận điểm</span>
            </button>
          </div>

          {/* Quick teacher quote */}
          <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100 text-xs">
            <p className="font-bold text-blue-900 mb-1 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-orange-500" />
              Lời nhắn từ Cô Phương Trang:
            </p>
            <p className="text-slate-600 leading-relaxed italic">
              "Bình tĩnh đọc kỹ đề bài, chú ý các điều kiện có nghĩa của căn thức, hệ số của hệ phương trình và các định lí hình học em nhé!"
            </p>
          </div>
        </div>

      </div>

      {/* Confirmation Modal */}
      {showConfirmModal && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-blue-100 text-center space-y-4 animate-in fade-in zoom-in duration-200">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 text-orange-600 flex items-center justify-center mx-auto shadow-sm">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <div>
              <h3 className="text-lg font-extrabold text-slate-900">Xác nhận nộp bài?</h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Em đã hoàn thành <strong>{answeredCount}</strong> trên tổng số <strong>{totalCount}</strong> câu hỏi.
                {unansweredCount > 0 && (
                  <span className="block text-orange-600 font-bold mt-1">
                    Vẫn còn {unansweredCount} câu chưa chọn đáp án!
                  </span>
                )}
              </p>
            </div>

            <div className="flex items-center justify-center gap-3 pt-2">
              <button
                type="button"
                onClick={() => setShowConfirmModal(false)}
                className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-bold text-xs sm:text-sm hover:bg-slate-50 cursor-pointer"
              >
                Làm tiếp
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowConfirmModal(false);
                  onSubmitQuiz();
                }}
                className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs sm:text-sm shadow-md shadow-orange-500/20 cursor-pointer"
              >
                Nộp bài ngay
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
