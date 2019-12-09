
import React, {Component} from 'react';
import "./CarouselDots.css";
import ReactDOM from "react-dom";

class CarouselDots extends Component{
  constructor(props){
    super(props);
    console.log(props);

    this.state = {
      classList: "CarouselDots",
      activeLocation: props.activeLocation,
      activeFill: "#6A4C93",
      inactiveFill: "#FAFAFA"

    };
  }
  componentDidUpdate(props){
    console.log('Carousel Updated');
  }


  dotClicked=(index)=>{
    this.setState({activeLocation:index},()=>{
      this.props.onStatusChange('Updated');
    })
  }

  componentWillUnmount(){}


  renderBorderedSvg=(i, active)=>{
    let proportions = 50;
    let fill = active ? this.state.activeFill : this.state.inactiveFill;
    return      <svg key={i} height={proportions} width={proportions}>
                  <circle onClick={()=>{this.dotClicked(i)}} cx={proportions/2} cy={proportions/2} r={proportions/5} stroke={this.state.activeFill} strokeWidth={2} fill={fill} />
                </svg>
  }

  renderBorderlessSvg=(i, active)=>{
    let proportions = 50;
    let fill = active ? this.state.activeFill : this.state.inactiveFill;
    return      <svg key={i} eight={proportions} width={proportions}>
                  <circle onClick={()=>{this.dotClicked(i)}}cx={proportions/2} cy={proportions/2} r={proportions/5}  fill={fill} />
                </svg>
  }


  generateDots=()=>{
    let dots = [];
    let {numberOfDots, border} = this.props;
    let {activeLocation} = this.state;
    let borderWeight = this.state.borderWeight;
    for(let i = 1; i <= numberOfDots; i++){

      let dot = border ? this.renderBorderedSvg(i, i==activeLocation) : this.renderBorderlessSvg(i, i==activeLocation);
      dots.push(dot);

    }
    return dots.map(val=>val);
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
