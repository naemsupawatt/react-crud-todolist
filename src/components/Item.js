import "./Item.css"
import { BsTrash } from "react-icons/bs";
import { BiEdit } from "react-icons/bi";
export default function Item(props){
    //นำฟังก์ชัน deleteTask มาใช้งาน
    const {data, deleteTask, editTask} = props
    return(
        <div className="list-item">
           <p className="title">{data.title}</p>
           <div className="button-container">
                <BsTrash className="btn" onClick={()=>deleteTask(data.id)}/>
                <BiEdit className="btn" onClick={()=>editTask(data.id)}/>
           </div>
        </div>
    );
}