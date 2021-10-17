import express from "express";
import passport from "passport";

import {OrderModel} from "../../database/allModels";

import { ValidateOrderId, ValidateNewOrderUser } from "../../validation/order";


const Router =express.Router();

Router.get("/:_id",passport.authenticate("jwt",{session:false}),async(req,res)=>{
      try{
        await ValidateOrderId(req.params);
          const {_id}=req.params;
          const getOrders =await OrderModel.findOne({user :_id});
           
        if(!getOrders){
            return res.status(404).json({error :"User not found"});
        }
        return res.status(200).json({orders:getOrders});
      }

      catch(error){
         return res.status(500).json({error :error.message});
      }
});


Router.post("/new",passport.authenticate("jwt"),async(req,res)=>{
    try{
          const {_id} = req.session.passport.user._doc;
          const {orderDetails} =req.body;
          
          const addNewOrder =await OrderModel.findOneAndUpdate(
              {
                  user :_id,
              },
              {
                  $push :{orderDetails},
              },
              {
                  new : true
              }
          );
          return res.json({order :addNewOrder });

    }
    catch(error){
          return res.status(500).json({error : error.message});
    }
});

export default Router;

