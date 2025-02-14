const todo = require('../models/todo');

exports.deleteTodoById = async(req, res) => {
    try{
        const id = req.params.id;

        const deleteTodo = await todo.findByIdAndDelete({_id: id});

        if(!deleteTodo){
            return res.status(404).json({
                success: false,
                message: `No Data fount with this ${id}`
            })
        }

        res.status(200).json({
            success: true,
            message: "Entry Deleted Successfully",
            Data: deleteTodo
        })
    }
    catch(error){
        console.error(error);
        console.log(error);
        res.status(500).json({
            success: false,
            data: error,
            message: "Internal server error"
        })
    }
}