import React from 'react';
import { BookOpen, GraduationCap, Award, MessageSquareQuote, Sparkles } from 'lucide-react';

interface HeaderProps {
  currentTab: 'quiz' | 'formulas' | 'history' | 'ai_tutor';
  setCurrentTab: (tab: 'quiz' | 'formulas' | 'history' | 'ai_tutor') => void;
  studentName?: string;
  gradeClass?: string;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  setCurrentTab,
  studentName,
  gradeClass,
}) => {
  return (
    <header className="bg-white/95 backdrop-blur-xs border-b border-blue-100 sticky top-0 z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-3.5 gap-3">
          
          {/* Logo & Branding */}
          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-start">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20 ring-2 ring-blue-400/30">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-xl font-extrabold tracking-tight text-blue-950">
                    GIA SƯ TOÁN 9
                  </h1>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-orange-50 text-orange-700 border border-orange-200 shadow-2xs">
                    <Sparkles className="w-3 h-3 text-orange-500" />
                    KNTT
                  </span>
                </div>
                <p className="text-xs text-slate-600 flex items-center gap-1.5 font-medium">
                  <span>Tác giả:</span>
                  <span className="font-bold text-blue-700">Cô Phương Trang AI</span>
                  <span className="text-slate-300">•</span>
                  <span className="text-orange-600 font-semibold hidden sm:inline">SGK Kết Nối Tri Thức</span>
                </p>
              </div>
            </div>

            {/* Student info badge on mobile */}
            {studentName && (
              <div className="sm:hidden text-right text-xs">
                <p className="font-bold text-slate-800 truncate max-w-[120px]">{studentName}</p>
                <p className="text-[11px] font-semibold text-orange-600">{gradeClass ? `Lớp ${gradeClass}` : 'Toán 9'}</p>
              </div>
            )}
          </div>

          {/* Navigation & Active Student Pill */}
          <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto justify-between sm:justify-end">
            <nav className="flex items-center gap-1 bg-blue-50/70 p-1 rounded-xl border border-blue-100 text-xs font-medium w-full sm:w-auto overflow-x-auto">
              <button
                type="button"
                onClick={() => setCurrentTab('quiz')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                  currentTab === 'quiz'
                    ? 'bg-white text-blue-800 font-bold shadow-xs border border-blue-200/60'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-white/60'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-600" />
                <span>Luyện đề</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentTab('formulas')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                  currentTab === 'formulas'
                    ? 'bg-white text-blue-800 font-bold shadow-xs border border-blue-200/60'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-white/60'
                }`}
              >
                <Award className="w-3.5 h-3.5 text-orange-500" />
                <span>Sổ tay công thức</span>
              </button>

              <button
                type="button"
                onClick={() => setCurrentTab('ai_tutor')}
                className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                  currentTab === 'ai_tutor'
                    ? 'bg-white text-blue-800 font-bold shadow-xs border border-blue-200/60'
                    : 'text-slate-600 hover:text-blue-700 hover:bg-white/60'
                }`}
              >
                <MessageSquareQuote className="w-3.5 h-3.5 text-orange-500" />
                <span>Hỏi Cô Phương Trang</span>
              </button>
            </nav>

            {/* Desktop Student Badge */}
            {studentName && (
              <div className="hidden sm:flex items-center gap-2 pl-2 border-l border-blue-100 text-xs">
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center shadow-xs">
                  {studentName.charAt(0).toUpperCase()}
                </div>
                <div className="text-left">
                  <p className="font-bold text-slate-800 leading-tight">{studentName}</p>
                  <p className="text-[11px] font-semibold text-orange-600">{gradeClass ? `Lớp ${gradeClass}` : 'Lớp 9'}</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </header>
  );
};
