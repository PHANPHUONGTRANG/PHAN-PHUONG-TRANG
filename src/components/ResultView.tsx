import React, { useState, useEffect } from 'react';
import { Question, QuizConfig } from '../types';
import { 
  Award, 
  CheckCircle2, 
  XCircle, 
  RotateCcw, 
  PlusCircle, 
  Printer, 
  Sparkles, 
  Clock, 
  User, 
  GraduationCap, 
  HelpCircle,
  MessageSquareQuote,
  Loader2,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { playCelebrationSound, playEncouragementSound, triggerCelebrationConfetti } from '../utils/audio';

interface ResultViewProps {
  config: QuizConfig;
  questions: Question[];
  userAnswers: Record<string, string>;
  onRetryQuiz: () => void;
  onNewQuiz: () => void;
}

export const ResultView: React.FC<ResultViewProps> = ({
  config,
  questions,
  userAnswers,
  onRetryQuiz,
  onNewQuiz,
}) => {
  const [expandedExplanations, setExpandedExplanations] = useState<Record<string, boolean>>({});
  const [aiExplanations, setAiExplanations] = useState<Record<string, string>>({});
  const [loadingAi, setLoadingAi] = useState<Record<string, boolean>>({});

  // Compute score
  let correctCount = 0;
  questions.forEach((q) => {
    if (userAnswers[q.id] === q.correctAnswer) {
      correctCount += 1;
    }
  });

  const totalQuestions = questions.length;
  const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 10 * 10) / 10 : 0;

  // Trigger celebration audio & confetti when finishing test
  useEffect(() => {
    if (score >= 7.0) {
      playCelebrationSound();
      triggerCelebrationConfetti();
    } else {
      playEncouragementSound();
    }
  }, [score]);

  // Grade classification
  const getFeedback = (s: number) => {
    if (s >= 9) {
      return {
        badge: 'Xuất sắc!',
        color: 'text-blue-800 bg-blue-50 border-blue-300',
        message: `Tuyệt vời lắm ${config.studentName}! Em đã nắm rất vững kiến thức và kỹ năng giải toán. Tiếp tục phát huy nhé!`,
      };
    }
    if (s >= 8) {
      return {
        badge: 'Giỏi',
        color: 'text-blue-700 bg-blue-50 border-blue-300',
        message: `Rất tốt! ${config.studentName} đã nắm chắc kiến thức trọng tâm. Hãy xem lại một vài câu sai để đạt điểm tối đa ở bài tới nhé!`,
      };
    }
    if (s >= 6.5) {
      return {
        badge: 'Khá',
        color: 'text-orange-700 bg-orange-50 border-orange-300',
        message: `Khá tốt! Em đã nắm được kiến thức nền tảng cơ bản, nhưng cần cẩn thận hơn ở các bước biến đổi và điều kiện xác định.`,
      };
    }
    if (s >= 5) {
      return {
        badge: 'Đạt yêu cầu',
        color: 'text-amber-700 bg-amber-50 border-amber-300',
        message: `Em cần ôn lại công thức trong mục "Sổ tay công thức" và luyện thêm các bài tập mức Thông hiểu và Vận dụng nhé!`,
      };
    }
    return {
      badge: 'Cần cố gắng',
      color: 'text-rose-700 bg-rose-50 border-rose-300',
      message: `Đừng nản lòng nhé ${config.studentName}! Toán 9 không hề khó nếu em nắm chắc bản chất. Hãy xem kỹ lời giải chi tiết của từng câu dưới đây cùng cô Phương Trang nhé!`,
    };
  };

  const feedback = getFeedback(score);

  const toggleExplanation = (qid: string) => {
    setExpandedExplanations((prev) => ({
      ...prev,
      [qid]: !prev[qid],
    }));
  };

  const requestAiTutorExplanation = async (q: Question) => {
    if (aiExplanations[q.id] || loadingAi[q.id]) return;

    setLoadingAi((prev) => ({ ...prev, [q.id]: true }));
    try {
      const res = await fetch('/api/tutor/explain', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          studentName: config.studentName,
          gradeClass: config.gradeClass,
          questionContent: q.content,
          options: q.options,
          userAnswer: userAnswers[q.id],
          correctAnswer: q.correctAnswer,
          explanation: q.explanation,
          lessonTitle: q.lessonTitle,
        }),
      });

      const data = await res.json();
      if (data && data.tutorResponse) {
        setAiExplanations((prev) => ({ ...prev, [q.id]: data.tutorResponse }));
        setExpandedExplanations((prev) => ({ ...prev, [q.id]: true }));
      }
    } catch (e) {
      console.error(e);
      setAiExplanations((prev) => ({
        ...prev,
        [q.id]: `Chào ${config.studentName}! Cô Phương Trang nhắc em xem kỹ phương pháp biến đổi chuẩn của câu này: ${q.explanation}`,
      }));
    } finally {
      setLoadingAi((prev) => ({ ...prev, [q.id]: false }));
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 space-y-8 print:p-0">
      
      {/* Printable certificate / result card */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-blue-100 relative overflow-hidden print:border-none print:shadow-none">
        
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-100">
          <div className="text-center sm:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold border border-orange-200 mb-2.5">
              <Award className="w-3.5 h-3.5 text-orange-500" />
              PHIẾU KẾT QUẢ ÔN TẬP TOÁN 9
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 tracking-tight">
              Báo Cáo Thành Tích Học Tập
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Gia Sư Toán 9 • Giáo viên hướng dẫn: <strong className="text-blue-700">Cô Phương Trang AI</strong>
            </p>
          </div>

          {/* Big Score Box */}
          <div className="flex flex-col items-center justify-center p-4 bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 text-white rounded-2xl w-32 h-32 shrink-0 shadow-md shadow-blue-500/25">
            <span className="text-[11px] font-bold text-blue-100 uppercase tracking-wider">Điểm số</span>
            <span className="text-4xl font-black tracking-tight text-white">
              {score}
            </span>
            <span className="text-[11px] font-medium text-blue-100">Thang điểm 10</span>
          </div>
        </div>

        {/* Student Meta Details */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-5 border-b border-slate-100 text-xs">
          <div>
            <span className="text-slate-400 font-medium block">Họ tên học sinh:</span>
            <span className="font-extrabold text-slate-800 text-sm">{config.studentName}</span>
          </div>
          <div>
            <span className="text-slate-400 font-medium block">Lớp học:</span>
            <span className="font-extrabold text-slate-800 text-sm">{config.gradeClass || 'Lớp 9'}</span>
          </div>
          <div>
            <span className="text-slate-400 font-medium block">Số câu đúng:</span>
            <span className="font-extrabold text-orange-600 text-sm">
              {correctCount} / {totalQuestions} câu
            </span>
          </div>
          <div>
            <span className="text-slate-400 font-medium block">Độ chính xác:</span>
            <span className="font-extrabold text-blue-700 text-sm">
              {totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0}%
            </span>
          </div>
        </div>

        {/* Cô Phương Trang's Personalized Feedback */}
        <div className="mt-6 bg-blue-50/50 border border-blue-100 rounded-2xl p-5">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2 font-extrabold text-blue-900 text-sm">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span>Nhận xét của Cô Phương Trang AI:</span>
            </div>
            <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold border ${feedback.color}`}>
              {feedback.badge}
            </span>
          </div>
          <p className="text-slate-700 text-sm leading-relaxed italic">
            "{feedback.message}"
          </p>
        </div>

        {/* Action buttons (hidden on print) */}
        <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-slate-100 print:hidden">
          <button
            type="button"
            onClick={handlePrint}
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-bold transition-all cursor-pointer"
          >
            <Printer className="w-4 h-4 text-slate-500" />
            <span>In phiếu điểm</span>
          </button>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onRetryQuiz}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-800 text-xs font-bold transition-all cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Làm lại bài này</span>
            </button>

            <button
              type="button"
              onClick={onNewQuiz}
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white text-xs font-bold transition-all shadow-md shadow-orange-500/20 cursor-pointer active:scale-98"
            >
              <PlusCircle className="w-4 h-4" />
              <span>Tạo đề ôn tập mới</span>
            </button>
          </div>
        </div>

      </div>

      {/* DETAILED QUESTION BREAKDOWN */}
      <div className="space-y-4">
        <h3 className="text-lg font-extrabold text-slate-900 flex items-center justify-between">
          <span>Chi tiết từng câu hỏi & Lời giải chuẩn SGK</span>
          <span className="text-xs text-slate-400 font-normal">
            Bấm vào để xem lời giải hoặc hỏi cô giáo AI
          </span>
        </h3>

        <div className="space-y-4">
          {questions.map((q, idx) => {
            const userAns = userAnswers[q.id];
            const isCorrect = userAns === q.correctAnswer;
            const isExpanded = Boolean(expandedExplanations[q.id]);
            const aiExplanation = aiExplanations[q.id];
            const isLoadingThis = Boolean(loadingAi[q.id]);

            return (
              <div
                key={q.id}
                className={`bg-white rounded-2xl p-5 border transition-all ${
                  isCorrect ? 'border-blue-200 shadow-xs' : 'border-orange-200 shadow-xs'
                }`}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2 py-1 rounded-md bg-slate-100 text-slate-700">
                      Câu {idx + 1}
                    </span>
                    {isCorrect ? (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        Chính xác
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1 text-xs font-bold text-orange-700 bg-orange-50 px-2.5 py-0.5 rounded-full border border-orange-200">
                        <XCircle className="w-3.5 h-3.5" />
                        Chưa đúng
                      </span>
                    )}
                  </div>

                  <span className="text-[11px] text-slate-400 truncate max-w-[200px]">
                    {q.lessonTitle}
                  </span>
                </div>

                {/* Content */}
                <p className="text-sm sm:text-base font-bold text-slate-800 mb-4">
                  {q.content}
                </p>

                {/* Options Review */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4 text-xs">
                  {q.options.map((opt) => {
                    const isSelected = userAns === opt.id;
                    const isRightOption = q.correctAnswer === opt.id;

                    let optStyle = 'border-slate-100 bg-slate-50/60 text-slate-600';
                    if (isRightOption) {
                      optStyle = 'border-blue-500 bg-blue-50 text-blue-950 font-bold';
                    } else if (isSelected && !isRightOption) {
                      optStyle = 'border-orange-400 bg-orange-50 text-orange-900 line-through';
                    }

                    return (
                      <div
                        key={opt.id}
                        className={`p-2.5 rounded-xl border flex items-center justify-between gap-2 ${optStyle}`}
                      >
                        <span className="flex items-center gap-2">
                          <strong className="w-5 h-5 rounded-full bg-white flex items-center justify-center border text-[10px]">
                            {opt.id}
                          </strong>
                          <span>{opt.text}</span>
                        </span>
                        {isRightOption && <span className="text-[10px] text-blue-700 font-bold">Đáp án đúng</span>}
                        {isSelected && !isRightOption && <span className="text-[10px] text-orange-700 font-bold">Em đã chọn</span>}
                      </div>
                    );
                  })}
                </div>

                {/* Buttons to toggle explanation and ask AI */}
                <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => toggleExplanation(q.id)}
                    className="flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 cursor-pointer"
                  >
                    <span>{isExpanded ? 'Ẩn lời giải' : 'Xem lời giải chi tiết'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => requestAiTutorExplanation(q)}
                    disabled={isLoadingThis}
                    className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-orange-50 hover:bg-orange-100 text-orange-700 border border-orange-200 text-xs font-bold transition-all cursor-pointer"
                  >
                    {isLoadingThis ? (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin text-orange-600" />
                        <span>Cô Phương Trang đang soạn...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-3.5 h-3.5 text-orange-500" />
                        <span>Hỏi Cô Phương Trang AI</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Detailed Standard Explanation */}
                {isExpanded && (
                  <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                    <div className="font-bold text-slate-800">
                      💡 Hướng dẫn giải chi tiết:
                    </div>
                    <p className="text-slate-700 leading-relaxed whitespace-pre-line">
                      {q.explanation}
                    </p>
                    {q.formula && (
                      <div className="pt-2 text-[11px] text-blue-800 font-mono font-semibold">
                        📌 Công thức áp dụng: {q.formula}
                      </div>
                    )}
                    {q.tutorTip && (
                      <div className="pt-1 text-[11px] text-orange-800 italic">
                        ⭐ Lời khuyên của cô: {q.tutorTip}
                      </div>
                    )}
                  </div>
                )}

                {/* Gemini AI Personalized Explanation */}
                {aiExplanation && (
                  <div className="mt-3 p-4 rounded-2xl bg-blue-50/70 border border-blue-200 text-xs space-y-2">
                    <div className="flex items-center gap-1.5 font-bold text-blue-900">
                      <Sparkles className="w-4 h-4 text-orange-500" />
                      <span>Cô Phương Trang AI hướng dẫn riêng cho {config.studentName}:</span>
                    </div>
                    <div className="text-slate-800 leading-relaxed whitespace-pre-line">
                      {aiExplanation}
                    </div>
                  </div>
                )}

              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
};
