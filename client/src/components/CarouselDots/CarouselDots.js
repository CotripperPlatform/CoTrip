
import React, {Component} from 'react';
import "./CarouselDots.css";
import ReactDOM from "react-dom";

// Class Based React Component
class CarouselDots extends Component{
  constructor(props){
    super(props);
    console.log(props);

    // Default CSS class to apply to the Component
    this.state = {
      classList: "CarouselDots",
      numberOfDots: props.numberOfDots,
      activeLocation: props.activeLocation,
      activeDotColor: props.activeDotColor,
      inactiveDotColor: props.inactiveDotColor,
      hasBorder: props.hasBorder,
      borderWeight: props.borderWeight,
      height: 50,
      width: 50

    };
  }


  // Runs after Component is loaded in the broswer
  componentDidMount() {
    let height = ReactDOM.findDOMNode(this).parentNode.offsetHeight;
    this.setState({
      height: height,
      width: height
    })
  }
  // Runs after a component has been updated
  componentDidUpdate(props){
    console.log('Carousel Updated');
    //console.log(this.state.dots)
    // console.log(props);
    // let activeLocation = this.props.activeLocation;
    // let previousLocation = this.state.activeLocation;
    // let newLocation = activeLocation !== previousLocation;
    // console.log(activeLocation, previousLocation, newLocation);
    // if(newLocation){
    //   this.setState({activeLocation});
    // }
  }


  dotClicked=(index)=>{
    this.setState({activeLocation:index},()=>{
      this.props.onStatusChange('Updated');
    })
  }

  // Runs right before a component is removed from the DOM
  componentWillUnmount(){}

  generateDots=()=>{
    let numberOfDots = this.state.numberOfDots;
    let activeDot = this.state.activeLocation;
    let dotArray = [];
    let height = this.state.height;
    let width = this.state.width;
    let activeFill = this.state.activeDotColor;
    let inactiveFill = this.state.inactiveDotColor;
    let hasBorder = this.state.hasBorder;
    let borderWeight = this.state.borderWeight;

    //let {numberOfDots, activeDots, height, width, activeFill, inactiveFill, hasBorder} = this.state;

    for(let i = 1; i <= numberOfDots; i++){
      let dot;
      if(hasBorder){

        if(i==activeDot){
          dot =
            <svg key={i} height={height} width={width}>
              <circle onClick={()=>{this.dotClicked(i)}} cx={height/2} cy={width/2} r={width/5} stroke={activeFill} strokeWidth={borderWeight} fill={activeFill} />
            </svg>

          dotArray.push(dot);
        }else{
          dot =
            <svg key={i} height={height} width={width}>
              <circle onClick={()=>{this.dotClicked(i)}} cx={height/2} cy={width/2} r={width/5} stroke={activeFill} strokeWidth={borderWeight} fill={inactiveFill} />
            </svg>

          dotArray.push(dot);
        }
      }else{

        if(i==activeDot){
          dot =
            <svg key={i} height={height} width={width}>
              <circle onClick={()=>{this.dotClicked(i)}} cx={height/2} cy={width/2} r={width/5}  fill={activeFill} />
            </svg>

          dotArray.push(dot);
        }else{
          dot =
            <svg key={i} height={height} width={width}>
              <circle onClick={()=>{this.dotClicked(i)}} cx={height/2} cy={width/2} r={width/5}  fill={inactiveFill} />
            </svg>
          dotArray.push(dot);
        }
      }

    }
    return dotArray.map(val=>val);
  }

  render(){
    let dots = this.generateDots();
    return(
      <div className={this.state.classList} style={this.state.style}>
        {dots}
      </div>
    );
  }
}

export default CarouselDots;
