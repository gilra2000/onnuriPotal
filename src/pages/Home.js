import React from 'react';
import styles from '../index.scss';
import classNames from 'classnames/bind';
import Carousel from 'nuka-carousel';

const cx = classNames.bind(styles);

class Home extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      slideIndex:0
    }
  }

  componentDidMount(){
    // console.log(this.refs.carousel)
    setTimeout(()=>{
      this.setState({slideIndex: 0})
    }, 10)
  }

  render(){
    return (
      <div style={{margin:'auto'}}>
        <Carousel ref="carousel" slideIndex={this.state.slideIndex} wrapAround={true}>
          <img src="http://www.onnuri.org/wp-content/uploads/2017/12/2017_petitM.jpg"/>
          <img src="http://www.onnuri.org/wp-content/uploads/2017/11/angeltree_17.png"/>
          <img src="http://www.onnuri.org/wp-content/uploads/2017/02/2017_slogan_mainIndex06-1.png"/>
        </Carousel>
      </div>
    )
  }
}

export default Home;
