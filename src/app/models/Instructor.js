import mongoose from 'mongoose';

const instructorSchema = new mongoose.Schema(
    {
        instructor_name: { type: String, default: "" },
        description: { type: String, default: "" },
        image: { type: String, default: "" },
        certificate: { type: String, default: "" },
        graduate: { type: String, default: "" },
        experience: { type: Number, default: 0 },
        account_id: { type: mongoose.Schema.Types.ObjectId, ref: "Account" },
    },
    {
        collection: 'instructors',
        timestamps: true
    }
);

const instructorModel = mongoose.model('Instructor', instructorSchema);

export default instructorModel;