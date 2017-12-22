import React from 'react';
import styles from '../../css/components/menu1/Welcome.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class Welcome extends React.Component {

  render(){
    return(
      <div style={{height:609}}>
        <div className={cx('main_bg')}>

        </div>
      </div>

    )
  }

}

export default Welcome;