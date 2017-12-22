import React, {PureComponent} from 'react';
import styles from '../../css/components/menu1/Welcome.scss';
import classNames from 'classnames/bind';
import { StickyContainer, Sticky } from 'react-sticky';

const cx = classNames.bind(styles);

let i = 0;

class Welcome extends React.Component {

  render(){
    return(
      <div>
        <div className={cx('main_bg')}>
          <div className={cx('title')}>처음 왔습니다</div>
          <div className={cx('sub_title')}>
            Welcome!
          </div>
          <div className={cx('sub_title2')}>
            새가족 여러분을 주님의 이름으로 환영합니다.<br/>
            첫 교회방문 부터 새가족 등록 방법까지 자세하게 안내해드리겠습니다.
          </div>
          <div className={cx('sub_title3')}>
            예수그리스도를 믿기 위해서 처음 교회에 나오신 분이나 다른 교회에서 신앙생활 열심히 하시다
            이사 및 개인의 사정 등으로 온누리교회에 출석하고, 새롭게 온누리교회에서 신앙생활하기 위해
            등록에 필요한 양육과정을 밟고 있는 분들을 새가족(New Family)이라고 부릅니다.
          </div>
        </div>
        <StickyContainer style={{ height:500}}>

          <Sticky>
            {
              ({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight }) => {
                console.log({ isSticky, wasSticky, style, distanceFromTop, distanceFromBottom, calculatedHeight });
                return <Header style={style} />
              }
            }
          </Sticky>
          <div style={{backgroundColor:'red', height:500}}>
            192837198273
          </div>
        </StickyContainer>

      </div>
    )
  }

}

class Header extends PureComponent {
  render() {
    return (
      <div style={{ ...this.props.style, height: 80, backgroundColor:'#f9f9f7'}} className={cx('test')} >
        <div className={cx('test2')}>
          <div className={cx('test3')}>
            <a href='javascript:;'>
              <img src="http://www.onnuri.org/wp-content/themes/onnuri/images/logo.svg" alt="Onnuri" style={{width:100, height:50, marginTop:5}} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Welcome;