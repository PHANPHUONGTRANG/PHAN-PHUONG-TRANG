import React, { useMemo } from 'react';
import { BookOpen, Sparkles, GraduationCap, CheckCircle2, Clock, ListOrdered, ArrowRight, Layers, HelpCircle } from 'lucide-react';
import { QuizConfig, BookVolume, DifficultyLevel } from '../types';
import { CHAPTERS } from '../data/curriculum';
import { QUESTION_BANK } from '../data/questions';

interface ConfigSectionProps {
  config: QuizConfig;
  onChangeConfig: (newConfig: QuizConfig) => void;
  onStartQuiz: () => void;
}

export const ConfigSection: React.FC<ConfigSectionProps> = ({
  config,
  onChangeConfig,
  onStartQuiz,
}) => {
  // Filter chapters based on chosen volume
  const filteredChapters = useMemo(() => {
    if (config.volume === 'all') return CHAPTERS;
    return CHAPTERS.filter((c) => c.volume === config.volume);
  }, [config.volume]);

  // Available lessons for current chapter
  const currentChapter = useMemo(() => {
    if (config.chapterId === 'all') return null;
    return CHAPTERS.find((c) => c.id === config.chapterId) || null;
  }, [config.chapterId]);

  // Calculate matching questions in bank
  const matchingQuestionCount = useMemo(() => {
    let pool = QUESTION_BANK;

    if (config.volume !== 'all') {
      pool = pool.filter((q) => q.volume === config.volume);
    }
    if (config.chapterId !== 'all') {
      pool = pool.filter((q) => q.chapterId === config.chapterId);
    }
    if (config.lessonId !== 'all' && !config.lessonId.startsWith('all_')) {
      pool = pool.filter((q) => q.lessonId === config.lessonId);
    }
    if (config.level !== 'tong_hop') {
      pool = pool.filter((q) => q.level === config.level);
    }

    return pool.length;
  }, [config.volume, config.chapterId, config.lessonId, config.level]);

  // Quick preset counts up to 30
  const presetCounts = [5, 10, 15, 20, 25, 30];

  const handleVolumeChange = (vol: BookVolume) => {
    onChangeConfig({
      ...config,
      volume: vol,
      chapterId: 'all',
      lessonId: 'all',
    });
  };

  const handleChapterChange = (chapterId: string) => {
    onChangeConfig({
      ...config,
      chapterId,
      lessonId: 'all',
    });
  };

  const isFormValid = config.studentName.trim().length > 0;

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6">
      {/* Banner introduction - Fresh Blue with Orange accents */}
      <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-800 rounded-3xl p-6 sm:p-8 text-white shadow-xl shadow-blue-900/10 mb-8 relative overflow-hidden">
        <div className="absolute -right-8 -bottom-10 opacity-10 pointer-events-none">
          <GraduationCap className="w-64 h-64 text-white" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center gap-2 bg-orange-500/90 border border-orange-400/50 px-3.5 py-1 rounded-full text-xs font-bold mb-3.5 shadow-sm text-white">
            <Sparkles className="w-3.5 h-3.5 text-amber-200" />
            Hệ thống ôn luyện thông minh Toán 9
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2 text-white">
            Gia Sư Toán 9 – Cô Phương Trang AI
          </h2>
          <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
            Chuẩn bám sát 100% Sách giáo khoa <strong>Toán 9 (Tập 1 & Tập 2) - Bộ sách Kết nối tri thức với cuộc sống</strong>. 
            Tùy chọn từng bài học, đảm bảo chính xác số lượng câu hỏi và âm thanh cổ vũ sôi động!
          </p>
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-blue-100/80 space-y-8">
        
        {/* PHẦN 1: THÔNG TIN HỌC SINH VÀ LỚP HỌC */}
        <section>
          <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
              1
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Thông tin học sinh & Lớp học</h3>
              <p className="text-xs text-slate-500">Nhập tên để cô ghi nhận kết quả và khen ngợi em</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="studentName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Họ và tên học sinh <span className="text-orange-500">*</span>
              </label>
              <input
                id="studentName"
                type="text"
                value={config.studentName}
                onChange={(e) => onChangeConfig({ ...config, studentName: e.target.value })}
                placeholder="Ví dụ: Nguyễn Minh Anh"
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-hidden text-sm text-slate-800 placeholder:text-slate-400 font-medium transition-all"
              />
            </div>

            <div>
              <label htmlFor="gradeClass" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Lớp học <span className="text-slate-400 font-normal">(Tùy chọn)</span>
              </label>
              <input
                id="gradeClass"
                type="text"
                value={config.gradeClass}
                onChange={(e) => onChangeConfig({ ...config, gradeClass: e.target.value })}
                placeholder="Ví dụ: 9A1, 9/2..."
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-hidden text-sm text-slate-800 placeholder:text-slate-400 font-medium transition-all"
              />
            </div>
          </div>
        </section>

        {/* PHẦN 2: PHẠM VI KIẾN THỨC & BÀI HỌC */}
        <section>
          <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
            <div className="w-8 h-8 rounded-lg bg-orange-100 text-orange-700 flex items-center justify-center font-bold text-sm">
              2
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Phạm vi kiến thức & Chọn bài học</h3>
              <p className="text-xs text-slate-500">Lựa chọn Tập sách, Chương và từng Bài học cụ thể</p>
            </div>
          </div>

          <div className="space-y-4">
            {/* Lựa chọn Tập 1 / Tập 2 / Cả hai tập */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Tập sách Toán 9 (Kết nối tri thức):
              </label>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {[
                  { id: 'all', title: 'Cả 2 tập', subtitle: 'Toàn bộ 10 chương' },
                  { id: 'tap1', title: 'Tập 1', subtitle: 'Chương I đến V' },
                  { id: 'tap2', title: 'Tập 2', subtitle: 'Chương VI đến X' },
                ].map((item) => {
                  const isSelected = config.volume === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleVolumeChange(item.id as BookVolume)}
                      className={`p-3 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/80 text-blue-900 ring-2 ring-blue-500/20 shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs sm:text-sm">{item.title}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                      </div>
                      <span className="text-[11px] text-slate-500 block leading-tight">{item.subtitle}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Chọn Chương */}
            <div>
              <label htmlFor="chapterSelect" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5 flex items-center justify-between">
                <span>Chọn Chương:</span>
                <span className="text-[11px] font-normal text-slate-500">
                  {filteredChapters.length} chương có sẵn
                </span>
              </label>
              <div className="relative">
                <select
                  id="chapterSelect"
                  value={config.chapterId}
                  onChange={(e) => handleChapterChange(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-hidden text-sm text-slate-800 bg-white font-medium"
                >
                  <option value="all">📚 Tất cả các chương (Tổng ôn tập phong phú)</option>
                  {filteredChapters.map((ch) => (
                    <option key={ch.id} value={ch.id}>
                      {ch.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Chọn Bài học cụ thể */}
            {currentChapter && (
              <div className="p-4 rounded-2xl bg-blue-50/40 border border-blue-100">
                <div className="flex items-center gap-2 mb-2">
                  <Layers className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                    Chọn Bài học cụ thể thuộc {currentChapter.shortTitle}:
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-2.5">{currentChapter.description}</p>
                <div className="relative">
                  <select
                    id="lessonSelect"
                    value={config.lessonId}
                    onChange={(e) => onChangeConfig({ ...config, lessonId: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-hidden text-sm text-slate-800 bg-white font-medium"
                  >
                    {currentChapter.lessons.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.title}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* PHẦN 3: CHỌN MỨC ĐỘ VÀ SỐ LƯỢNG CÂU HỎI */}
        <section>
          <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-3">
            <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
              3
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Cấu hình Mức độ & Số lượng câu hỏi</h3>
              <p className="text-xs text-slate-500">Tối đa 30 câu hỏi theo yêu cầu chuẩn</p>
            </div>
          </div>

          <div className="space-y-6">
            {/* 4 MỨC ĐỘ YÊU CẦU */}
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                Mức độ yêu cầu:
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {[
                  {
                    id: 'nhan_biet',
                    title: 'Nhận biết',
                    badge: 'Cơ bản',
                    desc: 'Khái niệm, nhận dạng công thức',
                  },
                  {
                    id: 'thong_hieu',
                    title: 'Thông hiểu',
                    badge: 'Trung bình',
                    desc: 'Tính toán, biến đổi 1-2 bước',
                  },
                  {
                    id: 'van_dung',
                    title: 'Vận dụng',
                    badge: 'Nâng cao',
                    desc: 'Toán thực tế, tư duy logic',
                  },
                  {
                    id: 'tong_hop',
                    title: 'Tổng hợp 3 mức độ',
                    badge: 'Đề thi chuẩn',
                    desc: 'Phối hợp cả 3 mức độ thi cử',
                  },
                ].map((lvl) => {
                  const isSelected = config.level === lvl.id;
                  return (
                    <button
                      key={lvl.id}
                      type="button"
                      onClick={() => onChangeConfig({ ...config, level: lvl.id as DifficultyLevel })}
                      className={`p-3.5 rounded-2xl border text-left transition-all ${
                        isSelected
                          ? 'border-blue-600 bg-blue-50/90 text-blue-950 ring-2 ring-blue-500/25 shadow-xs'
                          : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-bold text-xs sm:text-sm">{lvl.title}</span>
                        <span className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                          isSelected ? 'bg-orange-100 text-orange-700' : 'bg-slate-100 text-slate-600'
                        }`}>
                          {lvl.badge}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-500 leading-snug">{lvl.desc}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* SỐ LƯỢNG CÂU HỎI (TỐI ĐA 30 CÂU) */}
            <div className="bg-blue-50/30 rounded-2xl p-5 border border-blue-100">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                <div>
                  <label htmlFor="questionRange" className="text-xs font-bold text-slate-700 uppercase tracking-wider flex items-center gap-1.5">
                    <ListOrdered className="w-4 h-4 text-orange-600" />
                    Số lượng câu hỏi: <span className="text-orange-600 text-base font-extrabold">{config.questionCount} câu</span>
                    <span className="text-slate-400 font-normal text-xs">(Tối đa 30 câu)</span>
                  </label>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Ngân hàng câu hỏi: <strong className="text-slate-800">{QUESTION_BANK.length} câu chuẩn SGK</strong> sẵn sàng phục vụ
                  </p>
                </div>

                {/* Preset buttons */}
                <div className="flex items-center gap-1.5 flex-wrap">
                  {presetCounts.map((cnt) => (
                    <button
                      key={cnt}
                      type="button"
                      onClick={() => onChangeConfig({ ...config, questionCount: cnt })}
                      className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                        config.questionCount === cnt
                          ? 'bg-orange-500 text-white shadow-sm shadow-orange-500/30 scale-105'
                          : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {cnt} câu
                    </button>
                  ))}
                </div>
              </div>

              {/* Slider for exact control */}
              <input
                id="questionRange"
                type="range"
                min="1"
                max="30"
                value={config.questionCount}
                onChange={(e) => onChangeConfig({ ...config, questionCount: parseInt(e.target.value, 10) })}
                className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-500"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-mono">
                <span>1 câu</span>
                <span>10 câu</span>
                <span>20 câu</span>
                <span>30 câu (Tối đa)</span>
              </div>

              {/* Cam kết tạo đủ câu hỏi */}
              <div className="mt-3.5 text-xs text-blue-900 bg-white/90 border border-blue-200/80 p-3 rounded-xl flex items-center gap-2 shadow-2xs">
                <Sparkles className="w-4 h-4 text-orange-500 shrink-0" />
                <span>
                  <strong>Bảo đảm đủ câu hỏi:</strong> Khi chọn <strong>{config.questionCount} câu</strong>, hệ thống cam kết cung cấp <strong>đúng {config.questionCount} câu</strong> (ưu tiên bài học đã chọn, tự động bổ sung câu hỏi liên quan cùng chương/chủ đề).
                </span>
              </div>
            </div>

            {/* Tùy chọn bấm giờ */}
            <div className="flex items-center justify-between p-4 rounded-2xl border border-slate-200 bg-white">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-800">Chế độ tính giờ làm bài</h4>
                  <p className="text-xs text-slate-500">Đo thời gian làm bài để rèn luyện tốc độ</p>
                </div>
              </div>

              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={config.timerEnabled}
                  onChange={(e) => onChangeConfig({ ...config, timerEnabled: e.target.checked })}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-slate-200 peer-focus:outline-hidden rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-orange-500"></div>
              </label>
            </div>

          </div>
        </section>

        {/* NÚT BẮT ĐẦU */}
        <div className="pt-2 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 text-center sm:text-left">
            {!isFormValid ? (
              <span className="text-orange-600 font-bold">⚠️ Vui lòng nhập họ tên học sinh ở trên để bắt đầu ôn tập.</span>
            ) : (
              <span>
                Sẵn sàng tạo đề ôn tập gồm <strong>{config.questionCount} câu</strong> cho <strong>{config.studentName}</strong> {config.gradeClass ? `(Lớp ${config.gradeClass})` : ''}.
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={onStartQuiz}
            disabled={!isFormValid}
            className={`w-full sm:w-auto px-9 py-3.5 rounded-2xl font-bold text-sm sm:text-base flex items-center justify-center gap-2.5 transition-all shadow-md ${
              isFormValid
                ? 'bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white active:scale-98 cursor-pointer shadow-orange-500/25'
                : 'bg-slate-200 text-slate-400 cursor-not-allowed shadow-none'
            }`}
          >
            <span>Bắt đầu ôn tập ngay</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </div>
  );
};
