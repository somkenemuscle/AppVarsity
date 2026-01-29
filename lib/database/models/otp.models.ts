import { Schema, model, models } from 'mongoose';

const OtpSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    otp: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        enum: ['register', 'login', 'reset_password'],
        required: true,
    },
    expiresAt: {
        type: Date,
        required: true,
    },
    used: {
        type: Boolean,
        default: false,
    },
}, { timestamps: true });

const Otp = models?.Otp || model('Otp', OtpSchema);
export default Otp;
