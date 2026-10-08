# NOVA STUDIO — Interactive Showcase

## Mục tiêu dự án

Website landing page cho dịch vụ thiết kế website chuyên nghiệp của NOVA STUDIO, được xây dựng theo chuẩn HTML5, CSS3, JavaScript thuần và phù hợp với bài tập “The Interactive Showcase”.

## Cấu trúc thư mục

- `index.html` — trang chủ
- `assets/css/base.css` — design system, layout, typography, responsive
- `assets/css/member-12.css` — hook cho yêu cầu 1 và 2
- `assets/css/member-34.css` — hook cho yêu cầu 3 và 4
- `assets/js/main.js` — navigation và form demo
- `assets/js/member-12.js` — placeholder cho intro + portfolio interaction
- `assets/js/member-34.js` — placeholder cho AOS + micro-interaction
- `prompt_logic.md` — ghi chép logic, prompt engineering và kiểm thử

## Chạy dự án

1. Mở thư mục project trong VS Code.
2. Khởi chạy extension Live Server hoặc mở file `index.html` bằng browser.
3. Nếu cần chạy local server từ terminal:

```bash
cd "d:\Web DV Thiết Kế Web"
python -m http.server 8000
```

4. Mở `http://localhost:8000` trong trình duyệt.

## Quy trình Git cho nhóm

### Bước 1: Trưởng nhóm

- Khởi tạo repository nếu chưa có.
- Tạo nhánh `main`.
- Tạo giao diện nền tảng và responsive.
- Commit/push lên `main`.

### Bước 2: Thành viên 1

```bash
git checkout -b feature/intro-portfolio
```

- Xây dựng hiệu ứng intro cho header + hero.
- Tạo hover/flip/overlay cho portfolio card.
- Kiểm thử trên desktop và mobile.
- Commit và push branch.
- Tạo Pull Request về `main`.

### Bước 3: Thành viên 2

```bash
git checkout -b feature/scroll-micro
```

- Thêm AOS cho các section cần reveal.
- Hoàn thiện micro-interaction cho CTA và buttons.
- Kiểm thử sự tương tác và trải nghiệm focus.
- Commit và push branch.
- Tạo Pull Request về `main`.

### Bước 4: Review và merge

- Trưởng nhóm review từng PR.
- Kiểm tra file đang chỉnh sửa không trùng nhau.
- Đảm bảo không triển khai animation sai phạm vi.
- Merge về `main` sau khi đạt chuẩn.

## Checklist trước khi merge

- [ ] Có đủ 9 section
- [ ] Semantic HTML đúng chuẩn
- [ ] Responsive trên mobile/tablet/desktop
- [ ] Không tràn màn hình
- [ ] Navigation hoạt động
- [ ] Form demo hiển thị rõ và không gửi backend
- [ ] Có hook class cho yêu cầu 1–4
- [ ] Có comment phân tách công việc thành viên
- [ ] Không chỉnh sửa cùng file CSS/JS hiệu ứng bởi hai thành viên
- [ ] Hỗ trợ `prefers-reduced-motion`

## Ghi chú

Đây là nhánh nền tảng, nên các hiệu ứng đặc thù của thành viên 1 và 2 đã được chuẩn bị bằng class hook và comment hướng dẫn. Hai nhánh sau này sẽ tiếp tục bổ sung animation mà không xung đột với phần nền tảng.
