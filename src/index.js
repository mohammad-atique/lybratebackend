const express = require("express");
const goodKartsController = require("./controllers/goodKart.controllers.js")

const cors = require('cors')
const app = express();
app.use(cors())
app.use(express.json());


app.use("/goodKarts", goodKartsController);
//--minakshi
const productController = require("./controllers/product.controllers");
app.use("/vitaminandsupplementproducts", productController); 

//Soumya

const userController=require("./controllers/user-controller")
app.use("/users",userController)
const {register,login,newtoken}=require("./controllers/auth-controller")

const passport = require("./configs/google-oauth")

app.post("/register",register)
app.post("/login",login)

app.get('/auth/google',
  passport.authenticate('google', { scope:
  	[ 'email', 'profile' ] }
));
 
app.get( '/auth/google/callback',
    passport.authenticate( 'google', {
         
        failureRedirect: '/auth/google/failure', session:false
}),
    function (req, res){
        const token = newtoken(req.user)
        return res.status(200).send({user:req.user, token})
    }

);



module.exports = app;
