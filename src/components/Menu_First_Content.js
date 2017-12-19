import React from 'react';
import styles from '../css/components/header/Menu.scss';
import classNames from 'classnames/bind';
import Grid from 'material-ui/Grid';
import { NavLink } from 'react-router-dom';
const cx = classNames.bind(styles);

class Menu_First_Content extends React.Component {
    render(){
        return(
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
                            this.props.height > 250 && <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/gnb_icon_1.png" alt="" />
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
                        <div style={{fontSize:18, paddingTop:15, color:'#fff'}} onClick={this.props.menuHide}>
                            <NavLink to="/posts"  >교회 용어집</NavLink>
                        </div>
                        <div style={{fontSize:18, paddingTop:15, color:'#fff'}} onClick={this.props.menuHide}>
                            <NavLink to="/users"  >새가족 FAQ</NavLink>
                        </div>
                    </div>
                </Grid>
            </Grid>
        )
    }
}

export default Menu_First_Content;