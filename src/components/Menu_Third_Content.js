import React from 'react';
import styles from '../css/components/header/Menu.scss';
import classNames from 'classnames/bind';
import Grid from 'material-ui/Grid';
import {NavLink} from 'react-router-dom';

const cx = classNames.bind(styles);

class Menu_Third_Content extends React.Component {
  render() {
    if (this.props.height > 300) {
      return (
        <Grid container spacing={0}>
          <Grid item sm={2}>
            <div className={cx('menu_contents')} style={{paddingLeft: 0, paddingBottom: 20}}>
              예배와 말씀
            </div>
            <div className={cx('menu_contents_sub_text')} style={{width: 155}}>
              동영상으로 온누리교회의 예배 말씀도 다시 보고, 예배에 참여하기 전에 예배 시간 정보도 알아보세요
            </div>
            <div>
              {
                this.props.height > 250 &&
                <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/gnb_icon_3.png" alt=""/>
              }

            </div>
          </Grid>

          <Grid item sm={2}>
            <div className={cx('menu_contents_title')} style={{padding: 30}}>
              예배 영상
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;주일 예배
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;새신자 예배
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;어린이 예배
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;새벽기도회
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;비전교회 예배
            </div>

            <div className={cx('menu_contents_title')} style={{padding: 30}}>
              하용조 목사 설교
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;책별 설교
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;인물별 설교
            </div>

          </Grid>
          <Grid item sm={2} style={{marginLeft: 15}}>
            <div className={cx('menu_contents_title')} style={{padding: 30}}>
              &nbsp;
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;주중 예배
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;대학청년 예배
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;외국어 예배
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;캠퍼스교회 예배
            </div>

            <div className={cx('menu_contents_title')} style={{padding: 30}}>
              &nbsp;
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;주제별 설교
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;Acts29
            </div>
          </Grid>
          <Grid item sm={3} style={{marginLeft: 15}}>
            <div className={cx('menu_contents_title')} style={{padding: 30}}>
              특별 집회
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;작은예수 40일 새벽기도회
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;러브소나타
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;온누리 회복축제
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;청소년 집회 Passion
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 32}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;수요선교집회
            </div>

          </Grid>

          <Grid item sm={2} style={{marginLeft: -40}}>
            <div className={cx('menu_contents_title')} style={{padding: 30}}>
              &nbsp;
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 0}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;절기별 예배
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 0}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;온누리 부흥축제
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 0}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;맞춤전도집회
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 0}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;온누리 리더십축제
            </div>
            <div className={cx('menu_contents_title_sub')} style={{paddingLeft: 0}}>
              <i class="fa fa-angle-right " aria-hidden="true"
                 style={{color: '#e5e5e5', fontWeight: 'bold'}}></i>&nbsp;&nbsp;경배와찬양
            </div>
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

export default Menu_Third_Content;