let choose;
let userName; // khai báo tên
let age; // khai báo tuổi
do {
  choose = +prompt("mời nhập lựa chọn");
  //   console.log("điều kiện đúng thì chạy chương trình, điều kiện sai dừng

  switch (choose) {
    case 1:
      // nhập tên người dùng
      //   console.log("nhập tên");
      userName = prompt("mời nhập tên");
      break;
    case 2:
      // nhập tuổi người dùng
      //   console.log("nhập tuổi");
      age = +prompt("mời nhập tuổi");

      break;
    case 3:
      console.log("tên người dùng là :", userName);
      console.log("tuổi người dùng là :", age);
      break;
    case 4:
      // in bảng cửu chương của 1 số
      let number = +prompt("mời bạn nhập số bất kì"); // 5
      for (let i = 1; i <= 10; i++) {
        // console.log(`${number} XX ${i}= ${number * i}`); // template string có thể truyền biến vào trong string
        console.log(number + "X" + i + "=" + number * i);
      }
      break;
    case 5:
      let check_number = +prompt("mời nhập số cần kiểm tra");
      if (check_number % 2 == 0) {
        console.log(` số ${check_number} là số chẵn!`);
      } else {
        console.log(` số ${check_number} là số lẻ`);
      }
      break;
    case 6:
        let n= +prompt("mời bạn nhập số N bất kì");
        let sum=0;
        for (let i = 1; i <= n; i++) {
             sum= sum+i; 
        }
        console.log(` tổng các số từ 1 đến ${n} là: ${sum}`);
      break;
    case 7:
      break;
    case 8:
      break;

    default:
      break;
  }
} while (choose != 10);
