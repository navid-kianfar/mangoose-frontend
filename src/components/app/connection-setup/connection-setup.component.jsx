import React from "react";

class ConnectionSetupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      icon: '',
      color: '',
      uri: '',
      ssh: {
        host: '',
        port: 22,
        username: '',
        password: '',
        authType: 'password'
      },
      tls: {
        keyFile: '',
        password: '',
        authorityFile: '',
        allowInvalidCertificate: false,
        allowInvalidHostName: false
      }
    };
  }

  render() {
    return <></>;
  }
}

export default ConnectionSetupComponent;
