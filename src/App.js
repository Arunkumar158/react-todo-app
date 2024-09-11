
import './App.css';
import { useState } from 'react';
import login from './login';  // Import your Login component


function App() {
  const [toDos,setToDos]= useState([])
  const [toDo,setToDo] = useState('')
  const [dueDate, setDuedate] = useState('');
  const [dueTime, setDueTime] = useState('');
  const [priority, setPriority] = useState('Low'); //Default priority is 'Low'
  const [category, setCategory] = useState('Work'); //Default categroy is "Work"   

  return (
    
    
    <div className="app">
    <div className="mainHeading">
      
      
   
      
    
    <svg   xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-calendar-check" viewBox="0 0 16 16">
  <path d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0"/>
  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5M1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z"/>
</svg>

    </div>


    <div className="subHeading">
      <br />
      <h2>Whoop, it's Wednesday.. </h2>
    </div>
    
    
    <div className="input">
      <input 
      value={toDo} 
      onChange={(e)=>setToDo(e.target.value)} 
      type="text" 
      placeholder="🖊️ Add item..." />

      <input
      value={dueDate}
      onChange={(e)=> setDuedate(e.target.value)} 
      type="date"
      />
      <input
      value={dueTime}
      onChange={(e)=> setDueTime(e.target.value)}
      type="Time"
      />
      {/* Priority selection */}
      <select
      value={priority}
      onChange={(e) =>setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      
      <select  
      value={category}
      onChange={(e) => setCategory(e.target.value)}
      >
        <option value="Work"> work</option>
        <option value="Personal">Personal</option>
        <option value="Shopping">Shopping</option>
        <option value="Other">Other</option>
      </select>

      <i 
      onClick={() => setToDos([...toDos, { id: Date.now(), text: toDo, dueDate, dueTime, priority, category, status: false }])} className="fas fa-plus"></i>
     
    </div>


    <div className="todos">
    { toDos.map((obj)=>{

    return ( <div className="todo">
      
       <div className="left" key={obj.id}>
         <input 
         onChange={(e)=>{
          console.log(e.target.value)
          console.log(obj)
          setToDo(toDos.filter(obj2=>{
            if(obj2.id===obj.id){
              obj2.status=e.target.value
            }
          } ))
         }} value={obj.status} 
         type="checkbox" 
         name="" 
         id="" />
         <p>{obj.text}</p>
       </div>
       <div className="right">
        
        {/* Display the priority */}
       <p>Priority: {obj.priority}</p>
         <i 
          onClick={() => setToDos(toDos.filter(task => task.id !== obj.id))} 
         className="fas fa-times">
         </i>
       </div>
     </div> )
    }) }
    {toDos.map((obj)=>{
      if(obj.status){
        return(<h1>{obj.text}</h1>)
      }
      return null
    })}
    

    </div>
  </div>
);
}

export default App;
