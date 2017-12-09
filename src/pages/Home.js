import React from 'react';
// import styles from '../index.scss';
// import classNames from 'classnames/bind';
import Carousel from 'nuka-carousel';

import { withStyles } from 'material-ui/styles';
import Drawer from 'material-ui/Drawer';
import Button from 'material-ui/Button';
import List from 'material-ui/List';
import Divider from 'material-ui/Divider';

// const cx = classNames.bind(styles);

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
    // console.log(this.refs.carousel)
    setTimeout(()=>{
      this.setState({slideIndex: 0})
    }, 10)
  }

  render(){

      const sideList = (
          <div style={{width:250}}>

              <Divider />

          </div>
      );

      const fullList = (
          <div style={{width:'auto'}}>

              <Divider />

          </div>
      );

      return (
          <div>
              <Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>

              <div style={{backgroundColor:'#f5f5f5', width:'100%', height:600, display:'flex', justifyContent:'center', alignItems:'center'}}>
                  <Carousel ref="carousel" slideIndex={this.state.slideIndex} wrapAround={true} width={'100%'} style={{maxWidth:1200, minWidth:800, overflow: 'hidden', position: 'relative', float: 'left', display: 'block' }}>
                      <img src="http://www.onnuri.org/wp-content/uploads/2017/12/2017_petitM.jpg"/>
                      <img src="http://www.onnuri.org/wp-content/uploads/2017/11/angeltree_17.png"/>
                      <img src="http://www.onnuri.org/wp-content/uploads/2017/02/2017_slogan_mainIndex06-1.png"/>
                  </Carousel>
              </div>

              <Drawer open={this.state.left} onRequestClose={this.toggleDrawer('left', false)}>
                  <div
                      tabIndex={0}
                      role="button"
                      onClick={this.toggleDrawer('left', false)}
                      onKeyDown={this.toggleDrawer('left', false)}
                  >
                      {sideList}
                  </div>
              </Drawer>

          </div>
      );
  }
}

export default Home;
