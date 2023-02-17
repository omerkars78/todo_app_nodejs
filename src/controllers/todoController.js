const todo = require("../models/todoModel");

const todoAdd = async (req, res) => {
    try {
        const todoAdd = new todo(req.body);

        await todoAdd.save()
        .then( ()=>{
            return res.status(201).json({todoAdd})
        })
        .catch((error)=>{
           return  res.status(400).json({success: false, message: "Kayıt Oluşturulurken Hata Oluştu:  "+error.message, error: error.message})
        })
    } catch (error) {
        return res.status(500).json({success: false, message: "Kayıt Oluşturulurken Hata Oluştu:  "+error.message, error: error.message})
    }
    console.log("Todo Added");
};

module.exports = {
    todoAdd
};