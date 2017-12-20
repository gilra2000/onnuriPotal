import React from 'react';
import styles from '../css/components/header/Menu.scss';
import classNames from 'classnames/bind';
import Grid from 'material-ui/Grid';
import {NavLink} from 'react-router-dom';

const cx = classNames.bind(styles);

var iconStyle = {
  color: 'rgba(209, 232, 237, 0.6)',
  fontWeight: 'bold'
}

class Menu_Second_Content extends React.Component {
  render() {
    if (this.props.height > 300) {
      return(
        <Grid container spacing={0}>
          <Grid item sm={2}>
            <div className={cx('menu_contents')} style={{paddingLeft: 0, paddingBottom: 20}}>
              소개합니다
            </div>
            <div className={cx('menu_contents_sub_text')} style={{width: 155}}>
              온누리교회의 역사를 비롯해 교회 시설, 주차안내, 기부금영수증과 같은 행정지원까지 온누리교회에 대한 모든 것.
            </div>
            <div>
              {
                this.props.height > 250 &&
                <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/gnb_icon_2.png" alt=""/>
              }

            </div>
          </Grid>

          <Grid item sm={2}>
            <div className={cx('menu_contents_title')} style={{padding: 30}}>
              교회소개
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;담임목사 인사말
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;2017년 목회계획
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;온누리 비전
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;온누리 목회철학
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;온누리 발자취
            </div>
          </Grid>
          <Grid item sm={2} style={{marginLeft: 15}}>
            <div className={cx('menu_contents_title')} style={{padding: 30}}>
              예배시간
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;서빙고 온누리교회
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;양재 온누리교회
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;대학청년
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;외국어
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;캠퍼스 · 비전교회
            </div>

            <div className={cx('menu_contents_title')} style={{padding: 30}}>
              금주의 주보
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;서빙고 온누리교회
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;양재 온누리교회
            </div>
          </Grid>
          <Grid item sm={2} style={{marginLeft: 15}}>
            <div className={cx('menu_contents_title')} style={{padding: 30}}>
              섬기는 사람들
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;담당목사
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;부목사
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;전도사
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;파트교역자
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;장로
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;선교/복지재단
            </div>

            <div className={cx('menu_contents_title')} style={{padding: 30}}>
              행정 · 성도지원
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;결혼예배
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;헌금 안내
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;행정부서 안내
            </div>

          </Grid>
          <Grid item sm={2} style={{marginLeft: 15}}>
            <div className={cx('menu_contents_title')} style={{padding: 30}}>
              교회 시설
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;서빙고 온누리교회
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;양재 온누리교회
            </div>


            <div className={cx('menu_contents_title')} style={{padding: 30}}>
              약도/주차
              &nbsp;<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;서빙고 온누리교회
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;양재 온누리교회
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true" style={iconStyle}></i>&nbsp;&nbsp;캠퍼스교회
            </div>

            <div className={cx('menu_contents_title')} style={{paddingLeft: 30, paddingTop:30}}>
              온누리교회 홍보관
              &nbsp;<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
            </div>


          </Grid>
          <Grid item sm={1} style={{marginLeft: -5}}>

          </Grid>
        </Grid>
      )
    }else{
      return(
        <div></div>
      )
    }
  }
}

export default Menu_Second_Content;