import React, {PureComponent} from 'react';
import styles from '../../index.scss';
import classNames from 'classnames/bind';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import 'rc-tabs/assets/index.css';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import SwipeableInkTabBar from 'rc-tabs/lib/SwipeableInkTabBar';

const axios = require('axios');
const cx = classNames.bind(styles);

const url = 'http://ec2-52-79-121-61.ap-northeast-2.compute.amazonaws.com:3000/api';
// const url = 'http://192.168.25.101:3000/api';

class OnnuriVote extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      userList: []
    }

    this.tabTitle = (key) => {
      let title = key === 0 ? '전체' : '캠퍼스별';
      return(
        <div style={{paddingTop:15, paddingBottom:15, fontSize:25, fontWeight:'bold'}} data-extra="tab-bar-title">{title}</div>
      )

    };
    this.makeTabPane = key => {
      if(key === 0){
        return(
          <TabPane tab={this.tabTitle(key)} data-extra="tabpane" key={`${key}`}>
            <div style={{backgroundColor:'#fff'}}>
              {
                this.state.userList.map((key, i)=>{
                  return(
                    <div style={{border: '1px solid #f9f9f9', padding:10}}>
                      <Grid container justify={'center'}>
                        <Grid item xs={4}>
                          <Grid container>
                            <Grid item xs={2} style={{fontSize:18}}>
                              {'기호'+key.num}
                            </Grid>
                            <Grid item xs={4} style={{fontSize:18}}>
                              {key.campus}
                            </Grid>
                            <Grid item xs={5} style={{fontSize:25, fontWeight:'600'}}>
                              {key.name}
                            </Grid>
                            <Grid item xs={1} style={{fontSize:25, color:'red'}}>
                              {key.vote}
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </div>
                  )
                })
              }
            </div>
          </TabPane>
        )
      }else{
        return(
          <TabPane tab={this.tabTitle(key)} data-extra="tabpane" key={`${key}`}>
            <div style={{backgroundColor:'#fff'}}>
              <div style={{paddingTop:10, paddingBottom:10}}>

                <Grid container style={{textAlign:'center'}}>
                  <Grid item xs={3} style={{backgroundColor:'#fff', paddingTop:30, paddingBottom:30, borderRight:'1px solid #f1f1f1'}}>
                    <div style={{fontSize:20, fontWeight:'bold'}}>서빙고</div>
                  </Grid>
                  <Grid item xs={3} style={{backgroundColor:'#fff', paddingTop:30, paddingBottom:30, borderRight:'1px solid #f1f1f1'}}>
                    <div style={{fontSize:20, fontWeight:'bold'}}>양재</div>
                  </Grid>
                  <Grid item xs={3} style={{backgroundColor:'#fff', paddingTop:30, paddingBottom:30, borderRight:'1px solid #f1f1f1'}}>
                    <div style={{fontSize:20, fontWeight:'bold'}}>캠퍼스</div>
                  </Grid>
                  <Grid item xs={3} style={{backgroundColor:'#fff', paddingTop:30, paddingBottom:30, borderRight:'1px solid #f1f1f1'}}>
                    <div style={{fontSize:20, fontWeight:'bold'}}>사역본부</div>
                  </Grid>
                </Grid>

                <Grid container style={{textAlign:'center'}}>
                  <Grid item xs={3} style={{backgroundColor:'#d9f1ff', paddingTop:20}}>
                    {
                      this.state.userList.map((key, i)=> {
                        if(key.campus === '서빙고'){
                          return (
                            <Grid container style={{paddingTop:5, paddingBottom:5}}>
                              <Grid item xs={4}>
                                <div>{'기호'+key.num}</div>
                              </Grid>
                              <Grid item xs={4}>
                                <div style={{fontSize:18}}>{key.name}</div>
                              </Grid>
                              <Grid item xs={4}>
                                <div style={{fontSize:20, color:'red', fontWeight:'bold'}}>{key.vote}</div>
                              </Grid>
                            </Grid>
                          )
                        }
                      })
                    }
                  </Grid>
                  <Grid item xs={3} style={{backgroundColor:'#e0fff3', paddingTop:20}}>
                    {
                      this.state.userList.map((key, i)=> {
                        if(key.campus === '양재'){
                          return (
                            <Grid container style={{paddingTop:5, paddingBottom:5}}>
                              <Grid item xs={4}>
                                <div>{'기호'+key.num}</div>
                              </Grid>
                              <Grid item xs={4}>
                                <div style={{fontSize:18}}>{key.name}</div>
                              </Grid>
                              <Grid item xs={4}>
                                <div style={{fontSize:20, color:'red', fontWeight:'bold'}}>{key.vote}</div>
                              </Grid>
                            </Grid>
                          )
                        }
                      })
                    }
                  </Grid>
                  <Grid item xs={3} style={{backgroundColor:'#ffffed', paddingTop:20}}>
                    {
                      this.state.userList.map((key, i)=> {
                        if(key.campus === '캠퍼스'){
                          return (
                            <Grid container style={{paddingTop:5, paddingBottom:5}}>
                              <Grid item xs={4}>
                                <div>{'기호'+key.num}</div>
                              </Grid>
                              <Grid item xs={4}>
                                <div style={{fontSize:18}}>{key.name}</div>
                              </Grid>
                              <Grid item xs={4}>
                                <div style={{fontSize:20, color:'red', fontWeight:'bold'}}>{key.vote}</div>
                              </Grid>
                            </Grid>
                          )
                        }
                      })
                    }
                  </Grid>
                  <Grid item xs={3} style={{backgroundColor:'#ffe4ea', paddingTop:20}}>
                    {
                      this.state.userList.map((key, i)=> {
                        if(key.campus === '사역본부'){
                          return (
                            <Grid container style={{paddingTop:5, paddingBottom:5}}>
                              <Grid item xs={4}>
                                <div>{'기호'+key.num}</div>
                              </Grid>
                              <Grid item xs={4}>
                                <div style={{fontSize:18}}>{key.name}</div>
                              </Grid>
                              <Grid item xs={4}>
                                <div style={{fontSize:20, color:'red', fontWeight:'bold'}}>{key.vote}</div>
                              </Grid>
                            </Grid>
                          )
                        }
                      })
                    }
                  </Grid>
                </Grid>
              </div>
            </div>
          </TabPane>
        )
      }
    };

    this.makeMultiTabPane = (count) => {
      const result = [];
      for (let i = 0; i < count; i++) {
        result.push(this.makeTabPane(i));
      }
      return result;
    };
  }

  componentDidMount() {
    this.fetch();
    setInterval(()=>{
      this.fetch();
    }, 3000)
  }

  fetch() {
    let _this = this;

    axios.get(url + '/getOnnuriVoteUserListOrder?uid=123')
      .then(function (response) {
        // alert(response.data.onnuriVoteUserList);
        _this.setState({
          userList: response.data.onnuriVoteUserList
        })
      })
      .catch(function (error) {
        alert(error);
      })
      .then(function () {
        // always executed
      });
  }

  render(){

    return(
      <div style={{marginTop:0}}>
        {/*<Grid container justify={'center'} style={{backgroundColor:'#fff', paddingTop:20, paddingBottom:20}}>*/}
          {/*<div style={{fontSize:40, fontWeight:'bold'}}>*/}
            {/*투표결과*/}
          {/*</div>*/}
        {/*</Grid>*/}
        <div style={{marginTop:0, backgroundColor:'#f9f9f9'}}>
          <Tabs
            renderTabBar={() =>
              <SwipeableInkTabBar
                pageSize={2}
                speed={10}
              />
            }
            renderTabContent={() => <TabContent/>}
            defaultActiveKey="2"
          >
            {this.makeMultiTabPane(2)}
          </Tabs>
        </div>
      </div>
    )
  }

}

export default OnnuriVote;