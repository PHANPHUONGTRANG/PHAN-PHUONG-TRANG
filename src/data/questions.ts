import { Question } from '../types';
import { QUESTIONS_VOLUME_1 } from './questionsVolume1';
import { QUESTIONS_VOLUME_2 } from './questionsVolume2';

const BASE_QUESTIONS: Question[] = [
  // ==========================================
  // CHƯƠNG I: PHƯƠNG TRÌNH VÀ HỆ HAI PHƯƠNG TRÌNH BẬC NHẤT HAI ẨN
  // ==========================================
  {
    id: 'ch1_nb_1',
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
    explanation: 'Phương trình bậc nhất hai ẩn x, y có dạng ax + by = c trong đó a và b không đồng thời bằng 0 (a ≠ 0 hoặc b ≠ 0). Phương trình 4x - 3y = 7 thỏa mãn với a = 4, b = -3, c = 7.',
    formula: 'ax + by = c (a ≠ 0 hoặc b ≠ 0)',
    tutorTip: 'Nhớ kỹ: Bậc của x và y phải là bậc 1 và hệ số a, b không được cùng bằng 0 nhé!'
  },
  {
    id: 'ch1_nb_2',
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
    explanation: 'Trong mặt phẳng tọa độ Oxy, tập hợp các điểm có tọa độ (x; y) thỏa mãn phương trình bậc nhất hai ẩn ax + by = c là một đường thẳng (gọi là đường thẳng ax + by = c).',
    formula: 'Tập nghiệm của ax + by = c là đường thẳng d',
    tutorTip: 'Mỗi phương trình bậc nhất hai ẩn luôn có vô số nghiệm, biểu diễn bằng một đường thẳng kéo dài vô tận.'
  },
  {
    id: 'ch1_th_1',
    chapterId: 'ch1',
    lessonId: 'bai2',
    lessonTitle: 'Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Cặp số (x; y) nào sau đây là nghiệm của hệ phương trình: { 2x - y = 3 ; x + 2y = 4 }?',
    options: [
      { id: 'A', text: '(2; 1)' },
      { id: 'B', text: '(1; 2)' },
      { id: 'C', text: '(3; 3)' },
      { id: 'D', text: '(0; 2)' }
    ],
    correctAnswer: 'A',
    explanation: 'Từ phương trình thứ nhất suy ra y = 2x - 3. Thế vào phương trình thứ hai: x + 2(2x - 3) = 4 <=> 5x - 6 = 4 <=> 5x = 10 => x = 2. Khi đó y = 2(2) - 3 = 1. Nghiệm là (2; 1).',
    formula: 'Phương pháp thế: Rút y = 2x - 3 rồi thế vào phương trình còn lại.',
    tutorTip: 'Em có thể thế nhanh tọa độ (x; y) vào cả 2 phương trình để thử lại kết quả xem cả hai đều đúng không nhé!'
  },
  {
    id: 'ch1_th_2',
    chapterId: 'ch1',
    lessonId: 'bai2',
    lessonTitle: 'Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Nghiệm của hệ phương trình: { 3x + 2y = 7 ; 2x - 3y = -4 } là:',
    options: [
      { id: 'A', text: '(x; y) = (-1; 5)' },
      { id: 'B', text: '(x; y) = (1; 2)' },
      { id: 'C', text: '(x; y) = (2; 1)' },
      { id: 'D', text: '(x; y) = (3; -1)' }
    ],
    correctAnswer: 'B',
    explanation: 'Nhân phương trình 1 với 3 và phương trình 2 với 2: { 9x + 6y = 21 ; 4x - 6y = -8 }. Cộng hai vế: 13x = 13 => x = 1. Thay x = 1 vào PT1: 3(1) + 2y = 7 => 2y = 4 => y = 2. Vậy nghiệm là (1; 2).',
    formula: 'Phương pháp cộng đại số triệt tiêu y.',
    tutorTip: 'Chọn nhân hệ số thích hợp để đưa về hai hệ số đối nhau, cộng lại sẽ mất ngay ẩn y!'
  },
  {
    id: 'ch1_vd_1',
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
    explanation: 'Gọi x là số cam, y là số quýt (x, y nguyên dương < 17). Ta có hệ phương trình: { x + y = 17 ; 10x + 3y = 100 }. Từ x + y = 17 => 3x + 3y = 51. Trừ hai vế: 7x = 49 => x = 7 (cam), suy ra y = 10 (quýt).',
    formula: 'Hệ: { x + y = 17 ; 10x + 3y = 100 }',
    tutorTip: 'Đọc kĩ đề: 1 quả cam chia 10 miếng (10x), 1 quả quýt chia 3 miếng (3y), tổng số người là 100 miếng.'
  },
  {
    id: 'ch1_vd_2',
    chapterId: 'ch1',
    lessonId: 'ot1',
    lessonTitle: 'Bài tập cuối chương I',
    volume: 'tap1',
    level: 'van_dung',
    content: 'Đường thẳng 4x - 3y = -1 đi qua cặp điểm nào trong các điểm A(1; 2), B(5; 6), C(2; 3), D(-1; -1)? (Theo bài 1.20 SGK)',
    options: [
      { id: 'A', text: 'A và B' },
      { id: 'B', text: 'B và C' },
      { id: 'C', text: 'C và D' },
      { id: 'D', text: 'D và A' }
    ],
    correctAnswer: 'D',
    explanation: 'Thử tọa độ từng điểm vào 4x - 3y = -1: Với A(1; 2): 4(1) - 3(2) = 4 - 6 = -2 ≠ -1 (sai?). Khoan, kiểm tra: 4(2) - 3(3) = 8 - 9 = -1 => C(2; 3) thuộc đường thẳng. Với D(-1; -1): 4(-1) - 3(-1) = -4 + 3 = -1 => D thuộc đường thẳng! Do đó C và D đều thuộc đường thẳng.',
    formula: 'Thay tọa độ (x; y) của điểm vào vế trái phương trình.',
    tutorTip: 'Điểm thuộc đường thẳng khi tọa độ thỏa mãn phương trình!'
  },

  // ==========================================
  // CHƯƠNG II: PHƯƠNG TRÌNH VÀ BẤT PHƯƠNG TRÌNH BẬC NHẤT MỘT ẨN
  // ==========================================
  {
    id: 'ch2_nb_1',
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
    id: 'ch2_nb_2',
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
    id: 'ch2_th_1',
    chapterId: 'ch2',
    lessonId: 'bai4',
    lessonTitle: 'Bài 4: Phương trình quy về phương trình bậc nhất một ẩn',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Điều kiện xác định (ĐKXĐ) của phương trình (5x + 2)/(x - 1) = 0 là:',
    options: [
      { id: 'A', text: 'x ≠ -2/5' },
      { id: 'B', text: 'x ≠ 1' },
      { id: 'C', text: 'x ≠ 0' },
      { id: 'D', text: 'x > 1' }
    ],
    correctAnswer: 'B',
    explanation: 'Điều kiện xác định của phương trình chứa ẩn ở mẫu là các mẫu thức phải khác 0. Ở đây mẫu là x - 1 ≠ 0 <=> x ≠ 1.',
    formula: 'Mẫu thức ≠ 0',
    tutorTip: 'Bước đầu tiên khi giải phương trình chứa ẩn ở mẫu luôn là tìm ĐKXĐ.'
  },
  {
    id: 'ch2_th_2',
    chapterId: 'ch2',
    lessonId: 'bai6',
    lessonTitle: 'Bài 6: Bất phương trình bậc nhất một ẩn',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Tập nghiệm của bất phương trình -2x + 4 > 0 là:',
    options: [
      { id: 'A', text: 'x > 2' },
      { id: 'B', text: 'x < 2' },
      { id: 'C', text: 'x < -2' },
      { id: 'D', text: 'x ≥ 2' }
    ],
    correctAnswer: 'B',
    explanation: 'Ta có: -2x + 4 > 0 <=> -2x > -4. Chia cả hai vế cho -2 (số âm nên đổi chiều): x < (-4)/(-2) <=> x < 2.',
    formula: '-2x > -4 <=> x < 2',
    tutorTip: 'Chia cho -2 thì dấu > phải lật ngược thành dấu < nhé em!'
  },
  {
    id: 'ch2_vd_1',
    chapterId: 'ch2',
    lessonId: 'bai6',
    lessonTitle: 'Bài 6: Bất phương trình bậc nhất một ẩn',
    volume: 'tap1',
    level: 'van_dung',
    content: 'Bạn Thanh có 100 nghìn đồng. Bạn muốn mua một cây bút giá 18 nghìn đồng và một số quyển vở giá 7 nghìn đồng/quyển. Hỏi bạn mua được nhiều nhất bao nhiêu quyển vở?',
    options: [
      { id: 'A', text: '10 quyển' },
      { id: 'B', text: '11 quyển' },
      { id: 'C', text: '12 quyển' },
      { id: 'D', text: '13 quyển' }
    ],
    correctAnswer: 'B',
    explanation: 'Gọi x là số vở (x nguyên dương). Tổng số tiền mua: 7x + 18 ≤ 100 <=> 7x ≤ 82 <=> x ≤ 82/7 ≈ 11,71. Vì x là số tự nhiên nên số vở nhiều nhất mua được là 11 quyển.',
    formula: '7x + 18 ≤ 100 => x ≤ 11,71',
    tutorTip: 'Với các bài toán số lượng đồ vật thực tế, nghiệm phải là số nguyên dương làm tròn xuống!'
  },

  // ==========================================
  // CHƯƠNG III: CĂN BẬC HAI VÀ CĂN BẬC BA
  // ==========================================
  {
    id: 'ch3_nb_1',
    chapterId: 'ch3',
    lessonId: 'bai7',
    lessonTitle: 'Bài 7: Căn bậc hai và căn thức bậc hai',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Căn bậc hai số học của số 49 là:',
    options: [
      { id: 'A', text: '7 và -7' },
      { id: 'B', text: '7' },
      { id: 'C', text: '-7' },
      { id: 'D', text: '√7' }
    ],
    correctAnswer: 'B',
    explanation: 'Với số dương a, số √a được gọi là căn bậc hai số học của a. Do 7² = 49 và 7 > 0 nên căn bậc hai số học của 49 là 7. (Chú ý: số 49 có hai căn bậc hai là 7 và -7, nhưng căn bậc hai số học chỉ là số không âm 7).',
    formula: 'Căn bậc hai số học: √a ≥ 0',
    tutorTip: 'Phân biệt: "Căn bậc hai" có 2 giá trị đối nhau, nhưng "Căn bậc hai SỐ HỌC" luôn là số không âm.'
  },
  {
    id: 'ch3_nb_2',
    chapterId: 'ch3',
    lessonId: 'bai7',
    lessonTitle: 'Bài 7: Căn bậc hai và căn thức bậc hai',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Căn thức bậc hai √(2x + 1) xác định khi và chỉ khi:',
    options: [
      { id: 'A', text: 'x ≥ 1/2' },
      { id: 'B', text: 'x ≥ -1/2' },
      { id: 'C', text: 'x > -1/2' },
      { id: 'D', text: 'x ≤ -1/2' }
    ],
    correctAnswer: 'B',
    explanation: 'Biểu thức √A xác định khi A ≥ 0. Do đó √(2x + 1) xác định <=> 2x + 1 ≥ 0 <=> 2x ≥ -1 <=> x ≥ -1/2.',
    formula: '√A xác định <=> A ≥ 0',
    tutorTip: 'Biểu thức dưới dấu căn bậc hai không bao giờ được âm!'
  },
  {
    id: 'ch3_th_1',
    chapterId: 'ch3',
    lessonId: 'bai8',
    lessonTitle: 'Bài 8: Khai căn bậc hai với phép nhân và phép chia',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Rút gọn biểu thức A = √(1 - √3)² - √3, ta được kết quả là:',
    options: [
      { id: 'A', text: '1 - 2√3' },
      { id: 'B', text: '-1' },
      { id: 'C', text: '1' },
      { id: 'D', text: '2√3 - 1' }
    ],
    correctAnswer: 'B',
    explanation: 'Áp dụng hằng đẳng thức √A² = |A|: √(1 - √3)² = |1 - √3|. Vì 1 < √3 nên 1 - √3 < 0, do đó |1 - √3| = √3 - 1. Vậy A = (√3 - 1) - √3 = -1.',
    formula: '√A² = |A|; khi A < 0 thì |A| = -A',
    tutorTip: 'Cực kì chú ý so sánh 1 với √3 ≈ 1,732 để phá trị tuyệt đối đúng dấu!'
  },
  {
    id: 'ch3_th_2',
    chapterId: 'ch3',
    lessonId: 'bai9',
    lessonTitle: 'Bài 9: Biến đổi đơn giản và rút gọn biểu thức chứa căn thức bậc hai',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Trục căn thức ở mẫu của biểu thức 2/(3 - √7) ta được kết quả:',
    options: [
      { id: 'A', text: '3 + √7' },
      { id: 'B', text: '2(3 + √7)' },
      { id: 'C', text: '(3 + √7)/2' },
      { id: 'D', text: '3 - √7' }
    ],
    correctAnswer: 'A',
    explanation: 'Nhân cả tử và mẫu với lượng liên hợp (3 + √7): [2(3 + √7)] / [(3 - √7)(3 + √7)] = [2(3 + √7)] / (3² - 7) = [2(3 + √7)] / (9 - 7) = [2(3 + √7)] / 2 = 3 + √7.',
    formula: 'C / (A - √B) = C(A + √B) / (A² - B)',
    tutorTip: 'Nhớ hằng đẳng thức hiệu hai bình phương (a-b)(a+b) = a² - b² để khử sạch dấu căn ở mẫu!'
  },
  {
    id: 'ch3_vd_1',
    chapterId: 'ch3',
    lessonId: 'bai10',
    lessonTitle: 'Bài 10: Căn bậc ba và căn thức bậc ba',
    volume: 'tap1',
    level: 'van_dung',
    content: 'Rút gọn biểu thức B = ∛(4 - √17)³ + √(√17 - 4)² ta được kết quả là:',
    options: [
      { id: 'A', text: '0' },
      { id: 'B', text: '8' },
      { id: 'C', text: '2√17 - 8' },
      { id: 'D', text: '8 - 2√17' }
    ],
    correctAnswer: 'A',
    explanation: '• ∛(4 - √17)³ = 4 - √17 (vì căn bậc ba không có trị tuyệt đối).\n• √(√17 - 4)² = |√17 - 4| = √17 - 4 (vì √17 > √16 = 4 nên √17 - 4 > 0).\n• Do đó B = (4 - √17) + (√17 - 4) = 0.',
    formula: '∛A³ = A ; √A² = |A|',
    tutorTip: 'Căn bậc ba của A³ bằng chính A (kể cả âm), còn căn bậc hai của A² thì phải có dấu trị tuyệt đối!'
  },

  // ==========================================
  // CHƯƠNG IV: HỆ THỨC LƯỢNG TRONG TAM GIÁC VUÔNG
  // ==========================================
  {
    id: 'ch4_nb_1',
    chapterId: 'ch4',
    lessonId: 'bai11',
    lessonTitle: 'Bài 11: Tỉ số lượng giác của góc nhọn',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Cho tam giác ABC vuông tại A có góc nhọn B = α. Khẳng định nào sau đây là ĐÚNG về tỉ số lượng giác sin α?',
    options: [
      { id: 'A', text: 'sin α = Cạnh kề / Cạnh huyền' },
      { id: 'B', text: 'sin α = Cạnh đối / Cạnh huyền' },
      { id: 'C', text: 'sin α = Cạnh đối / Cạnh kề' },
      { id: 'D', text: 'sin α = Cạnh kề / Cạnh đối' }
    ],
    correctAnswer: 'B',
    explanation: 'Theo định nghĩa tỉ số lượng giác góc nhọn: sin = đối/huyền, cos = kề/huyền, tan = đối/kề, cot = kề/đối.',
    formula: 'sin α = đối / huyền ; cos α = kề / huyền',
    tutorTip: 'Mẹo thần chú: "Sao Đi Học - Cứ Khóc Hoài - Thôi Đừng Khóc - Có Kẹo Đây"!'
  },
  {
    id: 'ch4_nb_2',
    chapterId: 'ch4',
    lessonId: 'bai11',
    lessonTitle: 'Bài 11: Tỉ số lượng giác của góc nhọn',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Giá trị của tan 30° bằng bao nhiêu?',
    options: [
      { id: 'A', text: '1/2' },
      { id: 'B', text: '√3/2' },
      { id: 'C', text: '√3/3' },
      { id: 'D', text: '√3' }
    ],
    correctAnswer: 'C',
    explanation: 'Theo bảng giá trị lượng giác các góc đặc biệt: tan 30° = √3/3 (hoặc 1/√3).',
    formula: 'tan 30° = 1/√3 = √3/3',
    tutorTip: 'Góc 30° thì tan nhỏ hơn 1 (bằng √3/3), còn góc 60° thì tan lớn hơn 1 (bằng √3).'
  },
  {
    id: 'ch4_th_1',
    chapterId: 'ch4',
    lessonId: 'bai12',
    lessonTitle: 'Bài 12: Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Cho tam giác ABC vuông tại A có cạnh huyền BC = 10 cm và góc B = 30°. Độ dài cạnh góc vuông AC là:',
    options: [
      { id: 'A', text: '5 cm' },
      { id: 'B', text: '5√3 cm' },
      { id: 'C', text: '10√3 cm' },
      { id: 'D', text: '8 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Trong tam giác vuông ABC, cạnh AC đối diện với góc B. Ta có AC = BC · sin B = 10 · sin 30° = 10 · 1/2 = 5 cm.',
    formula: 'b = a · sin B',
    tutorTip: 'Cạnh góc vuông = Cạnh huyền nhân sin góc đối!'
  },
  {
    id: 'ch4_vd_1',
    chapterId: 'ch4',
    lessonId: 'bai12',
    lessonTitle: 'Bài 12: Một số hệ thức giữa cạnh, góc trong tam giác vuông và ứng dụng',
    volume: 'tap1',
    level: 'van_dung',
    content: 'Một chiếc máy bay cất cánh lên với vận tốc 500 km/h theo đường bay nghiêng một góc 30° so với mặt đất nằm ngang. Hỏi sau 1,2 phút, máy bay đạt được độ cao bao nhiêu km theo phương thẳng đứng?',
    options: [
      { id: 'A', text: '10 km' },
      { id: 'B', text: '5 km' },
      { id: 'C', text: '2,5 km' },
      { id: 'D', text: '6 km' }
    ],
    correctAnswer: 'B',
    explanation: 'Đổi 1,2 phút = 1,2 / 60 = 1/50 giờ. Quãng đường bay là cạnh huyền AB = v · t = 500 · (1/50) = 10 km. Độ cao theo phương thẳng đứng là cạnh góc vuông BH = AB · sin 30° = 10 · 0,5 = 5 km.',
    formula: 'h = s · sin α',
    tutorTip: 'Nhớ đổi đơn vị thời gian từ phút sang giờ trước khi nhân với vận tốc km/h nhé!'
  },

  // ==========================================
  // CHƯƠNG V: ĐƯỜNG TRÒN
  // ==========================================
  {
    id: 'ch5_nb_1',
    chapterId: 'ch5',
    lessonId: 'bai14',
    lessonTitle: 'Bài 14: Cung và dây của một đường tròn',
    volume: 'tap1',
    level: 'nhan_biet',
    content: 'Trong một đường tròn, khẳng định nào sau đây là ĐÚNG?',
    options: [
      { id: 'A', text: 'Đường kính là dây cung lớn nhất' },
      { id: 'B', text: 'Mọi dây cung đều đi qua tâm' },
      { id: 'C', text: 'Dây cung luôn dài hơn đường kính' },
      { id: 'D', text: 'Bán kính dài gấp đôi đường kính' }
    ],
    correctAnswer: 'A',
    explanation: 'Định lí trong SGK: Trong một đường tròn, đường kính là dây cung lớn nhất. Dây AB ≤ 2R với mọi dây AB.',
    formula: 'Dây AB ≤ 2R',
    tutorTip: 'Dây cung đi qua tâm chính là đường kính, và đó là dây cung dài nhất của đường tròn.'
  },
  {
    id: 'ch5_th_1',
    chapterId: 'ch5',
    lessonId: 'bai15',
    lessonTitle: 'Bài 15: Độ dài của cung tròn. Diện tích hình quạt tròn và hình vành khuyên',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Độ dài của cung tròn 60° trên một đường tròn có bán kính R = 6 cm bằng bao nhiêu?',
    options: [
      { id: 'A', text: '2π cm' },
      { id: 'B', text: '4π cm' },
      { id: 'C', text: 'π cm' },
      { id: 'D', text: '6π cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Công thức độ dài cung tròn n° là: l = (n · π · R) / 180 = (60 · π · 6) / 180 = 360π / 180 = 2π (cm).',
    formula: 'l = (n / 180) · π · R',
    tutorTip: 'Góc 60° bằng 1/6 cả đường tròn (360°), nên độ dài cung cũng bằng 1/6 chu vi: (2π · 6)/6 = 2π cm.'
  },
  {
    id: 'ch5_vd_1',
    chapterId: 'ch5',
    lessonId: 'bai16',
    lessonTitle: 'Bài 16: Vị trí tương đối của đường thẳng và đường tròn',
    volume: 'tap1',
    level: 'van_dung',
    content: 'Từ điểm M nằm ngoài đường tròn (O; 2 cm), kẻ hai tiếp tuyến MA và MB với đường tròn (A, B là tiếp điểm). Biết MO = 4 cm. Độ dài đoạn tiếp tuyến MA là:',
    options: [
      { id: 'A', text: '2√3 cm' },
      { id: 'B', text: '2√5 cm' },
      { id: 'C', text: '4 cm' },
      { id: 'D', text: '6 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Vì MA là tiếp tuyến tại A nên tam giác OAM vuông tại A (OA ⊥ MA). Áp dụng định lí Pythagore: MA² = MO² - OA² = 4² - 2² = 16 - 4 = 12 => MA = √12 = 2√3 cm.',
    formula: 'MA = √(MO² - R²)',
    tutorTip: 'Tiếp tuyến vuông góc với bán kính tại tiếp điểm, tạo ra tam giác vuông để áp dụng định lí Pythagore.'
  },

  // ==========================================
  // CHƯƠNG VI: HÀM SỐ y = ax² (a ≠ 0). PHƯƠNG TRÌNH BẬC HAI MỘT ẨN
  // ==========================================
  {
    id: 'ch6_nb_1',
    chapterId: 'ch6',
    lessonId: 'bai18',
    lessonTitle: 'Bài 18: Hàm số y = ax² (a ≠ 0)',
    volume: 'tap2',
    level: 'nhan_biet',
    content: 'Đồ thị của hàm số y = -3x² có đặc điểm nào sau đây?',
    options: [
      { id: 'A', text: 'Là parabol có đỉnh O(0;0) và nằm phía trên trục hoành' },
      { id: 'B', text: 'Là parabol có đỉnh O(0;0) và nằm phía dưới trục hoành' },
      { id: 'C', text: 'Là một đường thẳng đi qua gốc tọa độ' },
      { id: 'D', text: 'Nhận trục hoành Ox làm trục đối xứng' }
    ],
    correctAnswer: 'B',
    explanation: 'Vì hệ số a = -3 < 0 nên parabol quay bề lõm xuống dưới, nằm hoàn toàn phía dưới trục hoành (trừ điểm đỉnh O(0;0) thuộc Ox) và nhận trục tung Oy làm trục đối xứng.',
    formula: 'a < 0: parabol úp xuống dưới Ox; a > 0: parabol ngửa lên trên Ox',
    tutorTip: 'Hệ số a âm thì đồ thị nằm phía dưới, hệ số a dương thì đồ thị nằm phía trên trục hoành!'
  },
  {
    id: 'ch6_nb_2',
    chapterId: 'ch6',
    lessonId: 'bai19',
    lessonTitle: 'Bài 19: Phương trình bậc hai một ẩn',
    volume: 'tap2',
    level: 'nhan_biet',
    content: 'Phương trình bậc hai ax² + bx + c = 0 (a ≠ 0) có nghiệm kép khi và chỉ khi biệt thức Δ thỏa mãn:',
    options: [
      { id: 'A', text: 'Δ > 0' },
      { id: 'B', text: 'Δ < 0' },
      { id: 'C', text: 'Δ = 0' },
      { id: 'D', text: 'Δ ≥ 0' }
    ],
    correctAnswer: 'C',
    explanation: 'Theo công thức nghiệm:\n• Δ > 0: phương trình có hai nghiệm phân biệt.\n• Δ = 0: phương trình có nghiệm kép x₁ = x₂ = -b/(2a).\n• Δ < 0: phương trình vô nghiệm.',
    formula: 'Δ = b² - 4ac = 0 => nghiệm kép',
    tutorTip: 'Δ = 0 sinh ra 1 nghiệm kép duy nhất bằng -b/(2a).'
  },
  {
    id: 'ch6_th_1',
    chapterId: 'ch6',
    lessonId: 'bai20',
    lessonTitle: 'Bài 20: Định lí Viète và ứng dụng',
    volume: 'tap2',
    level: 'thong_hieu',
    content: 'Gọi x₁, x₂ là hai nghiệm của phương trình x² - 5x + 6 = 0. Tổng x₁ + x₂ và tích x₁·x₂ lần lượt là:',
    options: [
      { id: 'A', text: 'Tổng = -5, Tích = 6' },
      { id: 'B', text: 'Tổng = 5, Tích = 6' },
      { id: 'C', text: 'Tổng = 5, Tích = -6' },
      { id: 'D', text: 'Tổng = -5, Tích = -6' }
    ],
    correctAnswer: 'B',
    explanation: 'Theo định lí Viète: x₁ + x₂ = -b/a = -(-5)/1 = 5; x₁·x₂ = c/a = 6/1 = 6.',
    formula: 'x₁ + x₂ = -b/a ; x₁·x₂ = c/a',
    tutorTip: 'Cực kì lưu ý dấu trừ ở công thức tổng: x₁ + x₂ = -b/a!'
  },
  {
    id: 'ch6_th_2',
    chapterId: 'ch6',
    lessonId: 'bai20',
    lessonTitle: 'Bài 20: Định lí Viète và ứng dụng',
    volume: 'tap2',
    level: 'thong_hieu',
    content: 'Nhẩm nhanh nghiệm của phương trình bậc hai 2x² - 7x + 5 = 0:',
    options: [
      { id: 'A', text: 'x₁ = 1 ; x₂ = 5/2' },
      { id: 'B', text: 'x₁ = -1 ; x₂ = -5/2' },
      { id: 'C', text: 'x₁ = 1 ; x₂ = -5/2' },
      { id: 'D', text: 'x₁ = -1 ; x₂ = 5/2' }
    ],
    correctAnswer: 'A',
    explanation: 'Ta thấy các hệ số: a = 2, b = -7, c = 5 có a + b + c = 2 + (-7) + 5 = 0. Do đó phương trình có một nghiệm là x₁ = 1 và nghiệm kia là x₂ = c/a = 5/2.',
    formula: 'Nếu a + b + c = 0 thì x₁ = 1 và x₂ = c/a',
    tutorTip: 'Bí kíp của cô: Khi cộng nhẩm 3 hệ số a + b + c ra bằng 0, luôn có sẵn nghiệm x = 1!'
  },
  {
    id: 'ch6_vd_1',
    chapterId: 'ch6',
    lessonId: 'bai21',
    lessonTitle: 'Bài 21: Giải bài toán bằng cách lập phương trình',
    volume: 'tap2',
    level: 'van_dung',
    content: 'Một mảnh đất hình chữ nhật có chu vi 74 m và diện tích 300 m². Tính chiều dài và chiều rộng của mảnh đất đó.',
    options: [
      { id: 'A', text: 'Dài 25 m, Rộng 12 m' },
      { id: 'B', text: 'Dài 20 m, Rộng 15 m' },
      { id: 'C', text: 'Dài 30 m, Rộng 10 m' },
      { id: 'D', text: 'Dài 24 m, Rộng 13 m' }
    ],
    correctAnswer: 'A',
    explanation: 'Nửa chu vi (tổng dài và rộng) là S = 74 / 2 = 37 m. Diện tích (tích dài và rộng) là P = 300 m². Chiều dài và chiều rộng là nghiệm của phương trình: X² - 37X + 300 = 0. Giải ra: X₁ = 25, X₂ = 12. Vậy chiều dài là 25 m và chiều rộng là 12 m.',
    formula: 'X² - SX + P = 0',
    tutorTip: 'Biết tổng S và tích P thì hai số là nghiệm của phương trình X² - SX + P = 0.'
  },

  // ==========================================
  // CHƯƠNG VII: TẦN SỐ VÀ TẦN SỐ TƯƠNG ĐỐI
  // ==========================================
  {
    id: 'ch7_nb_1',
    chapterId: 'ch7',
    lessonId: 'bai22',
    lessonTitle: 'Bài 22: Bảng tần số và biểu đồ tần số',
    volume: 'tap2',
    level: 'nhan_biet',
    content: 'Tần số của một giá trị trong mẫu dữ liệu là gì?',
    options: [
      { id: 'A', text: 'Tỉ số giữa số lần xuất hiện của giá trị đó và kích thước mẫu' },
      { id: 'B', text: 'Số lần xuất hiện của giá trị đó trong mẫu dữ liệu' },
      { id: 'C', text: 'Giá trị lớn nhất trong mẫu dữ liệu' },
      { id: 'D', text: 'Trung bình cộng của tất cả các giá trị' }
    ],
    correctAnswer: 'B',
    explanation: 'Tần số của một giá trị là số lần xuất hiện của giá trị đó trong mẫu dữ liệu. Còn tỉ số giữa tần số và kích thước mẫu gọi là tần số tương đối.',
    formula: 'Tần số m = số lần xuất hiện',
    tutorTip: 'Tần số là "đếm số lần", còn tần số tương đối là "phần trăm tỉ lệ"!'
  },
  {
    id: 'ch7_th_1',
    chapterId: 'ch7',
    lessonId: 'bai23',
    lessonTitle: 'Bài 23: Bảng tần số tương đối và biểu đồ tần số tương đối',
    volume: 'tap2',
    level: 'thong_hieu',
    content: 'Khảo sát 40 học sinh về môn thể thao yêu thích, có 14 bạn thích bóng đá. Tần số tương đối của môn bóng đá là:',
    options: [
      { id: 'A', text: '28%' },
      { id: 'B', text: '35%' },
      { id: 'C', text: '40%' },
      { id: 'D', text: '14%' }
    ],
    correctAnswer: 'B',
    explanation: 'Tần số tương đối f = (m / n) · 100% = (14 / 40) · 100% = 0,35 · 100% = 35%.',
    formula: 'f = (m / n) · 100%',
    tutorTip: 'Lấy số lượng chia cho tổng số mẫu rồi nhân với 100%.'
  },
  {
    id: 'ch7_vd_1',
    chapterId: 'ch7',
    lessonId: 'bai24',
    lessonTitle: 'Bài 24: Bảng tần số, tần số tương đối ghép nhóm và biểu đồ',
    volume: 'tap2',
    level: 'van_dung',
    content: 'Cho mẫu số liệu ghép nhóm có một nhóm là [158; 162). Giá trị đại diện của nhóm này là bao nhiêu?',
    options: [
      { id: 'A', text: '158' },
      { id: 'B', text: '162' },
      { id: 'C', text: '160' },
      { id: 'D', text: '4' }
    ],
    correctAnswer: 'C',
    explanation: 'Giá trị đại diện của nhóm [a; b) là trung bình cộng của hai đầu mút: x = (a + b) / 2 = (158 + 162) / 2 = 320 / 2 = 160.',
    formula: 'x_đại_diện = (a + b) / 2',
    tutorTip: 'Giá trị đại diện chính là điểm chính giữa của khoảng nhóm!'
  },

  // ==========================================
  // CHƯƠNG VIII: XÁC SUẤT CỦA BIẾN CỐ TRONG MỘT SỐ MÔ HÌNH ĐƠN GIẢN
  // ==========================================
  {
    id: 'ch8_nb_1',
    chapterId: 'ch8',
    lessonId: 'bai25',
    lessonTitle: 'Bài 25: Phép thử ngẫu nhiên và không gian mẫu',
    volume: 'tap2',
    level: 'nhan_biet',
    content: 'Gieo một con xúc xắc cân đối 6 mặt một lần. Số phần tử của không gian mẫu n(Ω) là:',
    options: [
      { id: 'A', text: '2' },
      { id: 'B', text: '6' },
      { id: 'C', text: '12' },
      { id: 'D', text: '36' }
    ],
    correctAnswer: 'B',
    explanation: 'Không gian mẫu Ω = {1; 2; 3; 4; 5; 6}. Số phần tử của không gian mẫu là n(Ω) = 6.',
    formula: 'n(Ω) = 6',
    tutorTip: 'Không gian mẫu là tập hợp tất cả các kết quả có thể xảy ra của phép thử.'
  },
  {
    id: 'ch8_th_1',
    chapterId: 'ch8',
    lessonId: 'bai26',
    lessonTitle: 'Bài 26: Xác suất của biến cố liên quan tới phép thử',
    volume: 'tap2',
    level: 'thong_hieu',
    content: 'Gieo đồng thời hai đồng xu cân đối. Xác suất để "cả hai đồng xu đều xuất hiện mặt sấp" là:',
    options: [
      { id: 'A', text: '1/2' },
      { id: 'B', text: '1/4' },
      { id: 'C', text: '3/4' },
      { id: 'D', text: '1/3' }
    ],
    correctAnswer: 'B',
    explanation: 'Không gian mẫu gieo 2 đồng xu có 4 kết quả: Ω = {(S,S); (S,N); (N,S); (N,N)} => n(Ω) = 4. Biến cố E: "Cả 2 mặt sấp" chỉ có 1 kết quả là (S,S) => n(E) = 1. Xác suất P(E) = 1/4.',
    formula: 'P(E) = n(E) / n(Ω) = 1/4',
    tutorTip: 'Mỗi đồng xu có 2 khả năng, gieo 2 đồng xu có 2 × 2 = 4 khả năng.'
  },
  {
    id: 'ch8_vd_1',
    chapterId: 'ch8',
    lessonId: 'bai26',
    lessonTitle: 'Bài 26: Xác suất của biến cố liên quan tới phép thử',
    volume: 'tap2',
    level: 'van_dung',
    content: 'Trong thí nghiệm lai đậu Hà Lan của Mendel, cho lai bố mẹ F1 có kiểu gene dị hợp (Aa, Bb) x (Aa, Bb). Giả sử xét riêng một cặp gene (Aa) x (Aa) quy định màu hoa (A: hoa đỏ trội hoàn toàn, a: hoa trắng lặn). Xác suất để cây con đời F2 có kiểu hình hoa đỏ là:',
    options: [
      { id: 'A', text: '1/4' },
      { id: 'B', text: '1/2' },
      { id: 'C', text: '3/4' },
      { id: 'D', text: '1' }
    ],
    correctAnswer: 'C',
    explanation: 'Khi lai Aa x Aa, các tổ hợp đời con là: AA (1/4), Aa (1/4), aA (1/4), aa (1/4). Tổng cộng có 3 tổ hợp mang gene trội A (AA, Aa, aA) cho hoa đỏ, và 1 tổ hợp aa cho hoa trắng. Do đó xác suất hoa đỏ là 3/4 (75%).',
    formula: 'P(Hoa đỏ) = 3/4',
    tutorTip: 'Đây chính là bài toán thực tế tích hợp sinh học Mendel ở trang 60 & 126 SGK Toán 9 Tập 2!'
  },

  // ==========================================
  // CHƯƠNG IX: ĐƯỜNG TRÒN NGOẠI TIẾP VÀ NỘI TIẾP
  // ==========================================
  {
    id: 'ch9_nb_1',
    chapterId: 'ch9',
    lessonId: 'bai27',
    lessonTitle: 'Bài 27: Góc nội tiếp',
    volume: 'tap2',
    level: 'nhan_biet',
    content: 'Số đo của góc nội tiếp chắn nửa đường tròn bằng bao nhiêu độ?',
    options: [
      { id: 'A', text: '45°' },
      { id: 'B', text: '60°' },
      { id: 'C', text: '90°' },
      { id: 'D', text: '180°' }
    ],
    correctAnswer: 'C',
    explanation: 'Theo hệ quả của định lí góc nội tiếp: Góc nội tiếp chắn nửa đường tròn là góc vuông (số đo bằng 90°).',
    formula: 'Góc nội tiếp chắn nửa đường tròn = 90°',
    tutorTip: 'Bất cứ góc tam giác nào có 1 cạnh là đường kính và đỉnh còn lại nằm trên đường tròn đều là góc vuông!'
  },
  {
    id: 'ch9_th_1',
    chapterId: 'ch9',
    lessonId: 'bai29',
    lessonTitle: 'Bài 29: Tứ giác nội tiếp',
    volume: 'tap2',
    level: 'thong_hieu',
    content: 'Cho tứ giác ABCD nội tiếp đường tròn. Biết góc A = 70°. Số đo của góc đối diện C là:',
    options: [
      { id: 'A', text: '70°' },
      { id: 'B', text: '110°' },
      { id: 'C', text: '130°' },
      { id: 'D', text: '20°' }
    ],
    correctAnswer: 'B',
    explanation: 'Trong một tứ giác nội tiếp, tổng số đo hai góc đối nhau bằng 180°. Vì góc A và góc C đối diện nhau nên: C = 180° - A = 180° - 70° = 110°.',
    formula: 'Â + Ĉ = 180°',
    tutorTip: 'Quy tắc tứ giác nội tiếp: Cứ hai góc đối nhau cộng lại phải tròn 180 độ.'
  },
  {
    id: 'ch9_vd_1',
    chapterId: 'ch9',
    lessonId: 'bai28',
    lessonTitle: 'Bài 28: Đường tròn ngoại tiếp và đường tròn nội tiếp của một tam giác',
    volume: 'tap2',
    level: 'van_dung',
    content: 'Cho tam giác đều ABC có cạnh a = 6 cm. Bán kính đường tròn ngoại tiếp R của tam giác đó bằng bao nhiêu?',
    options: [
      { id: 'A', text: '2√3 cm' },
      { id: 'B', text: '√3 cm' },
      { id: 'C', text: '3√3 cm' },
      { id: 'D', text: '4 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Trong tam giác đều cạnh a, bán kính đường tròn ngoại tiếp là: R = (a√3)/3. Thay a = 6 cm: R = (6√3)/3 = 2√3 cm.',
    formula: 'R = (a√3)/3',
    tutorTip: 'Nhớ nhanh: Bán kính ngoại tiếp tam giác đều là (a√3)/3, còn bán kính nội tiếp là (a√3)/6 (bằng một nửa).'
  },

  // ==========================================
  // CHƯƠNG X: MỘT SỐ HÌNH KHỐI TRONG THỰC TIỄN
  // ==========================================
  {
    id: 'ch10_nb_1',
    chapterId: 'ch10',
    lessonId: 'bai31',
    lessonTitle: 'Bài 31: Hình trụ và hình nón',
    volume: 'tap2',
    level: 'nhan_biet',
    content: 'Công thức tính diện tích xung quanh của hình trụ có bán kính đáy R và chiều cao h là:',
    options: [
      { id: 'A', text: 'S_xq = πRh' },
      { id: 'B', text: 'S_xq = 2πRh' },
      { id: 'C', text: 'S_xq = πR²h' },
      { id: 'D', text: 'S_xq = 2πR²h' }
    ],
    correctAnswer: 'B',
    explanation: 'Diện tích xung quanh của hình trụ bằng chu vi đáy nhân với chiều cao: S_xq = 2πRh.',
    formula: 'S_xq = 2πRh',
    tutorTip: 'Tưởng tượng cắt hình trụ theo đường sinh trải ra sẽ được hình chữ nhật có kích thước 2πR và h.'
  },
  {
    id: 'ch10_th_1',
    chapterId: 'ch10',
    lessonId: 'bai32',
    lessonTitle: 'Bài 32: Hình cầu',
    volume: 'tap2',
    level: 'thong_hieu',
    content: 'Một quả bóng đá có dạng hình cầu với bán kính R = 10 cm. Diện tích mặt cầu của quả bóng đó là:',
    options: [
      { id: 'A', text: '100π cm²' },
      { id: 'B', text: '200π cm²' },
      { id: 'C', text: '400π cm²' },
      { id: 'D', text: '4000/3 π cm²' }
    ],
    correctAnswer: 'C',
    explanation: 'Công thức diện tích mặt cầu bán kính R: S = 4πR² = 4 · π · 10² = 400π (cm²).',
    formula: 'S = 4πR²',
    tutorTip: 'Diện tích mặt cầu bằng 4 lần diện tích hình tròn lớn (4πR²).'
  },
  {
    id: 'ch10_vd_1',
    chapterId: 'ch10',
    lessonId: 'bai31',
    lessonTitle: 'Bài 31: Hình trụ và hình nón',
    volume: 'tap2',
    level: 'van_dung',
    content: 'Một hình nón có bán kính đáy r = 6 cm và chiều cao h = 8 cm. Thể tích của hình nón đó bằng bao nhiêu?',
    options: [
      { id: 'A', text: '96π cm³' },
      { id: 'B', text: '288π cm³' },
      { id: 'C', text: '60π cm³' },
      { id: 'D', text: '48π cm³' }
    ],
    correctAnswer: 'A',
    explanation: 'Công thức thể tích hình nón: V = 1/3 πr²h = 1/3 · π · 6² · 8 = 1/3 · π · 36 · 8 = 96π (cm³).',
    formula: 'V = 1/3 π r² h',
    tutorTip: 'Thể tích hình nón bằng 1/3 thể tích hình trụ có cùng bán kính đáy và chiều cao!'
  },

  // ==========================================
  // CÂU HỎI BỔ SUNG ĐẦY ĐỦ CÁC BÀI HỌC VÀ CHƯƠNG ÔN TẬP
  // ==========================================
  {
    id: 'ch1_th_3',
    chapterId: 'ch1',
    lessonId: 'bai2',
    lessonTitle: 'Bài 2: Giải hệ hai phương trình bậc nhất hai ẩn',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Hệ phương trình { x - 3y = 2 ; -2x + 5y = 1 } có nghiệm là:',
    options: [
      { id: 'A', text: '(x; y) = (-13; -5)' },
      { id: 'B', text: '(x; y) = (13; 5)' },
      { id: 'C', text: '(x; y) = (-11; -5)' },
      { id: 'D', text: '(x; y) = (5; 1)' }
    ],
    correctAnswer: 'A',
    explanation: 'Nhân phương trình thứ nhất với 2: { 2x - 6y = 4 ; -2x + 5y = 1 }. Cộng 2 phương trình vế theo vế: -y = 5 => y = -5. Thế vào PT1: x - 3(-5) = 2 <=> x + 15 = 2 => x = -13.',
    formula: 'Cộng đại số triệt tiêu x',
    tutorTip: 'Cẩn thận dấu âm: -3 × (-5) = +15, chuyển vế thành 2 - 15 = -13.'
  },
  {
    id: 'ch2_th_3',
    chapterId: 'ch2',
    lessonId: 'bai4',
    lessonTitle: 'Bài 4: Phương trình quy về phương trình bậc nhất một ẩn',
    volume: 'tap1',
    level: 'thong_hieu',
    content: 'Số nghiệm của phương trình (x² - 4) + x(x - 2) = 0 là:',
    options: [
      { id: 'A', text: '0 nghiệm' },
      { id: 'B', text: '1 nghiệm' },
      { id: 'C', text: '2 nghiệm phân biệt' },
      { id: 'D', text: 'Vô số nghiệm' }
    ],
    correctAnswer: 'C',
    explanation: 'Phân tích nhân tử: (x - 2)(x + 2) + x(x - 2) = 0 <=> (x - 2)(x + 2 + x) = 0 <=> (x - 2)(2x + 2) = 0 <=> x = 2 hoặc x = -1. Phương trình có 2 nghiệm phân biệt.',
    formula: '(x - 2)(2x + 2) = 0',
    tutorTip: 'Đặt nhân tử chung (x - 2) là phương pháp thông minh nhất thay vì khai triển tung ra!'
  },
  {
    id: 'ch4_th_2',
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
    explanation: 'Ta có công thức cơ bản: sin²α + cos²α = 1 => cos²α = 1 - (3/5)² = 1 - 9/25 = 16/25. Vì α nhọn nên cos α > 0 => cos α = 4/5.',
    formula: 'sin²α + cos²α = 1',
    tutorTip: 'Bộ ba số Pythagore kinh điển: 3 - 4 - 5!'
  },
  {
    id: 'ch5_th_2',
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
    explanation: 'Ta có R = 5 cm, R\' = 3 cm. Khoảng cách nối tâm OO\' = 8 cm = 5 + 3 = R + R\'. Do đó hai đường tròn tiếp xúc ngoài nhau tại 1 điểm duy nhất.',
    formula: 'OO\' = R + R\' => Tiếp xúc ngoài',
    tutorTip: 'Khoảng cách tâm bằng tổng hai bán kính thì hai hình tròn chạm lưng vào nhau (tiếp xúc ngoài).'
  },
  {
    id: 'ch6_vd_2',
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
    explanation: 'Theo hệ thức Viète: x₁ + x₂ = 7, x₁·x₂ = 12. Ta biến đổi: A = x₁² + x₂² = (x₁ + x₂)² - 2x₁x₂ = 7² - 2·12 = 49 - 24 = 25.',
    formula: 'x₁² + x₂² = (x₁ + x₂)² - 2x₁x₂',
    tutorTip: 'Kỹ thuật thêm bớt 2x₁x₂ để tạo hằng đẳng thức tổng bình phương luôn xuất hiện trong các đề thi!'
  },
  {
    id: 'ch9_th_2',
    chapterId: 'ch9',
    lessonId: 'bai27',
    lessonTitle: 'Bài 27: Góc nội tiếp',
    volume: 'tap2',
    level: 'thong_hieu',
    content: 'Trên đường tròn (O), một góc ở tâm AOB có số đo bằng 120°. Khi đó góc nội tiếp ACB cùng chắn cung nhỏ AB có số đo bằng:',
    options: [
      { id: 'A', text: '120°' },
      { id: 'B', text: '60°' },
      { id: 'C', text: '240°' },
      { id: 'D', text: '30°' }
    ],
    correctAnswer: 'B',
    explanation: 'Theo định lí góc nội tiếp: Trong một đường tròn, số đo của góc nội tiếp bằng một nửa số đo của góc ở tâm cùng chắn một cung. Do đó góc ACB = 1/2 góc AOB = 1/2 · 120° = 60°.',
    formula: 'Góc nội tiếp = 1/2 Góc ở tâm cùng chắn cung',
    tutorTip: 'Góc nội tiếp đỉnh nằm trên đường tròn luôn bằng một nửa góc ở tâm.'
  },
  {
    id: 'ch10_vd_2',
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
    explanation: 'Thể tích hình cầu V = 4/3 πR³. Ta có: 4/3 πR³ = 36π <=> 4/3 R³ = 36 <=> R³ = 36 · 3 / 4 = 27 => R = ∛27 = 3 cm.',
    formula: 'V = 4/3 π R³ => R³ = 3V / (4π)',
    tutorTip: 'Giải ngược tìm bán kính khi biết thể tích hình cầu bằng phép khai căn bậc ba.'
  }
];

const questionMap = new Map<string, Question>();
[...BASE_QUESTIONS, ...QUESTIONS_VOLUME_1, ...QUESTIONS_VOLUME_2].forEach((q) => {
  questionMap.set(q.id, q);
});

export const QUESTION_BANK: Question[] = Array.from(questionMap.values());

