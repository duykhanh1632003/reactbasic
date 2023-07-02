import React from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import './DetailUser.scss';

class DetailUser extends React.Component {
  state = {
    user: {},
  };
  handleBackButton = () =>{
	this.props.history.push('/user')
  }

  async componentDidMount() {
    if (this.props.match && this.props.match.params) {
      let id = this.props.match.params.id;
      let res = await axios.get(`https://reqres.in/api/users/${id}`);
      this.setState({
        user: res && res.data && res.data.data ? res.data.data : {},
      });
	  console.log(res);
    }
  }

  render() {
    let { user } = this.state;
	let isEmptyObj = Object.keys(user).length === 0;
    return (
		<div className="container">
		  <div className="title">Detail Card</div>
		  {isEmptyObj === false && (
			<>
			  <div className="info-box">
				<div className="subtitle">User Name:</div>
				<div className="value">
				  <span className="user-name">{user.first_name}</span> -{" "}
				  <span className="user-name">{user.last_name}</span>
				</div>
			  </div>
			  <div className="info-box">
				<div className="subtitle">User Email:</div>
				<div className="value">
				  <span className="user-email">{user.email}</span>
				</div>
			  </div>
			  <div className="info-box">
				<div className="subtitle">User img:</div>
				<img className="avatar" src={user.avatar} alt="User Avatar" />
			  </div>
			  <div>
				<button className="back-button" onClick={() => this.handleBackButton()}>
				  Back
				</button>
			  </div>
			</>
		  )}
		</div>
	  );
	  
  }
}

export default withRouter(DetailUser);
