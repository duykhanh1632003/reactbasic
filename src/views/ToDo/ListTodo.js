import React from "react";
import './ListTodo.scss';
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class ListTodo extends React.Component {
  state = {
    listToDo: [
      { id: 'todo1', title: 'Doing homework' },
      { id: 'todo2', title: 'Making video' },
      { id: 'todo3', title: 'Fixing bug' },
    ],
    editTodo: {}
  };

  handleDeleteToDo = (todo) => {
    const currentToDo = this.state.listToDo;
    const updatedListToDo = currentToDo.filter(item => item.id !== todo.id);
    this.setState({
      listToDo: updatedListToDo
    });
  };

  handleEdit = (todo) => {
    const { editTodo, listToDo } = this.state;
    const isEmptyObj = Object.keys(editTodo).length === 0;
    
    if (isEmptyObj === false && editTodo.id === todo.id) {
      const listToDoCopy = [...listToDo];
      const obIndex = listToDoCopy.findIndex(item => item.id === todo.id);
      listToDoCopy[obIndex].title = editTodo.title;
      
      this.setState({
        listToDo: listToDoCopy,
        editTodo: {}
      });
      toast.success("Thành công ")
      return;
    }
    
    this.setState({
      editTodo: todo
    });
  };

  addNewTodo = (todo) => {
    this.setState((prevState) => ({
      listToDo: [...prevState.listToDo, todo]
    }));

    toast.success("Done");
  };

  handleOnChangEditTodo = (event) => {
    const editTodoCopy = { ...this.state.editTodo };
    editTodoCopy.title = event.target.value;
    
    this.setState({
      editTodo: editTodoCopy
    });
  };

  render() {
    const { listToDo, editTodo } = this.state;
    const isEmptyObj = Object.keys(editTodo).length === 0;
    
    return (
      <div>
        <div className="List-todo-container">
          <AddTodo addNewTodo={this.addNewTodo} />
        </div>
        <div className="list-todo-line">
          {listToDo && listToDo.length > 0 &&
            listToDo.map((item, index) => (
              <div className="todo-child" key={item.id}>
                {isEmptyObj === true ? (
                  <span className="Todo-title">{index + 1} - {item.title}</span>
                ) : (
                  <>
                    {editTodo.id === item.id ? (
                      <>
                        <span className="Todo-title">{index + 1} -</span>
                        <input
                          onChange={(event) => this.handleOnChangEditTodo(event)}
                          className="inputListodo"
                          value={editTodo.title}
                        />
                      </>
                    ) : (
                      <span className="Todo-title">{index + 1} - {item.title}</span>
                    )}
                  </>
                )}
                <button
                  className="ToDo-Edit"
                  onClick={() => this.handleEdit(item)}
                >
                  {isEmptyObj === false && editTodo.id === item.id ? 'Save' : 'Edit'}
                </button>
                <button
                  className="ToDo-Delete"
                  onClick={() => this.handleDeleteToDo(item)}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
        <ToastContainer position={toast.POSITION.TOP_RIGHT} />
      </div>
    );
  }
}

export default ListTodo;
