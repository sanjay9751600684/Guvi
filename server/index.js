const  express = require('express');
const mongoose = require('mongoose');
const cors =  require('cors');
const userModel  = require('./models/users')


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://sanjay2407:Sanjay2001@cluster0.fuwwnm8.mongodb.net/UserDetails");
app.post("/signin", (req, res) => {
const { email,password} = req.body;
userModel.findOne({email: email})
.then((user) => {if(user){
    if(user.password === password){
        res.json("Success")
    } else {
        res.json("the password is incorrect")
    } 
} else {
    res.json("The user does not exist")
}
})


})


app.post('/Login', (req,res) => {

    userModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))

})







app.listen(3001, () => {
    console.log("server is running")
})


