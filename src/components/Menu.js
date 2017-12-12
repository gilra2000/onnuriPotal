import React from 'react';
import { NavLink } from 'react-router-dom';

class Menu extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            isView: false
        }
    }

    render(){
        return(
            <div>
            <div style={{backgroundColor:'rgba(85, 85, 85, .7)', height:30}}>

            </div>

            <div onClick={()=>{this.setState({isView: !this.state.isView})}} style={{height:54, backgroundColor:'#f6f6f6'}}>

            </div>
                {
                    this.state.isView &&
                    <div style={{height:100, backgroundColor:'red', float:'top'}}></div>
                }
            </div>

        )
    }

}

export default Menu;

{/*<NavLink exact to="/" >홈입니다</NavLink>*/}
{/*<NavLink exact to="/about" >About</NavLink>*/}
{/*<NavLink to="/about/foo" >About Foo</NavLink>*/}
{/*<NavLink to="/posts" >Posts</NavLink>*/}
{/*<NavLink to="/users" >Users</NavLink>*/}