const checkProductEmpty = (req, res, next) => {
    const { name, image, rating, sale, price, } = req.body;
    if (!name || !image || !rating || !sale || !price) {
        return res.status(500).send('Không được để trống các trường thông tin')
    }
    next();
}

module.exports = {
    checkProductEmpty
}

















