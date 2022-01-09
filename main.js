// // var fullName = 'Pham Thanh Duy', // khai báo tên cho biến fullName
// //     age = 18 // toán tử gán

// // //---------------------------------   
// // // alert(fullName) /** Thông báo ra màn hình biến fullName */
// // // alert(age)

//  console.log(fullName) // hiển thị thông tin ra consle

// // // confirm(); // hỏi ý
// // // prompt(); // có nhập thông tin

// // // setTimeout(function() {
// // //     alert('Đợi 2s đi')
// // // }, 2000);

// // // setInterval(function() {
// // //     console.log('Log chạy' + Math.random())
// // // }, 1000);
// // //-----------------------------------
// // console.log(a)

// // var a = 1 + 2 ; // toán tử số học, trong JS gán ==

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
// // Number.prototype.toFixed();Không truyền tham số thì làm trònChuyển đổi và trả về chuỗi đại diện cho số đã cho, có số chữ số chính xác sau dấu thập phân
// // Number.prototype.toString();Chuyển đổi và trả về số đã cho dưới dạng chuỗi


// var a = '232.00'
// console.log(Number.parseFloat(a));


// var numberObject = 111.22123;

// console.log(numberObject.toFixed(4));

// var soNe = new Number(2);
// NaN đại diện số không hợp lệ.

// var noANo = 12 / 'das'
// console.log(isNaN(noANo))

// var so = 123

// console.log(typeof so.toString());
// kiem ra array = cach Array.isArray() truyen bien can kiem tra vao


// var b = myArray[myArray.length -1]
// console.log(b);
// // console.log(Array.isArray(myArray));
// // console.log(myArray);
// join('');bien mang thanh chuoi, tham so truyen vao la ki tu ma minmh muon bien doi
//pop() xoa element cuoi mang  va trave phan tu da xoa, khong truyen tham so vao
//push('hk') them phan vao cuoi mang
// shift() xoa phan tu dau tien va tra ve phan tu da xoa, khong truyen tham so vao
//unshift('dasd') them phan tu vao dau mang va tra ve phan tu moi
//splice(1 , 1); phan tu dau dinh vi con tro, vi tri 2 bat dau xoa bao nhieu phan tu
//truyen vao 0 thi khong xoa phan tu, them phan tu thu 3 la chen phan tu

// console.log(myArray.splice(1, 1)); //dat tro vao vi tri so 1 vaxoa di vi tri so 1 

// if (myArray1.length == 0){
//    myArray1.push('asd','1223'); 
//    console.log(myArray1);
// }

//concat() noi' mang~
// console.log(myArray.concat(myArray1));

// tham so
// function Name(tham so) {}
// Name('doi so')
// khong gioi han kieu du lieu nhap vao gi cung dc
//
// var a = 1,
//     b = 4

// function qeea(a, b) {
//     qeea = a + b

// }

// console.log(qeea);

// var dayLaObject = {
//     asd: 123,
//     key1: function () {
//         alert('dssdas')   
//     }
// }

// console.log(typeof dayLaObject.asd);
//object contructer thi viet hoa chu cai dau tien cua ten.
// var User =  function(firstName, lastName, age) {
//     this.firstName = firstName,
//     this.lastName = lastName,
//     this.age = age
//     this.getName = function () {
//         return `${this.firstName} ${this.lastName}`
//     }
//     this.checkAge = function () {
//         if(this.age < 18){
//             alert('Chưa đủ tuổi')
//         }else{
//             return this.getName()

//         }

//     }
// }

// var boss = new User('Phạm', 'Duy', 18 );
// var neiber = new User('Hoàng', 'Dũng', 21);

// console.log(boss.checkAge());
// console.log(neiber);

// let a = new Date()
// let b = new Date()
// console.log(a.getTime() - b.getTime()/ 1000);


// function run(a) {
//     var a = 8
//     Number.isInteger(a)  && a > 0 ? `${a}` : Math.floor(a);
// }

// console.log(run());

// var myArray = [
//     'Dy',
//     'Tu',
//     'Truong',
//     'Nhi'
// ]
// var arrayLenght = myArray.length

// // for(var i=1;i < myArray.length; i++){
// //     console.log(myArray[i]);
// // }
// for(var key in myArray){

//     if(myArray.length %2 !== 0){
//         break;
//     }

//     console.log(myArray[key]);
// }

// for(var i = 0; i<10;i++){
//     if(i %2 == 0){
//         continue;
//     }
//     console.log(i);
// }
// var i = 0
// var isSuccess = false;
// do {
//     i++
//     console.log('Lan: ' + i);

