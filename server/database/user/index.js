import mongoose from "mongoose";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const UserSchema = new mongoose.Schema({
 
    fullname:{type : String ,required: true},
    email:{type : String ,required: true},
    password:{type : String },
    address:[{detail:{type : String},for :{type : String}}],
    phoneNumber:[{type: Number}],

},{
    timestamps:true,
});

//only once instanctate
//copy checkUserByEmail , checkUserByPhone  and past inside UserSchema..
//findByEmailAndPhone=>static method.
UserSchema.statics.findByEmailAndPhone = async({email,phoneNumber})=>{

    const checkUserByEmail = await UserModel.findOne({email});
    const checkUserByPhone = await UserModel.findOne({phoneNumber});

    if(checkUserByEmail|| checkUserByPhone){
        throw new Error("User already exist..");
        
    }
    
    return false;

};

UserSchema.statics.findByEmailAndPassword =async({email,password})=>{
         const user= await UserModel.findOne({email});
         if(!user) throw new Error("User does not exist!!");

         const doesPasswordMatch=await bcrypt.compare(
             password,
             user.password
         );
            if(!doesPasswordMatch) throw new Error("Invalid Password!!");

            return user;
};
//generate token using methods().

UserSchema.methods.generateJwtToken=function(){
    return jwt.sign({user : this._id.toString()} ,"ZomatoAPP");
};

//save or create new addition of data using pre().
//pass to control the next function=next().
UserSchema.pre("save", function(next){

    const user=this;

//check pass is modified or not.
    if (!user.isModified("password")) return next();

    
//generate bcrypt salt.
    bcrypt.genSalt(8,(error,salt)=>{
        if(error) return next(error);
        bcrypt.hash(user.password,salt,(error,hash)=>{
            if(error) return next(error);
            user.password=hash;
            return next();
        });
    });
});   



export const UserModel =  mongoose.model("Users",UserSchema);
