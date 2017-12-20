import React from 'react';
import styles from '../css/components/header/Menu.scss';
import classNames from 'classnames/bind';
import Grid from 'material-ui/Grid';
import {NavLink} from 'react-router-dom';

const cx = classNames.bind(styles);

class Menu_Fourth_Content extends React.Component {
  render() {
    return (
      <Grid container>
        <Grid item sm={2}>
          <div className={cx('menu_contents')} style={{paddingLeft: 0, paddingBottom: 20}}>
            공동체와 양육
          </div>
          <div className={cx('menu_contents_sub_text')} style={{width:155}}>
            온누리교회에 소속된 공동체와 더욱 성숙한 온누리 교인이 되기 위한 공동체별 양육 프로그램
          </div>
          <div>
            {
              this.props.height > 250 &&
              <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/gnb_icon_4.png" alt=""/>
            }

          </div>
        </Grid>

        <Grid item sm={2}>
          <div className={cx('menu_contents_title')} style={{paddingLeft:30, paddingTop:30}}>
            온누리교회 공동체는?
          </div>
          <div className={cx('menu_contents_title')} style={{paddingLeft: 30}}>
            성인
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;서빙고
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;양재
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;국내캠퍼스
          </div>

          <div className={cx('menu_contents_title')} style={{paddingLeft: 30, paddingTop:30, paddingBottom:30}}>
            영유아 · 초등학생
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;예수님의꿈아이
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;꿈이자라는땅
          </div>

        </Grid>
        <Grid item sm={2} style={{marginLeft: 15}}>
          <div className={cx('menu_contents_title')} style={{paddingLeft:30, paddingTop:30}}>
            &nbsp;
          </div>
          <div className={cx('menu_contents_title')} style={{paddingLeft: 30}}>
            대학생 · 청년
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;대학부
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;청년부
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
            &nbsp;
          </div>

          <div className={cx('menu_contents_title')} style={{padding: 30}}>
            중고등학생
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;파워웨이브
          </div>

        </Grid>
        <Grid item sm={3} style={{marginLeft: 15}}>
          <div className={cx('menu_contents_title')} style={{paddingLeft:30, paddingTop:30}}>
            &nbsp;
          </div>
          <div className={cx('menu_contents_title')} style={{paddingLeft: 30}}>
            외국인
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;영어예배
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;일본어예배
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;중국어예배
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;기타 외국인예배
          </div>

          <div className={cx('menu_contents_title')} style={{padding: 30}}>
            장애인
          </div>


        </Grid>

        <Grid item sm={2} style={{marginLeft: -40}}>
          <div className={cx('menu_contents_title')} style={{paddingLeft:30, paddingTop:30}}>
            &nbsp;
          </div>
          <div className={cx('menu_contents_title')} style={{paddingLeft: 0}}>
            소모임
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 0}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;회복을 위한 모임
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 0}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;기도/QT 모임
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 0}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;사벼자 모임
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 0}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;이혼자 모임
          </div>

          <div className={cx('menu_contents_title')} style={{paddingTop:30}}>
            양육체계 소개
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 0}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;양육 프로그램
          </div>
          <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 0}}>
            <i class="fa fa-angle-right " aria-hidden="true" style={{color:'#e5e5e5', fontWeight:'bold'}}></i>&nbsp;&nbsp;장로 아카데미
          </div>

        </Grid>
      </Grid>
    )
  }
}

export default Menu_Fourth_Content;