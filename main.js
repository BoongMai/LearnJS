// // var fullName = 'Pham Thanh Duy', // khai báo tên cho biến fullName
// //     age = 18 // toán tử gán

// // //---------------------------------   
// // // alert(fullName) /** Thông báo ra màn hình biến fullName */
// // // alert(age)

// // // console.log(fullName) // hiển thị thông tin ra consle

// // // confirm(); // hỏi ý
// // // prompt(); // có nhập thông tin

// // // setTimeout(function() {
// // //     alert('Đợi 2s đi')
// // // }, 2000);

// // // setInterval(function() {
// // //     console.log('Log chạy' + Math.random())
// // // }, 1000);
// // //-----------------------------------
// // var a = 1 + 2 ; // toán tử số học, trong JS gán ==
// // console.log(a)


// // var a = 2;
// // var b = 2;
// // if(a == b){
// //     console.log('Đúng')
// // }

// // Toán tử logic đấu &&, cả hai vế phải đúng.

// //-------------------------
// // Prefix & Postfix = tiền tố, hậu tố
// // var number = 4;
// // var output = --number + number++;

// // console.log('Out put: ', output);
// // console.log('Cun Cat');



// // // --------------------------

// // //bài tập prefix & Postfix
// // var a;
// // var b;

// // var a = 7;
// // var b = 6;

// // var c = a++ + --a + --b 
// //         7     +  7 +  5

// // console.log(c)

// // Học toán tử gán
// // var result = '4' + 2 + 1 

// // console.log(result)
// /**
//  * Kiểu Boolean có 2 giá trị là true và false
// //  */
// // var a = 2;
// // var b = 2;
// //-------------------------------//
// // if (typeof b == "number" && typeof a == "number"){
// //   result = a + b;
// //  console.log(result)
// // }else{
// //     console.log('cc')
// // }


// //   var socialType = 'email'
// //   var isVerified = true;
// //   var result;

// //   if (socialType == 'google' || socialType == 'facebook'){
// //       result = true;
// //       console.log(result)
// //   }
// //   else if (socialType === 'email' && isVerified == true){
// //       result = true;
// //       console.log(result)
// //   } else if (socialType ==='email' &&  isVerified == false) {
// //       result = false;
// //       console.log(result)
// //   }
// // var myFuntion = function() {
// //   alert('tao tạo funtion')
// // }



// // // var createFuntion = function (){

// // }
// // createFuntion();

// // var myObject = {
// //   name: 'Duy',
// //   age: 18,
// //   phoneCall:'3232222232',
// //   myFuntion,
  
// // }

// // console.log(myObject)



// // var a = 2 +1 
// // var b = 2
// // function run(a,b){
// // let result

// // // (!a || undefined)&& (b = result)
// // // return result;
// // // }
// // var commentText = '"Học chưa hiểu là học chưa đủ!"'
// // console.log(commentText);
// // var authorName = 'Sơn Đặng:'
// // console.log(authorName.indexOf('Đ'));

// // var fullCommentText = authorName + ' ' + commentText ;
// // console.log(fullCommentText);


// // console.log(authorName.split('n'));




// // var title = 'Học Javascript tại F8'
// // var a = title.toUpperCase(),
// //     b = 'ASASASADAD'

// //     b = b.toLowerCase();
// // console.log(a);
// // console.log(b);

// // console.log(title.indexOf('Javascript'));
// // console.log(title.slice(2,4));


// //- indexOf tim` chuoi indexOf('tu khoa muon tim', bat dau tu` vi tri nao`);
// //- lastindexOf tim2 chuoi lay gia tri chuoi cuoi cung lastindexOf('chuoi muon tim kiem')
// //- search tim theo bieu thuc chinh quy.
// //- slice() cat chuoi tu vi tri bat dau toi vi tri ket thuc. slice(vi tri dau muon cat, vi tri cuoi muon cat )
// //cat tu dau den cuoi thi xoa tham so sau.
// //- replace thay the chuoi. replace('tu bi. thay','tu muon thay vao') || replace(/tu bi thay/g,'tu muon thay'),
// // thay tat ca.

// // - toUpperCase() || toLowerCase()

// //- Trim xoa khoang trong.

// //- Split cat chuoi thanh array.

// // charAt() tim ki tu o vi tri duoc truyen vao.

// // chử e thế số 0.
// // Number.isFinite();	Xác định xem giá trị đã cho có phải là số hữu hạn hay không. Trả về boolean
// // Number.isInteger(); Xác định xem giá trị đã cho có phải là số nguyên hay không. Trả về boolean
// // Number.parseFloat();Chuyển đổi chuỗi đã cho thành một số dấu phẩy động

// // Number.parseInt();Chuyển đổi chuỗi đã cho thành một số nguyên
// // Number.prototype.toFixed();	Chuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
// // Number.prototype.toString();Chuyển đổi và trả về số đã cho dưới dạng chuỗi


var a = '232.00'
console.log(Number.parseFloat(a));


var numberObject = 111.22123;

console.log(numberObject.toFixed(4));