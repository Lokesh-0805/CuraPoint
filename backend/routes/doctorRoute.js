import express from 'express'
import { appointmentsDoctor, doctorList ,loginDoctor ,appointmentCancel,appointmentComplete,doctorDashboard} from '../controllers/doctorController.js'
import authDoctor from '../middlewares/authDoctor.js'
import authDoctorget from '../middlewares/authDoctorget.js'

const doctorRouter = express.Router()

doctorRouter.get('/list',doctorList)
doctorRouter.post('/login',loginDoctor)
doctorRouter.get('/appointments',authDoctorget,appointmentsDoctor)
doctorRouter.post('/complete-appointment',authDoctor,appointmentComplete)
doctorRouter.post('/cancel-appointment',authDoctor,appointmentCancel)
doctorRouter.get('/dashboard',authDoctorget,doctorDashboard)

export default doctorRouter