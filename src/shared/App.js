import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, Posts, Users, Welcome, OnnuriVote, OnnuriExequies, Kakao } from 'pages/index.async';
import { Helmet } from "react-helmet";
import Menu from 'components/Menu';
import Footer from 'components/Footer';

class App extends Component {

    render() {
        return (
            <div>
                <Helmet>
                    <title>온누리 교회 홈</title>
                </Helmet>
                {/*<Menu/>*/}
                {/*<Route exact path="/" component={Home}/>*/}
                {/*<Route path="/posts" component={Posts} />*/}
                {/*<Switch>*/}
                    {/*<Route path="/about/:name" component={About}/>*/}
                    {/*<Route path="/about" component={About}/>*/}
                {/*</Switch>*/}
                {/*<Route path="/users" component={Users}/>*/}
                {/*<Route path="/welcome" component={Welcome}/>*/}
                <Route path="/onnuriVote" component={OnnuriVote}/>
                <Route path="/onnuriExequies" component={OnnuriExequies}/>
                <Route path="/kakao" component={Kakao}/>
                {/*<Footer/>*/}
            </div>
        );
    }
}

export default App;