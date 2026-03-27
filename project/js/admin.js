let flag = localStorage.getItem("login");
if (flag == null) {
  console.log("chứng tỏ chưa đăng nhập!");
  document.location.href = "./login.html";
} else {
  console.log("đăng nhập rồi");
}

// TẠO HÀM ĐĂNG XUẤT TÀI KHOẢN
function logOut() {
  // console.log("hàm được gọi!");
  let confirmLogout = confirm("bạn có chắc muốn thoát hay không?");
  if (confirmLogout) {
    document.location.href = "./login.html";
    localStorage.removeItem("login");
  }
}
