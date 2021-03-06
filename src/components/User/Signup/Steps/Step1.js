import React from 'react';
import {
  Form, Col, Row
} from 'react-bootstrap';
import PropTypes from'prop-types';

const Step1 = ({fields, errors, handleChange, currentStep}) => {
  return (
    currentStep === 1 &&
    <div className="step1">
      <Form.Group as={Row} controlId="rolesGroup">
        <Form.Label column sm="2">
          Vous êtes ?
        </Form.Label>
        <Col sm="10">
          <Form.Control
            as="select"
            name="roles"
            value={fields.roles}
            onChange={handleChange}
          >
            <option>Choose...</option>
            <option>Association</option>
            <option>Entreprise</option>
          </Form.Control>
        </Col>
      </Form.Group>

      <hr/>

      <Form.Group as={Row} controlId="usernameGroup">
        <Form.Label column sm="2">
          Nom d'utilisateur :
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            name="username"
            placeholder="Nom d'utilisateur"
            value={fields.username}
            onChange={handleChange}
            isValid={fields.username}
            isInvalid={errors.username}
          />
          <Form.Control.Feedback type="invalid">
            {errors.username}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="emailGroup">
        <Form.Label column sm="2">
          Email :
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="text"
            name="email"
            placeholder="E-mail"
            value={fields.email}
            onChange={handleChange}
            isValid={fields.email}
            isInvalid={errors.email}
          />
          <Form.Control.Feedback type="invalid">
            {errors.email}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
      <Form.Group as={Row} controlId="passwordGroup">
        <Form.Label column sm="2">
          Mot de passe :
        </Form.Label>
        <Col sm="10">
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            value={fields.password}
            onChange={handleChange}
            isValid={fields.password}
            isInvalid={errors.password}
          />
          <Form.Control.Feedback type="invalid">
            {errors.password}
          </Form.Control.Feedback>
        </Col>
      </Form.Group>
    </div>
  );
};

Step1.propTypes = {
  fields: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  currentStep: PropTypes.number
};

export default Step1;
