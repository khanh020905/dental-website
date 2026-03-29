export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswerIndex: number;
}

export const mockQuizData: Question[] = [
  {
    id: "q1",
    text: "Trước khi tiến hành rạch vạt niêm mạc trong nhổ răng khôn (Răng 8) hàm dưới, mũi tiêm gây tê thần kinh răng dưới (Gây tê vùng) cần tiêm vào vị trí giải phẫu nào?",
    options: [
      "Gai Spix (Lỗ cằm)",
      "Lỗ ống răng dưới (Gai Spix hàm dưới)",
      "Ngay tại lồi củ xương hàm trên",
      "Tiêm trực tiếp vào niêm mạc tại khe nướu răng 8"
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "q2",
    text: "Mục đích chính của việc chia cắt thân răng (Sectioning) khi nhổ răng khôn mọc lệch ngầm là gì?",
    options: [
      "Giảm chảy máu hậu phẫu cho bệnh nhân",
      "Rút ngắn thời gian tác dụng của thuốc tê",
      "Tạo khoảng trống để lấy răng ra mà không làm vỡ xương ổ răng hoặc tổn thương răng số 7",
      "Ngăn ngừa viêm nhiễm lây lan sang các răng bên cạnh"
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "q3",
    text: "Trong trường hợp răng số 8 ngầm sát ống thần kinh răng dưới, phương pháp kiểm tra hình ảnh nào là bắt buộc trước khi tiến hành phẫu thuật?",
    options: [
      "Chụp X-quang chóp răng (Periapical)",
      "Chụp X-quang toàn cảnh (Panorex)",
      "Chụp CT cắt lớp (Cone Beam CT - CBCT)",
      "Chụp phim sọ nghiêng (Cephalometric)"
    ],
    correctAnswerIndex: 2,
  },
  {
    id: "q4",
    text: "Cách xử trí đúng chuẩn SOP của Nha Khoa Việt Quang khi bệnh nhân có biểu hiện sưng nề lớn sau 48h nhổ răng khôn là gì?",
    options: [
      "Khuyên bệnh nhân tiếp tục chườm đá lạnh tại nhà liên tục",
      "Chỉ định bệnh nhân chườm ấm, kê thêm kháng viêm và viêm ngậm (nếu cần), hẹn tái khám sát sao",
      "Lập tức rạch áp-xe và dẫn lưu mủ mà không cần chụp phim kiểm tra",
      "Kê đơn tăng gấp đôi liều lượng kháng sinh đang dùng"
    ],
    correctAnswerIndex: 1,
  },
  {
    id: "q5",
    text: "Góc mở vạt niêm mạc (Flap design) ở phía xa răng số 7 hàm dưới thường nên rạch chéo về phía nào để tránh tổn thương thần kinh lưỡi?",
    options: [
      "Rạch thẳng trực tiếp về phía lưỡi",
      "Rạch chéo một góc 45 độ về phía hành lang (ngách tiền đình ngoài)",
      "Rạch cắt ngang qua nhú lợi giữa răng 6 và 7",
      "Rạch róc màng xương sâu xuống dưới theo chiều thẳng đứng"
    ],
    correctAnswerIndex: 1,
  }
];
