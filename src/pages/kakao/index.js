import React, {PureComponent} from 'react';
import styles from '../../index.scss';
import classNames from 'classnames/bind';

import { Helmet } from "react-helmet";

import 'rc-tabs/assets/index.css';

import axios, { post } from 'axios';
const cx = classNames.bind(styles);

const url = 'http://ec2-52-79-121-61.ap-northeast-2.compute.amazonaws.com:3000/api';
// const url = 'http://192.168.25.101:3000/api';
// const url = 'http://192.168.255.99:3000/api';

class OnnuriExequies extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <div style={{margin:35}}>
      </div>
    )
  }
}

export default OnnuriExequies;