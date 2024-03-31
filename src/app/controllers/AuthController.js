import accountModel from '../models/Account.js';
import instructorModel from '../models/Instructor.js';
import studentModel from '../models/Student.js';

class AuthController {
    // [POST] /auth/login
    async login(req, res) {
        try {
            const { email, password } = req.body;

        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Login failed" });
        }
    }

    // [POST] /auth/register
    async register(req, res) {
        try {
            const { email, type } = req.body;
            const existingAccount = await accountModel.findOne({ email });

            if (existingAccount) {
                return res
                    .status(400)
                    .json({ error: "Account with this email already exists" });
            }

            const newAccount = new accountModel(req.body);
            await newAccount.save();

            let user

            if (type === 0) {
                // Role Student
                user = new studentModel({ account_id: newAccount._id });
                await user.save();
            } else if (type === 1) {
                // Role Instructor
                user = new instructorModel({ account_id: newAccount._id });
                await user.save();
            }

            res
                .status(200)
                .json({ 
                    message: "Registration successful", 
                    data: { 
                        ...newAccount.toObject(), 
                        [type === 0 ? 'student_info' : 'instructor_info']: user 
                    } 
                });
        } catch (error) {
            console.log(error)
            res.status(500).json({ error: "Registration failed" });
        }
    }
}

export default new AuthController();