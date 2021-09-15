import React, { Component } from 'react';
import { Card, CardImg, CardBody, CardTitle, Button } from 'reactstrap';
import { PAINTINGS } from '../shared/paintings';


class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = {
            paintings: PAINTINGS,
            selectedPainting: null
        };
    }

    render() {
        const gallery = this.state.paintings.map(painting => {
            return (
                        <div className="col">
                            <Card className="card">
                                <CardImg className="galleryImage" width="400px" src={painting.image} alt={painting.name} />
                                <CardTitle className="cardTitle"><h2>{painting.name}</h2></CardTitle>
                                <CardBody className="cardBody">
                                    <Button>Add to Cart</Button>
                                    <h4 >{painting.price}</h4>
                                </CardBody>
                            </Card>
                        </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {gallery}
                </div>
            </div>
        );
    }
}



export default Gallery;
