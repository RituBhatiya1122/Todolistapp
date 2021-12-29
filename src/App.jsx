import React, { useState } from "react";
import ToDoList from "./ToDoList";

const App = () => {
const[inputList, setInputList]=useState("love you");
const[items,setItems]=useState([]);

const itemEvents=(event)=>{
    setInputList(event.target.value);


}

const listofItems = () => {
setItems((oldItems)=> {
return[...oldItems,inputList]

})
setInputList("");

}

    const deleteItems = (id) => {

        setItems((oldItems)=>{
            return oldItems.filter((arrElement,index)=>{
return index !== id;

            });

        })
    }




    return(
<>
<div className="main_div">
<div className="center_div">
<br/>
<h1>ToDoList</h1>
<br/>

<input type="text" placeholder="Add a Item"  value={inputList} onChange={itemEvents} />
<button onClick={listofItems}>+</button>
<ol>
{/* <li>{inputList}</li>*/}

{items.map((itemval, index)=>{

return <ToDoList key= {index} id={index} text={itemval} onSelect={deleteItems}/>
})}


</ol>

</div>

    </div>
    

</>
    );
    
}
export default App;