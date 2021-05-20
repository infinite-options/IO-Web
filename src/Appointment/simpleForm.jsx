import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  input: {
    width: "50%",
    padding: "20px",
    boxSizing: "border-box",
    borderRadius: "20px",
    // resize: "none",
    fontColor: "#52330D",
    fontSize: "20px",
    // fontFamily: "AvenirHeavy",
    // fontWight: "700",
    display: "inline-block",
    margin: "5px",
    borderColor: "#52330D",
    borderWidth: "2px",
  },
}));
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
