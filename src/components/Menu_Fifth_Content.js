import React from 'react';
import styles from '../css/components/header/Menu.scss';
import classNames from 'classnames/bind';
import Grid from 'material-ui/Grid';
import {NavLink} from 'react-router-dom';

const cx = classNames.bind(styles);

class Menu_Fifth_Content extends React.Component {
  render() {
    if (this.props.height > 300) {
      return (
        <Grid container spacing={0}>
          <Grid item sm={2}>
            <div className={cx('menu_contents')} style={{paddingLeft: 0, paddingBottom: 20}}>
              선교와 사역
            </div>
            <div className={cx('menu_contents_sub_text')} style={{width: 155}}>
              국내외 선교활동을 주도하고 교회가 먼저 이웃을 섬기는 온누리교회의 선교, 사역팀과 다양한 봉사 활동
            </div>
            <div>

              <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/gnb_icon_5.png" alt=""/>

            </div>
          </Grid>

          <Grid item sm={3}>
            <div className={cx('menu_contents_title')} style={{paddingLeft: 30, paddingTop: 30}}>
              온누리의 선교와 사역
            </div>
            <div className={cx('menu_contents_title')} style={{paddingLeft: 30}}>
              2000선교 활동
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;선교비전
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;선교사 파송
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;해외 아웃리치
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;NGO 지원
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;외국인 이주민
            </div>

            <div className={cx('menu_contents_title')} style={{paddingLeft: 30, paddingTop: 30, paddingBottom: 30}}>
              Acts29사역
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;비전교회 협력위원회
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;의료선교
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;러브소나타
            </div>

          </Grid>
          <Grid item sm={3} style={{marginLeft: 15}}>
            <div className={cx('menu_contents_title')} style={{paddingLeft: 30, paddingTop: 30}}>
              &nbsp;
            </div>
            <div className={cx('menu_contents_title')} style={{paddingLeft: 30}}>
              사회 봉사
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;불우이웃/농어촌
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;장애우
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;탈북민
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;교도소
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;군부대
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;병원
            </div>


            <div className={cx('menu_contents_title')} style={{padding: 30}}>
              복지재단
            </div>
            <div className={cx('menu_contents_title_sub')}
                 style={{marginTop: -7, paddingLeft: 32, fontSize: 12, fontWeight: 400}}>
              “예수님의 사랑”을 초석으로 설립된 군포시청소년쉼터하나로, 온누리요양센터
            </div>

          </Grid>
          <Grid item sm={3} style={{marginLeft: 15}}>
            <div className={cx('menu_contents_title')} style={{paddingLeft: 30, paddingTop: 30}}>
              &nbsp;
            </div>
            <div className={cx('menu_contents_title')} style={{paddingLeft: 30}}>
              관련부서 안내
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;양육사역
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;예배사역
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;가정사역
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;회복사역
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;긍휼사역
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;여성사역
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;전도사역
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;JDS 예수제자학교
            </div>


          </Grid>

          <Grid item sm={1} style={{marginLeft: -40}}>

          </Grid>
        </Grid>
      )
    } else {
      return (
        <div></div>
      )
    }

  }
}

export default Menu_Fifth_Content;