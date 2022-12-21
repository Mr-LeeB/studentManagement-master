const { getList, getDetail, addStudent_, updateStudent_, deleteStudent_, } = require('../services/student.services');

const getStudentList = async (req, res) => {
    const studentList = await getList();
    if (!studentList) {
        return res.status(404).send('Not found');
    }
    res.status(200).send(studentList);
};

const getStudentById = async (req, res) => {
    const { id } = req.params;
    const student = await getDetail(id);
    if (!student) {
        res.status(404).send('Student not found');
    }
    else
        res.status(200).send(student);
}

const addStudent = async (req, res) => {
    let student = req.body;
    const newStudent = await addStudent_(student);
    res.status(201).send(newStudent);
}

const updateStudent = async (req, res) => {
    const { id } = req.params;
    const student = req.body;
    const newStudent = await updateStudent_(id, student);

    if (!newStudent) {
        res.status(404).send('Student not found');
    }
    else
        res.status(200).send(newStudent);
}

const deleteStudent = async (req, res) => {
    const { id } = req.params;
    const result = await deleteStudent_(id);

    if (!result) {
        return res.status(404).send('Student not found');
    }
    res.status(200).send('Delete successfully');
}

module.exports = {
    getStudentList, getStudentById, addStudent, updateStudent, deleteStudent,
}