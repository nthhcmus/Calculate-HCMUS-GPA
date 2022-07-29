# Calculate-HCMUS-GPA Guideline
> (Only HCMUS) Calculate 10.0 & 4.0 scale GPA in HCMUS's portal <br>
> (Chỉ HCMUS) Tính GPA hệ 10 và hệ 4 của bạn trên portal <br>
<details>
<summary><h2> Công thức tính GPA:<h2></summary>
  
<head>
<meta charset="utf-8">
</head>
<body>
<h4> Công thức tính (Nguồn: Sổ tay sinh viên 2021):</h4>
<img src="GPA_calculaion formula.png" width="50% height="50%" >
</body> 
<br>-------------------------------------------------------------------------------------------------------------------------------------<br>

### Chi tiết
- Bỏ các học phần: Giáo dục quốc phòng - An ninh, Giáo dục thể chất (Thể dục), Ngoại ngữ, Tin học cơ sở, các môn rớt, vắng <br>
- Điểm trung bình bằng "Tổng điểm tất cả học phần" chia cho "Tổng số tín chỉ" <br>
- Trong đó: <br>
  + "Tổng điểm tất cả học phần" được tính bằng cách lấy tất cả học phần (trừ các học phần đã loại trừ bên trên) nhân cho số tín chỉ tương ứng và cộng tất cả lại với nhau <br>
  + "Tổng số tín chỉ" là tổng số tín chỉ đã tích lũy của tất cả các học phần (trừ các học phần đã loại trừ bên trên)<br>
  
</details>

<details>
<summary><h2>Cách tính trên Portal:<h2></summary>

- <ins><b>Bước 1</b></ins>: Vào trang Portal có chứa điểm: <br>
Vào [Portal](http://portal1.hcmus.edu.vn/) -> Đăng nhập -> Chọn <b>Quản lý kết quả học tập</b> -> Chọn [Tra cứu kết quả học tập](https://portal1.hcmus.edu.vn/SinhVien.aspx?pid=211) <br><br>
- <ins><b>Bước 2</b></ins>: Bật <b>DevTools</b> trên trình duyệt của bạn, ở đây có 2 cách:<br>
  + <b>Cách 1</b>: Chuột phải chọn <b>Check (Kiểm tra)</b>, hoặc Chuột phải chọn <b>Inspect</b> (Đối với trình duyệt Edge)
  + <b>Cách 2</b>: Nhấn <b>F12</b> hoặc <b>Fn + F12</b> (Nếu Fn của bạn đang ở trạng thái khóa)
  <br>Lúc này, <b>DevTools</b> sẽ hiện ra
  <br>
- <ins><b>Bước 3</b></ins>: Mở <b>Console</b> và Paste code:<br>
Khi <b>DevTools</b> hiện ra -> Chọn <b>Console</b> -> Paste [Code Javascript](https://github.com/nthhcmus/Calculate-HCMUS-GPA/blob/main/cal_GPA.js) -> Enter

<h4>Thông tin về Số tín chỉ, GPA, GPA cơ sở ngành lúc này hiện trên console và được thông báo trên màn hình bằng alert()
</details>
--------------------------------------------------------------------------------<br>
<pre>
Author:       Salmon 
Des:          Copy + Paste code js vào console để tính GPA trên Portal HCMUS
References:   https://gist.github.com/shivaluma/e1f420be1d3cf8e6c6287539e8abcf89 
              (Chỉnh sửa và bổ sung thêm)
</pre>
