const task = {
  name: "shoobert",
  time: 10,
  isCompleted: false,
markCompleted : function(){
   task.isCompleted = true
  },
  editProp : function(prop , value){
    task[prop] = value
}
}

task.markCompleted()
task.editProp('name','doobi')
task.editProp('time', 20)

console.log(task)