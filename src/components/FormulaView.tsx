import React, { useState, useMemo } from 'react';
import { FORMULA_HANDBOOK } from '../data/formulas';
import { Search, BookOpen, Sparkles, Copy, Check } from 'lucide-react';

interface FormulaViewProps {
  onSelectChapterToPractice?: (chapterId: string) => void;
}

export const FormulaView: React.FC<FormulaViewProps> = ({
  onSelectChapterToPractice,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedVol, setSelectedVol] = useState<'all' | 'tap1' | 'tap2'>('all');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const filteredHandbook = useMemo(() => {
    return FORMULA_HANDBOOK.filter((sec) => {
      if (selectedVol !== 'all' && sec.volume !== selectedVol) return false;
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const matchTitle = sec.title.toLowerCase().includes(q);
      const matchItems = sec.items.some(
        (it) =>
          it.name.toLowerCase().includes(q) ||
          it.formula.toLowerCase().includes(q) ||
          it.notes.toLowerCase().includes(q)
      );
      return matchTitle || matchItems;
    });
  }, [selectedVol, searchQuery]);

  const copyFormula = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto py-6 px-4 sm:px-6 space-y-6">
      
      {/* Title banner */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xs border border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-bold border border-orange-200 mb-2">
            <BookOpen className="w-3.5 h-3.5 text-orange-500" />
            SỔ TAY CÔNG THỨC TOÁN 9 TOÀN DIỆN
          </div>
          <h2 className="text-2xl font-extrabold text-blue-950 tracking-tight">
            Hệ Thống Công Thức Trọng Tâm (KNTT)
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Tổng hợp đầy đủ lý thuyết, hằng đẳng thức và mẹo nhớ nhanh của <strong className="text-blue-700">Cô Phương Trang AI</strong>
          </p>
        </div>

        {/* Filter by volume */}
        <div className="flex items-center gap-1.5 bg-blue-50/80 p-1.5 rounded-2xl border border-blue-200/60 text-xs font-bold shrink-0">
          <button
            type="button"
            onClick={() => setSelectedVol('all')}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
              selectedVol === 'all'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-blue-700'
            }`}
          >
            Cả 2 tập
          </button>
          <button
            type="button"
            onClick={() => setSelectedVol('tap1')}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
              selectedVol === 'tap1'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-blue-700'
            }`}
          >
            Tập 1
          </button>
          <button
            type="button"
            onClick={() => setSelectedVol('tap2')}
            className={`px-3.5 py-1.5 rounded-xl transition-all cursor-pointer ${
              selectedVol === 'tap2'
                ? 'bg-blue-600 text-white shadow-xs'
                : 'text-slate-600 hover:text-blue-700'
            }`}
          >
            Tập 2
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-blue-500">
          <Search className="w-4 h-4" />
        </div>
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Tìm nhanh công thức (ví dụ: Viète, Delta, sin cos, tiếp tuyến, hình nón, Cauchy...)"
          className="w-full pl-10 pr-4 py-3 bg-white rounded-2xl border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-hidden focus:ring-2 focus:ring-blue-200 focus:border-blue-500 shadow-xs font-medium transition-all"
        />
      </div>

      {/* Formula Sections Grid */}
      <div className="space-y-6">
        {filteredHandbook.map((sec) => (
          <div
            key={sec.id}
            className="bg-white rounded-3xl p-6 shadow-xs border border-blue-100/80"
          >
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
              <h3 className="font-extrabold text-blue-950 text-base flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span>
                <span>{sec.title}</span>
              </h3>
              <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                {sec.volume === 'tap1' ? 'Tập 1' : 'Tập 2'}
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {sec.items.map((it, idx) => {
                const uniqueId = `${sec.id}_${idx}`;
                const isCopied = copiedId === uniqueId;

                return (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-blue-50/30 border border-blue-100/70 hover:border-blue-300 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="font-bold text-slate-800 text-sm">{it.name}</h4>
                        <button
                          type="button"
                          onClick={() => copyFormula(it.formula, uniqueId)}
                          className="text-slate-400 hover:text-blue-700 p-1 rounded-md transition-all cursor-pointer"
                          title="Sao chép công thức"
                        >
                          {isCopied ? <Check className="w-3.5 h-3.5 text-blue-600" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </div>

                      <div className="p-2.5 bg-white rounded-xl border border-blue-100 font-mono text-xs text-blue-900 font-bold mb-2 overflow-x-auto shadow-2xs">
                        {it.formula}
                      </div>

                      <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line">
                        {it.notes}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {filteredHandbook.length === 0 && (
          <div className="p-12 text-center bg-white rounded-3xl border border-slate-200 text-slate-500 text-sm">
            Không tìm thấy công thức nào khớp với từ khóa "{searchQuery}".
          </div>
        )}
      </div>

    </div>
  );
};
