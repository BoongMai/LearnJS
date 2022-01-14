# LearnJS
Mỗi ngày học 1 tiếng JS
Muốn tải của người khác về thì:
git clone + link

tải lên thì
 git add .
 git commit -m "asdasdas"
 git push

- 1/12/2022 Cài NodeJs và Json server

     + Khởi tạo một project bằng cách: npm init. Sẽ sinh ra file quản lý thư viện tên là package.json

    + Cài thư viện bằng cách gõ: npm "-g là cài vào máy tính có hoặc không cũng đc"... npm install -g json-server

    + Tham khảo tạo cấu trúc ở:https://github.com/typicode/json-server

    + Để chạy ta thêm "start" vào line  "scripts" ở file package.json.Trong "start" ta thêm dòng chạy json vào "json-server --watch db.json"

    + Chạy server = "npm start"
    
- CRUD:
    + Create -> POST
    + Read -> GET
    + Update -> PUT/PATCH
    + Delete -> DELETE

- Destructuring là cách viết vắng tắc nhưng cùng một kết quả
- rest là phương thức chạy qua các phần tử trong một object hoặc array.
- spread là phương thức giúp mình lượt bỏ hai đấu đầu của một mảng hoặc một array
    + VD: var a = ['1', '2', '3', '4', '5'] == '1', '2', '3', '4', '5'

    - Module: nạp vào bằng Import/ xuất export *nhớ add type="module" vào file index chứa đường link tới file module

        + Có nhiều cách import:
            * import <Tên module> from ''.
            * import <tên module, { hằng của các export }> from ''.
            * imoporn * as <tên module> from ''.
    