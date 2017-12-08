import React from 'react';
import styles from '../index.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const Home = () => {
    const isBlue = true;

    return (
        <div className={cx('box', {
            blue: isBlue
        })}>
            <div className={cx('box-inside')}/>
        </div>
    )
}

export default Home;
