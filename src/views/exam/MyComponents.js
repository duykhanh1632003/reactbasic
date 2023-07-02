import React from "react";
import ChildComponents from "./ChildComponents";
import TestComponents from "./TestComponents";



class MyComponents extends React.Component{


	state = {
		name: 'Khanh',
		channel: 'Gaming',
		jobArray: [
			{title: 'Marketing' , salary: '200$' , index : 1 },
			{title: 'giám đốc ' , salary: '2400$' , index : 2 },
			{title: 'Nhân viên' , salary: '500$' , index : 3 },
		]
	}

	  addNewJob = (job) =>{
		let currentJob = this.state.jobArray;
		currentJob.push(job)
		this.setState({
			jobArray: currentJob,
		})
	  }

	  DeleteAJob = (job) =>{
		let currentJob = this.state.jobArray
		currentJob = currentJob.filter(item => item.index !== job.index )
		this.setState({
			jobArray: currentJob,
		})
	  }

	render(){
		
		return(
			<>
		
		<TestComponents 
			addNewJob = {this.addNewJob}
		/>
		<ChildComponents 
				name = {'child one'}
				age = {'25'}
				jobArray = {this.state.jobArray}
				DeleteAJob = {this.DeleteAJob}
				/>				
			</>
		)
	}
}

export default MyComponents;