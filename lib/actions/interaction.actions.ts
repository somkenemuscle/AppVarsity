"use server";
import Interaction from "../database/models/interaction.model"; // Importing the Interact model
import { connectToDatabase } from "../database/mongoose"; // Importing the function to connect to MongoDB
import User from "../database/models/user.model";
import { redirect } from "next/navigation";
import mongoose from "mongoose";


//READ ALL: Function to get all interactions
export async function getAllInteractions() {
    try {
        await connectToDatabase(); // Connect to MongoDB

        // Ensure the User model is registered
        mongoose.model("User", User.schema);

        const interactions = await Interaction.find().sort({ updatedAt: -1 }).populate('author') // Find all interacts, populate author field, and sort by updatedAt in descending order

        if (!interactions) throw new Error("No interactions found"); // If no interacts are found, throw an error

        return JSON.parse(JSON.stringify(interactions)); // Return the interacts as a plain object
    } catch (error) {
        console.error('An error occured while getting all interactions', error); // Handle any errors
    }
}

// CREATE: Function to create a new interaction
export async function createInteraction({ interaction, userId }: createInteractionParams) {
    try {
        await connectToDatabase(); // Connect to MongoDB

        const author = await User.findOne({ clerkId: userId });

        if (!author) {
            throw new Error('user not found');
        }

        const newInteraction = await Interaction.create({
            ...interaction,
            author: author._id
        }); // Create a new interact in the database


        return JSON.parse(JSON.stringify(newInteraction)); // Return the newly created interact as a plain object
    } catch (error) {
        console.error('An error occurred while trying to create a new interaction :', error); // Handle any errors
    }
}

// READ: Function to get an interaction by its ID
export async function getInteractionById(interactId: string) {
    try {
        await connectToDatabase(); // Connect to MongoDB

        const FoundInteraction = await Interaction.findById(interactId).populate('author'); // Find the interact by its ID

        if (!FoundInteraction) throw new Error("Interaction not found"); // If interact is not found, throw an error

        return JSON.parse(JSON.stringify(FoundInteraction)); // Return the interact as a plain object
    } catch (error) {
        console.error('An error occured while getting an interaction by its id', error); // Handle any errors
    }
}

// // UPDATE: Function to update an interact's information
// export async function updateInteract({ interaction, userId }) {
//     try {
//         await connectToDatabase(); // Connect to MongoDB

//         const interactToUpdate = await Interact.findById(interact._id);

//         if (!interactToUpdate || interactToUpdate.author.toHexString() !== userId) {
//             throw new Error("Unauthorized or interact not found");
//         }

//         const updatedInteract = await Interact.findByIdAndUpdate(
//             interactToUpdate._id,
//             interact,
//             { new: true }
//         )


//         return JSON.parse(JSON.stringify(updatedInteract));
//     } catch (error) {
//         handleError(error); // Handle any errors
//     }
// }

// // DELETE: Function to delete an interact
// export async function deleteInteract(interactId) {
//     try {
//         await connectToDatabase(); // Connect to MongoDB

//         // Find the interact to delete
//         const interactToDelete = await Interact.findById(interactId);

//         if (!interactToDelete) {
//             throw new Error("Interact not found"); // If interact is not found, throw an error
//         }

//         // Delete the interact
//         await Interact.findByIdAndDelete(interactToDelete._id);

//     } catch (error) {
//         handleError(error); // Handle any errors
//     } finally {
//         redirect('/profile');
//     }
// }



// // READ ALL USER INTERACTS: Function to get all interacts for a specific user
// export async function getUserInteracts(userId) {
//     try {
//         await connectToDatabase(); // Connect to MongoDB

//         const interacts = await Interact.find({ author: userId }).sort({ updatedAt: -1 }).populate('author'); // Find all interacts by the user and populate author field

//         if (!interacts) throw new Error("No interacts found for this user"); // If no interacts are found, throw an error

//         return JSON.parse(JSON.stringify(interacts)); // Return the interacts as a plain object
//     } catch (error) {
//         handleError(error); // Handle any errors
//     }
// }

// // READ ALL USER INTERACTS: Function to get all interacts for a specific user by username
// export async function getUserInteractsByUsername(username) {
//     try {
//         await connectToDatabase(); // Connect to MongoDB

//         // Find the user by username
//         const user = await User.findOne({ username });

//         if (!user) {
//             throw new Error("User not found"); // If the user is not found, throw an error
//         }

//         // Find all interacts by the user's ID
//         const interacts = await Interact.find({ author: user._id }).sort({ updatedAt: -1 }).populate('author');

//         if (!interacts || interacts.length === 0) {
//             throw new Error("No interacts found for this user"); // If no interacts are found, throw an error
//         }

//         return JSON.parse(JSON.stringify(interacts)); // Return the interacts as a plain object
//     } catch (error) {
//         handleError(error); // Handle any errors
//     }
// }
