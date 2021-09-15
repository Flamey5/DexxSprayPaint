import React, { Component } from 'react';


class About extends Component {
  render() {
    return (
      <div className="container mt-5 mb-5" >
        <div className="row p-5" id="dexxAbout">
          <div className="col-sm-5">
              <img src="/assets/images/profile-pic.jpg" alt="" id="profile-pic" className="d-flex img-thumbnail" />
          </div>
          <div className="col-sm-7">
              <p className="">Spray painting began as an outlet for Dexx's creative side.
                The desire to become an artist was not something he expected, but after seeing other
                artist creating their work he was hooked. He spent hours learning and perfecting the skills necessary to
                create the amazing paintings he does. He enjoys longboarding, playing fetch with his
                boxer Arya, spending time with family, and making awesome art!</p>
          </div>

        </div>
      </div>
    )
  }
}

export default About;

