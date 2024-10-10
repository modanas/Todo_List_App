import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
	let [todos, setTodos] = useState([
		{ task: "Sample-Task", id: uuidv4(), isDone: false },
	]);
	let [newTodo, setNewTodo] = useState("");

	let addNewTask = () => {
		setTodos((prevTodos) => {
			return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }];
		});
		setNewTodo("");
	};
	let updateTodo = (event) => {
		setNewTodo(event.target.value);
	};
	let deleteTodo = (id) => {
		setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id !== id));
	};
	let markAllAsDone = () => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => {
				return {
					...todo,
					//task: todo.task.toUpperCase(),
					isDone: true,
				};
			})
		);
	};
	let markAsDone = (id) => {
		setTodos((prevTodos) =>
			prevTodos.map((todo) => {
				if (todo.id === id) {
					return {
						...todo,
						// task: todo.task.toUpperCase(),
						isDone: true,
					};
				} else {
					return todo;
				}
			})
		);
	};

	return (
		<div>
			<h1>Todo App</h1>
			<input
				className="inputBox"
				placeholder="Enter a Task"
				value={newTodo}
				onChange={updateTodo}
			/>
			<br /> <br />
			<button onClick={addNewTask}>Add Task</button>
			<br /> <br /> <br />
			<br /> <br /> <br />
			<hr />
			<h1>Tasks Todo</h1>
			<ul className="list">
				{todos.map((todo) => (
					<li className="listItem" key={todo.id}>
						<span
							className="task"
							style={todo.isDone ? { textDecorationLine: "line-through" } : {}}
						>
							<li>{todo.task}</li>
						</span>
						&nbsp; &nbsp; &nbsp;
            
						{/* <div className="buttonDiv"> */}
							<button
								className="deleteButton"
								onClick={() => deleteTodo(todo.id)}
							>
								Delete
							</button>
						
						&nbsp; &nbsp; &nbsp;
						<div>
							<button
								className="doneButton"
								onClick={() => markAsDone(todo.id)}
							>
								Mark As Done
							</button>
						{/* </div> */}
            </div>
					</li>
				))}
			</ul>
			<br />
			<br />
			<button onClick={markAllAsDone}>Mark All As Done</button>
		</div>
	);
}
