import React from 'react';
import styles from '../css/components/header/Menu.scss';
import classNames from 'classnames/bind';
import Grid from 'material-ui/Grid';
import {NavLink} from 'react-router-dom';

const cx = classNames.bind(styles);

class Menu_First_Content extends React.Component {
  render() {
    if (this.props.height > 300) {
      return (
        <Grid container spacing={0}>
          <Grid item sm={2}>
            <div className={cx('menu_contents')} style={{paddingLeft: 0, paddingBottom: 20}}>
              환영합니다
            </div>
            <div className={cx('menu_contents_sub_text')} style={{width: 155}}>
              온누리교회에 처음 오신 분들을 위한 교회 방문부터 온누리 교인이 되기까지의 과정
            </div>
            <div>
              {
                this.props.height > 250 &&
                <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/gnb_icon_1.png" alt=""/>
              }

            </div>
          </Grid>

          <Grid item sm={2}>
            <div className={cx('menu_contents')}>
              <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/mega_01_001.jpg" alt=""
                   style={{marginLeft: 0}}/>
            </div>
            <div style={{marginLeft: 13}}>
              <div style={{fontSize: 18, paddingTop: 12, color: '#fff', cursor:'pointer'}} onClick={this.props.menuHide}>

                <NavLink to="/welcome" style={{color: '#fff', textDecoration: 'none'}}>
                  환영합니다
                  &nbsp;<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                </NavLink>

              </div>
              <div className={cx('menu_contents_sub_text')} style={{paddingTop: 13, width: 190}}>
                온누리교회에 소중한 발걸음을 해<br/>주신 새가족을 위한 정보를 한눈에!
              </div>
            </div>

          </Grid>
          <Grid item sm={2} style={{marginLeft: 5}}>
            <div className={cx('menu_contents')}>
              <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/mega_01_002.jpg" alt=""
                   style={{marginLeft: -5}}/>
            </div>
            <div style={{marginLeft: 8}}>
              <div style={{fontSize: 18, paddingTop: 12, color: '#fff'}}>
                교회 방문하기
                &nbsp;<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </div>
              <div className={cx('menu_contents_sub_text')} style={{paddingTop: 13, width: 190}}>
                서빙고, 양재를 비롯해 지역별 온누<br/>리교회로 오시는 길을 안내합니다.
              </div>
            </div>
          </Grid>
          <Grid item sm={2} style={{marginLeft: 0}}>
            <div className={cx('menu_contents')}>
              <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/mega_01_003.jpg" alt=""
                   style={{marginLeft: -10}}/>
            </div>
            <div style={{marginLeft: 3}}>
              <div style={{fontSize: 18, paddingTop: 12, color: '#fff'}}>
                새가족 등록하기
                &nbsp;<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </div>
              <div className={cx('menu_contents_sub_text')} style={{paddingTop: 13, width: 190}}>
                온누리 교인이 되기 위한 첫 걸음,<br/> 새가족 등록에 대한 모든 것
              </div>
            </div>
          </Grid>
          <Grid item sm={2} style={{marginLeft: 0}}>
            <div className={cx('menu_contents')}>
              <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/mega_01_004.jpg" alt=""
                   style={{marginLeft: -15}}/>
            </div>
            <div style={{marginLeft: 0}}>
              <div style={{fontSize: 18, paddingTop: 12, color: '#fff'}}>
                사역 참여하기
                &nbsp;<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
              </div>
              <div className={cx('menu_contents_sub_text')} style={{paddingTop: 13, width: 190}}>
                온누리교회의 교인이 되었다면 사<br/>역에 참여할 준비가 되었습니다.
              </div>
            </div>
          </Grid>
          <Grid item sm={2} style={{marginLeft: -5}}>
            <div className={cx('menu_contents')}>
              <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/mega_01_005.jpg" alt=""
                   style={{marginLeft: -15}}/>
            </div>
            <div style={{marginLeft: 0}}>
              <div style={{fontSize: 18, paddingTop: 12, color: '#fff'}} onClick={this.props.menuHide}>
                <NavLink to="/posts" style={{color: '#fff', textDecoration: 'none'}}>
                  교회 용어집
                  &nbsp;<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                </NavLink>
              </div>
              <div style={{fontSize: 18, paddingTop: 12, color: '#fff'}} onClick={this.props.menuHide}>
                <NavLink to="/users" style={{color: '#fff', textDecoration: 'none'}}>
                  새가족 FAQ
                  &nbsp;<i class="fa fa-arrow-circle-right" aria-hidden="true"></i>
                </NavLink>
              </div>
            </div>
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

export default Menu_First_Content;