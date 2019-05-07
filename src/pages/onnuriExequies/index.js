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
      file:null,
      name: '',
      selectVal: ''
    }
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onChange = this.onChange.bind(this)
    this.onNameChange = this.onNameChange.bind(this)
    this.onSelectChange = this.onSelectChange.bind(this)
    this.fileUpload = this.fileUpload.bind(this)
  }

  onFormSubmit(e){
    if(this.state.selectVal === '') {
      alert('구분을 선택해주세요')
      this.select.focus();
      return false;
    }else if(this.state.name === '') {
      alert('제목을 입력해주세요')
      this.nameInput.focus();
      return false;
    }else if(!this.state.file){
      alert('파일을 업로드해주세요')
      return false;
    }

    this.fileUpload(this.state.file).then((response)=>{
      console.log(response.data);
    })
  }
  onChange(e) {
    this.setState({file:e.target.files[0]})
  }

  onNameChange(e) {
    this.setState({name: e.target.value})
  }

  onSelectChange(e) {
    this.setState({selectVal: e.target.value})
  }

  fileUpload(file){

    console.log(file)

    // const url = 'http://172.30.1.38:3000/pages/upload';
    const url = 'http://192.168.25.72:3000/pages/upload';
    // const url = 'http://ec2-52-79-121-61.ap-northeast-2.compute.amazonaws.com:3000/pages/upload';
    const formData = new FormData();
    formData.append('file',file)
    formData.append('gubun',this.state.selectVal)
    formData.append('name',this.state.name)

    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return  post(url, formData, config)
  }

  render() {
    return (
      <div style={{margin:35}}>
        <form onSubmit={this.onFormSubmit}>
          <h1>파일 업로드</h1>
            <li style={{listStyleType: 'none'}}>
              <select ref={(input)=> this.select = input} value={this.state.selectVal} onChange={this.onSelectChange} style={{marginRight:16}} >
                <option selected>-- 구분선택 --</option>
                <option value={'묵도'}>묵도</option>
                <option value={'찬양'}>찬양</option>
                <option value={'축도'}>축도</option>
              </select>

              제목<input ref={(input)=> this.nameInput = input} style={{marginLeft:10}} type="text" onChange={this.onNameChange} value={this.state.name}/> <input type="file" onChange={this.onChange} style={{marginLeft:20}}/>
            </li>

          <div style={{marginTop:20}}>
            <button onClick={()=> this.onFormSubmit()} type="button" style={{width:100}}>저장</button>
          </div>

          <a href="everbite://smw/user/?userId=123" > 딥링크 </a>
        </form>
      </div>
    )
  }
}

export default OnnuriExequies;