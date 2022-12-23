const { json } = require('sequelize');
const { getList, getDetail, addProduct_, updateproduct_, deleteProduct_} = require('../services/product.services');

const getProductList = async (req, res) => {
    const productList = await getList();
    if (!productList) {
        return res.status(404).send('Not found');
    }
    const data = productList.map((product) => {
        return {
            id: product.id,
            name: product.name,
            image: product.image,
            rating: product.rating,
            sale: product.sale,
            price: product.price,
            image1: product.image1,
            image2: product.image2,
            image3: product.image3,
            image4: product.image4,
            category: product.category,
        }
    })
    res.status(200).send(data);
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await getDetail(id);
    if (!product) {
        res.status(404).send('Product not found');
    }
    else
        res.status(200).send(product);
}

const addProduct = async (req, res) => {
    let product = req.body;
    const newProduct = await addProduct_(product);
    res.status(201).send(newProduct);
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = req.body;
    const newProduct = await updateproduct_(id, product);

    if (!newProduct) {
        res.status(404).send('Product not found');
    }
    else
        res.status(200).send(newProduct);
}

const deleteProduct = async (req, res) => {
    const { id } = req.params;
    const result = await deleteProduct_(id);

    if (!result) {
        return res.status(404).send('Product not found');
    }
    res.status(200).send('Delete successfully');
}

module.exports = {
    getProductList, getProductById, addProduct, updateProduct, deleteProduct,
}