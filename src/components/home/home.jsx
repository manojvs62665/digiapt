import React, { Component } from "react";
import "../style.scss";
import axios from "axios";
import dummyAPI from "../datastore/index";
import RegModal from "./registerForm";

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reg_modal: false,
      users: [],
    };
  }

  componentDidMount() {
    this.getUserData();
  }

  regFormModal = () => {
    this.setState({
      reg_modal: !this.state.reg_modal,
    });
  };

  getUserData = async () => {
    await dummyAPI
      .getData()
      .then((res) => {
        console.log(res);
        this.setState({ users: res.data });
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.state.users);
    return (
      <>
        <div className="home_page">
          {/* {this.state.users.map((user) => (
            <div>
              <p>{user.name}</p>
            </div>
          ))} */}
          <button onClick={() => this.regFormModal()}>Get started</button>
          <RegModal
            show={this.state.reg_modal}
            onHide={this.regFormModal}
            getUserData={this.getUserData}
          />
        </div>
      </>
    );
  }
}
