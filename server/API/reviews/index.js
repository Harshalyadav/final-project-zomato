import express from "express";
import passport from "passport";

import { ReviewModel } from "../../database/allModels";

const Router =express.Router();

Router.get("/:resid", async (req, res) => {
    try {
      const reviews = await ReviewModel.find({ restaurant: req.params.resid });
      return res.json({ reviews });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  

  Router.post("/new", passport.authenticate("jwt"), async (req, res) => {
    try {
      const { _id } = req.session.passport.user._doc;
      const { reviewData } = req.body;
  
      await ReviewModel.create({ ...reviewData, user: _id });
  
      return res.json({ review: "Sucessfully Created Review." });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  });
  

Router.delete("/delete/:_id", async(req, res)=>{

    try{
        const {_id} =req.params;

        await ReviewModel.findByIdAndDelete(_id);
        return res.json({review :"Successfully Deleted the Review."});
    }
    catch(error){
        return res.status(500).json({error :error.message});
    }
});

export default Router;
