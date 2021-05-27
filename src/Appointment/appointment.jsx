import { render } from "@testing-library/react";

class  Appointment extends Component {
    constructor(props) {
      super(props);
      this.state = {
        timeSelected: false,
        submitted:false,
      };    
      this.handleTimeSelected = this.handleTimeSelected.bind(this);
      this.handleSubmitted = this.handleSubmitted.bind(this);
    }
  
    handleTimeSelected= () => {
      this.setState({
        timeSelected: !state.timeSelected,
    });
    handleTimeSelected= () => {
        this.setState({
          timeSelected: !state.timeSelected,
      });
    render() {
        return (
          <div>
            <WarningBanner warn={this.state.showWarning} />
            <button onClick={this.handleToggleClick}>
              {this.state.showWarning ? 'Hide' : 'Show'}
            </button>
          </div>
        );
      }
    
  }
  export default Appointment