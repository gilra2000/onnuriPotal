exports.ids = [3];
exports.modules = {

/***/ 259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_redux__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_redux__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux_modules_users__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_server__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_server___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_router_server__);
var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}var Users=function(_Component){_inherits(Users,_Component);function Users(){_classCallCheck(this,Users);return _possibleConstructorReturn(this,(Users.__proto__||Object.getPrototypeOf(Users)).apply(this,arguments));}_createClass(Users,[{key:'componentWillMount',value:function componentWillMount(){// 서버사이드에서도 데이터 로딩이 작동하기 위해서, 데이터 불러오는 작업을 componentWillMount 에서 호출합니다.
var _props=this.props,UsersActions=_props.UsersActions,data=_props.data,done=_props.done;if(data.length!==0)return false;// 데이터가 이미 존재하면 재요청 하지 않음
UsersActions.getUsers().then(done,done);// Promise 가 성공했을때, 혹은 실패했을때 done() 호출
}},{key:'render',value:function render(){var data=this.props.data;// 유저 이름 목록을 생성합니다
var userList=data.map(function(user){return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('li',{key:user.id},user.name);});return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('div',null,__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('ul',null,userList));}}]);return Users;}(__WEBPACK_IMPORTED_MODULE_0_react__["Component"]);// withDone 으로 감싸주면, done 이 호출될때까지 렌더링을 미룹니다
/* harmony default export */ __webpack_exports__["default"] = (Object(__WEBPACK_IMPORTED_MODULE_4_react_router_server__["withDone"])(Object(__WEBPACK_IMPORTED_MODULE_1_react_redux__["b" /* connect */])(function(state){return{data:state.users.data};},function(dispatch){return{UsersActions:Object(__WEBPACK_IMPORTED_MODULE_2_redux__["b" /* bindActionCreators */])(__WEBPACK_IMPORTED_MODULE_3_redux_modules_users__,dispatch)};})(Users)));

/***/ })

};;