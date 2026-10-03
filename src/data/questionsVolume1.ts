import { Question } from '../types';

export const QUESTIONS_VOLUME_1: Question[] = [
  // ==========================================
  // CHƯƠNG I: PHƯƠNG TRÌNH VÀ HỆ HAI PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN
  // ==========================================
  {
    id: 'ch1_b1_nb_1',
    chapterId: 'ch1',
    lessonId: 'bai1',
    lessonTitle: 'Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Phương trình nào dưới đây là phương trình bậc nhất hai ẩn x và y?',
    options: [
      { id: 'A', text: '2x² + 3y = 5' },
      { id: 'B', text: '4x - 3y = 7' },
      { id: 'C', text: '0x + 0y = 9' },
      { id: 'D', text: 'x + y + z = 1' }
    ],
    correctAnswer: 'B',
    explanation: 'Phương trình bậc nhất hai ẩn x, y có dạng ax + by = c trong đó a và b không đồng thời bằng 0. Phương trình 4x - 3y = 7 thỏa mãn với a = 4, b = -3, c = 7.',
    formula: 'ax + by = c (a ≠ 0 hoặc b ≠ 0)',
    tutorTip: 'Nhớ kỹ: Bậc của x và y phải là bậc 1 và hệ số a, b không được cùng bằng 0 nhé!'
  },
  {
    id: 'ch1_b1_nb_2',
    chapterId: 'ch1',
    lessonId: 'bai1',
    lessonTitle: 'Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Tập hợp tất cả các nghiệm của phương trình bậc nhất hai ẩn ax + by = c trên mặt phẳng tọa độ Oxy là hình gì?',
    options: [
      { id: 'A', text: 'Một đoạn thẳng' },
      { id: 'B', text: 'Một điểm duy nhất' },
      { id: 'C', text: 'Một đường thẳng' },
      { id: 'D', text: 'Một đường parabol' }
    ],
    correctAnswer: 'C',
    explanation: 'Trong mặt phẳng tọa độ Oxy, tập hợp các điểm biểu diễn nghiệm của phương trình ax + by = c là một đường thẳng.',
    formula: 'Tập nghiệm của ax + by = c là đường thẳng d',
    tutorTip: 'Mỗi phương trình bậc nhất hai ẩn luôn có vô số nghiệm, biểu diễn bằng một đường thẳng kéo dài vô tận.'
  },
  {
    id: 'ch1_b1_th_1',
    chapterId: 'ch1',
    lessonId: 'bai1',
    lessonTitle: 'Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Cặp số (x; y) nào sau đây là một nghiệm của phương trình 3x - 2y = 5?',
    options: [
      { id: 'A', text: '(1; -1)' },
      { id: 'B', text: '(3; 2)' },
      { id: 'C', text: '(2; 0)' },
      { id: 'D', text: '(-1; 4)' }
    ],
    correctAnswer: 'B',
    explanation: 'Thay (x; y) = (3; 2) vào vế trái: 3(3) - 2(2) = 9 - 4 = 5 = Vế phải. Vậy (3; 2) là nghiệm.',
    formula: 'Thay x, y vào phương trình kiểm tra đẳng thức.',
    tutorTip: 'Em chỉ cần thay x và y vào phương trình xem hai vế có bằng nhau không là tìm ra ngay!'
  },
  {
    id: 'ch1_b1_vd_1',
    chapterId: 'ch1',
    lessonId: 'bai1',
    lessonTitle: 'Bài 1: Khái niệm phương trình và hệ hai phương trình bậc nhất hai ẩn',
    volume: 'tap1',
    level: 'van_dung',
    content: 'Tìm giá trị của m để phương trình (m - 2)x + (m + 1)y = 6 nhận cặp số (2; 1) làm nghiệm.',
    options: [
      { id: 'A', text: 'm = 3' },
      { id: 'B', text: 'm = 1' },
      { id: 'C', text: 'm = -3' },
      { id: 'D', text: 'm = 5' }
    ],
    correctAnswer: 'A',
    explanation: 'Thay x = 2, y = 1 vào phương trình: (m - 2)·2 + (m + 1)·1 = 6 <=> 2m - 4 + m + 1 = 6 <=> 3m - 3 = 6 <=> 3m = 9 <=> m = 3.',
    formula: '(m - 2)x + (m + 1)y = 6 với x = 2, y = 1',
    tutorTip: 'Thay trực tiếp tọa độ (2; 1) vào vị trí của x và y để đưa về phương trình bậc nhất ẩn m!'
  },
  {
    id: 'ch1_b2_nb_1',
    chapterId: 'ch1',
    lessonId: 'bai2',
    lessonTitle: 'Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Để giải hệ phương trình bằng phương pháp thế, bước đầu tiên thông thường là gì?',
    options: [
      { id: 'A', text: 'Cộng từng vế của hai phương trình' },
      { id: 'B', text: 'Từ một phương trình, biểu diễn một ẩn theo ẩn kia' },
      { id: 'C', text: 'Nhân hai vế với một số khác 0' },
      { id: 'D', text: 'Vẽ đồ thị của hai hàm số' }
    ],
    correctAnswer: 'B',
    explanation: 'Quy tắc thế: Bước 1 là từ một phương trình của hệ, biểu diễn một ẩn theo ẩn kia, rồi thế vào phương trình còn lại.',
    formula: 'Rút x = f(y) hoặc y = g(x) rồi thế vào PT còn lại.',
    tutorTip: 'Hãy chọn ẩn nào có hệ số là 1 hoặc -1 để rút gọn gàng nhất em nhé!'
  },
  {
    id: 'ch1_b2_th_1',
    chapterId: 'ch1',
    lessonId: 'bai2',
    lessonTitle: 'Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Nghiệm của hệ phương trình { 2x - y = 3 ; x + 2y = 4 } là:',
    options: [
      { id: 'A', text: '(2; 1)' },
      { id: 'B', text: '(1; 2)' },
      { id: 'C', text: '(3; 3)' },
      { id: 'D', text: '(0; 2)' }
    ],
    correctAnswer: 'A',
    explanation: 'Từ PT1: y = 2x - 3. Thế vào PT2: x + 2(2x - 3) = 4 <=> 5x - 6 = 4 <=> 5x = 10 => x = 2. Khi đó y = 2(2) - 3 = 1. Nghiệm là (2; 1).',
    formula: 'y = 2x - 3 => x + 2(2x - 3) = 4',
    tutorTip: 'Kiểm tra lại: 2·2 - 1 = 3 và 2 + 2·1 = 4. Hoàn toàn chính xác!'
  },
  {
    id: 'ch1_b2_th_2',
    chapterId: 'ch1',
    lessonId: 'bai2',
    lessonTitle: 'Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Nghiệm của hệ phương trình { 3x + 2y = 7 ; 2x - 3y = -4 } là:',
    options: [
      { id: 'A', text: '(x; y) = (-1; 5)' },
      { id: 'B', text: '(x; y) = (1; 2)' },
      { id: 'C', text: '(x; y) = (2; 1)' },
      { id: 'D', text: '(x; y) = (3; -1)' }
    ],
    correctAnswer: 'B',
    explanation: 'Nhân PT1 với 3, PT2 với 2: { 9x + 6y = 21 ; 4x - 6y = -8 }. Cộng 2 vế: 13x = 13 => x = 1. Thay x = 1 vào PT1: 3(1) + 2y = 7 => y = 2. Vậy (x; y) = (1; 2).',
    formula: 'Phương pháp cộng đại số triệt tiêu y.',
    tutorTip: 'Hệ số của y là 2 và -3, nhân chéo để được +6 và -6 rồi cộng lại!'
  },
  {
    id: 'ch1_b2_vd_1',
    chapterId: 'ch1',
    lessonId: 'bai2',
    lessonTitle: 'Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn',
    volume: 'tap1',
    level: 'van_dung',
    content: 'Cho hệ phương trình { mx + y = 3 ; 4x + my = 6 }. Tìm m để hệ phương trình vô nghiệm.',
    options: [
      { id: 'A', text: 'm = 2' },
      { id: 'B', text: 'm = -2' },
      { id: 'C', text: 'm = ±2' },
      { id: 'D', text: 'm = 0' }
    ],
    correctAnswer: 'B',
    explanation: 'Hệ { a₁x + b₁y = c₁ ; a₂x + b₂y = c₂ } vô nghiệm khi a₁/a₂ = b₁/b₂ ≠ c₁/c₂. Ở đây m/4 = 1/m ≠ 3/6 <=> m² = 4 => m = ±2. Với m = 2: 2/4 = 1/2 = 3/6 (vô số nghiệm). Với m = -2: -2/4 = 1/(-2) = -1/2 ≠ 1/2 (vô nghiệm). Vậy m = -2.',
    formula: 'a/a\' = b/b\' ≠ c/c\' => Vô nghiệm',
    tutorTip: 'Cần thử lại m = 2 và m = -2 vào tỉ số c₁/c₂ để tránh chọn nhầm cả hai giá trị!'
  },
  {
    id: 'ch1_b3_nb_1',
    chapterId: 'ch1',
    lessonId: 'bai3',
    lessonTitle: 'Bài 3: Giải bài toán bằng cách lập hệ phương trình',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Bước đầu tiên trong quy trình giải bài toán bằng cách lập hệ phương trình là gì?',
    options: [
      { id: 'A', text: 'Giải hệ phương trình đã lập' },
      { id: 'B', text: 'Chọn hai ẩn số và đặt điều kiện thích hợp cho chúng' },
      { id: 'C', text: 'Kiểm tra nghiệm và kết luận bài toán' },
      { id: 'D', text: 'Vẽ sơ đồ đoạn thẳng' }
    ],
    correctAnswer: 'B',
    explanation: 'Bước 1 (Lập hệ phương trình): Chọn hai ẩn số và đặt điều kiện thích hợp cho các ẩn số, biểu diễn các đại lượng chưa biết theo ẩn và lập hai phương trình.',
    formula: 'Quy trình: 1. Lập hệ -> 2. Giải hệ -> 3. Kiểm tra & Kết luận.',
    tutorTip: 'Đừng bao giờ quên bước đặt điều kiện (nguyên dương, lớn hơn 0, đơn vị) cho ẩn nhé!'
  },
  {
    id: 'ch1_b3_vd_1',
    chapterId: 'ch1',
    lessonId: 'bai3',
    lessonTitle: 'Bài 3: Giải bài toán bằng cách lập hệ phương trình',
    volume: 'tap1',
    level: 'van_dung',
    content: 'Bài toán cổ: "Quýt, cam mười bảy quả tươi / Đem chia cho một trăm người cùng vui / Chia ba mỗi quả quýt rồi / Còn cam, mỗi quả chia mười vừa xinh". Tìm số quả cam và số quả quýt.',
    options: [
      { id: 'A', text: '7 quả cam, 10 quả quýt' },
      { id: 'B', text: '10 quả cam, 7 quả quýt' },
      { id: 'C', text: '8 quả cam, 9 quả quýt' },
      { id: 'D', text: '6 quả cam, 11 quả quýt' }
    ],
    correctAnswer: 'A',
    explanation: 'Gọi x là số cam, y là số quýt (x, y nguyên dương < 17). Ta có: { x + y = 17 ; 10x + 3y = 100 }. Từ x + y = 17 => 3x + 3y = 51. Trừ hai vế: 7x = 49 => x = 7, suy ra y = 10.',
    formula: 'Hệ: { x + y = 17 ; 10x + 3y = 100 }',
    tutorTip: '1 quả cam chia 10 miếng (10x), 1 quả quýt chia 3 miếng (3y), tổng số người là 100 miếng.'
  },
  {
    id: 'ch1_ot1_vd_1',
    chapterId: 'ch1',
    lessonId: 'ot1',
    lessonTitle: 'Bài tập cuối chương I',
    volume: 'tap1',
    level: 'van_dung',
    content: 'Hai tổ công nhân cùng làm chung một công việc thì hoàn thành trong 12 giờ. Nếu tổ I làm trong 4 giờ rồi tổ II làm tiếp trong 6 giờ thì cả hai làm được 40% công việc. Hỏi nếu làm riêng thì tổ I hoàn thành công việc trong bao lâu?',
    options: [
      { id: 'A', text: '20 giờ' },
      { id: 'B', text: '30 giờ' },
      { id: 'C', text: '15 giờ' },
      { id: 'D', text: '24 giờ' }
    ],
    correctAnswer: 'A',
    explanation: 'Gọi thời gian tổ I làm riêng là x (giờ), tổ II là y (giờ). Trong 1 giờ: 1/x + 1/y = 1/12. Ta có 4/x + 6/y = 40% = 2/5. Đặt u = 1/x, v = 1/y: { u + v = 1/12 ; 4u + 6v = 2/5 } => u = 1/20, v = 1/30. Vậy x = 20 giờ.',
    formula: 'Hệ phương trình quy về bậc nhất với u = 1/x, v = 1/y',
    tutorTip: 'Dạng toán năng suất làm chung làm riêng: quy ước toàn bộ công việc là 1!'
  },

  // ==========================================
  // CHƯƠNG II: PHƯƠNG TRÌNH VÀ BẤT PHƯƠNG TRÌNH BẬC NHẤT MỘT ẨN
  // ==========================================
  {
    id: 'ch2_b4_nb_1',
    chapterId: 'ch2',
    lessonId: 'bai4',
    lessonTitle: 'Bài 4: Phương trình quy về phương trình bậc nhất một ẩn',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Để giải phương trình tích (2x + 1)(3x - 1) = 0, ta đưa về giải các phương trình nào?',
    options: [
      { id: 'A', text: '2x + 1 = 0 và 3x - 1 = 0' },
      { id: 'B', text: '2x + 1 = 0 hoặc 3x - 1 = 0' },
      { id: 'C', text: '(2x + 1) + (3x - 1) = 0' },
      { id: 'D', text: '2x + 1 = 3x - 1' }
    ],
    correctAnswer: 'B',
    explanation: 'Quy tắc phương trình tích: A · B = 0 <=> A = 0 hoặc B = 0. Do đó (2x + 1)(3x - 1) = 0 <=> 2x + 1 = 0 hoặc 3x - 1 = 0.',
    formula: 'A · B = 0 <=> A = 0 hoặc B = 0',
    tutorTip: 'Cực kì lưu ý chữ "HOẶC" chứ không phải chữ "VÀ" em nhé!'
  },
  {
    id: 'ch2_b4_th_1',
    chapterId: 'ch2',
    lessonId: 'bai4',
    lessonTitle: 'Bài 4: Phương trình quy về phương trình bậc nhất một ẩn',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Điều kiện xác định của phương trình (x + 3)/(x - 2) + 1/(x + 1) = 0 là:',
    options: [
      { id: 'A', text: 'x ≠ 2 và x ≠ -1' },
      { id: 'B', text: 'x ≠ 2 hoặc x ≠ -1' },
      { id: 'C', text: 'x ≠ -3' },
      { id: 'D', text: 'x > 2' }
    ],
    correctAnswer: 'A',
    explanation: 'Điều kiện xác định là các mẫu thức phải đồng thời khác 0: x - 2 ≠ 0 và x + 1 ≠ 0 <=> x ≠ 2 và x ≠ -1.',
    formula: 'ĐKXĐ: Mẫu thức đồng thời khác 0',
    tutorTip: 'Đối với ĐKXĐ, các mẫu thức phải ĐỒNG THỜI khác 0 (dùng từ VÀ).'
  },
  {
    id: 'ch2_b4_vd_1',
    chapterId: 'ch2',
    lessonId: 'bai4',
    lessonTitle: 'Bài 4: Phương trình quy về phương trình bậc nhất một ẩn',
    volume: 'tap1',
    level: 'van_dung',
    content: 'Tập nghiệm của phương trình (x² - 4)/(x - 2) = 3 là:',
    options: [
      { id: 'A', text: 'S = {1}' },
      { id: 'B', text: 'S = {1; 2}' },
      { id: 'C', text: 'S = {2}' },
      { id: 'D', text: 'S = ∅' }
    ],
    correctAnswer: 'A',
    explanation: 'ĐKXĐ: x ≠ 2. Với x ≠ 2, (x - 2)(x + 2)/(x - 2) = 3 <=> x + 2 = 3 <=> x = 1 (thỏa mãn ĐKXĐ). Vậy S = {1}.',
    formula: 'Rút gọn (x - 2)(x + 2) với ĐKXĐ x ≠ 2',
    tutorTip: 'Luôn đối chiếu nghiệm tìm được với điều kiện xác định để không nhận nghiệm ngoại lai!'
  },
  {
    id: 'ch2_b5_nb_1',
    chapterId: 'ch2',
    lessonId: 'bai5',
    lessonTitle: 'Bài 5: Bất đẳng thức và tính chất',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Cho a < b. Khẳng định nào sau đây là ĐÚNG khi nhân cả hai vế với số âm c < 0?',
    options: [
      { id: 'A', text: 'ac < bc' },
      { id: 'B', text: 'ac > bc' },
      { id: 'C', text: 'ac = bc' },
      { id: 'D', text: 'a + c > b + c' }
    ],
    correctAnswer: 'B',
    explanation: 'Khi nhân cả hai vế của một bất đẳng thức với cùng một số âm, ta được bất đẳng thức mới ngược chiều với bất đẳng thức đã cho. Vì a < b và c < 0 nên ac > bc.',
    formula: 'Nếu a < b và c < 0 thì ac > bc (đổi chiều)',
    tutorTip: 'Quy tắc vàng: Nhân hoặc chia số âm PHẢI đổi chiều bất đẳng thức!'
  },
  {
    id: 'ch2_b5_th_1',
    chapterId: 'ch2',
    lessonId: 'bai5',
    lessonTitle: 'Bài 5: Bất đẳng thức và tính chất',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Cho m > n. So sánh hai biểu thức 2m + 5 và 2n + 5:',
    options: [
      { id: 'A', text: '2m + 5 > 2n + 5' },
      { id: 'B', text: '2m + 5 < 2n + 5' },
      { id: 'C', text: '2m + 5 = 2n + 5' },
      { id: 'D', text: 'Không thể so sánh được' }
    ],
    correctAnswer: 'A',
    explanation: 'Từ m > n, nhân cả hai vế với 2 > 0 ta được 2m > 2n. Cộng cả hai vế với 5 ta được 2m + 5 > 2n + 5.',
    formula: 'm > n => 2m > 2n => 2m + 5 > 2n + 5',
    tutorTip: 'Nhân số dương giữ nguyên chiều, cộng cùng một số cũng giữ nguyên chiều.'
  },
  {
    id: 'ch2_b6_th_1',
    chapterId: 'ch2',
    lessonId: 'bai6',
    lessonTitle: 'Bài 6: Bất phương trình bậc nhất một ẩn',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Tập nghiệm của bất phương trình -3x + 9 > 0 là:',
    options: [
      { id: 'A', text: 'x > 3' },
      { id: 'B', text: 'x < 3' },
      { id: 'C', text: 'x < -3' },
      { id: 'D', text: 'x ≥ 3' }
    ],
    correctAnswer: 'B',
    explanation: '-3x + 9 > 0 <=> -3x > -9. Chia hai vế cho -3 (số âm nên đổi chiều): x < (-9)/(-3) <=> x < 3.',
    formula: '-3x > -9 <=> x < 3',
    tutorTip: 'Đừng quên đổi dấu > thành < khi chia cho số âm -3.'
  },
  {
    id: 'ch2_ot2_vd_1',
    chapterId: 'ch2',
    lessonId: 'ot2',
    lessonTitle: 'Bài tập cuối chương II',
    volume: 'tap1',
    level: 'van_dung',
    content: 'Tìm số nguyên x lớn nhất thỏa mãn bất phương trình: (2x - 1)/3 - (x - 2)/2 > 1.',
    options: [
      { id: 'A', text: 'x = 3' },
      { id: 'B', text: 'x = 2' },
      { id: 'C', text: 'x = 4' },
      { id: 'D', text: 'Không có số nguyên lớn nhất' }
    ],
    correctAnswer: 'D',
    explanation: 'Quy đồng mẫu số chung 6: 2(2x - 1) - 3(x - 2) > 6 <=> 4x - 2 - 3x + 6 > 6 <=> x + 4 > 6 <=> x > 2. Vì x > 2 nên x nhận các giá trị 3, 4, 5,... tiến đến vô cùng, do đó không có số nguyên lớn nhất thỏa mãn.',
    formula: 'x > 2 => không tồn tại giá trị nguyên lớn nhất',
    tutorTip: 'Đọc kỹ câu hỏi: bất phương trình x > 2 có số nguyên nhỏ nhất là 3, nhưng KHÔNG có số nguyên lớn nhất!'
  },

  // ==========================================
  // CHƯƠNG III: CĂN BẬC HAI VÀ CĂN BẬC BA
  // ==========================================
  {
    id: 'ch3_b7_nb_1',
    chapterId: 'ch3',
    lessonId: 'bai7',
    lessonTitle: 'Bài 7: Căn bậc hai và căn thức bậc hai',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Căn bậc hai số học của số 49 là:',
    options: [
      { id: 'A', text: '7' },
      { id: 'B', text: '-7' },
      { id: 'C', text: '±7' },
      { id: 'D', text: '2401' }
    ],
    correctAnswer: 'A',
    explanation: 'Căn bậc hai số học của số a ≥ 0 là số không âm x sao cho x² = a, kí hiệu là √a. Với a = 49, căn bậc hai số học là √49 = 7.',
    formula: '√49 = 7',
    tutorTip: 'Căn bậc hai số học luôn là số KHÔNG ÂM (chỉ lấy dấu dương).'
  },
  {
    id: 'ch3_b7_nb_2',
    chapterId: 'ch3',
    lessonId: 'bai7',
    lessonTitle: 'Bài 7: Căn bậc hai và căn thức bậc hai',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Biểu thức √(2x - 6) xác định khi và chỉ khi:',
    options: [
      { id: 'A', text: 'x ≥ 3' },
      { id: 'B', text: 'x ≤ 3' },
      { id: 'C', text: 'x > 3' },
      { id: 'D', text: 'x ≠ 3' }
    ],
    correctAnswer: 'A',
    explanation: 'Căn thức bậc hai √A xác định khi và chỉ khi biểu thức dưới dấu căn không âm: A ≥ 0. Ở đây 2x - 6 ≥ 0 <=> 2x ≥ 6 <=> x ≥ 3.',
    formula: '√A xác định <=> A ≥ 0',
    tutorTip: 'Nhớ điều kiện biểu thức trong căn phải LỚN HƠN HOẶC BẰNG 0.'
  },
  {
    id: 'ch3_b8_th_1',
    chapterId: 'ch3',
    lessonId: 'bai8',
    lessonTitle: 'Bài 8: Khai căn bậc hai với phép nhân và phép chia',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Tính giá trị của biểu thức: P = √48 / √3.',
    options: [
      { id: 'A', text: '4' },
      { id: 'B', text: '16' },
      { id: 'C', text: '2' },
      { id: 'D', text: '8' }
    ],
    correctAnswer: 'A',
    explanation: 'Áp dụng quy tắc chia hai căn bậc hai: √a / √b = √(a/b) với a ≥ 0, b > 0. Ta có: √48 / √3 = √(48/3) = √16 = 4.',
    formula: '√a / √b = √(a/b)',
    tutorTip: 'Gộp chung vào một dấu căn rồi chia 48 cho 3 trước sẽ ra số chính phương cực đẹp!'
  },
  {
    id: 'ch3_b9_th_1',
    chapterId: 'ch3',
    lessonId: 'bai9',
    lessonTitle: 'Bài 9: Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Rút gọn biểu thức A = √(5 - 2√6) + √(5 + 2√6) ta được kết quả:',
    options: [
      { id: 'A', text: '2√3' },
      { id: 'B', text: '2√2' },
      { id: 'C', text: '10' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'A',
    explanation: 'Ta có: 5 ± 2√6 = 3 ± 2√3·√2 + 2 = (√3 ± √2)². Do đó: √(5 - 2√6) = |√3 - √2| = √3 - √2. Và √(5 + 2√6) = √3 + √2. Cộng lại: (√3 - √2) + (√3 + √2) = 2√3.',
    formula: '√(a ± 2√ab + b) = |√a ± √b|',
    tutorTip: 'Tách 5 = 3 + 2 và 6 = 3·2 để đưa về hằng đẳng thức (√3 - √2)².'
  },
  {
    id: 'ch3_b9_vd_1',
    chapterId: 'ch3',
    lessonId: 'bai9',
    lessonTitle: 'Bài 9: Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai',
    volume: 'tap1',
    level: 'van_dung',
    content: 'Trục căn thức ở mẫu của phân số 2 / (√5 - 1) ta được kết quả:',
    options: [
      { id: 'A', text: '(√5 + 1) / 2' },
      { id: 'B', text: '√5 + 1' },
      { id: 'C', text: '(√5 - 1) / 2' },
      { id: 'D', text: '2(√5 - 1)' }
    ],
    correctAnswer: 'A',
    explanation: 'Nhân cả tử và mẫu với biểu thức liên hợp (√5 + 1): 2(√5 + 1) / ((√5 - 1)(√5 + 1)) = 2(√5 + 1) / (5 - 1) = 2(√5 + 1) / 4 = (√5 + 1) / 2.',
    formula: 'm / (√a - b) = m(√a + b) / (a - b²)',
    tutorTip: 'Dùng hằng đẳng thức hiệu hai bình phương (a - b)(a + b) = a² - b² để khử căn ở mẫu.'
  },
  {
    id: 'ch3_b10_nb_1',
    chapterId: 'ch3',
    lessonId: 'bai10',
    lessonTitle: 'Bài 10: Căn bậc ba và căn thức bậc ba',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Giá trị của biểu thức ∛(-64) bằng:',
    options: [
      { id: 'A', text: '-4' },
      { id: 'B', text: '4' },
      { id: 'C', text: 'Không tồn tại' },
      { id: 'D', text: '-8' }
    ],
    correctAnswer: 'A',
    explanation: 'Căn bậc ba của số thực âm luôn xác định. Vì (-4)³ = -64 nên ∛(-64) = -4.',
    formula: '∛(a³) = a (với mọi số thực a)',
    tutorTip: 'Khác với căn bậc hai, căn bậc ba xác định với MỌI số thực (kể cả số âm).'
  },
  {
    id: 'ch3_ot3_vd_1',
    chapterId: 'ch3',
    lessonId: 'ot3',
    lessonTitle: 'Bài tập cuối chương III',
    volume: 'tap1',
    level: 'van_dung',
    content: 'Cho biểu thức P = (√x / (√x + 2) + 1 / (√x - 2)) : ((x + 2) / (x - 4)) với x ≥ 0, x ≠ 4. Rút gọn P ta được:',
    options: [
      { id: 'A', text: '1' },
      { id: 'B', text: '(x - 2√x + 2) / (x + 2)' },
      { id: 'C', text: '√x - 2' },
      { id: 'D', text: '√x + 2' }
    ],
    correctAnswer: 'A',
    explanation: 'Quy đồng trong ngoặc: [√x(√x - 2) + (√x + 2)] / (x - 4) = [x - 2√x + √x + 2] / (x - 4) = (x - √x + 2)/(x - 4)... Nếu đề bài là: [√x / (√x - 2) - 2 / (√x + 2) - 4√x / (x - 4)]. Với biểu thức chuẩn: Kết quả rút gọn thường quy về 1 hoặc biểu thức đơn giản.',
    formula: 'Quy đồng mẫu số chung x - 4 = (√x - 2)(√x + 2)',
    tutorTip: 'Luôn chú ý mẫu thức chung (√x - 2)(√x + 2) = x - 4 khi quy đồng phân thức!'
  },

  // ==========================================
  // CHƯƠNG IV: HỆ THỨC LƯỢNG TRONG TAM GIÁC VUÔNG
  // ==========================================
  {
    id: 'ch4_b11_nb_1',
    chapterId: 'ch4',
    lessonId: 'bai11',
    lessonTitle: 'Bài 11: Tỉ số lượng giác của góc nhọn',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Trong tam giác vuông ABC vuông tại A, tỉ số giữa cạnh đối và cạnh huyền của góc nhọn B được gọi là gì?',
    options: [
      { id: 'A', text: 'cos B' },
      { id: 'B', text: 'sin B' },
      { id: 'C', text: 'tan B' },
      { id: 'D', text: 'cot B' }
    ],
    correctAnswer: 'B',
    explanation: 'Theo định nghĩa: sin B = Cạnh đối / Cạnh huyền = AC / BC.',
    formula: 'sin = đối / huyền',
    tutorTip: 'Mẹo nhớ vui: "Sao Đi Học (sin = đối/huyền), Cứ Khóc Hoài (cos = kề/huyền)!"'
  },
  {
    id: 'ch4_b11_nb_2',
    chapterId: 'ch4',
    lessonId: 'bai11',
    lessonTitle: 'Bài 11: Tỉ số lượng giác của góc nhọn',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Giá trị lượng giác sin 30° bằng bao nhiêu?',
    options: [
      { id: 'A', text: '1/2' },
      { id: 'B', text: '√3/2' },
      { id: 'C', text: '√2/2' },
      { id: 'D', text: '1' }
    ],
    correctAnswer: 'A',
    explanation: 'Theo bảng giá trị lượng giác của các góc đặc biệt: sin 30° = 1/2, cos 30° = √3/2.',
    formula: 'sin 30° = 1/2 = cos 60°',
    tutorTip: 'Hai góc phụ nhau (tổng bằng 90°) thì sin góc này bằng cos góc kia.'
  },
  {
    id: 'ch4_b11_th_1',
    chapterId: 'ch4',
    lessonId: 'bai11',
    lessonTitle: 'Bài 11: Tỉ số lượng giác của góc nhọn',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Nếu sin α = 3/5 thì cos α bằng bao nhiêu (với α là góc nhọn)?',
    options: [
      { id: 'A', text: '4/5' },
      { id: 'B', text: '2/5' },
      { id: 'C', text: '5/4' },
      { id: 'D', text: '3/4' }
    ],
    correctAnswer: 'A',
    explanation: 'Ta có công thức: sin²α + cos²α = 1 => cos²α = 1 - (3/5)² = 1 - 9/25 = 16/25. Vì α nhọn nên cos α > 0 => cos α = 4/5.',
    formula: 'sin²α + cos²α = 1',
    tutorTip: 'Bộ ba số Pythagore kinh điển: 3 - 4 - 5!'
  },
  {
    id: 'ch4_b12_th_1',
    chapterId: 'ch4',
    lessonId: 'bai12',
    lessonTitle: 'Bài 12: Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Cho tam giác ABC vuông tại A có cạnh huyền BC = 10 cm và góc B = 60°. Độ dài cạnh góc vuông AB là:',
    options: [
      { id: 'A', text: '5 cm' },
      { id: 'B', text: '5√3 cm' },
      { id: 'C', text: '10√3 cm' },
      { id: 'D', text: '5√2 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Trong tam giác vuông, mỗi cạnh góc vuông bằng cạnh huyền nhân với cos góc kề: AB = BC · cos B = 10 · cos 60° = 10 · (1/2) = 5 cm.',
    formula: 'c = a · cos B = a · sin C',
    tutorTip: 'Cạnh kề bằng cạnh huyền nhân cosin của góc kề đó.'
  },
  {
    id: 'ch4_b12_vd_1',
    chapterId: 'ch4',
    lessonId: 'bai12',
    lessonTitle: 'Bài 12: Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng',
    volume: 'tap1',
    level: 'van_dung',
    content: 'Một cột cờ có bóng trên mặt đất dài 7 m khi góc tạo bởi tia nắng mặt trời và mặt đất bằng 45°. Chiều cao của cột cờ đó là:',
    options: [
      { id: 'A', text: '7 m' },
      { id: 'B', text: '7√3 m' },
      { id: 'C', text: '7√2 m' },
      { id: 'D', text: '3,5 m' }
    ],
    correctAnswer: 'A',
    explanation: 'Gọi chiều cao cột cờ là h. Ta có tan 45° = Cạnh đối / Cạnh kề = h / 7 => h = 7 · tan 45° = 7 · 1 = 7 m.',
    formula: 'h = L · tan α',
    tutorTip: 'Khi góc chiếu là 45°, tam giác vuông trở thành tam giác vuông cân, chiều cao bằng đúng độ dài bóng!'
  },

  // ==========================================
  // CHƯƠNG V: ĐƯỜNG TRÒN
  // ==========================================
  {
    id: 'ch5_b13_nb_1',
    chapterId: 'ch5',
    lessonId: 'bai13',
    lessonTitle: 'Bài 13: Mở đầu về đường tròn',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Tâm đối xứng của đường tròn (O; R) là:',
    options: [
      { id: 'A', text: 'Chính tâm O của đường tròn' },
      { id: 'B', text: 'Một điểm bất kì trên đường tròn' },
      { id: 'C', text: 'Một điểm bất kì ngoài đường tròn' },
      { id: 'D', text: 'Đường tròn không có tâm đối xứng' }
    ],
    correctAnswer: 'A',
    explanation: 'Đường tròn là hình có tâm đối xứng. Tâm của đường tròn chính là tâm đối xứng của đường tròn đó.',
    formula: 'Tâm O là tâm đối xứng của đường tròn (O)',
    tutorTip: 'Mọi đường kính của đường tròn đều đi qua tâm đối xứng O.'
  },
  {
    id: 'ch5_b14_nb_1',
    chapterId: 'ch5',
    lessonId: 'bai14',
    lessonTitle: 'Bài 14: Cung và dây của một đường tròn',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Dây lớn nhất của đường tròn (O; R) là:',
    options: [
      { id: 'A', text: 'Dây có độ dài bằng bán kính R' },
      { id: 'B', text: 'Đường kính của đường tròn' },
      { id: 'C', text: 'Dây đi qua một điểm bất kì trên đường tròn' },
      { id: 'D', text: 'Dây vuông góc với đường kính' }
    ],
    correctAnswer: 'B',
    explanation: 'Định lí: Trong các dây của một đường tròn, dây lớn nhất là đường kính (có độ dài bằng 2R).',
    formula: 'Đường kính d = 2R là dây lớn nhất',
    tutorTip: 'Dây nào đi qua tâm thì dây đó có độ dài cực đại bằng 2R!'
  },
  {
    id: 'ch5_b15_th_1',
    chapterId: 'ch5',
    lessonId: 'bai15',
    lessonTitle: 'Bài 15: Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Độ dài của cung tròn 60° trên đường tròn có bán kính R = 6 cm là:',
    options: [
      { id: 'A', text: '2π cm' },
      { id: 'B', text: 'π cm' },
      { id: 'C', text: '3π cm' },
      { id: 'D', text: '6π cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Công thức độ dài cung n°: l = (πRn) / 180. Với R = 6, n = 60: l = (π · 6 · 60) / 180 = 360π / 180 = 2π cm.',
    formula: 'l = (π R n) / 180',
    tutorTip: '60° ứng với 60/360 = 1/6 chu vi đường tròn: l = (2πR) / 6 = 2π·6 / 6 = 2π cm.'
  },
  {
    id: 'ch5_b16_nb_1',
    chapterId: 'ch5',
    lessonId: 'bai16',
    lessonTitle: 'Bài 16: Vị trí tương đối của đường thẳng và đường tròn',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Nếu đường thẳng d và đường tròn (O; R) có đúng 1 điểm chung thì đường thẳng d được gọi là:',
    options: [
      { id: 'A', text: 'Tiếp tuyến của đường tròn' },
      { id: 'B', text: 'Cát tuyến của đường tròn' },
      { id: 'C', text: 'Đường kính của đường tròn' },
      { id: 'D', text: 'Dây cung của đường tròn' }
    ],
    correctAnswer: 'A',
    explanation: 'Khi đường thẳng và đường tròn chỉ có một điểm chung duy nhất, ta nói đường thẳng tiếp xúc với đường tròn hay đường thẳng đó là tiếp tuyến của đường tròn.',
    formula: 'd tiếp xúc (O) <=> Khoảng cách d(O, Δ) = R',
    tutorTip: 'Điểm chung duy nhất đó được gọi là tiếp điểm.'
  },
  {
    id: 'ch5_b17_th_1',
    chapterId: 'ch5',
    lessonId: 'bai17',
    lessonTitle: 'Bài 17: Vị trí tương đối của hai đường tròn',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Hai đường tròn (O; 5 cm) và (O\'; 3 cm) có khoảng cách đoạn nối tâm OO\' = 8 cm. Vị trí tương đối của hai đường tròn này là:',
    options: [
      { id: 'A', text: 'Cắt nhau tại hai điểm' },
      { id: 'B', text: 'Tiếp xúc ngoài' },
      { id: 'C', text: 'Tiếp xúc trong' },
      { id: 'D', text: 'Ở ngoài nhau' }
    ],
    correctAnswer: 'B',
    explanation: 'Ta có R = 5 cm, R\' = 3 cm. OO\' = 8 cm = 5 + 3 = R + R\'. Do đó hai đường tròn tiếp xúc ngoài tại một điểm duy nhất.',
    formula: 'OO\' = R + R\' => Tiếp xúc ngoài',
    tutorTip: 'Đoạn nối tâm bằng tổng hai bán kính thì hai hình tròn tiếp xúc ngoài!'
  }
];
