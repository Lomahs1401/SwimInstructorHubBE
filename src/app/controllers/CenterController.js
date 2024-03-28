import mongoose from 'mongoose';
import centerModel from '../models/Center.js';

class CenterController {
    // [GET] /centers
    async index(req, res) {
        try {
            const centers = await centerModel.find();
            console.log(centers)
            res
                .status(200)
                .json({ message: "Get all center successfully", data: centers });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Get all center failed" });
        }
    }
}

export default new CenterController();