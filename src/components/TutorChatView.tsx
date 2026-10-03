import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Loader2, BookOpen, Lightbulb } from 'lucide-react';

interface ChatMessage {
  id: string;
  sender: 'user' | 'tutor';
  text: string;
  time: string;
}

interface TutorChatViewProps {
  studentName: string;
  gradeClass: string;
}

export const TutorChatView: React.FC<TutorChatViewProps> = ({
  studentName,
  gradeClass,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'tutor',
      text: `Chào em ${studentName || 'học sinh thân yêu'} ${gradeClass ? `lớp ${gradeClass}` : ''}! Cô là Phương Trang AI - gia sư Toán 9 của em. Em có thắc mắc bài tập nào trong SGK Toán 9 Kết nối tri thức hay cần cô giảng lại công thức nào không?`,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const quickQuestions = [
    'Cô hướng dẫn em bí kíp nhẩm nghiệm Viète nhanh nhất với ạ!',
    'Làm sao để phân biệt góc nội tiếp và góc ở tâm hả cô?',
    'Điều kiện để căn thức bậc hai √(A) xác định là gì ạ?',
    'Làm thế nào để nhớ nhanh 4 tỉ số lượng giác sin, cos, tan, cot?',
  ];

  const handleSendMessage = async (textToSend?: string) => {
    const query = textToSend || input;
    if (!query.trim() || loading) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setLoading(true);

    try {
      const res = await fetch('/api/tutor/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: query,
          studentName: studentName || 'em',
          gradeClass: gradeClass || '9',
          context: 'SGK Toán 9 Kết nối tri thức với cuộc sống (Tập 1 và Tập 2)',
        }),
      });

      const data = await res.json();
      const tutorReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'tutor',
        text: data.reply || 'Cô đang kiểm tra lại bài toán, em đợi cô một chút nhé!',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, tutorReply]);
    } catch (err) {
      console.error(err);
      const fallbackReply: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'tutor',
        text: `Chào ${studentName || 'em'}! Cô Phương Trang nhắc em hãy kiểm tra lại bài học tương ứng trong sách giáo khoa Toán 9 Kết nối tri thức, hoặc mở mục "Sổ tay công thức" trên thanh menu để tra cứu nhanh nhé!`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackReply]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-6 px-4 sm:px-6 h-[calc(100vh-140px)] flex flex-col">
      
      {/* Header card */}
      <div className="bg-white rounded-3xl p-4 sm:p-5 shadow-xs border border-blue-100 mb-4 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-xs">
            <Sparkles className="w-5 h-5 text-orange-300" />
          </div>
          <div>
            <h2 className="text-base font-extrabold text-blue-950 leading-tight">
              Phòng Gia Sư 1-1: Cô Phương Trang AI
            </h2>
            <p className="text-xs text-slate-500">
              Giải đáp bài tập, phương pháp giải và hướng dẫn tư duy Toán 9 chuẩn mực
            </p>
          </div>
        </div>

        <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-orange-700 bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
          <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
          Cô đang online
        </span>
      </div>

      {/* Messages container */}
      <div className="flex-1 bg-white rounded-3xl p-4 sm:p-6 shadow-xs border border-blue-100 overflow-y-auto space-y-4">
        {messages.map((msg) => {
          const isTutor = msg.sender === 'tutor';
          return (
            <div
              key={msg.id}
              className={`flex items-start gap-3 ${isTutor ? '' : 'flex-row-reverse'}`}
            >
              <div
                className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-bold shrink-0 ${
                  isTutor
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-orange-500 text-white'
                }`}
              >
                {isTutor ? 'PT' : (studentName ? studentName.charAt(0).toUpperCase() : 'HS')}
              </div>

              <div className={`max-w-[85%] sm:max-w-[75%] space-y-1 ${isTutor ? '' : 'text-right'}`}>
                <div
                  className={`p-4 rounded-2xl text-xs sm:text-sm leading-relaxed whitespace-pre-line shadow-2xs ${
                    isTutor
                      ? 'bg-blue-50/50 text-slate-800 border border-blue-100/80 rounded-tl-xs text-left'
                      : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-tr-xs text-left'
                  }`}
                >
                  {msg.text}
                </div>
                <span className="text-[10px] text-slate-400 font-mono px-1">
                  {msg.time}
                </span>
              </div>
            </div>
          );
        })}

        {loading && (
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-blue-100 text-blue-800 flex items-center justify-center text-xs font-bold shrink-0">
              PT
            </div>
            <div className="p-3.5 rounded-2xl bg-blue-50/40 border border-blue-100 text-xs text-slate-500 flex items-center gap-2">
              <Loader2 className="w-4 h-4 text-orange-500 animate-spin" />
              <span>Cô Phương Trang đang suy nghĩ và viết lời giải...</span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Quick Question chips */}
      <div className="py-3 flex items-center gap-2 overflow-x-auto shrink-0 no-scrollbar">
        <span className="text-[11px] text-slate-400 font-semibold flex items-center gap-1 shrink-0">
          <Lightbulb className="w-3.5 h-3.5 text-orange-500" />
          Gợi ý hỏi:
        </span>
        {quickQuestions.map((q, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => handleSendMessage(q)}
            className="text-[11px] px-3.5 py-1 bg-slate-100 hover:bg-blue-50 hover:text-blue-800 hover:border-blue-300 border border-slate-200 rounded-full text-slate-700 whitespace-nowrap transition-all font-medium cursor-pointer"
          >
            {q}
          </button>
        ))}
      </div>

      {/* Input box */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
        className="relative shrink-0"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Hỏi cô Phương Trang bất kỳ bài toán nào... (ví dụ: Giải phương trình 2x² - 5x + 2 = 0)`}
          className="w-full pl-4 pr-12 py-3 bg-white rounded-2xl border border-slate-300 focus:outline-hidden focus:ring-2 focus:ring-blue-200 focus:border-blue-500 text-xs sm:text-sm text-slate-800 placeholder-slate-400 shadow-xs font-medium"
        />
        <button
          type="submit"
          disabled={!input.trim() || loading}
          className={`absolute right-2 top-2 p-2 rounded-xl transition-all ${
            input.trim() && !loading
              ? 'bg-orange-500 text-white hover:bg-orange-600 cursor-pointer shadow-xs'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed'
          }`}
        >
          <Send className="w-4 h-4" />
        </button>
      </form>

    </div>
  );
};
