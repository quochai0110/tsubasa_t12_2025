/* 
DOM     : document object model : mô hình đối tượng tài liệu 
khi trang được tải lên TRÌNH DUYỆT SẼ TẠO RA MÔ HÌNH CÂY DOM
DỰA VÀO MÔ HÌNH NÀY CHÚNG TA CÓ THỂ:
THAY ĐỔI ELEMENT, ATRIBUTE, TEXT
DOM GỒM 3 THÀNH CHÍNH:
1. ELEMENT
    CÁC CÁCH ĐỂ LẤY ELEMENT:
    + lấy theo id: document.getElementById("");
    + lấy theo class: document.getElementsByClassName("")
2. ATRIBUTE
    + thuộc tính 
3. TEXT : nội dung
    + innerHTML

__________________________________________

EVENT   : sự kiện

*/
function changeText() {
  //    let result= document.getElementsByClassName("title");
  //    trả về 1 mảng chứa các đối tượng
  //    result.style.display="none";
  //    console.log("result",result[0]);
  let elementH1 = document.getElementById("heading"); // ĐỐI TƯỢNG
  elementH1.className = "title"; // thêm thuộc tính className có giá trị title
}
let students = {};
// thêm thuộc tính cho đối tượng obj thì làm thế nào?
students.email = "thu@.com"; // thêm thuộc tính email có giá trị thu@.com

function showText() {
    console.log(1111);
    
}
// function đăng nhập
function login(){
    let element_input= document.getElementById("email");
    console.log("kết quả", element_input.value);
    
}
let std1={
    address:"HN"
}
console.log("giá trị", std1.address);
