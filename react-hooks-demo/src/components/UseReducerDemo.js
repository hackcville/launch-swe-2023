import React, {useState, useReducer} from 'react'

function reducer (state, action){
    switch(action.type){
        case "add":
            return [...state, action.item];
        case "remove":
            return [
                ...state.slice(0, action.index),
                ...state.slice(action.index + 1)
            ];
        case "edit":
            return [
                ...state.slice(0, action.index),
                action.item,
                ...state.slice(action.index + 1) 
            ];
        default:
            throw new Error();
    }
}

function UseReducerDemo() {

  return (
    <>
    <h1>My To Do List</h1>
        <ToDoList />
    </>
  )
}

function ToDoList(){
    const [list, dispatch] = useReducer(reducer, []);
    const [newItem, setNewItem] = useState("");

    const handleAddItem = () => {
        if(newItem === "") return;
        dispatch({type:"add", item:{name: newItem}});
        setNewItem("");
    }
    return (
      <>
      {list.map((item, index) => <Item content={item} onRemove={() => dispatch({type: "remove", index})}/>)}
      <input type='text' value={newItem} onChange={(e) => setNewItem(e.target.value)} />
      <button onClick={handleAddItem}>Add Item</button>
      </>  
    );
}

function Item({content, onRemove}){

    return (
        <div style={{display: 'flex', justifyContent:'center', padding: 5}}>
            <span>{content.name}</span>
            <button onClick={onRemove}>Remove</button>
        </div>
    );

}
export default UseReducerDemo