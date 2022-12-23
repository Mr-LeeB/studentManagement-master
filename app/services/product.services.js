const { Product } = require('../model');

const getList = async () => {

    const productList = await Product.findAll();

    if (productList) {
        return productList;
    }
    return false;
}

const getDetail = async (id) => {
    const product = await Product.findOne({
        where: {
            id,
        }
    });
    if (product) {
        return product;
    }
    return false;
}

const addProduct_ = async (product) => {

    const newproduct = await Product.create(product);

    return newproduct;
}

const updateproduct_ = async (id, product) => {
    const productUpdate = await getDetail(id);
    if (productUpdate) {
        productUpdate.name = product.name;
        productUpdate.image = product.image;
        productUpdate.rating = product.rating;
        productUpdate.sale = product.sale;
        productUpdate.price = product.price;
        productUpdate.image1 = product.image1;
        productUpdate.image2 = product.image2;
        productUpdate.image3 = product.image3;
        productUpdate.image4 = product.image4;
        const productUpdated = await productUpdate.save();
        return productUpdated;
    }
    else
        return false;
}

const deleteProduct_ = async (id) => {
    const productDelete = await getDetail(id);
    if (productDelete){
        const productDeleted = await productDelete.destroy();
        return productDeleted;
    }
    return flase;
}

module.exports = {
    getList, getDetail, addProduct_, updateproduct_, deleteProduct_,
}


















