import React from "react";
import './ChildComponents.scss';


class ChildComponents extends React.Component {
  state = {
    showJob: false
  };

  handleShowHide = () => {
    this.setState({
		showJob: !this.state.showJob
	})
  };

  handleDeletJob = (job) => {
	this.props.DeleteAJob(job);
  }

  

  render() {
    const { showJob } = this.state;
    const { jobArray} = this.props;

    return (
      <>

		
        {!showJob && (
          <div>
            <button onClick={this.handleShowHide}>Show</button>
          </div>
        )}
        {showJob && (
          <>
            <div>
              {jobArray.map(item => (
                <div key={item.id}>
                  {item.title} - {item.salary} <span onClick={() => this.handleDeletJob(item)} class = "colorx">x</span>
                </div>
              ))}
            </div>
            <div>
              <button onClick={this.handleShowHide}>Hide</button>
            </div>
          </>
        )}
      </>
    );
  }
}

export default ChildComponents;
