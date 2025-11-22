import Todo from "../model/todo.model.js";

export const getAllTodo = async (req, res) => {
    try {
        const user = req.user._id
        const todos = await Todo.find({ user })
        res.status(200).json(todos)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


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

export const isTodoDone = async (req, res) => {
    const { id } = req.params

    if (!id) {
        return res.status(400).json({ message: "Todo not found" })
    }

    const todo = await Todo.findById(id);

    if (!todo) {
        return res.status(404).json({ message: "Todo not found" });
    }

    const doneTodo = await Todo.findByIdAndUpdate(id, { isDone: !todo.isDone }, { new: true })

    res.status(200).json({ message: "Todo is done", doneTodo })

}


export const deleteTodo = async (req, res) => {
    const { id } = req.params;
    if (!id) {
        return res.status(400).json({ message: "Couldn't get todo" })
    }

    const deletedTodo = await Todo.findByIdAndUpdate(id)

    if (!deletedTodo) {
        return res.status(400).json({ message: "Todo" })
    }

    res.status(200).json({ message: "Todo deleted", deletedTodo })
}