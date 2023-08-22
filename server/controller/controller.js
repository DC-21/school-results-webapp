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

module.exports = {Student};