import React from "react";
import Wrapper from "./connection-setup.style";
import { FormattedMessage } from "react-intl";

class ConnectionSetupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saving: false,
      connecting: false,
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
    };
  }

  render() {
    return (
      <Wrapper className="connection-setup-wrapper">
        <div className="app-dialog">
          <div className="header">
            <h3>
              <FormattedMessage id="app.advanced.connection.setup" />
            </h3>
          </div>
          <div className="content"></div>
          <div className="footer">
            <div className="actions">
              <button
                className="primary"
                disabled={this.state.connecting || this.state.saving}
              >
                {this.state.saving && <i className="spinner ti ti-loader"></i>}
                <FormattedMessage id="app.save.changes" />
              </button>
              <button
                className="success"
                disabled={this.state.connecting || this.state.saving}
              >
                {this.state.connecting && (
                  <i className="spinner ti ti-loader"></i>
                )}
                <FormattedMessage id="app.test.connection" />
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

export default ConnectionSetupComponent;
