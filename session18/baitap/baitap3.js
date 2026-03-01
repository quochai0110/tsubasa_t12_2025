/* 

BÀI TOÁN QUẢN LÝ CÔNG VIỆC
PHẢI CÓ MẢNG ĐỂ LƯU TOÀN BỘ CÔNG VIỆC 
TỪNG CÔNG VIỆC SẼ LÀ ĐỐI TƯỢNG
{
}
*/
let tasks = [
  {
    id: 1,
    name: "cưới vợ",
    status: false,
  },
  {
    id: 2,
    name: "mua nhà",
    status: false,
  },
];
function renderTasks() {
  let html = "";
  for (let i = 0; i < tasks.length; i++) {
    html += `
        <li>
        <input type="checkbox" /><span  >${tasks[i].name}</span>
        </li>
        `;
  }
  document.getElementById("content").innerHTML = html;
  console.log("html", html);
}
renderTasks();

// tạo hàm thêm công việc
function addTask() {
  // Từng đối tượng sẽ gồm có các thuộc tính: id, name, status
  let newTask = {
    id: Date.now(), // thời gian số giây từ 1970 - đến thời điểm hiện tại
    name: document.getElementById("task").value,
    status: false,
  };
  tasks.push(newTask);
  renderTasks(); // gọi hàm để hiển thị cái mới
}
