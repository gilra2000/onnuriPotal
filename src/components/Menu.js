import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../css/components/header/Menu.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Menu extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isView: false
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
                <div className={cx('header')}>

                </div>

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