import React, { useEffect } from 'react';
import { Container, Col, Row, Card } from 'react-bootstrap';
import { useParams } from "react-router-dom";
import { connect } from 'react-redux';
import PropTypes from'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

import Event from '../../Events/Event/Event';
import { getAssoc } from '../../../redux/actions/assoc';
import notFound from '../../../images/no-image-found.png';
import './AssocDetail.css';

const mapStateToProps = (state) => {
  return {
    assoc: state.assocs.assoc,
    error: state.assocs.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleAssoc: id => {
      dispatch(getAssoc(id))
    }
  }
}

const AssocDetail = ({ getSingleAssoc, assoc }) => {
  let { id } = useParams();

  const handleClick  = (path) => {
    window.open(path, '_blank');
  }

  useEffect(() => {
    getSingleAssoc(id);
  // eslint-disable-next-line
  }, []);

  return (
    <div className='assoc-detail'>
      <Container>
        <Row>
          {assoc.assoc && 
            <>
              <Col xs={4} md={4} lg={4}>
                <Card>
                  {assoc.assoc.photo && <Card.Img variant="top" src={process.env.REACT_APP_STATIC_HOST + assoc.assoc.photo} onError="this.src='../../../images/no-image-found.png'"/>}
                  {!assoc.assoc.photo && <Card.Img variant="top" src={notFound} onError="this.src='../../../images/no-image-found.png'"/>}
                  <Card.Body>
                    <Card.Text>
                      <span className="informations">Président :</span> 
                      <span className="text-right">{assoc.assoc.manager_first_name + " " + assoc.assoc.manager_first_name}</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="informations">Email :</span> 
                      <span className="text-right">{assoc.assoc.email}</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="informations">Telephone :</span> 
                      <span className="text-right">{assoc.assoc.landline}</span>
                    </Card.Text>
                    <Card.Text>
                      <span className="informations">Adresse :</span> 
                      <span className="text-right">{assoc.assoc.street}</span>
                    </Card.Text>
                    <Card.Text className="networks">
                      <FontAwesomeIcon icon={faFacebookSquare} size="2x" color="#3b5998" onClick={() => handleClick(assoc.assoc.facebook)}/>
                      <FontAwesomeIcon icon={faTwitterSquare} size="2x" onClick={() => handleClick(assoc.assoc.twitter)}/>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col xs={8} md={8} lg={8}>
                <h4>{assoc.assoc.name}</h4>
                <p>{assoc.assoc.description}</p>
                <Row>
                  {assoc.events && assoc.events.map(({id, title, description, categories, publish_date}, i) =>
                      <Event id={id} title={title} description={description} categories={categories} publish_date={publish_date} key={i}/>
                    )
                  }
                </Row>
              </Col>
            </>
          }
        </Row>
      </Container>
    </div>
  );
};

AssocDetail.propTypes = {
  getSingleAssoc: PropTypes.func.isRequired,
  assoc: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AssocDetail);
