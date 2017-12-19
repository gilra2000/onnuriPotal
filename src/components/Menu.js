import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/components/header/Menu.scss';
import classNames from 'classnames/bind';
import {Motion, spring} from 'react-motion';
import Grid from 'material-ui/Grid';
import debounce from 'lodash/debounce';
const cx = classNames.bind(styles);

const MENU_ITEMS = ['환영합니다', '소개합니다','예배와 말씀', '공동체와 양육', '선교와 사역'];

class Menu extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isMenuView: false,
            motionHeight: 0,
            activeMenu: '',
            isMenuContent: false
        }

        this.debouncedFunc = debounce(()=>{
            this.setState({
                isMenuContent:true
            })
        },200);

    }

    componentDidMount(){

    }

    menuClick(pos){
      if(this.state.activeMenu === pos){
        this.menuHide();
      }else{
          this.debouncedFunc();
        this.setState({
          isMenuView: true,
          activeMenu: pos,
          motionHeight: 400
        })
      }
    }

    menuHide(){
        this.setState({
            isMenuView: false,
            activeMenu: '',
            motionHeight: 0,
            isMenuContent:false
        })
    }

    render(){
        return(
            <div className={cx('bg')}>

                <div className={cx('onr_gnb')}>
                    <div className={cx('full')}>
                      <h1 className={cx('logo')}>
                        <a href='/' title={'Onnuri'} className={cx('logoa')}>
                          <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/logo.svg" alt="Onnuri" className={cx('logoImg')} />
                        </a>
                      </h1>

                      <ul className={cx('headerUl')}>
                        <li className={cx('headerLi')}>
                          <a href="http://news.onnuri.org" title="온누리신문" target="_blank" className={cx('header_right_a_01')} >온누리신문</a>
                        </li>
                        <li className={cx('headerLi')}>
                          <a href="http://ischool.ionnuri.org/ischool/jsp/pre_index.jsp" title="아이스쿨" target="_blank" className={cx('header_right_a_01')}>아이스쿨</a>
                        </li>
                        <li className={cx('headerLi')}>
                          <a href="http://blog.cgntv.net/club/club_main.asp" title="커뮤니티" target="_blank" className={cx('header_right_a_01')}>커뮤니티</a>
                        </li>
                        <li className={cx('headerLi')}>
                          <a href="http://vision.onnuri.org" title="캠퍼스 · 비전교회" target="_blank" className={cx('header_right_a_01')}>캠퍼스 · 비전교회</a>
                        </li>
                        <li className={cx('headerLi')}>
                          <a href="http://www.cgntv.net/" title="CGNTV" target="_blank" className={cx('header_right_a_01')}>CGNTV</a>
                        </li>
                        {/*<li className={cx('headerLi')}>*/}
                          {/*<span class="btnSearch schopen" className={cx('header_right_a_01')}>검색</span>*/}
                        {/*</li>*/}
                      </ul>

                    </div>
                </div>
                <div className={cx('header')} >
                    <div style={{margin: 'auto', maxWidth:1180}}>
                    <Grid container >
                      <Grid item xs={3} sm={2} style={{textAlign:'center'}}></Grid>
                      {
                        MENU_ITEMS.map((val, key)=> {
                            let activeColor = '#363636';
                            if(this.state.activeMenu === key){
                                activeColor = '#008da8';
                            }
                          return <Grid key={key} item xs={3} sm={2} style={{textAlign:'center'}}>
                                   <div onClick={this.menuClick.bind(this, key)} className={cx('header_menu_text')}  style={{color: activeColor}}>
                                     {val}  <i class="fa fa-angle-down" aria-hidden="true"></i>
                                   </div>
                              {
                                this.state.activeMenu === key && <div className={cx('header_menu_img')}>&nbsp;</div>
                              }
                                 </Grid>
                        })
                      }
                    </Grid>
                  </div>
                </div>

                <Motion
                  defaultStyle={{height:0}}
                  style={{ height:spring(this.state.motionHeight) }}
                >
                  {(style)=>(
                    <div style={{width:'100%', height:100, position:'absolute', zIndex:99999}}>
                      <div style={{height:style.height, width:'100%', backgroundImage: 'url(http://www.onnuri.org/wp-content/themes/onnuri/images/bg_megamenu.gif)'}}>
                        {
                          this.state.activeMenu !== '' &&
                          <div style={{margin: 'auto', maxWidth:1180}}>
                                  <Grid container >
                                      <Grid item sm={2} >
                                          <div className={cx('menu_contents')} style={{paddingLeft:0, paddingBottom:20}} >
                                              환영합니다
                                          </div>
                                          <div className={cx('menu_contents_sub_text')}>
                                              온누리교회에 처음 오신 분들을 위한 교회 방문부터 온누리 교인이 되기까지의 과정
                                          </div>
                                          <div>
                                              {
                                                  style.height > 250 && <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/gnb_icon_1.png" alt="" />
                                              }

                                          </div>
                                      </Grid>
                                      <Grid item sm={2} >
                                          <div className={cx('menu_contents')} >
                                              <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/mega_01_001.jpg" alt=""  style={{marginLeft:0}}/>
                                          </div>
                                          <div style={{marginLeft:13}}>
                                              <div style={{fontSize:18, paddingTop:15, color:'#fff'}}>
                                                  환영합니다
                                              </div>
                                              <div className={cx('menu_contents_sub_text')} style={{paddingTop:13, width:190}}>
                                                  온누리교회에 소중한 발걸음을 해주신 새가족을 위한 정보를 한눈에!
                                              </div>
                                          </div>

                                      </Grid>
                                      <Grid item sm={2}  style={{marginLeft:5}}>
                                          <div className={cx('menu_contents')}>
                                              <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/mega_01_002.jpg" alt=""  style={{marginLeft:-5}}/>
                                          </div>
                                          <div style={{marginLeft:8}}>
                                              <div style={{fontSize:18, paddingTop:15, color:'#fff'}}>
                                                  교회 방문하기
                                              </div>
                                              <div className={cx('menu_contents_sub_text')} style={{paddingTop:13, width:190}}>
                                                  서빙고, 양재를 비롯해 지역별 온누리교회로 오시는 길을 안내합니다.
                                              </div>
                                          </div>
                                      </Grid>
                                      <Grid item sm={2} style={{marginLeft:0}}>
                                          <div className={cx('menu_contents')}>
                                              <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/mega_01_003.jpg" alt=""  style={{marginLeft:-10}}/>
                                          </div>
                                          <div style={{marginLeft:0}}>
                                              <div style={{fontSize:18, paddingTop:15, color:'#fff'}}>
                                                  새가족 등록하기
                                              </div>
                                              <div className={cx('menu_contents_sub_text')} style={{paddingTop:13, width:190}}>
                                                  온누리 교인이 되기 위한 첫 걸음, 새가족 등록에 대한 모든 것
                                              </div>
                                          </div>
                                      </Grid>
                                      <Grid item sm={2} style={{marginLeft:0}}>
                                          <div className={cx('menu_contents')}>
                                              <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/mega_01_004.jpg" alt=""  style={{marginLeft:-15}}/>
                                          </div>
                                          <div style={{marginLeft:0}}>
                                              <div style={{fontSize:18, paddingTop:15, color:'#fff'}}>
                                                  사역 참여하기
                                              </div>
                                              <div className={cx('menu_contents_sub_text')} style={{paddingTop:13, width:190}}>
                                                  온누리교회의 교인이 되었다면 사역에 참여할 준비가 되었습니다.
                                              </div>
                                          </div>
                                      </Grid>
                                      <Grid item sm={2} style={{marginLeft:-5}}>
                                          <div className={cx('menu_contents')}>
                                              <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/mega_01_005.jpg" alt=""  style={{marginLeft:-15}}/>
                                          </div>
                                          <div style={{marginLeft:0}}>
                                              <div style={{fontSize:18, paddingTop:15, color:'#fff'}} onClick={this.menuHide.bind(this)}>
                                                  <NavLink to="/posts"  >교회 용어집</NavLink>
                                              </div>
                                              <div style={{fontSize:18, paddingTop:15, color:'#fff'}} onClick={this.menuHide.bind(this)}>
                                                  <NavLink to="/users"  >새가족 FAQ</NavLink>
                                              </div>
                                          </div>
                                      </Grid>

                                  </Grid>

                          </div>
                        }
                      </div>
                    </div>
                  )}

                </Motion>

                {/*<div onClick={()=>{this.setState({isView: !this.state.isView})}} style={{height:54, backgroundColor:'#f6f6f6'}}>*/}

                {/*</div>*/}
                    {/*{*/}
                        {/*this.state.isView &&*/}
                        {/*<div style={{width:'100%', height:100, backgroundColor:'red', position:'absolute', zIndex:9999}}></div>*/}
                    {/*}*/}
            </div>

        )
    }

}

export default Menu;

{/*<NavLink exact to="/" >홈입니다</NavLink>*/}
{/*<NavLink exact to="/about" >About</NavLink>*/}
{/*<NavLink to="/about/foo" >About Foo</NavLink>*/}
{/*<NavLink to="/posts" >Posts</NavLink>*/}
{/*<NavLink to="/users" >Users</NavLink>*/}