import React from 'react';

function Footer(props) {
    return (
        <footer className="site-footer" >
            <div className="container p-3">
                <div className="row d-flex justify-content-between">
                    <div className="col-6 col-sm-3 ">
                         <img src="/assets/images/dexx-logo.jpg" width="125px" alt="dexx logo" /> 
                    </div>
                    <div className="col-6 col-sm-3 text-center mt-2">
                        <h4>Contact</h4>
                        <a role="button" className="btn btn-link"  href="mailto:notreal@notreal.co"><i className="fa fa-envelope-o" />
                         Dexxspraypaintart@gmail.com </a>
                    </div>
                    <div className="col-6 col-sm-3 text-center mt-2">
                        <h5>Social</h5>
                        <a className="btn btn-social-icon btn-instagram" href="https://www.instagram.com/dexx_spraypaintart/">
                             <i className="fa fa-instagram" /></a>{' '}
                        <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/david.yoder.31105">
                            <i className="fa fa-facebook" /></a>{' '}
                        <a className="btn btn-social-icon btn-linkedin"href="https://linktr.ee/dexxspraypaintart"> 
                            <i className="fa fa-linkedin" /></a>{' '}
                        <a className="btn btn-social-icon btn-google" href="https://www.youtube.com/channel/UCVTaYR4tgzvNXVkMw7lmQIg">
                            <i className="fa fa-youtube" /></a>
                    </div>
                </div>
            </div>
  </footer >

    );
}

export default Footer;