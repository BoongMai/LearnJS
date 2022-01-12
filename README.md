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