
// require("dotenv").config();


// // Libraries

// import express from "express";

// import cors from "cors";
// import helmet from "helmet";
// import passport from "passport";

// //Config
// import googleAuthConfig from "./config/google.config";

// import routeConfig from "./config/route.config";





// // microservice routes


// import Auth from "./API/Auth";
// import Restaurant from "./API/Restaurant";

// import Food from "./API/Food";

// import Image from "./API/Image";

// import Order from "./API/order";

// import Reviews from "./API/reviews";

// import User from "./API/user";

// // import Menu from "./API/Menu";


// //  import Restaurant from "./API/Restaurant";
// // import Food from "./API/Food";


// import ConnectDB from "./database/connection";
// import { ImageModel } from "./database/image";



// const zomato =  express();


// zomato.use(express.json());
// zomato.use(express.urlencoded({extended:false}));

// zomato.use(helmet());
// zomato.use(cors());
// zomato.use(passport.initialize());
// zomato.use(passport.session());




// googleAuthConfig(passport);
// routeConfig(passport);




// //Application Route

// zomato.use("/auth", Auth);


// //use restaurent api
// zomato.use("/restaurant", Restaurant);
// //use Food api.
// zomato.use("/food", Food);

// //use Menu api.

// // zomato.use("/food", Menu);


// zomato.use("/image", Image);

// zomato.use("/order", Order);
// zomato.use("/reviews", Reviews);
// zomato.use("/user", User);



// // zomato.use("/restaurant", Restaurant);
// // zomato.use("/food", Food);

// zomato.get("/",(req,res)=>res.json({message:"Setup success "}));

// zomato.listen(4000,()=>
//    ConnectDB()
//    .then(()=> console.log("server is running 🚀 "))
//    .catch(()=> 
//    console.log("Server is running , but database connection failed...")
//    )
   
// );




// Importing Env Variables
require("dotenv").config();

// Libraries
import express from "express";
import cors from "cors";
import helmet from "helmet";
import passport from "passport";

// configs
import googleAuthConfig from "./config/google.config";
import routeConfig from "./config/route.config";

// microservice routes
import Auth from "./API/Auth";
import Restaurant from "./API/Restaurant";
import Food from "./API/Food";
import Image from "./API/Image";
import Order from "./API/order";
import Reviews from "./API/reviews";
import User from "./API/User";
import Menu from "./API/menu";
import MailService from "./API/Mail";
import Payments from "./API/Payments";

// Database connection
import ConnectDB from "./database/connection";

const zomato = express();

// console.log(process.env);

// application middlewares
zomato.use(express.json());
zomato.use(express.urlencoded({ extended: false }));
zomato.use(helmet());
zomato.use(cors());
zomato.use(passport.initialize());
zomato.use(passport.session());

// passport cofiguration
googleAuthConfig(passport);
routeConfig(passport);

// Application Routes
zomato.use("/auth", Auth);
zomato.use("/restaurant", Restaurant);
zomato.use("/food", Food);
zomato.use("/image", Image);
zomato.use("/order", Order);
zomato.use("/reviews", Reviews);
zomato.use("/user", User);
zomato.use("/menu", Menu);
zomato.use("/mail", MailService);
zomato.use("/payments", Payments);

zomato.get("/", (req, res) => res.json({ message: "Setup success" }));

const port = process.env.PORT || 4001;

zomato.listen(port, () =>
  ConnectDB()
    .then(() => console.log("Server is running 🚀"))
    .catch(() =>
      console.log("Server is running, but database connection failed... ")
    )
);
