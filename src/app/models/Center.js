import mongoose from 'mongoose';

const centerSchema = new mongoose.Schema(
    {
        center_name: { type: String, required: true },
        description: { type: String, required: true },
        email: { type: [String], required: true },
        address: { type: [String], required: true },
        phone: { type: [String], required: true },
        image: { type: String, required: true },
        fanpage: { type: String, required: false },
        website: { type: String, required: false },
        work_time: { type: String, required: false },
    }, 
    {
        collection: 'centers',
        timestamps: true
    }
);

const centerModel = mongoose.model('centers', centerSchema);

export default centerModel;