import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/components/header/Menu.scss';
import classNames from 'classnames/bind';
import {Motion, spring} from 'react-motion';
import Grid from 'material-ui/Grid';

const cx = classNames.bind(styles);

class Menu extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isMenuView: false,
            motionHeight: 0
        }
    }

    componentDidMount(){

    }

    menuClick(){
      // console.log(event.target.tagName)
      if(this.state.isMenuView){
        this.setState({
          isMenuView: false,
          motionHeight: 0
        })
      }else{
        this.setState({
          isMenuView: true,
          motionHeight: 300
        })
      }

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
                  <div style={{margin: 'auto', maxWidth:1050}}>
                    <Grid container >
                      <Grid item xs={3} sm={2} style={{textAlign:'center'}}></Grid>
                      <Grid item xs={3} sm={2} style={{textAlign:'center'}}>
                        <div onClick={this.menuClick.bind(this)} className={cx('header_menu_text')}>환영합니다</div>
                      </Grid>
                      <Grid item xs={3} sm={2} style={{textAlign:'center'}}>
                        <div onClick={this.menuClick.bind(this)} className={cx('header_menu_text')}>소개합니다</div>
                      </Grid>
                      <Grid item xs={3} sm={2} style={{textAlign:'center'}}>
                        <div onClick={this.menuClick.bind(this)} className={cx('header_menu_text')}>예배와 말씀</div>
                      </Grid>
                      <Grid item xs={3} sm={2} style={{textAlign:'center'}}>
                        <div onClick={this.menuClick.bind(this)} className={cx('header_menu_text')}>공동체와 양육</div>
                      </Grid>
                      <Grid item xs={3} sm={2} style={{textAlign:'center'}}>
                        <div onClick={this.menuClick.bind(this)} className={cx('header_menu_text')}>선교와 사역</div>
                      </Grid>
                    </Grid>
                  </div>

                </div>

                <Motion
                  defaultStyle={{height:0}}
                  style={{ height:spring(this.state.motionHeight) }}
                >
                  {(style)=>(
                    <div style={{width:'100%', height:100, position:'absolute', zIndex:99999}}>
                      <div style={{height:style.height, width:'100%', backgroundImage: 'url(http://www.onnuri.org/wp-content/themes/onnuri/images/bg_megamenu.gif)', }}>


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