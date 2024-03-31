import mongoose from 'mongoose';

const studentSchema = new mongoose.Schema(
    {
        student_name: { type: String, default: "" },
        weight: { type: Number, required: true, default: 0 },
        height: { type: Number, required: true, default: 0 },
        account_id: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
    },
    {
        collection: 'students',
        timestamps: true
    }
);

const studentModel = mongoose.model('Student', studentSchema);

export default studentModel;