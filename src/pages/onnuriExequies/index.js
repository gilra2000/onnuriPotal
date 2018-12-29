import React, {PureComponent} from 'react';
import styles from '../../index.scss';
import classNames from 'classnames/bind';

import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';

import 'rc-tabs/assets/index.css';
import Tabs, { TabPane } from 'rc-tabs';
import TabContent from 'rc-tabs/lib/SwipeableTabContent';
import SwipeableInkTabBar from 'rc-tabs/lib/SwipeableInkTabBar';

import axios, { post } from 'axios';
const cx = classNames.bind(styles);

const url = 'http://ec2-52-79-121-61.ap-northeast-2.compute.amazonaws.com:3000/api';
// const url = 'http://192.168.25.101:3000/api';
// const url = 'http://192.168.255.99:3000/api';

class OnnuriExequies extends React.Component {

  constructor(props) {
    super(props);
    this.state ={
      file:null
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }
  onFormSubmit(e){
    e.preventDefault() // Stop form submit
    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  fileUpload(file){

    console.log(file)

    // const url = 'http://172.30.1.11:3000/pages/upload';
    const url = 'http://ec2-52-79-121-61.ap-northeast-2.compute.amazonaws.com:3000/pages/upload';
    const formData = new FormData();
    formData.append('file',file)
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return  post(url, formData,config)
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <h1>File Upload</h1>
        <input type="file" onChange={this.onChange} />
        <button type="submit">Upload</button>
      </form>
    )
  }
}

export default OnnuriExequies;