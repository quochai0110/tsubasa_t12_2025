/* 
    Toán tử:
    1. toán tử số học : 
        +, -, *, /
        % : chia lấy dư
        **
    2. toán tử so sánh
       >, >=, <, <=, !=, !==, ==, ===
      != : so sánh khác : 1 dấu bằng so sánh khác giá trị
      !==: so sánh khác : 2 dấu bằng so sánh khác giá trị hoặc kiểu dữ liệu
      === : so  sánh cả giá trị và KIỂU DỮ LIỆU
      == : so sánh giá trị
    3. Toán tử logic
    ||, &&


*/
/* kiểm tra số chẵn , số lẻ  */
/* nếu là số chẵn thì sẽ chia hết cho 2 dư 0  */
  let age= Number(prompt("mời bạn nhập số tuổi "));
  let card_status= true; // thẻ còn hiệu lực 
  // điều kiện để sinh viên có thể mượn sách trong thư viện là thẻ còn hiệu lực và tuổi
  // lớn hơn 18
  if(age>18||card_status==true){
    console.log("đủ điều kiện");
  }else{
    console.log("không đủ điều kiện");
    
  }
