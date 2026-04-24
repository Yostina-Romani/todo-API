const express=require('express');
const app=express();
const mysql=require('mysql2');
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'todo_api'
});
db.connect((err)=>{
if(err){
    console.log('connection failed',err);
}
else{
    console.log('connected to mysql');
}
});
app.use(express.json());

app.get('/',(req,res)=>{
res.send("API is working");
});
app.post('/tasks',(req,res)=>{
    const {title, status}=req.body;
    const sql='insert into tasks (title,status_task) values(?,?)';
    db.query(sql,[title,status],(err,result)=>{
        if(err){
            return res.status(500).json({
                error:err.message
                
            });
        }
        res.status(201).json({
            message:'task added',
            id: result.insertId,
             result
        });
    });
 
});
app.get('/tasks',(req,res)=>{
    const sql='select * from tasks';
    db.query(sql,(err,result)=>{
        if(err){
            return res.status(500).json({
                error:err.message
            });
        }
        res.json({
            result
        });
    });
});
app.delete('/tasks/:id',(req,res)=>{
    const id=Number(req.params.id);
    const sql ='delete from tasks where id=?';
    db.query(sql,[id],(err,result)=>{
     if(err){
        return res.status(500).json({
            error:err.message
        });
     }
     res.json({
        message:'task deleted',
        result
     });
    });
    
    
});
app.put('/tasks/:id',(req,res)=>{
const id=Number(req.params.id);
const {title,status}=req.body;
const sql='update tasks set title=? , status_task = ? where id=?';
db.query(sql,[title,status,id],(err,result)=>{
    if(err){
        return res.status(500).json({
            error :err.message
        });
    }
    res.json({
      message:'task updated',
      result
    });
});
});
app.listen(3000,()=>{
    console.log('server is running on port 3000');
});