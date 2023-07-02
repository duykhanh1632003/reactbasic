import React from "react";

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const MauSac = (WrappedComponent) => {
  const colorRandom = getRandomColor();

  return class extends React.Component {
    render() {
      return (
        <div style={{ color: colorRandom }}>
          <WrappedComponent {...this.props} />
        </div>
      );
    }
  };
};

export default MauSac;
