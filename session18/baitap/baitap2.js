let products = [
  {
    id: 1,
    name: "Milk",
    count: 100,
  },
  {
    id: 2,
    name: "Orange",
    count: 100,
  },
  {
    id: 3,
    name: "Butter",
    count: 100,
  },
];
// thêm đối tượng có các thuộc tính tương tự
let newProduct = {
  id: 5,
  name: "apple",
  count: 30,
};
products.push(newProduct);
// console.log("mảng products", products);

// xóa đối tượng có id là 2.

for (let i = 0; i < products.length; i++) {
  if (products[i].id === 2) {
    // i là vị trí
    products.splice(i, 1); // xóa phần tử có id=2;
  }
}
// console.log("products sau khi xóa",products);

// cập nhật phần tử có id=3;
for (let i = 0; i < products.length; i++) {
  if (products[i].id === 3) {
    // i là vị trí đối tượng có id=3;
    products[i].count = 0;
  }
}
// console.log("products sau khi cập nhật",products);

// cho từ khóa Butter kiểm tra xem có trong mảng products hay không?
// nếu có thì hiển thị, không có thì hiển thị không có dữ liệu bạn tìm kiếm
let key = "Butter";
let flag= 0;
for (let i = 0; i < products.length; i++) {
  if (products[i].name === key) {
      console.log(` sản phẩm trùng từ khóa ${key} là: ${products[i].name} số lượng ${products[i].count}`);
        flag=1;
        break;
  }
}
if(flag==0){
  console.log("không có sản phẩm thỏa mãn!");
}
