//import the model
const todo = require("../models/todo");

//create route handler

exports.getTodo = async(req, res) => {
    try{
        //fetch all todo items from database because the request is og get type
        const response = await todo.find({});

        //response
        res.status(200).json({
            success: true,
            data: response,
            message:"Entire data is fetched"
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "Internal server error"
        })
    }
}

exports.getTodoById = async(req, res) => {
    try{
        //fetch id from request parameters
        const id = req.params.id;
        const getTodo = await todo.findById({_id: id});

        if(!getTodo){
            return res.status(404).json({
                success: false,
                message: "No entry with this id is found"
            })
        }
        //return success message
        res.status(200).json({
            success: true,
            data: getTodo,
            message: "Entry fetched successfully"
        })
    }
    catch(error){
        console.error(error);
        res.status(500).json({
            success: false,
            error: error.message,
            message: "internal server error"
        })
    }
}
