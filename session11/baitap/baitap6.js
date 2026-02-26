let a = Number(prompt("mời nhập số a")); // kiểu dữ liệu string "5"
let b = Number(prompt("mời nhập số b")); // "6"
let calculation = prompt("mời bạn nhập phép tính"); // + "5"+"6" "56"
if (calculation == "-") {
  alert(`kết quả của phép tính trên ${a}-${b}=${a - b}`);
} else if (calculation == "+") {
  alert(`kết quả của phép tính trên ${a}+${b}=${a + b}`);
} else if (calculation == "*") {
  alert(`kết quả của phép tính trên ${a}*${b}=${a * b}`);
}
