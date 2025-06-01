import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "../stores/todoStore";
import { useState } from "react";
import { addTodo, removeTodo, toggleTodo } from "../stores/todoSlices";
import "./todo.css";

function Todos() {
    const todos = useSelector((state: RootState) => state.todo.value);
    const dispatch = useDispatch();
    const [newTitle, setNewTitle] = useState<string>("");

  const handleAdd = () => {
    if (newTitle.trim() !== "") {
      dispatch(addTodo({ title: newTitle, done: false }));
      setNewTitle("");
    }
  };

    
    return (
        <div>
            <h3>Your todos</h3>
            <input
                type="text"
                placeholder="New todo"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            {todos && todos.map((element, index) => (
                <div className="todo">
                    <h5>{element?.title}</h5>
                    <input
                        type="checkbox"
                        checked={element.done}
                        onChange={() => dispatch(toggleTodo(index))}
                    />
                    <button onClick={() => dispatch(removeTodo(index))}> delete Todo</button>
                </div>)
            )}
        </div>
    );
}

export default Todos;