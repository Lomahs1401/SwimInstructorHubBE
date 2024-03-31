import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, maxlength: 255, required: true },
        avatar: { type: String, default: "" },
        gender: { type: String, default: "" },
        address: { type: String, default: "" },
        phone: { type: String, default: "" },
        type: { type: Number, default: 0 },
    },
    {
        collection: 'accounts',
        timestamps: true
    }
);

const accountModel = mongoose.model('Account', accountSchema);

export default accountModel;