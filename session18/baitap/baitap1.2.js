/* 


*/
let student = {
  id: 1,
  name: "Nguyễn Văn A",
  gender: "name",
  age: 20,
  mark: 9.5,
};
let student1 = {
  id: 3,
  name: "Nguyễn Văn C",
  gender: "name",
  age: 20,
  mark: 9.5,
};
let student2 = {
  id: 4,
  name: "Nguyễn Văn D",
  gender: "name",
  age: 20,
  mark: 9.5,
};
let newStudent = {
  id: 2,
  name: "Nguyễn Văn B",
  gender: "nữ",
  age: 18,
  mark: 9,
};
let students = [];
// thêm phần tử vào trong mảng students
students.push(student, student1, student2);
students.push(newStudent);
console.log("students", students);
// `` template string giúp có thể truyền giá trị vào trong string
let fullName = "hoàng";
// console.log(`xin chào ${fullName} `);

// console.log(`id: ${students[1].id}-- name: ${students[1].name}-- gender: ${students[1].gender}`);

// hiển thị học sinh có điểm cao nhất

let max_score= students[0].mark; // lấy điểm số của học sinh thứ nhất là điểm cao nhất
for (let i = 1; i < students.length; i++) {
     if(students[i].mark>max_score){
        max_score=students[i].mark;
     }
}
console.log("điểm số lớn nhất là",max_score);
for (let i = 0; i < students.length; i++) {
     if(students[i].mark== max_score){
        console.log("sinh viên có điểm cao nhất:", students[i].name);
     }
    
}
// thuật toán sắp xếp nổi bọt
/* 

so sánh 2 phần tử liền kề , nếu thỏa mãn điều kiện thì đổi vị trí

THUẬT TOÁN
    1. THUẬT TOÁN SẮP XẾP
        + buble sort
        + selection sort
        + insertion sort
        + merge sort
        + quick sort
        _ nguyên lý hoạt động
        _ độ phức tạp thuật toán 
    2. THUẬT TOÁN TÌM KIẾM
        + tuyến tính
        + nhị phân ...
    3. cây nhị phân
    4. đồ thị...

*/
let arr= [8,5,9,7,6,4];// sắp xếp từ bé đến lớn

 for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length-1; j++) {
        if(arr[j]>arr[j+1]){
            let temp= arr[j];
            arr[j]= arr[j+1];
            arr[j+1]=temp;
        }
    }
 }
 console.log("mảng sau khi sắp xếp", arr);
 