//     if(i==11){
//         isSuccess = true;
//     }else if (i ==10){
//         break;
//     }
// }while(!isSuccess && i <12)

// var myArray = [
//     'Duy',
//     'Tu',
//     'Truong'
// ]
// for(var i = 0 ; i < myArray.length;i ++){
//   console.log(myArray[i]);
// }


// var courses = [
//   {
//      id:0,
//     name:'duy',
//     age:18,
//     coin:120
//   },
//   {
//      id:1,
//     name:'Tú',
//     age:28,
//     coin:120
//   },
//   {
//      id:2,
//     name:'Huy',
//     age:28,
//     coin:120
//   },
//   {
//     id:3,
//     name:'Trường',
//     age:98,
//     coin:120
//   },
// ]

// var courses2 = [
//   {
//      id:0,
//     name:'duy',
//     age:18,
//     coin:120
//   },
//   {
//      id:1,
//     name:'Tú',
//     age:28,
//     coin:120
//   },
//   {
//      id:2,
//     name:'Huy',
//     age:28,
//     coin:120
//   },
//   {
//     id:3,
//     name:'Trường',
//     age:98,
//     coin:120
//   },
// ]


// function tong(a,b) {
//   return a + b.coin
// }

// var total = courses2.reduce(tong, 0)

// console.log(total);
// var check = courses.every(function (check1) {
//   return check1.coin ===120
// })
// console.log(check);

// var check = courses2.some(check => check.coin ===120)
// console.log(check);

// var check = courses.find(check => check.name === '231')
// console.log(check);

// var check = courses.map(check => check.coin)
// console.log(check);

// var check = courses.filter(check => check.id === 10)
// console.log(check);
//cách 1:
// var i = 0
// function coinHandler(giaTriTruyenVao, giaTriTaiViTrinCuaMang) {
//   i++
//   var total = giaTriTruyenVao + giaTriTaiViTrinCuaMang.coin
//   console.table({
//     'Lần chạy thứ: ': i,
//     'Giá trị truyền vào: ': giaTriTruyenVao,
//     'Giá trị tích trữ: ': giaTriTaiViTrinCuaMang.coin,
//     'Tổng: ': total
//   })
//   return total
// }
// var totalCoin = courses.reduce(coinHandler, 0)

// console.log(totalCoin);

//cách 2:
// var totalCoin = courses.reduce(function (a, b) {
//   return a + b.coin
// }, 0)

// console.log(totalCoin);

//cách 3:

// var totalCoin = courses.reduce((a,b) => a + b.coin, 50) 

// console.log(totalCoin);

// var a = 'hi'
// var b = 2
// console.log(parseInt(a) + b);
// var totalCoin = 0;
// for(var course of courses){
//   totalCoin += course.coin
// }
// console.log(totalCoin);

// function  input(nini) {
//   return {
//     age: nini.age,
//     name: `Tui ten la: ${nini.name}`
//   }
// }
// var newnew = courses.map(function (input, index) {
//   return {
//     id:`${input.id} ${input.name}`
//   }
// })

// console.log(newnew);
// forEech
// var isFree =[]

// courses.forEach(function (course, index) {
//      return isFree[course.coin] = course.name
// })
// console.log(isFree);

// var isFree = courses.every(function (course, index) {
//   console.log(index);
//   return course.coin ===2;

// })

// console.log(isFree);


// var isFree = courses.some(function (course, index) {
//   console.log(index);
//   return course.coin ===0;
// })
// // console.log(isFree);
// var isFree = courses.find(function (course, index) {
//   console.log(index);
//   return course.name === 'Huy';
// })
// console.log(isFree);
// var isFree = courses.filter(function (course, index) {
//   console.log(index);
//   return course.name === 'Huy';
// })
// console.log(isFree);

//lam phang mang 
// var listFriend = [1,2,[3,4],5,6,[7,8],9,10]
// var flatList = listFriend.reduce((flatArray, friend) => 
//     flatArray.concat(friend), [])

// console.log(flatList);

// Array.prototype.reduce2 = function (callback, totalNum) { 
//   let i = 0
//   if(arguments.length < 2 ){
//     i = 1
//     totalNum = this[0]
//   }
//   for( ; i < this.length; i++ ){
//     totalNum = callback(totalNum, this[i], i, this)
//     }

//   return totalNum
// }
// const listNum = [1,2,3,4,5]

// const totalNum = listNum.reduce2((a, b) => {
//   return a + b
// },)
// console.log(totalNum);

