const studentList = [
    {
        id: 1,
        fullName: 'Trần Chí Kiên',
        age: 20,
        Class: 12,
    },
    {
        id: 2,
        fullName: 'Nguyễn Hoàng Hải',
        age: 18,
        Class: 14,
    },
    {
        id: 3,
        fullName: 'Trần Phước nhân',
        age: 25,
        Class: 16,
    },
]

const { Student } = require('../model');

const getList = async () => {

    const studentList = await Student.findAll();

    if (studentList) {
        return studentList;
    }
    return false;
}

const getDetail = async (id) => {
    const student = await Student.findOne({
        where: {
            id,
        }
    });
    if (student) {
        return student;
    }
    return false;
}

const addStudent_ = async (student) => {

    const newStudent = await Student.create(student);

    return newStudent;
}

const updateStudent_ = async (id, student) => {
    const studentUpdate = await getDetail(id);
    if (studentUpdate) {
        studentUpdate.fullName = student.fullName;
        studentUpdate.age = student.age;
        studentUpdate.Class = student.Class;
        const studentUpdated = await studentUpdate.save();
        return studentUpdated;
    }
    else
        return false;
}

const deleteStudent_ = async (id) => {
    const studentDelete = await getDetail(id);
    if (studentDelete){
        const studentDeleted = await studentDelete.destroy();
        return studentDeleted;
    }
    return flase;
}

module.exports = {
    getList, getDetail, addStudent_, updateStudent_, deleteStudent_,
}


















