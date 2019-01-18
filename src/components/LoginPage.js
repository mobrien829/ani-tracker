import React from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment
} from "semantic-ui-react";
import { Link } from "react-router-dom";
import SignUp from "./SignUp";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  handleusername = event => {
    this.setState({
      username: event.target.value
    });
  };

  handlePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    fetch("http://localhost:4000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password
      })
    })
      .then(res => {
        if (res.ok) {
          alert("Please click ok, then refresh the page.");
          return res.json();
        }
        throw new Error("Failed to login. Please refresh");
      })
      .then(json => {
        localStorage.setItem("token", json.access_token);
      })
      .then(() => {
        this.props.history.push("/anime");
      });
    // .catch(err => {
    //   console.warn("You have been warned.", err);
    // });
  };

  handleClickForSignUp = () => {
    this.props.history.push("/register");
  };

  render() {
    return (
      <div className="login-form">
        <style>{`
      body > div,
      body > div > div,
      body > div > div > div.login-form {
        height: 100%;
      }
    `}</style>
        <Grid
          textAlign="center"
          style={{ height: "100%" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header as="h2" color="teal" textAlign="center">
              Welcome to AniTracker!
            </Header>
            <Form size="large">
              <Segment stacked>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  placeholder="Username"
                  value={this.state.username}
                  onChange={this.handleusername}
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  placeholder="Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handlePassword}
                />

                <Button
                  color="teal"
                  fluid
                  size="large"
                  onClick={this.handleSubmit}
                >
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
              Don't have an account?
              <Link to={"/register"}> Sign Up</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default LoginForm;
