/* 
    I- 
        + Từ khóa khai báo biến(let, const, var)
        + Các kiểu dữ liệu (data-type)
            Chia làm 2 nhóm
            Nhóm 1: ĐƠN GIẢN, NGUYÊN THỦY, PRIMITIVE TYPE 
                (number, string, boolean, undefined, null, NaN)
            Nhóm 2: phức tạp - REFERCE TYPE
                ( array, object, function)
        + toán tử (operator)
            _ toán tử số học : +, -, *, /, %, **
            _ toán tử logic  : &&, ||
            _ toán tử so sánh: >, <, >=, !=, !==, ==, ===
            _ toán tử gán    : =
            _ toán tử tăng giảm : ++a, a++ tiền tố, hậu tố 
            _ toán tử 3 ngôi : ? : 
        + câu điều kiện (condition)
            _ if_else
            _ if_else lồng
            _ if_else bậc thang
            _ switch_case
        + vòng lặp (loop)
            _ for
                biết trước được số lần lặp:
                vd: bài toán quản lý sinh viên
                có mảng chứa toàn bộ danh sách sinh viên 
                y/c: hiển thị danh sách sinh viên

            _ while
               trong bài toán không biết trước số lần lặp 
            _ do_while
        + mảng (array)
            + cách khai báo: let TÊN MẢNG = [];
            + thao tác với mảng: CRUD
            C: CREATE : THÊM PHẦN TỬ VÀO MẢNG
                + THÊM VÀO CUỐI MẢNG: push
                + THÊM VÀO ĐẦU      : unshift
                + THÊM VÀO VỊ TRÍ BẤT KÌ : splice(vị trí muốn thêm, số lượng phần tử muốn
                xóa, giá trị phần tử thêm vào)
            R: READ   : HIỂN THỊ 
                for()
            U: UPDATE : CẬP NHẬT
                _theo vị trí
            D: DELETE : XÓA 

            Các phương thức làm việc với mảng
            + slice(start, end): cắt sao chép ra mảng mới 

*/
let students = [];
students.push("Minh Thu");
students.push("Hồng Vân");
students.splice(1, 0, "Minh Huyền");
students.splice(2, 0, "Lan Hồng");
students[1] = " Hồng Phong";
students.splice(1,1,"Phong");
console.log("students", students);
for (let i = 0; i < students.length; i++) {
      if(students[i]=="phong"){
        // i chính là vị trí 
        /// dùng splice ở đây
      }
    
}
let result=  students.slice(1,3);
console.log("kết quả cắt",result);

