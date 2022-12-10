const fs = require('fs')
const controller=(err, data) => {
    if (err) {
        return response.status(500).send('Sorry, something went wrong.')
    }
    
    let todos = JSON.parse(data)
    const todoIndex = findTodoById(todos, id)

    if (todoIndex === -1) {
        return response.status(404).send('Sorry, not found.')
    }
    
    todos[todoIndex].complete = true

    fs.writeFile('./store/todos.json', JSON.stringify(todos), () => {
        return response.json({'status': 'ok'})
    })
}

module.exports=controller
