import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Helper to get Gemini Client lazily
  let aiClient: GoogleGenAI | null = null;
  function getGenAI(): GoogleGenAI | null {
    if (!aiClient && process.env.GEMINI_API_KEY) {
      aiClient = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
    return aiClient;
  }

  // API endpoint: Ask Cô Phương Trang AI for question hint or detailed explanation
  app.post("/api/tutor/explain", async (req, res) => {
    try {
      const {
        studentName = "em",
        gradeClass = "9",
        questionContent,
        options,
        userAnswer,
        correctAnswer,
        explanation,
        lessonTitle,
      } = req.body;

      const ai = getGenAI();
      if (!ai) {
        // Fallback explanation if no API key
        return res.json({
          source: "built-in",
          tutorResponse: `Chào ${studentName}! Cô Phương Trang AI đã chuẩn bị sẵn hướng dẫn chi tiết cho câu hỏi này:\n\n` +
            `• Đáp án đúng: ${correctAnswer}\n` +
            `• Lời giải chi tiết: ${explanation || "Dựa vào định nghĩa và các bước biến đổi chuẩn SGK Toán 9 Kết nối tri thức."}\n\n` +
            `💡 Lời khuyên của cô: Em hãy chú ý kiểm tra lại các bước nhân chia đổi dấu và điều kiện xác định nhé!`,
        });
      }

      const prompt = `Bạn là "Cô Phương Trang AI" - giáo viên dạy Toán lớp 9 tận tâm, ấm áp, sư phạm và chuẩn mực theo chương trình SGK Toán 9 "Kết nối tri thức với cuộc sống".
Học sinh của cô tên là: "${studentName}", học lớp "${gradeClass}".

Thông tin bài tập:
- Bài học: ${lessonTitle || "Toán 9"}
- Nội dung câu hỏi: ${questionContent}
- Các phương án: ${JSON.stringify(options || [])}
- Đáp án học sinh đã chọn: ${userAnswer || "Chưa chọn"}
- Đáp án đúng của câu: ${correctAnswer}
- Lời giải mẫu chuẩn: ${explanation}

Nhiệm vụ của cô:
1. Chào hỏi ${studentName} thân mật, khích lệ tinh thần học tập của em.
2. Nếu em làm sai hoặc phân vân, chỉ ra điểm nhầm lẫn thường gặp ở câu hỏi này (ví dụ: quên điều kiện xác định, quên đổi chiều khi nhân với số âm, nhầm lẫn giữa góc ở tâm và góc nội tiếp, nhầm công thức Viète...).
3. Hướng dẫn từng bước giải chi tiết, rõ ràng, dễ hiểu, chuẩn ngôn ngữ Toán 9.
4. Tặng ${studentName} một câu chúc hoặc mẹo nhớ nhanh (bí kíp của Cô Phương Trang) để không bao giờ bị sai dạng bài này nữa.
Độ dài vừa phải (khoảng 150-250 từ), sử dụng định dạng gạch đầu dòng rõ ràng.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
      });

      return res.json({
        source: "gemini",
        tutorResponse: response.text,
      });
    } catch (error: any) {
      console.error("Gemini explain error:", error);
      return res.json({
        source: "fallback",
        tutorResponse: `Chào em! Cô Phương Trang AI nhắc em:\nĐáp án chính xác là ${req.body.correctAnswer}.\nLời giải: ${req.body.explanation || "Hãy xem lại công thức trong bài học."}\nChúc em ôn tập thật tốt!`,
      });
    }
  });

  // API endpoint: Ask Cô Phương Trang AI a custom math question or chat
  app.post("/api/tutor/chat", async (req, res) => {
    try {
      const { message, studentName = "em", gradeClass = "9", context } = req.body;
      const ai = getGenAI();

      if (!ai) {
        return res.json({
          reply: `Chào ${studentName}! Cô Phương Trang AI luôn đồng hành cùng em. Em hãy xem lại bảng công thức tóm tắt ở mục Sổ tay hoặc làm các bài tập luyện tập trong hệ thống nhé! Chúc em luôn học giỏi Toán 9!`,
        });
      }

      const prompt = `Bạn là "Cô Phương Trang AI" - giáo viên Toán 9 theo bộ sách Kết nối tri thức với cuộc sống.
Học sinh tên là: "${studentName}", lớp "${gradeClass}".
Ngữ cảnh học tập hiện tại: ${context || "Đang ôn tập kiến thức Toán 9"}.

Tin nhắn của học sinh: "${message}"

Hãy trả lời học sinh với phong cách sư phạm chuẩn mực, ân cần, giải thích cặn kẽ bản chất toán học, hướng dẫn phương pháp giải thay vì chỉ đưa ra kết quả. Viết bằng tiếng Việt trong sáng, dễ hiểu.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.8-flash",
        contents: prompt,
      });

      return res.json({
        reply: response.text,
      });
    } catch (error: any) {
      console.error("Gemini chat error:", error);
      return res.status(500).json({
        reply: "Cô đang bận một chút, em hãy thử hỏi lại sau giây lát nhé!",
      });
    }
  });

  // Health check
  app.get("/api/health", (_req, res) => {
    res.json({ status: "ok", app: "GIA SƯ TOÁN 9 - Cô Phương Trang AI" });
  });

  // Vite middleware in development, or static in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
