const { PrismaClient } = require('@prisma/client');
const prisma = require('../util/db');

async function Student(req,res){
    try{
        const newStudent = await prisma.student.create({
            data:{
                regno: req.body.regno,
                name: req.body.name,
                password: req.body.password
            },
        });
        res.json(newStudent);
    }catch(error){
        res.status(500).json({error: 'internal server error'});
    }
}

async function Lecturer(req,res){
    try{
        const newLecturer = await prisma.lecturer.create({
            data:{
                regno: req.body.regno,
                name: req.body.name,
                password: req.body.password
            },
        });
        res.json(newLecturer);
    }catch(error){
        res.status(500).json({error: 'internal server error'});
    }
}

async function getStudent(req,res){
    const studentRegno = req.params.regno;
    try{
        const Student = await prisma.student.findUnique({
            where:{
                regno: studentRegno,
            },
        });
        if(student){
            res.json(student);
        } else{
            res.status(404).json({error: 'student not found'});
        }
    } catch(error){
        res.status(500).json({error: 'internal server error'});
    }
}

module.exports = {Student, getStudent, Lecturer};