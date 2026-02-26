/* 
Câu điều kiện
1. if_else
2. if-else bậc thang
3. if-else lồng (bên trong if-else lại có if-else)
4. switch-case

*/
let age = 18;
if (age >= 18) {
  console.log("đủ tuổi xem phim");
} else {
  console.log("chưa đủ tuổi");
}

let day = +prompt("mời nhập ngày trong tuần");
if (day == 2) {
  console.log("ngày thứ 2");
} else if (day == 3) {
  console.log("ngày thứ 3");
} else if (day == 4) {
  console.log("ngày thứ 4");
}

let score = Number(prompt("mời bạn nhập điểm sinh viên"));
if (score > 0 && score <= 10) {
  if (score >= 8) {
    console.log("học lực giỏi");
  } else if (score >= 6.5) {
    console.log("học lực khá");
  } else if (score >= 5) {
    console.log("học lực trung bình");
  } else {
    console.log("học lực yếu");
  }
} else {
  console.log("điểm không hợp lệ!");
}

let month = +prompt("mời nhập tháng trong năm");
switch (month) {
  case 2:
    console.log("tháng 2 có 28 || 29 ngày");
    break;
  case 3:
    console.log("tháng 3 có 31 ngày");
    break;

  default:
    console.log("tháng không hợp lệ!");

    break;
}
