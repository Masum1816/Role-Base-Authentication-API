const express = require('express');
const userRouter = express.Router();
const  userController = require('../controllers/userController');
const verifyToken = require('../middleware/authMiddleware');


userRouter.get('/master',verifyToken(),userController.getMasterController);

userRouter.get('/principal',verifyToken(['master']),userController.getPrincipalController);
userRouter.post('/principal',verifyToken(['master']),userController.postPrincipalController);
userRouter.get('/principal/:id',verifyToken(['master','principal']),userController.getPrincipalByIdController);
userRouter.put('/principal/:id',verifyToken(['master']),userController.updatePrincipalController);
userRouter.delete('/principal/:id',verifyToken(['master']),userController.deletePrincipalController);

userRouter.get('/faculty',verifyToken(['master','principal']),userController.getFacultiesController);
userRouter.post('/faculty',verifyToken(['master','principal']),userController.postFacultyController);
userRouter.get('/faculty/:id',verifyToken(['master','principal','faculty']),userController.getFacultyByIdController);
userRouter.put('/faculty/:id',verifyToken(['master','principal']),userController.updateFacultyController);
userRouter.delete('/faculty/:id',verifyToken(['master','principal']),userController.deleteFacultyController);

userRouter.get('/student',verifyToken(['master','principal','faculty']),userController.getStudentsController);
userRouter.post('/student',verifyToken(['master','principal','faculty']),userController.postStudentController);
userRouter.get('/student/:id',verifyToken(['master','principal','faculty','student']),userController.getStudentByIdController);
userRouter.put('/student/:id',verifyToken(['master','principal','faculty']),userController.updateStudentController);
userRouter.delete('/student/:id',verifyToken(['master','principal','faculty']),userController.deleteStudentController);


module.exports = userRouter;
