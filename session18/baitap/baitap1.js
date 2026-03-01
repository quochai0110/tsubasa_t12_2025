/* 
    tạo đối tượng chứa thông tin về một người bao gồm các thuộc tính :
    tên, tuổi, địa chỉ, số điện thoại. Sau đó truy xuất các thuộc tính của đối tượng.
*/

let person= {
    name:"Vũ Hồng Vân", // name được gọi key, vũ hồng vân gọi là value
    age:18              // age được gọi là key, 18 gọi là value
}
person.name="Lê Minh Thu"; 
person.age=18;
person.address="HN";
person.phone="0987654321";

// truy xuất các thuộc tính
// console.log("tên của đối tượng person là:",person.name);
// console.log("tuổi của đối tượng person là:",person.age);
console.log("tên", person["name"]);


// console.log(` tên: ${person.name} __ tuổi: ${person.age} __ địa chỉ: ${person.address}`);// template string `` 
console.log(` tên: ${person["name"]} __ tuổi: ${person["age"]} __ địa chỉ: ${person["address"]}`);


