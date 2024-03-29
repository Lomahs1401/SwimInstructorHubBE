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
            res.status(500).json({ error: "Get all centers failed" });
        }
    }

    // [GET] /centers/:id
    async show(req, res) {
        try {
            const centerId = req.params.id;
            const center = await centerModel.findById(centerId);

            res
                .status(200)
                .json({ message: "Get center detail successfully", data: center });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Get center detail failed" });
        }
    }

    // [POST] /centers/store
    async store(req, res) {
        try {
            const newCenterData = req.body;
            const newCenter = new centerModel(newCenterData);
            await newCenter.save();

            res
                .status(200)
                .json({ message: "Created new center successfully", data: newCenter });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Center creation failed" });
        }
    }

    // [PATH] /update/:id
    async update(req, res) {
        try {
            const centerId = req.params.id;
            const updatedData = req.body;
            const updatedCenter = await centerModel.findByIdAndUpdate(
                centerId,
                updatedData,
                { new: true }
            );

            res
                .status(200)
                .json({ message: "Center updated successfully", data: updatedCenter });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Center update failed" });
        }
    }

    // [DELETE] /delete/:id
    async delete(req, res) {
        try {
            const centerId = req.params.id;
            await centerModel.findByIdAndDelete(centerId);

            res.status(200).json({ message: "Center deleted successfully" });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Delete failed" });
        }
    }
}

export default new CenterController();