
const principalSchema = require('../models/principalSchema');
const facultySchema = require('../models/facultySchema');
const studentSchema = require('../models/studentSchema');

const getMasterController = (req, res) => {

    console.log("GET MASTER CONTROLLER");
    res.json("welcome master");

}

const getPrincipalController = async (req, res) => {

    console.log("GET PRINCIPAL CONTROLLER");

    try {
        const principals = await principalSchema.find();
        res.status(200).json(principals);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching principals', error });
    }

}

const postPrincipalController = async (req, res) => {

    console.log("POST PRINCIPAL CONTROLLER");

    try {
        const { fname, lname, email, mobile } = req.body;

        const newPrincipal = new Principal({ fname, lname, email, mobile });
        const savedPrincipal = await newPrincipal.save();

        res.status(201).json(savedPrincipal);
    } catch (error) {
        res.status(500).json({ message: 'Error creating principal', error });
    }


}

const getPrincipalByIdController = async (req, res) => {

    console.log("GET PRINCIPAL BY ID CONTROLLER");

    try {
        const principal = await principalSchema.findById(req.params.id);
        if (!principal) {
            return res.status(404).json({ message: 'Principal not found' });
        }
        res.status(200).json(principal);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching principal', error });
    }

}

const updatePrincipalController = async (req, res) => {

    console.log("UPDATE PRINCIPAL CONTROLLER");

    try {
        const { fname, lname, email, mobile } = req.body;
        const updatedPrincipal = await principalSchema.findByIdAndUpdate(
            req.params.id,
            { fname, lname, email, mobile },
            { new: true }
        );
        if (!updatedPrincipal) {
            return res.status(404).json({ message: 'Principal not found' });
        }
        res.status(200).json(updatedPrincipal);
    } catch (error) {
        res.status(500).json({ message: 'Error updating principal', error });
    }

}

const deletePrincipalController = async (req, res) => {

    console.log("DELETE PRINCIPAL CONTROLLER");

    try {
        const deletedPrincipal = await Principal.principalSchema(req.params.id);
        if (!deletedPrincipal) {
            return res.status(404).json({ message: 'Principal not found' });
        }
        res.status(200).json({ message: 'Principal deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting principal', error });
    }

}

const getFacultiesController = async (req, res) => {

    console.log("GET FACULTY CONTROLLER");

    try {
        const faculties = await facultySchema.find();
        res.status(200).json(faculties);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching faculties', error });
    }

}

const postFacultyController = async (req, res) => {

    console.log("POST FACULTY CONTROLLER");

    try {
        const { fname, lname, email, mobile } = req.body;

        const newFaculty = new Faculty({ fname, lname, email, mobile });
        const savedFaculty = await newFaculty.save();

        res.status(201).json(savedFaculty);
    } catch (error) {
        res.status(500).json({ message: 'Error creating faculty', error });
    }

}

const getFacultyByIdController = async (req, res) => {

    console.log("DELETE FACULTY BY ID CONTROLLER");

    try {
        const faculty = await facultySchema.findById(req.params.id);
        if (!faculty) {
            return res.status(404).json({ message: 'Faculty not found' });
        }
        res.status(200).json(faculty);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching faculty', error });
    }

}

const updateFacultyController = async (req, res) => {

    console.log("UPDATE FACULTY CONTROLLER");

    try {
        const { fname, lname, email, mobile } = req.body;
        const updatedFaculty = await facultySchema.findByIdAndUpdate(
            req.params.id,
            { fname, lname, email, mobile },
            { new: true }
        );
        if (!updatedFaculty) {
            return res.status(404).json({ message: 'Faculty not found' });
        }
        res.status(200).json(updatedFaculty);
    } catch (error) {
        res.status(500).json({ message: 'Error updating faculty', error });
    }

}

const deleteFacultyController = async (req, res) => {

    console.log("DELETE FACULTY CONTROLLER");

    try {
        const deletedFaculty = await facultySchema.findByIdAndDelete(req.params.id);
        if (!deletedFaculty) {
            return res.status(404).json({ message: 'Faculty not found' });
        }
        res.status(200).json({ message: 'Faculty deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting faculty', error });
    }

}

const getStudentsController = async (req, res) => {

    console.log("GET STUDENT CONTROLLER");

    try {
        const students = await studentSchema.find();
        res.status(200).json(students);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching students', error });
    }

}

const postStudentController = async (req, res) => {

    console.log("POST STUDENT CONTROLLER");

    try {
        const { fname, lname, roll_no, email, mobile } = req.body;
        
        const newStudent = new Student({ fname, lname, roll_no, email, mobile });

        const savedStudent = await newStudent.save();

        res.status(201).json(savedStudent);
    } catch (error) {
        res.status(500).json({ message: 'Error creating student', error });
    }

}

const getStudentByIdController = async (req, res) => {

    console.log("GET STUDENT BY ID CONTROLLER");

    try {
        const student = await studentSchema.findById(req.params.id);
        if (!student) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json(student);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching student', error });
    }

}

const updateStudentController = async (req, res) => {

    console.log("UPDATE STUDENT CONTROLLER");

    try {
        const { fname, lname, roll_no, email, mobile } = req.body;

        
        const updatedStudent = await studentSchema.findByIdAndUpdate(
            req.params.id,
            { fname, lname, roll_no, email, mobile },
            { new: true } 
        );

        if (!updatedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }

        res.status(200).json(updatedStudent);
    } catch (error) {
        res.status(500).json({ message: 'Error updating student', error });
    }

}

const deleteStudentController = async (req, res) => {

    console.log("DELETE STUDENT CONTROLLER");

    try {
        const deletedStudent = await studentSchema.findByIdAndDelete(req.params.id);
        if (!deletedStudent) {
            return res.status(404).json({ message: 'Student not found' });
        }
        res.status(200).json({ message: 'Student deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting student', error });
    }

}

module.exports = { getPrincipalController, postPrincipalController, getPrincipalByIdController, updatePrincipalController, deletePrincipalController, getFacultiesController, postFacultyController, getFacultyByIdController, updateFacultyController, deleteFacultyController, getStudentsController, postStudentController, getStudentByIdController, updateStudentController, deleteStudentController, getMasterController };





