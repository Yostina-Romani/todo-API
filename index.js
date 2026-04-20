const express=require('express');
const app=express();
app.use(express.json());
let tasks=[];
app.get('/',(req,res)=>{
res.send("API is working");
});
app.post('/tasks',(req,res)=>{
    if(!req.body||!req.body.title){
        return res.status(400).json({
            message:'invalid task'
        });
    }
    const task={
        id:Date.now(),
        title:req.body.title,
        done :req.body.done ||false
    };
    tasks.push(task);
res.json({
    message:'task was added',
    task:task
});
});
app.get('/tasks',(req,res)=>{
    res.json(tasks);
});
app.delete('/tasks/:id',(req,res)=>{
    const id=Number(req.params.id);
    if(!tasks.find(task=>task.id===id)){
        return res.status(404).json({
            message:"task not found"
        });
    }
    
    tasks=tasks.filter(task=>task.id!==id);
    res.json({
        message:"task was deleted",
        tasks
    });
});
app.put('/tasks/:id',(req,res)=>{
const id=Number(req.params.id);
const task=tasks.find( t => t.id===id);
if(!task){
  return  res.status(404).json({
        message:" task not found "
    });
}
if(req.body.title!==undefined){
    task.title=req.body.title;
}
if(req.body.done!==undefined){
    task.done=req.body.done;
}
res.json({
    message:"task updated",
    task
});
});
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});