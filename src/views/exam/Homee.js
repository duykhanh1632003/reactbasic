import React from "react";
import { withRouter } from "react-router-dom";
import MauSac from "../HOC/MauSac";
import logo from '../../asssets/images/anh-anime-chibi.webp';

const Mang = [
  { title: 'Car', isFruit: false, id: 1 },
  { title: 'motorbike', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3 },
];

class Homee extends React.Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.history.push("/todo");
    }, 3000);
  }

  state = {
    name: ''
  };

  handleOnChangeName = (event) => {
    this.setState({
      name: event.target.value
    });
  };

  render() {
    const traicay = Mang.map((product) => (
      <li
        key={product.id}
        style={{
          color: product.isFruit ? 'magenta' : 'darkgreen',
        }}
      >
        {product.title}
      </li>
    ));

    return (
      <>
        <input
          value={this.state.name}
          type="text"
          onChange={this.handleOnChangeName}
        />
        <div>Khanhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh</div>
        <h2>Ten cua nguoi tao ra la: {this.state.name}</h2>
        <ul>{traicay}</ul>
        <div>
          <img src={logo} />
        </div>
      </>
    );
  }
}

export default withRouter(MauSac(Homee));
