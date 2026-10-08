# Prompt Logic — NOVA STUDIO Interactive Showcase

## 1. Mục tiêu

Website trang chủ NOVA STUDIO nhằm mô phỏng một studio thiết kế web chuyên nghiệp, hiện đại, có tính thẩm mỹ cao và dễ mở rộng cho nhóm phát triển theo nhánh GitHub riêng. Mục tiêu chính là xây dựng một giao diện nền tảng hoàn chỉnh, chuẩn responsive, có cấu trúc semantic và chuẩn bị đủ hook class, attribute và comment để các thành viên tiếp tục xây dựng animation chuyên biệt trên các nhánh riêng.

## 2. Danh sách prompt sử dụng trong quá trình xây dựng

- "Tạo một trang landing page cho dịch vụ thiết kế website chuyên nghiệp bằng HTML5, CSS3 và JavaScript thuần."
- "Thiết kế hệ thống màu, typography, grid, responsive và semantic HTML với 9 section theo yêu cầu của bài tập."
- "Chuẩn bị class hook cho intro animation và portfolio interaction, không triển khai animation phức tạp trong nhánh main."
- "Chuẩn bị data-aos và class hook cho scroll reveal và CTA micro-interaction, không kích hoạt AOS trong nhánh main."
- "Tạo README.md mô tả quy trình Git và checklist review trước khi merge."
- "Viết prompt_logic.md với mô tả logic thiết kế, cubic-bezier và ghi chú kiểm thử."

## 3. Master Prompt — cubic-bezier và nguyên tắc motion

### Intro Animation

- Mục tiêu: tạo cảm giác sàng sàng, chuyên nghiệp và mượt mà khi người dùng vừa vào website.
- Khuyến nghị: `cubic-bezier(0.22, 1, 0.36, 1)`
- Thời lượng: 500–900ms
- Lý do: đường cong này tạo cảm giác chuyển động trôi chảy, không giật, phù hợp với việc “xuất hiện” nội dung chính và hình mockup.

### Scroll Revelation

- Mục tiêu: giúp các section xuất hiện khi người dùng cuộn tới, tránh cảm giác đột ngột.
- Khuyến nghị: `cubic-bezier(0.2, 0.8, 0.2, 1)`
- Thời lượng: 500–800ms
- Lý do: dễ chịu, nhẹ và tự nhiên, không gây cảm giác “khuấy động” trên màn hình.

### Hover Card

- Mục tiêu: nâng card lên hoặc đẩy overlay nhẹ để tăng cảm giác tương tác.
- Khuyến nghị: `cubic-bezier(0.4, 0, 0.2, 1)`
- Thời lượng: 200–350ms
- Lý do: phản hồi nhanh nhưng không quá mạnh, giúp người dùng nhận ra tương tác mà không làm mất sự cân bằng layout.

### CTA Micro-interaction

- Mục tiêu: phản hồi khi hover, active và click nhưng không làm thay đổi bố cục.
- Khuyến nghị: `cubic-bezier(0.2, 0.8, 0.2, 1)`
- Thời lượng: 120–220ms
- Lý do: cảm giác “nhấn” rõ ràng nhưng đi kèm với hiệu ứng vừa phải để không làm rối mắt.

## 4. Lý do chọn Intro Animation cho Header và Hero

Header và Hero là những vùng “đầu tiên” mà người dùng nhìn thấy. Vì vậy, hiệu ứng nên tạo sự tôn trọng đối với layout, làm tăng tính chuyên nghiệp của thương hiệu và tập trung sự chú ý vào thông điệp chính. Cách tiếp cận nên là fade + slide-up, giúp nội dung xuất hiện từ dưới lên và dần hiện rõ. Điều này hỗ trợ cảm giác đúng chuẩn agency brand mà không làm mất độ rõ ràng của bố cục.

## 5. Lý do chọn Hover/Flip cho Portfolio

Portfolio là khu vực tự nhiên để người dùng tương tác, bởi đây là nơi hiển thị năng lực thực tế của studio. Hover hoặc flip giúp card “trở nên sống động” mà không cần quá nhiều motion. Cách thực hiện tốt nhất là giữ transform nhẹ, có overlay hoặc thông tin chi tiết xuất hiện, đồng thời duy trì độ rõ ràng trong cả desktop và mobile. Một hiệu ứng đẹp là hiệu ứng tăng chiều cao, thêm độ sâu bóng và chạm màu nổi.

