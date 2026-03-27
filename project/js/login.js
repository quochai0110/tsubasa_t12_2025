// TẠO HÀM ĐĂNG NHẬP
function loginAdmin() {
  // console.log('hàm được thực thi!');
  // lấy giá trị email người dùng nhập
  let email = document.getElementById("email").value.trim();
  // console.log("email",email);
  let password = document.getElementById("password").value.trim();
  // console.log('password',password);
  /* admin@gmail.com , admin123456*/
  if (email == "admin@gmail.com" && password == "admin123456") {
    console.log("đăng nhập thành công!");
    localStorage.setItem("login","success");    
    document.location.href = "./admin.html";
  }
}
