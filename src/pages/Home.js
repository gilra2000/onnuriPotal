import React from 'react';
import styles from '../index.scss';
import classNames from 'classnames/bind';
import Carousel from 'nuka-carousel';

const cx = classNames.bind(styles);

class Home extends React.Component {

    state = {
        slideIndex: 0
    }

    render(){
      return (
        <Carousel autoplay={true} autoplayInterval={3000} slideIndex={this.state.slideIndex} wrapAround={true}>
          <img src="http://www.onnuri.org/wp-content/uploads/2017/12/2017_petitM.jpg"/>
          <img src="http://www.onnuri.org/wp-content/uploads/2017/11/angeltree_17.png"/>
          <img src="http://www.onnuri.org/wp-content/uploads/2017/02/2017_slogan_mainIndex06-1.png"/>
        </Carousel>
      )
    }
}

export default Home;
