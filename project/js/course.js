let courses = JSON.parse(localStorage.getItem("courses"));
if (courses == null) {
  courses = [];
}

//  TẠO HÀM THÊM MỚI KHÓA HỌC

function addCourse() {
  console.log("đã gọi hàm!");
  // làm mờ nền
  document.querySelector(".container-right").style.opacity = "0.1";
  // document.getElementsByClassName("container-right")[0]
  document.querySelector(".course").style.display = "block";

  let courseId = document.getElementById("courseId").value.trim();
  console.log("courseId", courseId);
  // Mã khóa học không được trùng
  let result = courses.filter((item) => item.id == courseId);
  if (result.length != 0) {
    console.log("mã khóa học đã tồn tại");
    return;
  }
  let courseName = document.getElementById("courseId").value.trim();
  let courseTime;
  let courseStatus;
  let course = {
    id: courseId,
    name: courseName,
    status: "",
    time: "",
  };
  courses.push(course);
  // lưu lại
  localStorage.setItem("courses", JSON.stringify(courses));
}
// TẠO HÀM MỞ MODAL
function openModal() {
  document.querySelector(".course").style.display = "block";
  document.querySelector(".container-right").style.opacity = "0.1";
}
// TẠO HÀM ĐI ĐÓNG MODAL

function closeModal() {
  document.querySelector(".course").style.display = "none";
  document.querySelector(".container-right").style.opacity = "1";
}
/* 

    1. danh sách khóa học ==> cần Mảng để lưu danh sách khóa học
    2. Một khóa học chi tiết ==> cần Đối tượng
    3. Một khóa học thì có các thuộc tính gì?
        + Mã khóa học
        + Tên khóa học
        + Thời gian
        + Trạng thái
*/
