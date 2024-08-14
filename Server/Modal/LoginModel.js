
// const bcrypt = require("bcryptjs")
// const loginSchema = new mongoose.Schema({
   
//     s_userName:{
//         type:String,
//         required:true
//     },
//     s_password:{
//         type:String,
//         required:true
//     },
    

// })
// ////Hash Password before Saving
// loginSchema.pre("save",async function (next) {
//     if(this.isModified("s_password")){
//         const salt = await bcrypt.genSalt(10)
//         this.s_password = await bcrypt.hash(this.s_password,salt)
//     }
//     next()
    
// })

// //compare password for loging
// loginSchema.methods.comparePassword = function(candidatePassword){
//     return bcrypt.compare(candidatePassword,this.s_password)
// };

// const LoginModel = mongoose.model("Login",loginSchema)
// module.exports = LoginModel

const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    s_userName: {
        type: String,
        required: true,
        unique: true
    },
    s_password: {
        type: String,
        required: true
    }
});

const LoginModel = mongoose.model('Login', loginSchema);

module.exports = LoginModel;
