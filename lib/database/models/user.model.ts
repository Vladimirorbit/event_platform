import { Schema, model, models } from "mongoose";

const UserShema = new Schema({
    clerkId: { type: String, required: true, unique: true},
    email: { type: String, require: true, unique:true},
    username: { type: String, required: true},
    firstName: { type: String, require: true},
    lastName: { type: String, require: true },
    photo: { type: String, required: true}
})

const User = models.User || model('User', UserShema);

export default User;