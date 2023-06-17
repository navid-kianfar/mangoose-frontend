import React from "react";
import Wrapper from "./login.style";
import ConnectionSetupComponent from "../../components/app/connection-setup/connection-setup.component";
import LoginFormComponent from "../../components/app/login-form/login-form.component";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      login: {
        username: "",
        password: "",
        remember: false,
      },
      advanced: {
        name: "",
        icon: "",
        color: "",
        uri: "",
        ssh: {
          host: "",
          port: 22,
          username: "",
          password: "",
          authType: "password",
        },
        tls: {
          keyFile: "",
          password: "",
          authorityFile: "",
          allowInvalidCertificate: false,
          allowInvalidHostName: false,
        },
      },
      disabled: false,
      waiting: false,
      credentials: false,
    };
  }

  doLogin() {
    // dispatch(loginUser({ username, password }));
  }
  doConnect() {}
  advancedConnection(credentials) {
    this.setState({
      ...this.state,
      credentials,
    });
  }

  updateLoginModel(login) {
    this.setState({
      ...this.state,
      login,
    });
    console.log(login);
  }
  updateConnectionModel(advanced) {
    this.setState({
      ...this.state,
      advanced,
    });
    console.log(advanced);
  }

  render() {
    return (
      <Wrapper className="login-page-wrapper full-screen centered-box">
        {!this.state.credentials ? (
          <ConnectionSetupComponent
            onConnect={() => this.doConnect()}
            onCancel={() => this.advancedConnection(true)}
            onModelChange={(model) => this.updateConnectionModel(model)}
            waiting={this.state.waiting}
            disabled={this.state.disabled}
          />
        ) : (
          <LoginFormComponent
            onLogin={() => this.doLogin()}
            onAdvancedConnection={() => this.advancedConnection(false)}
            onModelChange={(model) => this.updateLoginModel(model)}
            waiting={this.state.waiting}
            disabled={this.state.disabled}
          />
        )}
      </Wrapper>
    );
  }
}

export default LoginPage;
