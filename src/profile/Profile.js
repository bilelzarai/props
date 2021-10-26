import React from 'react'
 import { Container, Row, Col, Button } from 'react-bootstrap';
import { propTypes } from 'react-bootstrap/esm/Image';

function Profile(props) { console.log(props.profession)

    return (
        <div>   
              <Container>     
                <Row>
                    <Col lg='3'>
                        <br />
                        <br />
                        <h3> {props.person.fullName} </h3>

                      <h5>  {props.person.profession}</h5>
                        <br/>
                    
                    </Col>
                    <Col xs='6'><br/>
                    <br/>
                        {props.person.bio} <br />
                        
                    </Col>
                    <Col xs='3'>
                        <div className="text-center">
                            <img src='./bilel.jpg' alt='image profile' width='150' height='190' />
                        </div>
                        <br/>
                        <div className="text-center">

                            <Button variant="outline-info" onClick={() => props.handleName(props.person)}>Click</Button>

                        </div>
                    </Col>
                </Row>
            </Container>
           
        </div>
    )
}
Profile.defaultProps = {
    person: {
        fullName: 'Unknown',
        bio: ' Unknown',
        profession: 'Unknown'
    }
}

Profile.prototype = {
    user: propTypes.object,
    handleName: propTypes.func,
}
export default Profile