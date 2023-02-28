import Task from "../models/Task.js"



export const renderTasks = async (req, res) => {

    const tasks = await Task.find().lean()  // con lean se puede traer un objeto de javascript)

    res.render('index', { tasks: tasks })
}



export const createTask = async (req, res) => {
    try {

        const task = Task(req.body)

        await task.save()

        res.redirect('/') //redireccionar a la pagina inicial una vez apretado el boton  

    } catch (error) {
        console.log(error)  //poner un AlertSwit ya existe el mismo titulo
    }
}


export const renderTaskEdit = async (req, res) => {

    try {

        const task = await Task.findById(req.params.id).lean()

        res.render('edit', { task })

    } catch (error) {
        console.log(error.message)
    }

}


export const editTask = async (req, res) => {

    const { id } = req.params
    await Task.findByIdAndUpdate(id, req.body)

    res.redirect('/')
}


export const deleteTask = async (req, res) => {
    const { id } = req.params

    await Task.findByIdAndDelete(id)

    res.redirect('/')
}

export const taskToggleDone = async (req, res) => {
    const { id } = req.params

    const task = await Task.findById(id)

    task.done = !task.done

    await task.save()

    res.redirect('/')
}