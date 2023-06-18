import React from "react";
import Wrapper from "./login.style";
import LoginFormComponent from "../../components/app/login-form/login-form.component";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      model: {
        username: "",
        password: "",
        remember: false,
      },
      disabled: false,
      waiting: false,
      credentials: false,
    };
  }

  doLogin() {
    // dispatch(loginUser({ username, password }));
  }

  updateLoginModel(model) {
    this.setState({
      ...this.state,
      model,
    });
    console.log(model);
  }

  render() {
    return (
      <Wrapper className="login-page-wrapper full-screen centered-box">
        <LoginFormComponent
          onLogin={() => this.doLogin()}
          onModelChange={(model) => this.updateLoginModel(model)}
          waiting={this.state.waiting}
          disabled={this.state.disabled}
        />
      </Wrapper>
    );
  }
}

export default LoginPage;
