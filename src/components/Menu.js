import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from '../index.scss';
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
            <div>
                <div className={cx('onr_gnb')}>
                    <div className={cx('full')}>
                      <h1 className={cx('logo')}>
                        <a href='/' title={'Onnuri'} className={cx('logoa')}>
                          <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/logo.svg" alt="Onnuri" style={{width:110, height:'auto', paddingTop:22}} />
                        </a>
                      </h1>
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