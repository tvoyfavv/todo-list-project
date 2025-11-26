const LATENCY_MS = 200 

let todosDB = [
    { id: 1, text: "Изучить React Hooks", completed: true },
    { id: 2, text: "Сделать рефакторинг кода", completed: true },
    { id: 3, text: "Использовать JS-файл как БД", completed: true },
    { id: 4, text: "Написать тесты", completed: false }
]

const sleep = (ms = LATENCY_MS) => new Promise(r => setTimeout(r, ms))


const getDB = () => JSON.parse(JSON.stringify(todosDB))

const setDB = (newTodos) => { todosDB = newTodos }



export async function getTodos(filter = 'all') {
    await sleep()
    const todos = getDB()

    switch (filter) {
        case 'active': return todos.filter(t => !t.completed)
        case 'completed': return todos.filter(t => t.completed)
        default: return todos
    }
}

export async function addTodo(text) {
    await sleep()
    const trimmed = String(text || '').trim()
    if (!trimmed) throw new Error('Text is required')

    const todos = getDB()
    const nextId = todos.length ? Math.max(...todos.map(t => t.id)) + 1 : 1
    const newTodo = { id: nextId, text: trimmed, completed: false }

    setDB([...todos, newTodo])
    return newTodo
}

export async function toggleTodo(id) {
    await sleep()
    const targetId = Number(id)
    const todos = getDB()
    

    const updated = todos.map(todo => 
        todo.id === targetId ? { ...todo, completed: !todo.completed } : todo
    )
    
    setDB(updated)
    const updatedTodo = updated.find(t => t.id === targetId)
    if (!updatedTodo) throw new Error('Todo not found')
    
    return updatedTodo
}

export async function deleteTodo(id) {
    await sleep()
    const targetId = Number(id)
    const todos = getDB()
    
    const initialLength = todos.length

    const newTodos = todos.filter(t => t.id !== targetId)
    
    setDB(newTodos)
    
    if (initialLength === newTodos.length) return { ok: false, deleted: 0 }
    return { ok: true, deleted: 1 }
}