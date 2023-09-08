const File = require("../models/File");



// localfileupload -> handler function


exports.localFileUpload = async(req,res) => {
    try{
        
        // fetch file
        const file = req.files.file;
        console.log("FILE AAGYI JI ->",file);


    }
    catch(error){

    }
}