import mongoose, { Schema } from "mongoose";

const projectSchema =  new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
    },
    createdBy: {    // who is the user creating it.
        type: Schema.Types.ObjectId,
        ref: "User", // User is being reffered to user.models.js ka User(last line)
        required: true
    }
}, { timestamps: true})

export const Project = mongoose.model("Project", projectSchema);

// Schema  →  Blueprint of a document
// Model   →  Class that lets you CREATE, READ, UPDATE, DELETE documents