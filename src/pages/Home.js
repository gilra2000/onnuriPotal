import React from 'react';
import styles from '../index.scss';
import classNames from 'classnames/bind';
import Carousel from 'nuka-carousel';

import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import Divider from 'material-ui/Divider';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

const cx = classNames.bind(styles);

class Home extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      slideIndex:0,
        top: false,
        left: false,
        bottom: false,
        right: false,
    }
  }

    toggleDrawer = (side, open) => () => {
        this.setState({
            [side]: open,
        });
    };

  componentDidMount(){
      setTimeout(()=>{
          this.setState({
              slideIndex:0
          })
      }, 10)

  }

  render(){

      const sideList = (
          <div style={{width:250}}>

              <Divider />

          </div>
      );

      return (
          <div>


          </div>
      );
  }
}

export default Home;
