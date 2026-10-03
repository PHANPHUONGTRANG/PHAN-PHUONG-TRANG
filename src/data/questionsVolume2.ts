import { Question } from '../types';

export const QUESTIONS_VOLUME_2: Question[] = [
  // ==========================================
  // CHƯƠNG VI: HÀM SỐ y = ax² (a ≠ 0). PHƯƠNG TRÌNH BẬC HAI MỘT ẨN
  // ==========================================
  {
    id: 'ch6_b18_nb_1',
    chapterId: 'ch6',
    lessonId: 'bai18',
    lessonTitle: 'Bài 18: Hàm số y = ax² (a ≠ 0)',
    volume: 'tap2',
    level: 'nhan_biet',
    content: 'Đồ thị của hàm số y = ax² (a ≠ 0) là một đường cong có tên gọi là gì?',
    options: [
      { id: 'A', text: 'Đường thẳng' },
      { id: 'B', text: 'Đường hyperbol' },
      { id: 'C', text: 'Đường parabol' },
      { id: 'D', text: 'Đường tròn' }
    ],
    correctAnswer: 'C',
    explanation: 'Đồ thị của hàm số y = ax² (a ≠ 0) là một đường cong đi qua gốc tọa độ và nhận trục Oy làm trục đối xứng, gọi là đường parabol.',
    formula: 'Parabol (P): y = ax²',
    tutorTip: 'Nếu a > 0 thì parabol bề lõm quay lên, nếu a < 0 thì bề lõm quay xuống!'
  },
  {
    id: 'ch6_b18_th_1',
    chapterId: 'ch6',
    lessonId: 'bai18',
    lessonTitle: 'Bài 18: Hàm số y = ax² (a ≠ 0)',
    volume: 'tap2',
    level: 'thong_hieu',
    content: 'Biết đồ thị hàm số y = ax² đi qua điểm M(-2; 8). Giá trị của hệ số a là:',
    options: [
      { id: 'A', text: 'a = 2' },
      { id: 'B', text: 'a = -2' },
      { id: 'C', text: 'a = 4' },
      { id: 'D', text: 'a = 1/2' }
    ],
    correctAnswer: 'A',
    explanation: 'Thay x = -2, y = 8 vào y = ax²: 8 = a·(-2)² <=> 8 = 4a <=> a = 2.',
    formula: 'y = ax² => a = y / x²',
    tutorTip: 'Lũy thừa bậc chẵn (-2)² luôn là +4 em nhé!'
  },
  {
    id: 'ch6_b19_nb_1',
    chapterId: 'ch6',
    lessonId: 'bai19',
    lessonTitle: 'Bài 19: Phương trình bậc hai một ẩn',
    volume: 'tap2',
    level: 'nhan_biet',
    content: 'Biệt thức Δ (delta) của phương trình bậc hai ax² + bx + c = 0 (a ≠ 0) được tính theo công thức:',
    options: [
      { id: 'A', text: 'Δ = b² - 4ac' },
      { id: 'B', text: 'Δ = b² + 4ac' },
      { id: 'C', text: 'Δ = 4ac - b²' },
      { id: 'D', text: 'Δ = b - 4ac' }
    ],
    correctAnswer: 'A',
    explanation: 'Biệt thức Δ của phương trình bậc hai ax² + bx + c = 0 là Δ = b² - 4ac.',
    formula: 'Δ = b² - 4ac',
    tutorTip: 'Nếu Δ > 0 thì PT có 2 nghiệm phân biệt, Δ = 0 có nghiệm kép, Δ < 0 vô nghiệm.'
  },
  {
    id: 'ch6_b19_th_1',
    chapterId: 'ch6',
    lessonId: 'bai19',
    lessonTitle: 'Bài 19: Phương trình bậc hai một ẩn',
    volume: 'tap2',
    level: 'thong_hieu',
    content: 'Phương trình x² - 5x + 6 = 0 có hai nghiệm phân biệt là:',
    options: [
      { id: 'A', text: 'x₁ = 2 ; x₂ = 3' },
      { id: 'B', text: 'x₁ = -2 ; x₂ = -3' },
      { id: 'C', text: 'x₁ = 1 ; x₂ = 6' },
      { id: 'D', text: 'x₁ = -1 ; x₂ = -6' }
    ],
    correctAnswer: 'A',
    explanation: 'Δ = (-5)² - 4·1·6 = 25 - 24 = 1 > 0. Căn Δ = 1. Nghiệm: x₁ = (5 + 1)/2 = 3; x₂ = (5 - 1)/2 = 2.',
    formula: 'x = (-b ± √Δ) / 2a',
    tutorTip: 'Nhẩm tích bằng 6 và tổng bằng 5: chỉ có 2 và 3 là thỏa mãn!'
  },
  {
    id: 'ch6_b20_nb_1',
    chapterId: 'ch6',
    lessonId: 'bai20',
    lessonTitle: 'Bài 20: Định lí Viète và ứng dụng',
    volume: 'tap2',
    level: 'nhan_biet',
    content: 'Nếu phương trình ax² + bx + c = 0 (a ≠ 0) có hai nghiệm x₁, x₂ thì tổng S = x₁ + x₂ và tích P = x₁·x₂ lần lượt là:',
    options: [
      { id: 'A', text: 'S = -b/a ; P = c/a' },
      { id: 'B', text: 'S = b/a ; P = -c/a' },
      { id: 'C', text: 'S = -b/2a ; P = c/a' },
      { id: 'D', text: 'S = c/a ; P = -b/a' }
    ],
    correctAnswer: 'A',
    explanation: 'Theo định lí Viète: x₁ + x₂ = -b/a và x₁·x₂ = c/a.',
    formula: 'Viète: S = -b/a, P = c/a',
    tutorTip: 'Lưu ý dấu trừ ở tổng: S = -b/a.'
  },
  {
    id: 'ch6_b20_vd_1',
    chapterId: 'ch6',
    lessonId: 'bai20',
    lessonTitle: 'Bài 20: Định lí Viète và ứng dụng',
    volume: 'tap2',
    level: 'van_dung',
    content: 'Cho phương trình x² - 7x + 12 = 0 có hai nghiệm x₁ và x₂. Giá trị của biểu thức A = x₁² + x₂² bằng:',
    options: [
      { id: 'A', text: '25' },
      { id: 'B', text: '49' },
      { id: 'C', text: '37' },
      { id: 'D', text: '13' }
    ],
    correctAnswer: 'A',
    explanation: 'Theo hệ thức Viète: x₁ + x₂ = 7, x₁·x₂ = 12. Biến đổi: A = x₁² + x₂² = (x₁ + x₂)² - 2x₁x₂ = 7² - 2·12 = 49 - 24 = 25.',
    formula: 'x₁² + x₂² = (x₁ + x₂)² - 2x₁x₂',
    tutorTip: 'Thêm bớt 2x₁x₂ để xuất hiện bình phương của một tổng!'
  },
  {
    id: 'ch6_b21_vd_1',
    chapterId: 'ch6',
    lessonId: 'bai21',
    lessonTitle: 'Bài 21: Giải bài toán bằng cách lập phương trình',
    volume: 'tap2',
    level: 'van_dung',
    content: 'Một mảnh đất hình chữ nhật có chiều dài hơn chiều rộng 4 m và diện tích bằng 96 m². Chu vi của mảnh đất đó là:',
    options: [
      { id: 'A', text: '40 m' },
      { id: 'B', text: '20 m' },
      { id: 'C', text: '48 m' },
      { id: 'D', text: '28 m' }
    ],
    correctAnswer: 'A',
    explanation: 'Gọi chiều rộng là x (m, x > 0). Chiều dài là x + 4. Diện tích: x(x + 4) = 96 <=> x² + 4x - 96 = 0. Giải PT ta được x = 8 (thỏa mãn) hoặc x = -12 (loại). Chiều rộng 8 m, chiều dài 12 m. Chu vi: 2·(8 + 12) = 40 m.',
    formula: 'C = 2(dài + rộng)',
    tutorTip: 'Đừng quên kiểm tra điều kiện chiều rộng phải dương (x > 0).'
  },

  // ==========================================
  // CHƯƠNG VII: TẦN SỐ VÀ TẦN SỐ TƯƠNG ĐỐI
  // ==========================================
  {
    id: 'ch7_b22_nb_1',
    chapterId: 'ch7',
    lessonId: 'bai22',
    lessonTitle: 'Bài 22: Bảng tần số và biểu đồ tần số',
    volume: 'tap2',
    level: 'nhan_biet',
    content: 'Tần số của một giá trị trong mẫu dữ liệu là gì?',
    options: [
      { id: 'A', text: 'Số lần xuất hiện của giá trị đó trong mẫu dữ liệu' },
      { id: 'B', text: 'Tỉ số giữa giá trị đó và tổng số dữ liệu' },
      { id: 'C', text: 'Giá trị trung bình của toàn bộ mẫu dữ liệu' },
      { id: 'D', text: 'Khoảng chênh lệch giữa giá trị lớn nhất và nhỏ nhất' }
    ],
    correctAnswer: 'A',
    explanation: 'Tần số của một giá trị là số lần xuất hiện của giá trị đó trong mẫu dữ liệu đã cho.',
    formula: 'Tần số nᵢ: số lần xuất hiện',
    tutorTip: 'Tần số chính là "đếm xem xuất hiện bao nhiêu lần".'
  },
  {
    id: 'ch7_b23_th_1',
    chapterId: 'ch7',
    lessonId: 'bai23',
    lessonTitle: 'Bài 23: Bảng tần số tương đối và biểu đồ tần số tương đối',
    volume: 'tap2',
    level: 'thong_hieu',
    content: 'Một lớp có 40 học sinh, trong đó có 10 bạn đạt điểm 10 môn Toán. Tần số tương đối của học sinh đạt điểm 10 là:',
    options: [
      { id: 'A', text: '25%' },
      { id: 'B', text: '10%' },
      { id: 'C', text: '40%' },
      { id: 'D', text: '4%' }
    ],
    correctAnswer: 'A',
    explanation: 'Tần số tương đối f = (m / N) · 100% = (10 / 40) · 100% = 0,25 · 100% = 25%.',
    formula: 'f = (m / N) · 100%',
    tutorTip: 'Lấy tần số chia cho kích thước mẫu N rồi nhân với 100%.'
  },
  {
    id: 'ch7_b24_th_1',
    chapterId: 'ch7',
    lessonId: 'bai24',
    lessonTitle: 'Bài 24: Bảng tần số, tần số tương đối ghép nhóm và biểu đồ',
    volume: 'tap2',
    level: 'thong_hieu',
    content: 'Giá trị đại diện của nhóm số liệu [150; 160) là:',
    options: [
      { id: 'A', text: '155' },
      { id: 'B', text: '150' },
      { id: 'C', text: '160' },
      { id: 'D', text: '10' }
    ],
    correctAnswer: 'A',
    explanation: 'Giá trị đại diện của nhóm [a; b) là trung bình cộng hai đầu mút: (a + b) / 2 = (150 + 160) / 2 = 155.',
    formula: 'cᵢ = (a + b) / 2',
    tutorTip: 'Lấy trung điểm chính giữa khoảng ghép nhóm.'
  },

  // ==========================================
  // CHƯƠNG VIII: XÁC SUẤT CỦA BIẾN CỐ
  // ==========================================
  {
    id: 'ch8_b25_nb_1',
    chapterId: 'ch8',
    lessonId: 'bai25',
    lessonTitle: 'Bài 25: Phép thử ngẫu nhiên và không gian mẫu',
    volume: 'tap2',
    level: 'nhan_biet',
    content: 'Gieo một con xúc xắc cân đối và đồng chất 6 mặt. Số phần tử của không gian mẫu Ω là:',
    options: [
      { id: 'A', text: '6' },
      { id: 'B', text: '12' },
      { id: 'C', text: '36' },
      { id: 'D', text: '1' }
    ],
    correctAnswer: 'A',
    explanation: 'Không gian mẫu khi gieo 1 xúc xắc là Ω = {1; 2; 3; 4; 5; 6}, có 6 phần tử n(Ω) = 6.',
    formula: 'n(Ω) = 6',
    tutorTip: 'Mỗi mặt chấm từ 1 đến 6 là một kết quả có thể xảy ra.'
  },
  {
    id: 'ch8_b26_th_1',
    chapterId: 'ch8',
    lessonId: 'bai26',
    lessonTitle: 'Bài 26: Xác suất của biến cố liên quan tới phép thử',
    volume: 'tap2',
    level: 'thong_hieu',
    content: 'Gieo ngẫu nhiên một con xúc xắc 6 mặt cân đối. Xác suất để xuất hiện mặt có số chấm là số nguyên tố bằng:',
    options: [
      { id: 'A', text: '1/2' },
      { id: 'B', text: '1/3' },
      { id: 'C', text: '2/3' },
      { id: 'D', text: '1/6' }
    ],
    correctAnswer: 'A',
    explanation: 'Các số nguyên tố từ 1 đến 6 là: {2; 3; 5} (gồm 3 kết quả thuận lợi). Xác suất P = 3/6 = 1/2.',
    formula: 'P(A) = n(A) / n(Ω)',
    tutorTip: 'Lưu ý số 1 không phải là số nguyên tố em nhé!'
  },

  // ==========================================
  // CHƯƠNG IX: ĐƯỜNG TRÒN NGOẠI TIẾP VÀ ĐƯỜNG TRÒN NỘI TIẾP
  // ==========================================
  {
    id: 'ch9_b27_nb_1',
    chapterId: 'ch9',
    lessonId: 'bai27',
    lessonTitle: 'Bài 27: Góc nội tiếp',
    volume: 'tap2',
    level: 'nhan_biet',
    content: 'Góc nội tiếp chắn nửa đường tròn luôn có số đo bằng bao nhiêu?',
    options: [
      { id: 'A', text: '90°' },
      { id: 'B', text: '180°' },
      { id: 'C', text: '60°' },
      { id: 'D', text: '45°' }
    ],
    correctAnswer: 'A',
    explanation: 'Định lí: Góc nội tiếp chắn nửa đường tròn là góc vuông (có số đo bằng 90°).',
    formula: 'Góc nội tiếp chắn nửa đường tròn = 90°',
    tutorTip: 'Mọi tam giác có một cạnh là đường kính của đường tròn ngoại tiếp đều là tam giác vuông.'
  },
  {
    id: 'ch9_b27_th_1',
    chapterId: 'ch9',
    lessonId: 'bai27',
    lessonTitle: 'Bài 27: Góc nội tiếp',
    volume: 'tap2',
    level: 'thong_hieu',
    content: 'Trên đường tròn (O), một góc ở tâm AOB có số đo bằng 120°. Khi đó góc nội tiếp ACB cùng chắn cung nhỏ AB có số đo bằng:',
    options: [
      { id: 'A', text: '60°' },
      { id: 'B', text: '120°' },
      { id: 'C', text: '240°' },
      { id: 'D', text: '30°' }
    ],
    correctAnswer: 'A',
    explanation: 'Trong một đường tròn, số đo của góc nội tiếp bằng nửa số đo của góc ở tâm cùng chắn một cung. Góc ACB = 1/2 góc AOB = 1/2 · 120° = 60°.',
    formula: 'Góc nội tiếp = 1/2 Góc ở tâm cùng chắn cung',
    tutorTip: 'Góc đỉnh trên đường tròn bằng một nửa góc đỉnh ở tâm.'
  },
  {
    id: 'ch9_b29_nb_1',
    chapterId: 'ch9',
    lessonId: 'bai29',
    lessonTitle: 'Bài 29: Tứ giác nội tiếp',
    volume: 'tap2',
    level: 'nhan_biet',
    content: 'Điều kiện cần và đủ để một tứ giác nội tiếp được trong đường tròn là:',
    options: [
      { id: 'A', text: 'Tổng hai góc đối diện bằng 180°' },
      { id: 'B', text: 'Hai góc đối diện bằng nhau' },
      { id: 'C', text: 'Bốn cạnh bằng nhau' },
      { id: 'D', text: 'Hai đường chéo vuông góc với nhau' }
    ],
    correctAnswer: 'A',
    explanation: 'Định lí: Trong một tứ giác nội tiếp, tổng số đo hai góc đối diện bằng 180°. Ngược lại nếu một tứ giác có tổng hai góc đối diện bằng 180° thì tứ giác đó nội tiếp.',
    formula: '∠A + ∠C = 180° hoặc ∠B + ∠D = 180°',
    tutorTip: 'Dấu hiệu nhận biết tứ giác nội tiếp quan trọng nhất trong đề thi vào 10!'
  },
  {
    id: 'ch9_b29_th_1',
    chapterId: 'ch9',
    lessonId: 'bai29',
    lessonTitle: 'Bài 29: Tứ giác nội tiếp',
    volume: 'tap2',
    level: 'thong_hieu',
    content: 'Cho tứ giác ABCD nội tiếp đường tròn. Biết góc A = 70°, góc B = 85°. Số đo của góc C và góc D lần lượt là:',
    options: [
      { id: 'A', text: 'Góc C = 110° ; Góc D = 95°' },
      { id: 'B', text: 'Góc C = 95° ; Góc D = 110°' },
      { id: 'C', text: 'Góc C = 70° ; Góc D = 85°' },
      { id: 'D', text: 'Góc C = 120° ; Góc D = 90°' }
    ],
    correctAnswer: 'A',
    explanation: 'Tứ giác ABCD nội tiếp nên: ∠A + ∠C = 180° => ∠C = 180° - 70° = 110°. Và ∠B + ∠D = 180° => ∠D = 180° - 85° = 95°.',
    formula: '∠C = 180° - ∠A ; ∠D = 180° - ∠B',
    tutorTip: 'Cặp góc đối: A đối C, B đối D.'
  },

  // ==========================================
  // CHƯƠNG X: MỘT SỐ HÌNH KHỐI TRONG THỰC TIỄN
  // ==========================================
  {
    id: 'ch10_b31_nb_1',
    chapterId: 'ch10',
    lessonId: 'bai31',
    lessonTitle: 'Bài 31: Hình trụ và hình nón',
    volume: 'tap2',
    level: 'nhan_biet',
    content: 'Diện tích xung quanh của hình trụ có bán kính đáy r và chiều cao h được tính theo công thức:',
    options: [
      { id: 'A', text: 'S_xq = 2πrh' },
      { id: 'B', text: 'S_xq = πrh' },
      { id: 'C', text: 'S_xq = πr²h' },
      { id: 'D', text: 'S_xq = 2πr²h' }
    ],
    correctAnswer: 'A',
    explanation: 'Diện tích xung quanh hình trụ bằng chu vi đáy nhân với chiều cao: S_xq = 2πrh.',
    formula: 'S_xq = 2πrh',
    tutorTip: 'Chu vi đáy là 2πr, trải xung quanh cao h thì diện tích là 2πrh.'
  },
  {
    id: 'ch10_b31_th_1',
    chapterId: 'ch10',
    lessonId: 'bai31',
    lessonTitle: 'Bài 31: Hình trụ và hình nón',
    volume: 'tap2',
    level: 'thong_hieu',
    content: 'Một hình nón có bán kính đáy r = 3 cm và độ dài đường sinh l = 5 cm. Chiều cao h của hình nón đó bằng:',
    options: [
      { id: 'A', text: '4 cm' },
      { id: 'B', text: '√34 cm' },
      { id: 'C', text: '2 cm' },
      { id: 'D', text: '8 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Trong hình nón, bán kính r, chiều cao h và đường sinh l tạo thành tam giác vuông: h² = l² - r² = 5² - 3² = 25 - 9 = 16 => h = 4 cm.',
    formula: 'l² = r² + h² => h = √(l² - r²)',
    tutorTip: 'Bộ ba Pythagore thân quen: 3 - 4 - 5.'
  },
  {
    id: 'ch10_b32_nb_1',
    chapterId: 'ch10',
    lessonId: 'bai32',
    lessonTitle: 'Bài 32: Hình cầu',
    volume: 'tap2',
    level: 'nhan_biet',
    content: 'Công thức tính thể tích của hình cầu có bán kính R là:',
    options: [
      { id: 'A', text: 'V = (4/3)πR³' },
      { id: 'B', text: 'V = 4πR²' },
      { id: 'C', text: 'V = (4/3)πR²' },
      { id: 'D', text: 'V = πR³' }
    ],
    correctAnswer: 'A',
    explanation: 'Thể tích hình cầu bán kính R: V = (4/3)πR³. Diện tích mặt cầu là S = 4πR².',
    formula: 'V = 4/3 π R³',
    tutorTip: 'Thể tích có R mũ 3 (khối 3 chiều), diện tích có R mũ 2 (mặt 2 chiều).'
  },
  {
    id: 'ch10_b32_vd_1',
    chapterId: 'ch10',
    lessonId: 'bai32',
    lessonTitle: 'Bài 32: Hình cầu',
    volume: 'tap2',
    level: 'van_dung',
    content: 'Một quả bóng hình cầu có thể tích V = 36π cm³. Bán kính R của quả bóng đó là:',
    options: [
      { id: 'A', text: '3 cm' },
      { id: 'B', text: '9 cm' },
      { id: 'C', text: '6 cm' },
      { id: 'D', text: '27 cm' }
    ],
    correctAnswer: 'A',
    explanation: '4/3 πR³ = 36π <=> 4/3 R³ = 36 <=> R³ = 36 · 3 / 4 = 27 => R = ∛27 = 3 cm.',
    formula: 'R = ∛(3V / 4π)',
    tutorTip: 'Chia cả hai vế cho π rồi tính R³ = 27.'
  }
];
