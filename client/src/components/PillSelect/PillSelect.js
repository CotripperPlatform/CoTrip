
import React, {Component} from 'react';
import "./PillSelect.css";


// Class Based React Component
class PillSelect extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "PillSelect",
      selected: props.selected,
      style:{
        backgroundColor: props.selected ? props.selectedColor : props.unselectedColor,
        color:props.selected ? 'white': 'black',
        width: props.width
      },
      selectId:props.selectId
    };
  }




  pillClicked=(evt)=>{
    let selected = !this.state.selected;
    let selectedColor = this.props.selectedColor;
    let unselectedColor = this.props.unselectedColor;
    console.log(selected, selectedColor, unselectedColor);
    this.setState({
      selected:selected,
      style:{
        backgroundColor: selected === true ? selectedColor : unselectedColor,
        color: selected === true ? 'white': 'black',
        width:this.props.width
      }
    },()=>{
      console.log(this.state);
      let output = {
        selectId: this.state.selectId,
        selected:this.state.selected
      }
      this.props.onStatusChange(output)
    })
  }


  // Runs after Component is loaded in the broswer
  componentDidMount(){}


  // Runs after a component has been updated
  componentDidUpdate(){}


  // Runs right before a component is removed from the DOM
  componentWillUnmount(){}

  render(){
    return(
      <div onClick={this.pillClicked} className={this.state.classList} style={this.state.style}>
        {this.props.innerText}
      </div>
    );
  }
}

export default PillSelect;
