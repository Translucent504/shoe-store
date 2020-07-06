import React, { Component } from "react";
import { render } from "react-dom";

class HoverExample extends Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering
    };
  }

  render() {
    return (
      <div>
        {!this.state.isHovering && (
          <div
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            Hover Me
          </div>
        )}
        {this.state.isHovering && (
          <div
            onMouseEnter={this.handleMouseHover}
            onMouseLeave={this.handleMouseHover}
          >
            Hovering right meow!
          </div>
        )}
      </div>
    );
  }
}

render(<HoverExample />, document.getElementById("root"));
