// import mongoose ,{mongo} from "mongoose";


// const FoodSchema = new mongoose.Schema({

//    name: {
//        type : String,
//        required: true
//     },

//    descript: {
//        type : String,
//        required: true
//     },
//    isVeg :{
//        type: Boolean ,
//        required: true
//     },
//    isContainsEgg: {
//        type: Boolean ,
//        required: true
//     },
//    category: {
//        type: String,required: true
//     },
//        photos :{
//            type: mongoose.Types.ObjectId,
//        ref :"Images",


// },
//         price:{type:Number, default: 150,required: true},
//         addons: [
//             {
//                 type: mongoose.Types.ObjectId,
//                 ref :"Foods",
//         },
//     ],    
        
//      restaurant:{
//          type: mongoose.Types.ObjectId,
//          ref :"Restaurants",
//          required: true,
//         },
//      reviews:{
//          type: mongoose.Types.ObjectId,
//          ref :"Reviews",
       
//         },

// },{
//     timestamps:true,
// });


// export const FoodModel =mongoose.model("Foods",FoodSchema);

// Libraries
import mongoose from "mongoose";

const FoodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  isVeg: {
    type: Boolean,
    default: false,
  },
  isContainsEgg: {
    type: Boolean,
    default: false,
  },
  isNonVeg: {
    type: Boolean,
    default: false,
  },
  category: { type: String, required: true },
  restaurant: {
    type: mongoose.Types.ObjectId,
    ref: "Restaurant",
    required: true,
  },
  photos: {
    type: mongoose.Types.ObjectId,
    ref: "Images",
  },

  price: {
       type: Number,
        default: 150, 
        required: true
     },
  addOns: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Foods",
    },
  ],
});

export const FoodModel = mongoose.model("Foods", FoodSchema);
