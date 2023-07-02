import React from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
class addTodo extends React.Component{

	state={
		title: '',
	}

	handleOnChangTitle = (event) =>{
		this.setState ({
			title: event.target.value
		})
	}

	handleClick = () =>{
		if(this.state.title === ''){
			toast.error("Write back")
			return
		}
		let todo ={
			id: Math.floor(Math.random()  * 1000),
			title: this.state.title
		}
		this.props.addNewTodo(todo);
		this.setState({
			title:''
		})
	}

	render(){

		let {title} = this.state
		return(

			<div className="add-todo">
				<input type="text" value={title}
					onChange={(event) => this.handleOnChangTitle(event)}
				/>
				<button type="button"
				onClick={() => this.handleClick()}
				>ADD</button>
			</div>
		)
	}
}

export default addTodo;