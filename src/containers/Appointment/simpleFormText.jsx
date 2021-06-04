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
      <form onSubmit={this.handleSubmit} style={{ display: "inline" }}>
        <textarea
          name="variable"
          placeholder={this.props.field}
          value={info}
          onChange={this.handleChange}
          aria-labelby={"Enter your " + this.props.field + "here"}
          style={{
            padding: "20px",
            boxSizing: "border-box",
            borderRadius: "20px",
            fontColor: "#52330D",
            fontSize: "20px",
            margin: "5px 5px",
            borderColor: "#52330D",
            borderWidth: "2px",
            width: "80.5%",
            height: "150px",
            fontFamily: "AvenirHeavy",
            outline: "none",
          }}
        />
      </form>
    );
  }
}

export default Form;
