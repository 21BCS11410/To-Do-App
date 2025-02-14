const todo = require('../models/todo');

exports.updateTodoById = async(req, res) => {
    try{
        const id = req.params.id;
        const {title, description} = req.body;

        const updateTodo = await todo.findByIdAndUpdate(
            {_id: id},
            {title, description, updatedAt: Date.now()}
        )

        if(!updateTodo){
            return res.status(404).json({
                success: false,
                message: "No data entry found with this id"
            })
        }

        res.status(200).json({
            success: true,
            message: "Data Updated Successfully",
            data: updateTodo,
        })
    }
    catch(error){
        console.log(error);
        console.error(error);
        res.status(500).json({
            success: false,
            message: "internal server error",
            data: error,
        })
    }
}