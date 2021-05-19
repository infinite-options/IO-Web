import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { field: this.props.field };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onHandleChange(event.target.value);
  }

  render() {
    const info = this.props.variable;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <input
            name="variable"
            placeholder={this.props.field}
            value={info}
            onChange={this.handleChange}
            aria-labelby={"Enter your " + this.props.field + "here"}
          />
        </div>
      </form>
    );
  }
}

export default Form;
