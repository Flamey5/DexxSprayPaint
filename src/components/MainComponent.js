import React, { Component } from 'react';
import About from './AboutComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import Header from './HeaderComponent';
import Gallery from './GalleryComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';




class Main extends Component {
   

    render() {
        const HomePage = () => {
            return (
                <Home
                />
            );
        }

        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/aboutus' component={About} />
                    <Route exact path='/gallery' render={() => <Gallery paintings={this.props.paintings} />} />
                    <Redirect to='/home' />
                </Switch>
                <Footer />
            </div>
        );

    }

}



export default Main;