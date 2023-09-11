import './App.css';
import Header from './components/Header';
import AddForm from './components/AddForm';
import Item from './components/Item';

//State
import { useState, useEffect } from "react";
function App() {
  const [tasks,setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);
  const [title,setTitle] = useState("");
  const [editId,setEditId] = useState(null);
  const [theme,setTheme] = useState("light");

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])

  function deleteTask(id){
    const result = tasks.filter(item=>item.id !== id)
    setTasks(result);
  }

  function editTask(id){
    setEditId(id)
    const editTask = tasks.find((item)=>item.id === id)
    setTitle(editTask.title);
  }

  function saveTask(e){
    e.preventDefault();
    if(!title){
      alert("กรุณาป้อนข้อมูล")
    }
    else if(editId){
      //อัพเดตข้อมูล
      console.log("อัพเดตข้อมูล")
      const updateTask = tasks.map((item)=>{
        //หาว่ารายการใดมีรหัสตรงกับรหัสแก้ไข
        if(item.id === editId){
          return {...item,title:title}
        }
        return item;
      })
      setTasks(updateTask)
      setEditId(null)
    }
    else{
      //เพิ่มรายการใหม่
      const newTask={
        id: Math.floor(Math.random()*1000),
        title:title
      }
      setTasks([...tasks,newTask])
      setTitle("")
    }
  }
  return (
    <div className={"App " + theme}>
      <Header theme={theme} setTheme={setTheme}/>
      <div className='container'>
        <AddForm title={title} setTitle={setTitle} saveTask={saveTask} editId={editId}/>
        <section>
          {
            tasks.map((data)=>(
              //ให้ key เป็น data.id //และส่งข้อมูล data ทั้งก้อนออกไปให้ item และให้ deleteTask เก็บฟังก์ชัน deleteTask ไว้
              <Item key={data.id} data={data} deleteTask={deleteTask} editTask={editTask}/>
            ))
          }
        </section>
      </div>
    </div>
  );
}

export default App;
