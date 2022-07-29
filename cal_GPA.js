/*
    Author:     Salmon
    Guideline:  Copy + Paste vao Console of Devtools, chi tiet doc https://github.com/nthhcmus/Calculate-HCMUS-GPA/blob/main/README.md
    References:   https://gist.github.com/shivaluma/e1f420be1d3cf8e6c6287539e8abcf89 (Chỉnh sửa và bổ sung thêm)
*/
function convert10to4(a) {
	if(a >= 9) return 4;
    else if(a >= 8) return 3.5;
    else if(a >= 7) return 3.0
    else if(a >= 6) return 2.5
    else if(a >= 5) return 2.0
}

var credit = document.querySelectorAll("td:nth-child(3)");
var subject = document.querySelectorAll("td:nth-child(2)");
var point = document.querySelectorAll("td:nth-child(6)");

var total_point = 0, total_point_scale_4 = 0, total_credit = 0;
var total_CSN_point = 0, total_CSN_point_scale_4 = 0, total_CSN_credit = 0;

for (var i = 1; i < credit.length; i++) {
if (!(subject[i].innerText.includes("Thể dục") ||
subject[i].innerText.includes("Anh văn") ||
subject[i].innerText.includes("Giáo dục") ||
Number(point[i].innerText) < 5 || 
point[i].innerText.includes("Vắng")))
{
    if (subject[i].innerText.includes("CSC")) 
    {
        //sửa CSC nếu muốn tính điểm nhóm môn khác, vd PHY, MTH,...
        total_CSN_credit += Number(credit[i].innerText);
        total_CSN_point += Number(credit[i].innerText) * Number(point[i].innerText);
        total_CSN_point_scale_4 += Number(credit[i].innerText) * convert10to4(Number(point[i].innerText))
    }
    total_credit += Number(credit[i].innerText);
    total_point += Number(credit[i].innerText) * Number(point[i].innerText);
    total_point_scale_4 += Number(credit[i].innerText) * convert10to4(Number(point[i].innerText))
} 

}
console.log("Number of Credits (So tin chi):\t\t\t\t\t\t\t" + total_credit);
console.log("Number of CSN Credit (So tin chi co so nganh):\t\t\t" + total_CSN_credit);
console.log("10.0 scale GPA (Diem trung binh he 10):\t\t\t\t\t" + total_point / total_credit) 
console.log("4.0  scale GPA (Diem trung binh he 4):\t\t\t\t\t" + total_point_scale_4/total_credit) 
console.log("10.0 scale CSN_GPA (GPA co so nganh he 10):\t\t\t\t" + total_CSN_point / total_CSN_credit) 
console.log("4.0  scale CSN_GPA (GPA co so nganh he 4):\t\t\t\t" + total_point_scale_4/total_credit)
alert("                  KET QUA HOC TAP"
+"\nSo tin chi:                                 " + total_credit
+"\nSo tin chi co so nganh:             " + total_CSN_credit
+"\nDiem trung binh he 10:            " + total_point / total_credit
+"\nDiem trung binh he 4:              " + total_point_scale_4/total_credit
+"\nGPA co so nganh he 10:           " + total_CSN_point / total_CSN_credit
+"\nGPA co so nganh he 4:             " + total_point_scale_4/total_credit)
