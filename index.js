// app create
const express = require("express")
const app = express();



// PORT find karna he
require("dotenv").config();
const PORT = process.env.PORT || 3000;

// middleware add karne he
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload());

// db se connect karna he
const db =require("./config/database");
db.connect;

// Cloudinary se connect karna he
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();


// api route mount karna he
const Upload = require("./routes/FileUpload");
app.use('api/v1/upload',Upload);


// activate server
app.listen(PORT,() => {
    console.log(`App is running at ${PORT}`);
})
