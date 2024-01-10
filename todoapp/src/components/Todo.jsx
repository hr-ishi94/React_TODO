import React from 'react'
import AddTask from './AddTask'
import { useState,useEffect  } from 'react'
import { Button ,Row} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import ListGroup from 'react-bootstrap/ListGroup';


function Todo() {
    const [tasks,setTasks] =useState([])

    const addTask=(title)=>{
        const newTask=[...tasks,{text:title,status:false,id:Date.now()}]
        setTasks(newTask)
        localStorage.setItem('tasks', JSON.stringify(newTask));
        
    }


    const removeTask = (id) => {
        const newTasks = tasks.filter((task)=>{
            return task.id!==id
        })
        setTasks(newTasks)
    }



    
    useEffect(()=>{
        const res=tasks.filter((task)=>{
            if (!task.status){
                return task
            }
        })
        document.title=(`You have ${res.length} pending task(s).`)
    })





   

    useEffect(() => {
        const storedTodos = localStorage.getItem('tasks');
        console.log(storedTodos)
        if (storedTodos) {
          setTasks(JSON.parse(storedTodos));
        }
      }, []);




  return (
    <div className='bg-secondary p-5' style={{width:'100%',height:'100%'}}>

        <div className='bg-dark rounded-5 p-5'>
            <div><h1 className='text-white p-3'>Good Morning.<br/><span className='text-secondary '>What's your plan for today?</span></h1>
            
            </div>
            <div><AddTask addTask={addTask}/></div>
            <Row>
            <div>
            <h4 className='text-white'>Pending Tasks:</h4>
                {tasks.map((task,index)=>(
                    // <ListTasks tasks={tasks} removeTask={removeTask}  key={index}/>
                                
                    <div  style={{ display: 'flex', alignItems: 'center',marginRight:'2.5em'}}>
                    
                    <Form.Check
                        className='text-white'
                        type="checkbox"
                        value={task.status}
                        label={task.text}
                        style={{ fontSize: '20px' }}
                        onChange={(e)=>{
                            setTasks(tasks.filter(obj=>{
                                if (obj.id===task.id){
                                    obj.status=e.target.checked
                                }
                                return obj
                            }))
                        }}
                    />
                    
                    <Button onClick={()=>{removeTask(task.id)}} variant="secondary btn-lg m-3"><i class="fa-solid fa-trash"></i></Button>

                </div>

                ))}
            </div>
            </Row>
            <br/>
            <br/>
            <br/>

            <Row>
            <div>
                <h4 className='text-white'>Completed Tasks:</h4>
                {tasks.map((task)=>{
                    if (task.status){
                    return (
                    <ListGroup style={{width:'40em'}}>
                        <ListGroup.Item>{task.text}</ListGroup.Item>
                        <br/>
                        
                    </ListGroup>
                    )

                    }
                })}

            </div>
            </Row>
            
        </div>
    </div>
  )
}

export default Todo