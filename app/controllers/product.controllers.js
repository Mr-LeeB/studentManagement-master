const { getList, getDetail, addProduct_, updateproduct_, deleteProduct_} = require('../services/product.services');

const getProductList = async (req, res) => {
    const studentList = await getList();
    if (!studentList) {
        return res.status(404).send('Not found');
    }
    res.status(200).send(studentList);
};

const getProductById = async (req, res) => {
    const { id } = req.params;
    const student = await getDetail(id);
    if (!student) {
        res.status(404).send('Product not found');
    }
    else
        res.status(200).send(student);
}

const addProduct = async (req, res) => {
    let student = req.body;
    const newStudent = await addProduct_(student);
    res.status(201).send(newStudent);
}

const updateProduct = async (req, res) => {
    const { id } = req.params;
    const student = req.body;
    const newStudent = await updateproduct_(id, student);

    if (!newStudent) {
        res.status(404).send('Product not found');
    }
    else
        res.status(200).send(newStudent);
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