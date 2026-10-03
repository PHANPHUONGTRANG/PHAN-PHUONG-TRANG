export interface FormulaSection {
  id: string;
  volume: 'tap1' | 'tap2';
  title: string;
  items: {
    name: string;
    formula: string;
    notes: string;
    example?: string;
  }[];
}

export const FORMULA_HANDBOOK: FormulaSection[] = [
  {
    id: 'f_ch1',
    volume: 'tap1',
    title: 'Chương I: Hệ hai phương trình bậc nhất hai ẩn',
    items: [
      {
        name: 'Dạng tổng quát',
        formula: 'ax + by = c (a ≠ 0 hoặc b ≠ 0)',
        notes: 'Nghiệm là cặp số (x; y). Tập nghiệm là một đường thẳng trên mặt phẳng Oxy.'
      },
      {
        name: 'Hệ hai phương trình',
        formula: '{ ax + by = c ; a\'x + b\'y = c\' }',
        notes: 'Nghiệm chung (x₀; y₀) là tọa độ giao điểm của hai đường thẳng.'
      },
      {
        name: 'Phương pháp giải',
        formula: '1. Phương pháp thế  |  2. Phương pháp cộng đại số',
        notes: 'Nhân hệ số phù hợp để đưa về hai hệ số bằng nhau hoặc đối nhau rồi trừ hoặc cộng hai vế.'
      }
    ]
  },
  {
    id: 'f_ch2',
    volume: 'tap1',
    title: 'Chương II: Phương trình và Bất phương trình',
    items: [
      {
        name: 'Phương trình tích',
        formula: 'A · B = 0  <=>  A = 0 hoặc B = 0',
        notes: 'Lấy tất cả các nghiệm tìm được gộp lại.'
      },
      {
        name: 'Bất đẳng thức & Đổi chiều',
        formula: 'Nếu a < b và c < 0 thì: a · c > b · c ; a / c > b / c',
        notes: 'Quy tắc: Nhân hoặc chia cho số ÂM phải ĐỔI CHIỀU bất đẳng thức!'
      },
      {
        name: 'Bất đẳng thức Cauchy (AM-GM)',
        formula: '(a + b) / 2 ≥ √(ab) với a ≥ 0, b ≥ 0',
        notes: 'Trung bình cộng ≥ Trung bình nhân. Dấu bằng xảy ra khi a = b.'
      }
    ]
  },
  {
    id: 'f_ch3',
    volume: 'tap1',
    title: 'Chương III: Căn bậc hai và Căn bậc ba',
    items: [
      {
        name: 'Hằng đẳng thức căn bậc hai',
        formula: '√(A²) = |A| = { A nếu A ≥ 0 ; -A nếu A < 0 }',
        notes: 'Luôn phải có dấu giá trị tuyệt đối khi khai phương bình phương.'
      },
      {
        name: 'Quy tắc khai phương nhân & chia',
        formula: '√(A · B) = √A · √B (A ≥ 0, B ≥ 0)  |  √(A/B) = √A / √B (A ≥ 0, B > 0)',
        notes: 'Chỉ áp dụng tách căn cho phép nhân và phép chia, KHÔNG áp dụng cho phép cộng/trừ!'
      },
      {
        name: 'Trục căn thức ở mẫu (Nhân liên hợp)',
        formula: 'C / (√A - √B) = C(√A + √B) / (A - B)',
        notes: 'Khử căn ở mẫu bằng cách dùng hằng đẳng thức hiệu hai bình phương.'
      },
      {
        name: 'Căn bậc ba',
        formula: '∛(A³) = A với mọi số thực A',
        notes: 'Căn bậc ba của số âm là số âm, không cần dấu giá trị tuyệt đối.'
      }
    ]
  },
  {
    id: 'f_ch4',
    volume: 'tap1',
    title: 'Chương IV: Hệ thức lượng trong tam giác vuông',
    items: [
      {
        name: 'Định nghĩa 4 tỉ số lượng giác',
        formula: 'sin α = đối/huyền | cos α = kề/huyền | tan α = đối/kề | cot α = kề/đối',
        notes: 'Ghi nhớ: Sao Đi Học - Cứ Khóc Hoài - Thôi Đừng Khóc - Có Kẹo Đây'
      },
      {
        name: 'Hai góc phụ nhau (α + β = 90°)',
        formula: 'sin α = cos β ; cos α = sin β ; tan α = cot β ; cot α = tan β',
        notes: 'Ví dụ: sin 30° = cos 60° = 1/2 ; tan 45° = cot 45° = 1'
      },
      {
        name: 'Hệ thức cạnh và góc',
        formula: 'b = a · sin B = a · cos C  |  b = c · tan B = c · cot C',
        notes: 'Cạnh góc vuông = Cạnh huyền × sin góc đối = Cạnh góc vuông kia × tan góc đối.'
      }
    ]
  },
  {
    id: 'f_ch5',
    volume: 'tap1',
    title: 'Chương V: Đường tròn',
    items: [
      {
        name: 'Độ dài cung tròn & Chu vi',
        formula: 'Chu vi C = 2πR = πd  |  Độ dài cung l = (n · π · R) / 180',
        notes: 'n là số đo góc ở tâm chắn cung đó bằng độ.'
      },
      {
        name: 'Diện tích hình tròn & Hình quạt',
        formula: 'S_tròn = πR²  |  S_quạt = (n · π · R²) / 360 = (l · R) / 2',
        notes: 'Diện tích vành khuyên: S = π(R² - r²).'
      },
      {
        name: 'Tính chất 2 tiếp tuyến cắt nhau',
        formula: 'MA = MB ; tia MO là phân giác góc AMB ; MO ⊥ AB',
        notes: 'Khoảng cách từ điểm chung M đến hai tiếp điểm A, B là bằng nhau.'
      }
    ]
  },
  {
    id: 'f_ch6',
    volume: 'tap2',
    title: 'Chương VI: Hàm số y = ax² & Phương trình bậc hai',
    items: [
      {
        name: 'Công thức nghiệm biệt thức Delta',
        formula: 'ax² + bx + c = 0 (a ≠ 0)  =>  Δ = b² - 4ac',
        notes: '• Δ > 0: 2 nghiệm phân biệt x = (-b ± √Δ)/(2a)\n• Δ = 0: nghiệm kép x = -b/(2a)\n• Δ < 0: vô nghiệm'
      },
      {
        name: 'Định lí Viète',
        formula: 'Tổng S = x₁ + x₂ = -b/a  |  Tích P = x₁ · x₂ = c/a',
        notes: 'Ứng dụng tìm 2 số khi biết tổng S và tích P: giải X² - SX + P = 0 (với S² - 4P ≥ 0).'
      },
      {
        name: 'Mẹo nhẩm nghiệm siêu nhanh',
        formula: '1. a + b + c = 0 => x₁ = 1, x₂ = c/a\n2. a - b + c = 0 => x₁ = -1, x₂ = -c/a',
        notes: 'Bí kíp của Cô Phương Trang giúp học sinh tiết kiệm 80% thời gian làm bài!'
      }
    ]
  },
  {
    id: 'f_ch7',
    volume: 'tap2',
    title: 'Chương VII: Thống kê & Mẫu số liệu ghép nhóm',
    items: [
      {
        name: 'Tần số tương đối (%)',
        formula: 'f_i = (m_i / n) · 100%',
        notes: 'm_i là tần số giá trị i, n là tổng kích thước mẫu. Tổng các tần số tương đối luôn bằng 100%.'
      },
      {
        name: 'Giá trị đại diện nhóm [a; b)',
        formula: 'x_đại_diện = (a + b) / 2',
        notes: 'Điểm chính giữa khoảng nhóm, dùng để vẽ đa giác tần số và tính toán trung bình.'
      }
    ]
  },
  {
    id: 'f_ch8',
    volume: 'tap2',
    title: 'Chương VIII: Xác suất biến cố',
    items: [
      {
        name: 'Xác suất cổ điển đồng khả năng',
        formula: 'P(E) = n(E) / n(Ω)',
        notes: 'n(E) là số kết quả thuận lợi cho biến cố E, n(Ω) là tổng số phần tử không gian mẫu.'
      }
    ]
  },
  {
    id: 'f_ch9',
    volume: 'tap2',
    title: 'Chương IX: Tứ giác nội tiếp & Đa giác đều',
    items: [
      {
        name: 'Định lí góc nội tiếp',
        formula: 'Góc nội tiếp = 1/2 sđ cung bị chắn = 1/2 Góc ở tâm',
        notes: 'Góc nội tiếp chắn nửa đường tròn luôn luôn bằng 90°.'
      },
      {
        name: 'Dấu hiệu tứ giác nội tiếp',
        formula: 'Â + Ĉ = 180°  hoặc  B̂ + D̂ = 180°',
        notes: 'Tứ giác có tổng hai góc đối bằng 180° thì nội tiếp được trong đường tròn.'
      },
      {
        name: 'Tam giác đều nội/ngoại tiếp',
        formula: 'R_ngoại = (a√3) / 3  |  r_nội = (a√3) / 6',
        notes: 'Bán kính đường tròn ngoại tiếp gấp đôi bán kính nội tiếp.'
      }
    ]
  },
  {
    id: 'f_ch10',
    volume: 'tap2',
    title: 'Chương X: Hình trụ, Hình nón, Hình cầu',
    items: [
      {
        name: 'Hình trụ',
        formula: 'S_xq = 2πRh  |  S_tp = 2πRh + 2πR²  |  V = πR²h',
        notes: 'R: bán kính đáy, h: chiều cao.'
      },
      {
        name: 'Hình nón',
        formula: 'Đường sinh l = √(r² + h²)  |  S_xq = πrl  |  V = 1/3 πr²h',
        notes: 'Thể tích hình nón bằng 1/3 thể tích hình trụ cùng đáy và chiều cao.'
      },
      {
        name: 'Hình cầu',
        formula: 'Diện tích mặt cầu S = 4πR²  |  Thể tích V = 4/3 πR³',
        notes: 'R là bán kính quả cầu.'
      }
    ]
  }
];
