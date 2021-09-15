import React, { Component } from 'react';


 class About extends Component {
    render() {
        return (
            <div className="container" >
            <div className="row row-content-about align-items-center" id="dexxAbout">
              <div className="col-sm-12">
                <div className="media d-flex p-5">
                  <img src="/assets/images/profile-pic.jpg" alt="" id="profile-pic" width="300px" className="d-flex img-thumbnail"/>
                  <div className="media-body align-self-center">
                    <p className="p-5 d-sm-inline-block">Spray painting began as an outlet for Dexx's creative side.
                      The desire to become an artist was not something he expected, but after seeing other
                      artist creating their work he was hooked. He spent hours learning and perfecting the skills necessary to
                      create the amazing paintings he does. He enjoys longboarding, playing fetch with his
                       boxer Arya, spending time with family, and making awesome art!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
    }
}

export default About;

