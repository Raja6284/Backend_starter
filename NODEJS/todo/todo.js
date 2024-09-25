const fs = require("fs")
filePath = "./task.json"


const loadTasks = () =>{
    try{
        const dataBuffer = fs.readFileSync(filePath)
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(error){
        return []
    }
}

const listTasks = () =>{
    const tasks = loadTasks()
    tasks.forEach((task,index)=>{
        console.log(`${index+1}-> ${task.task}`)
    })
}

const saveTasks = (tasks)=>{
    const dataJSON = JSON.stringify(tasks)
    fs.writeFileSync(filePath,dataJSON)
}

const addTask = (task) =>{
    const tasks = loadTasks()
    tasks.push({task})
    saveTasks(tasks)
    console.log(`task ${task} added`)
}


//console.log(process.argv)
const command = process.argv[2]
const argument = process.argv[3]

if(command === "add"){
    addTask(argument)
}else if(command == "list"){
    listTasks()
}else if(command == "remove"){
    removeTask()
}else{
    console.log("command not found")
}