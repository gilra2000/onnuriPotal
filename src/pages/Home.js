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
              {/*<Button onClick={this.toggleDrawer('left', true)}>Open Left</Button>*/}

              <div style={{backgroundColor:'#f5f5f5'}}>
                  <Carousel ref="carousel" autoplay={true} autoplayInterval={5000} slideIndex={this.state.slideIndex} wrapAround={true} width={'100%'} style={{maxWidth:1180, minWidth:400, margin:'auto'}} >
                      <img src="http://www.onnuri.org/wp-content/uploads/2017/12/2017_petitM.jpg"/>
                      <img src="http://www.onnuri.org/wp-content/uploads/2017/11/angeltree_17.png"/>
                      <img src="http://www.onnuri.org/wp-content/uploads/2017/02/2017_slogan_mainIndex06-1.png"/>
                  </Carousel>
              </div>

              {/*<div className={cx('myClass')}>*/}

              {/*</div>*/}

              <div style={{margin: 'auto', maxWidth:1180, paddingTop:40}}>
                  <Grid container justify={'center'}>
                      <Grid item xs={6} sm={3}>
                          <img src={'http://www.onnuri.org/wp-content/uploads/2016/11/petitmatin02.png'} style={{width:'100%', height:'auto'}} />
                      </Grid>
                      <Grid item xs={6} sm={3}>
                          <img src={'http://www.onnuri.org/wp-content/uploads/2015/12/banner_contents_369_07.png'} style={{width:'100%', height:'auto'}} />
                      </Grid>

                      <Grid item xs={6} sm={3}>
                          <img src={'http://www.onnuri.org/wp-content/uploads/2016/11/m-_pasteur-ha01.png'} style={{width:'100%', height:'auto'}} />
                      </Grid>

                      <Grid item xs={6} sm={3}>
                          <img src={'http://www.onnuri.org/wp-content/uploads/2016/11/petitmatin02.png'} style={{width:'100%', height:'auto'}} />
                      </Grid>
                  </Grid>
              </div>

              <div style={{margin: 'auto', maxWidth:1180, paddingTop:20}}>
                  <Grid container justify={'center'}>
                      <Grid item xs={11} sm={6}>
                          <img src={'http://www.onnuri.org/wp-content/themes/onnuri/images/main/sermonweek.png'} style={{width:'100%', height:'auto'}} />
                      </Grid>
                      <Grid item xs={11} sm={3}>
                          <div style={{backgroundColor:'#008dab', height:'99%'}}>
온누리교회
                          </div>
                      </Grid>
                      <Grid item xs={11} sm={3}>
                          <div style={{backgroundColor:'#009fa5', height:'99%'}}>
123123123123123v
                          </div>
                      </Grid>
                  </Grid>
              </div>

              <div style={{margin: 'auto', maxWidth:1180, paddingTop:20}}>
                  <Grid container justify={'center'}>
                      <Grid item xs={6}>
                          <Grid container>
                              <Grid item xs={12} sm={4}>
                                  <img src={'http://www.onnuri.org/wp-content/uploads/2017/12/oF_yangjae_1203-188x111.png'} style={{width:'100%', height:'auto'}} />
                              </Grid>
                              <Grid item xs={12} sm={4}>
                                  <img src={'http://www.onnuri.org/wp-content/uploads/2017/12/joshua_1203-188x111.png'} style={{width:'100%', height:'auto'}} />
                              </Grid>
                              <Grid item xs={12} sm={4}>
                                  <img src={'http://www.onnuri.org/wp-content/uploads/2017/12/oF_seobingo_1203.png'} style={{width:'100%', height:'auto'}} />
                              </Grid>
                          </Grid>
                          <Grid container>
                              <Grid item xs={12} sm={4}>
                                  <img src={'http://www.onnuri.org/wp-content/uploads/2016/11/petitmatin02.png'} style={{width:'100%', height:'auto'}} />
                              </Grid>
                              <Grid item xs={12} sm={4}>
                                  <img src={'http://www.onnuri.org/wp-content/uploads/2016/11/petitmatin02.png'} style={{width:'100%', height:'auto'}} />
                              </Grid>
                              <Grid item xs={12} sm={4}>
                                  <img src={'http://www.onnuri.org/wp-content/uploads/2016/11/petitmatin02.png'} style={{width:'100%', height:'auto'}} />
                              </Grid>
                          </Grid>
                          <Grid container>
                              <Grid item xs={12} sm={4}>
                                  <img src={'http://www.onnuri.org/wp-content/uploads/2016/11/petitmatin02.png'} style={{width:'100%', height:'auto'}} />
                              </Grid>
                              <Grid item xs={12} sm={4}>
                                  <img src={'http://www.onnuri.org/wp-content/uploads/2016/11/petitmatin02.png'} style={{width:'100%', height:'auto'}} />
                              </Grid>
                              <Grid item xs={12} sm={4}>
                                  <img src={'http://www.onnuri.org/wp-content/uploads/2016/11/petitmatin02.png'} style={{width:'100%', height:'auto'}} />
                              </Grid>
                          </Grid>
                      </Grid>
                      <Grid item xs={6} >
                          <Grid container >
                              <Grid item xs={12} sm={6}>
                                  <div style={{backgroundColor:'#00a392', height:'98%'}}>
123123123123123
                                  </div>
                              </Grid>
                              <Grid item xs={12} sm={6}>
                                  <img src={'http://www.onnuri.org/wp-content/uploads/2017/11/bc_171125.png'} style={{width: '100%'}} />
                              </Grid>
                          </Grid>
                      </Grid>
                  </Grid>

                  <Grid container style={{marginTop:10}}>
                      <Grid item xs={6} sm={3} >
                          <Paper style={{height:200}} >xs=safsdfsdfsdfsdf654</Paper>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                          <Paper style={{height:200}} >xs=safsdfsdfsdfsdf654</Paper>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                          <Paper style={{height:200}} >xs=safsdfsdfsdfsdf654</Paper>
                      </Grid>
                      <Grid item xs={6} sm={3}>
                          <Paper style={{height:200}} >xs=safsdfsdfsdfsdf654</Paper>
                      </Grid>
                  </Grid>

                  <div style={{height:50}}>

                  </div>

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