## 6. Lý do sử dụng AOS cho các section khi cuộn

AOS phù hợp cho các section dạng content-heavy như services, process, pricing, testimonials và contact vì khi người dùng cuộn tới các khu vực đó, các phần tử sẽ xuất hiện tuần tự và tự nhiên. Đây là cách hiệu quả để tạo “storytelling” trong hero-to-content flow mà không cần thao tác trên phần tử thành phần. Điều quan trọng là không đặt AOS lên header/hero đang dùng intro animation để tránh xung đột transform và opacity.

## 7. Vai trò của Micro-interactions đối với CTA

CTA là điểm chuyển đổi chính của doanh nghiệp. Khi hover hoặc nhấn, button cần phản ứng bằng scale, box-shadow hoặc đổi màu cho thấy việc click đã thành công. Micro-interaction đúng cách giúp người dùng cảm thấy website phản hồi rất nhanh, không rối và giữ được sự tin cậy. Đặc biệt ở Hero, Pricing và Contact, các CTA có cùng language motion sẽ tạo cảm giác đồng bộ và dễ nhớ.

## 8. Lợi ích UX của từng hiệu ứng

- Header & hero intro: tăng cảm giác chuyên nghiệp, giúp landing page có “moment” tốt khi vào trang.
- Portfolio interaction: thu hút người dùng khám phá các dự án và tăng engagement.
- Scroll reveal: làm cho nội dung trôi chảy và dễ theo dõi hơn khi cuộn trang.
- CTA feedback: giúp người dùng luôn biết mình vừa thực hiện hành động, tăng sự tin cậy và khai thác conversion.

## 9. Khu vực ghi nhận lỗi animation và prompt xử lý lỗi

| Ngày thực hiện | Thành viên | Hiệu ứng | Vấn đề gặp phải | Prompt đã sử dụng | Nguyên nhân lỗi | Hướng xử lý | Kết quả thực tế |
|---|---|---|---|---|---|---|---|
| 2026-10-09 | Nhóm | Layout nền tảng | Bố cục chưa hoàn chỉnh | "Tạo một landing page với 9 section và responsive" | Thiếu cấu trúc section và spacing | Thiết kế lại grid, spacing và typography | Đã có giao diện cơ bản hoạt động |
| 2026-10-09 | Thành viên 1 | Intro animation | Cần hook rõ ràng để không làm sai phạm vi | "Chuẩn bị class hook cho intro animation và portfolio interaction" | Chưa có class phân tách | Tạo `js-intro-header`, `js-intro-hero-content`, `js-portfolio-card` | Hook đã được chuẩn bị |
| 2026-10-09 | Thành viên 2 | Scroll reveal + CTA | Cần preserve không xung đột transform | "Chuẩn bị data-aos và class hook cho CTA" | Có nguy cơ xung đột với phần dị định của member 1 | Tách class `m34-` và `data-aos` wrapper | Đã chuẩn bị khu vực tích hợp |

## 10. Kết quả kiểm thử và thay đổi thực tế

- Đã tạo mục tiêu project với HTML semantic, CSS design system, giao diện responsive và các section bắt buộc.
- Đã chuẩn bị `data-aos` và class hook cho các branch phát triển tương lai.
- Đã giữ các file riêng cho hai thành viên: `member-12.css`, `member-12.js`, `member-34.css`, `member-34.js`.
- Đã tạo file README và prompt logic rõ ràng.
- Chưa triển khai animation chi tiết vượt phạm vi nhánh main và không tự ý gửi merge, push hoặc thay đổi lịch sử Git.

## 11. Checklist kiểm thử sau merge

- [ ] Intro animation hoạt động lúc vào trang.
- [ ] Portfolio card có hover/flip overlay rõ ràng.
- [ ] Scroll reveal xuất hiện đúng khi cuộn.
- [ ] CTA hover/active/click feedback có phản hồi trực quan.
- [ ] Không có lỗi xung đột transform trên cùng element.
- [ ] Fallback khi JavaScript không hoạt động vẫn hiển thị giao diện chuẩn.