/**
 * getById, querrySelector thì trả về một element
 * getElementByClassName thì trả về một HTML colection
 * querrySelectorAll trả về một NodeList bao gồm tất cả element tương ứng và Id hoặc class của nó nếu có
 */


// var elementNe = document.querySelector('.firstName')
// console.log(elementNe);

/**
 * Để thêm attributes vào element thì phải gọi được tới element đó
 * và đùng tên biến đã tạo (.)+ attributes muốn thêm
 */

// var firstNameElt = document.querySelectorAll('a')[2]// Lấy element
// console.log(firstNameElt);

// firstNameElt.setAttribute('style', 'color:red;')//set

// console.log(firstNameElt.getAttribute('style'));//get
//Lấy phần tử trong một Nodelist
// for(var i = 0; i <elementFirstName.length;i++){
//     console.log(elementFirstName[i]);
// }

// console.log(firstNameElt);
// console.log(elementFirstName);


/**
 * innerHTML va textContent dung de tuong tac voi Text Node
 * textContent se lay ra tat ca nhung textNode ba gom khoang trang, 
 * không bị ảnh hưởng bởi các attribute trong elementnode,
 * innerHTML trả ra tất cả những gì ta thấy trên file html bên trong node ta chọn.
 * innerText trả ra giống như ta thấy ở trình duyệt 
 * đỗi tất cả các seter elenment thành text
 */
// var getText = document.querySelector('.firstName')

/* seter bằng innerText thì console show ra i như mình gõ 
/ ở JS nhưng đc chuyển thổi thành code ở dạng HTML, khoảng trắng = <br>
*/
// getText.innerText = `

//  Test-Text-1
// `

/*textcontent thì xuất ra HTML là theo mặc định, nhưng ở
 console thì xuất theo những gì ta gỏ ở JS
// */
// var b = getText.textContent = `
// <br>
// 1
// 2

// Test-Text-2
// 3
// 4
// ` // seter
// console.log(b);
// console.log(getText.innerText); // geter
// console.log(getText.textContent); // geter


// var f8LinkElement = document.querySelectorAll('a')[0]
// // console.log(f8LinkElement);

// var f8ShortLink = f8LinkElement.getAttribute('href')
// // console.log(f8ShortLink);

// document.querySelector('a:nth-child(2)').href = f8ShortLink;
// document.querySelector('div').setAttribute('data-url', f8ShortLink);


// var valueInput;

// var inputElement = document.querySelector('.js-text-btnConten')

// inputElement.oninput = function(e) {
//     valueInput = e.target.value;
// }

// inputElement.onkeyup = function(e) {
//         console.log(e.target.value);
//     }
//     //dùng được onchange, oninput..., value để lấy ra giá trị trong box

// var inputElement = document.querySelector('.js-checkbox-btnConten')

// inputElement.onchange = function(e) {
//         console.log(e.target.checked);
//     }
//     // đối với checked thì onchage và

// var selectElement = document.querySelector('.js-select')

// selectElement.onchange = function(e) {
//     console.log(e.target.value);
// }


// document.onkeydown = function(e) {
//         switch (e.which) {
//             case 27:
//                 console.log('EXIT');
//                 break;
//         }
//     }
//     //which là sp61 thự tự bàn phím


//preventDefault dùng để ngăn hành vi mặc định 
// var aElements = document.querySelector('.btn-member')

// aElements.onclick = function(e) {
//     e.preventDefault()
// }

// function viec1() {
//     console.log(Math.floor(Math.random() * 100));
// }

// function viec2() {
//     console.log('viec 2');
// }

// aElements.addEventListener('click', viec1)


// aElements.addEventListener('click', viec2)


// setTimeout(function() {
//     aElements.removeEventListener('click', viec2) //huy lang nghe
// }, 3000)

// for (const aElement of aElements) {
//     aElement.onclick = function(e) {
//         if (!e.target.href.startsWith('https://fullstack.edu.vn/')) {
//             e.preventDefault();
//         }
//     }
// }


/**
 * Cách tạo ra một promise
 * 1. khởi tạo new Promise()
 * 2.truyền excuter
 * 3.Các phương thức thường gặp:
 *  .then() thành công nhảy vào đây
 *  .catch()    thất bại nhảy vào đây, bẩy lỗi
 *  .finally() xong h=lời hứa!
 */

var promise = new Promise(
    function(resolve, reject) {

        resolve(
            alert('asds')
        )
    }
)


promise

    .then(function(info) {
    console.log(info);
})

.catch(function(faill) {
    console.log(faill);
})

.finally(function() {
    console.log("DOne!!!");
})