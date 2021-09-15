import React from 'react';

function Footer(props) {
    return (
        <footer id="footer" >
            <div className="container-fluid  mt-5">

                {/*  Socail Media */}
                <div className="row justify-content-center border-5  p-2">
                    <div className="col">
                        <img src="/assets/images/dexx-logo.jpg" width="125px" alt="" />
                    </div>
                    <div className="col mt-4">
                        <h4>Contact</h4>
                        <p><i className="fa fa-envelope"></i>Dexxspraypaintart@gmail.com </p>
                        <p><i className="fa fa-phone"></i> 1-300-900-8888</p>
                    </div>
                    <div className="col-4 mt-4 mb-4 ">
                        <h4>Follow</h4>
                        <a className="btn btn-primary socialBtn " 
                            href="https://www.facebook.com/david.yoder.31105" role="button">
                            <i className="fa fa-facebook-f fa-lg"></i></a>
                        <a className="btn btn-primary socialBtn" 
                            href="https://www.instagram.com/dexx_spraypaintart/" role="button">
                            <i className="fa fa-instagram fa-lg"></i></a>

                        <a className="btn btn-primary socialBtn"  href="https://linktr.ee/dexxspraypaintart"
                            role="button">
                            <i className="fa fa-linkedin fa-lg"></i></a>

                        <a className="btn btn-primary socialBtn" 
                            href="https://www.youtube.com/channel/UCVTaYR4tgzvNXVkMw7lmQIg" role="button">
                            <i className="fa fa-youtube fa-lg"></i></a>

                    </div>
                </div>
            </div>
  </footer >

    );
}

export default Footer;