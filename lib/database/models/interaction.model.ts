import { Schema, model, models } from "mongoose";

// Example Interact Schema
const InteractionSchema = new Schema({
    interaction: {
        type: String,
        required: true,
    },
    author: {
        type: Schema.Types.ObjectId, // ObjectId to reference the User model
        ref: "User", // Reference the User model
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

const Interaction = models?.Interaction || model("Interaction", InteractionSchema);

export default Interaction;
