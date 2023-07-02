import React from "react";





class TestComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      salary: ""
    };
  }

  


  handleChangetitle = (event) => {
    this.setState({
      title: event.target.value
    });
  };

  handleChangesalary = (event) => {
    this.setState({
      salary: event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if(!this.state.title || !this.state.salary){
      alert('Nhap lai')
      return
    }
    this.props.addNewJob({
      id: Math.floor(Math.random()  * 101),
      title: this.state.title,
      salary: this.state.salary,
    })
    this.setState({
      title: '',
      salary: ''
    })
  };

  render() {
    return (


      <form onSubmit={this.handleSubmit}>
        <label htmlFor="fname">Chuc vu:</label><br/>
        <input
          type="text"
          value={this.state.title}
          onChange={this.handleChangetitle}
        /><br/>
        <label htmlFor="lname">salary:</label><br/>
        <input
          type="text"
          value={this.state.salary}
          onChange={this.handleChangesalary}
        /><br/><br/>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default TestComponents;
