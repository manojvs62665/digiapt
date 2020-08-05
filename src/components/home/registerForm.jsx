import React, { Component } from "react";
import "../style.scss";
import { Modal, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import dummyAPI from "../datastore/index";

const defaultState = {
  name: "",
  username: "",
  email: "",
  phone: "",
  nameError: "",
  usernameError: "",
  emailError: "",
  phoneError: "",
};

export default class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //   id: "",
      //   name: "",
      //   username: "",
      //   email: "",
      //   phone: "",
      defaultState,
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  validate = () => {
    let nameError = "";
    let usernameError = "";
    let emailError = "";
    let phoneError = "";

    if (!this.state.name) {
      nameError = "*Please enter name";
    } else if (!this.state.name.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)) {
      nameError = "*Enter valid name";
    }
    if (!this.state.username) {
      usernameError = "*Please enter name";
    } else if (
      !this.state.username.match(/^[a-zA-Z-,]+(\s{0,1}[a-zA-Z-, ])*$/)
    ) {
      usernameError = "*Enter valid name";
    }
    if (!this.state.phone) {
      phoneError = "*Please enter phone number";
    } else if (this.state.phone.length < 10 || this.state.phone.length > 10) {
      phoneError = "*Number Must be 10 digits";
    }
    if (!this.state.email) {
      emailError = "*Please enter email";
    } else if (!this.state.email.includes("@")) {
      emailError = "*'@' Missing Please Check";
    } else if (!this.state.email.includes(".")) {
      emailError = "*'.' is missing please check";
    }
    if (emailError || nameError || phoneError || usernameError) {
      this.setState({ emailError, nameError, phoneError, usernameError });
      return false;
    }
    return true;
  };

  addUserData = async (e) => {
    const isValid = this.validate();
    if (isValid) {
      const user = {
        name: this.state.name,
        username: this.state.username,
        email: this.state.email,
        phone: this.state.phone,
      };
      // await dummyAPI
      //   .postData({ user })
      axios
        .post(`https://jsonplaceholder.typicode.com/users`, { user })
        .then((response) => {
          this.props.getUserData();
          this.props.onHide();
          console.log("newuser", response);
        })
        .catch(({ response }) => {
          if (response && response.data) {
            console.log(response.data.message);
          }
        });
      this.setState(defaultState);
    }
  };

  render() {
    const { name, username, email, phone } = this.state;
    return (
      <div className="reg_modal">
        <Modal size="lg" show={this.props.show} onHide={this.props.onHide}>
          <Modal.Header closeButton className="">
            <Modal.Title>Registration form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Row>
                <Col>
                  <Form.Control
                    name="name"
                    value={name}
                    placeholder="First name"
                    onChange={this.handleChange}
                  />
                  <p className="errorMsg">{this.state.nameError}</p>
                </Col>
                <Col>
                  <Form.Control
                    name="username"
                    value={username}
                    placeholder="Last name"
                    onChange={this.handleChange}
                  />
                  <p className="errorMsg">{this.state.usernameError}</p>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control
                    name="email"
                    value={email}
                    placeholder="Email"
                    onChange={this.handleChange}
                  />
                  <p className="errorMsg">{this.state.emailError}</p>
                </Col>
                <Col>
                  <Form.Control
                    name="phone"
                    value={phone}
                    placeholder="Phone number"
                    onChange={this.handleChange}
                  />
                  <p className="errorMsg">{this.state.phoneError}</p>
                </Col>
              </Row>
              <Button
                className="sub_btn"
                onClick={() => this.addUserData()}
                disabled={!name || !username || !email || !phone}
              >
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}
