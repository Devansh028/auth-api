import mongoose from "mongoose";
const userSchema = new mongoose.Schema( {
    name: String,
    email: { type: String, unique: true },
    password: String,
    refreshToken: String,
    role:{
        type:String,
        enum:["user","admin"],
        default: "user"
    },
    profilePic: String,
    isBlocked: { 
        type: Boolean,
        default: false
    },
    lastLogin: {
        type: Date
    },
    referralCode: String,
    referredBy: String,
    credits: {
        type: Number,
        default: 0
    },
    referrals: [
        {
            userId: String,
            date: Date
        }
    ]
},
{timestamps: true} 
);

export default mongoose.model("User", userSchema);