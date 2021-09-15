import React, { Component } from 'react';
import { FadeTransform } from 'react-animation-components';


class Home extends Component {
    render() {
        return (
            <>
                <div className="container ">
                    <div className="row row-content" id="welcomeGreeting">
                        <div className="col text-center">
                            <FadeTransform
                                in
                                transformProps={{
                                    exitTransform: 'scale(0.5) translateY(50%)'
                                }}>
                                <h1>Welcome to <span className="logo">Dexx</span> spray paint art!</h1>
                            </FadeTransform>
                        </div>
                    </div>
                    <div className="row row-content justify-content-between">
                        <div className="col-sm-6">
                            <p id="artquote">Hope you all are doing well! Making art is worth it to me just
                                for the fact that I may be able to bring even a small moment of happiness to someones day.
                                Here is to hoping you find some happiness here ! ~Dexx
                            </p>
                        </div>
                        <div className="col col-lg-6 ml-3">
                            <img src="/assets/images/bear1.jpg" width="600px" className="" alt="silloute of a bear with nature painted inside" />
                        </div>
                    </div>
                </div>

                {/* Email Sign up */}
                <form>
                    <div className="row p-4 bg-dark">
                        <div className="col col-lg-6 m-auto">
                            <div className="input-group mb-3">
                                <label htmlfor="email"></label>
                                <input type="email" className="form-control" placeholder="Enter your email to receive updates!"
                                    aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <button className="btn btn-primary" type="button">Join!</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </>
        );
    }
}

export default Home;