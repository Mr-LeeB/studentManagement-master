const express = require('express');
const cors = require('cors');
const router = require('./routers/root.router');
const app = express();
const port = process.env.PORT || 3000;




// Chuyển tất cả các req, res sang dạng JSON
app.use(express.json());

// serving static files
app.use('/static', express.static('./public'));

app.use(router);

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(cors({
    origin: '*',
    methods: 'POST, PUT, PATCH, GET, DELETE, OPTIONS',
    headers: '*',
}));

app.get('/products', (req, res) => {
    // Xử lý yêu cầu GET tới /products

});

app.get('/', (req, res) => {
    res.send('Hello World!');
});


app.listen(port, () => {
    console.log(`Example app listening at https://localhost:${port}`);
});

// setup sequelize
const { sequelize } = require('./model/index');
sequelize.sync({ alter: true }); // chỉ sửa bảng chứ ko xóa bảng