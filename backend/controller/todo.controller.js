import Todo from "../model/todo.model.js";

// export const getAllTodo = (req, res)=> {
//     const userId = req.user._id
//     const todos = Todo.findById
// }


export const createTodo = (req, res) => {
    try {
        const { todo } = req.body;
        const userId = req.user._id
        if (!todo || !userId) {
            return res.status(400).json({ message: "Invalid" })
        }

        const newTodo = Todo.create({ todo, user: userId });

        if (!newTodo) {
            res.status(400).json({ message: "Something wents wrong!" })
        }

        res.status(200).json({ message: "New Todo added", newTodo })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }

}


export const editTodo = (req, res)=> {
    const { id } = req.params;
    const { newTodo } = req.body;
    if(!id || !todo){
        return res.status(400).json({message: "Couldn't get todo"})
    }

    const ediTodo = Todo.findByIdAndUpdate(id, {newTodo}, )
}