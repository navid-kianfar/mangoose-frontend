import React from "react";
import Wrapper from "./connection-setup.style";
import { FormattedMessage } from "react-intl";
import {
  createFormElement,
  createCheckBoxElement,
  createColorPickerElement,
  createIconPreviewElement,
  createDropdownElement,
  createFileElement,
  createTextElement,
} from "../../../utils/form-helper";
import FormComponent from "../../core/form/form.component";

const form = createFormElement([
  {
    size: 1,
    elements: [
      createColorPickerElement({
        config: {
          field: "color",
          label: "app.color",
        },
      }),
    ],
  },
  {
    size: 5,
    elements: [
      createTextElement({
        config: {
          field: "name",
          label: "app.connection.name",
        },
        params: {
          model: "",
          placeholder: "app.new.connection",
        },
      }),
    ],
  },
  {
    size: 5,
    elements: [
      createTextElement({
        config: {
          field: "favicon",
          label: "app.favicon",
        },
        params: {
          model: "",
          placeholder: "app.favicon.placeholder",
        },
      }),
    ],
  },
  {
    size: 1,
    elements: [
      createIconPreviewElement({
        config: {
          label: "app.preview",
        },
        params: {
          model: "ti ti-settings",
        },
      }),
    ],
  },
  {
    size: 12,
    elements: [
      createTextElement({
        config: {
          field: "uri",
          label: "app.mongo.uri",
        },
        params: {
          model: "",
          placeholder: "app.mongo.uri.placeholder",
        },
      }),
    ],
  },
  {
    size: 2,
    elements: [
      createTextElement({
        config: {
          field: "ssh_host",
          label: "app.ssh.host",
        },
        params: {
          model: "",
          placeholder: "app.ssh.host.placeholder",
        },
      }),
    ],
  },
  {
    size: 1,
    elements: [
      createTextElement({
        config: {
          field: "ssh_port",
          label: "app.ssh.port",
        },
        params: {
          model: "",
          placeholder: "app.ssh.port.number",
        },
      }),
    ],
  },
  {
    size: 3,
    elements: [
      createTextElement({
        config: {
          field: "ssh_username",
          label: "app.username",
        },
        params: {
          model: "",
          placeholder: "app.username",
        },
      }),
    ],
  },
  {
    size: 3,
    elements: [
      createDropdownElement({
        config: {
          field: "ssh_auth",
          label: "app.auth.type",
        },
        params: {
          model: 1,
          items: [
            { text: "app.password", value: 1 },
            { text: "app.private.key", value: 2 },
            { text: "app.ssh.agent", value: 3 },
          ],
        },
      }),
    ],
  },
  {
    size: 3,
    elements: [
      createTextElement({
        config: {
          field: "ssh_password",
          label: "app.password",
        },
        params: {
          model: "",
          password: true,
          placeholder: "app.password",
        },
      }),
    ],
  },
  {
    size: 4,
    elements: [
      createFileElement({
        config: {
          field: "ssl_certificate",
          label: "app.tls.ssl.certificate",
        },
        params: {
          model: "",
          placeholder: "app.select.file",
        },
      }),
    ],
  },
  {
    size: 4,
    elements: [
      createTextElement({
        config: {
          field: "ssl_password",
          label: "app.certificate.password",
        },
        params: {
          model: "",
          password: true,
          placeholder: "app.password",
        },
      }),
    ],
  },
  {
    size: 4,
    elements: [
      createFileElement({
        config: {
          field: "ssl_authority_file",
          label: "app.certificate.authority.file",
        },
        params: {
          model: "",
          placeholder: "app.select.file",
        },
      }),
    ],
  },
  {
    size: 6,
    elements: [
      createCheckBoxElement({
        config: {
          field: "ssl_invalid_certificate",
          label: "",
        },
        params: {
          model: false,
          label: "app.allow.invalid.certificate",
        },
      }),
    ],
  },
  {
    size: 6,
    elements: [
      createCheckBoxElement({
        config: {
          field: "ssl_invalid_hostname",
          label: "",
        },
        params: {
          model: false,
          label: "app.allow.invalid.hostname",
        },
      }),
    ],
  },
]);

class ConnectionSetupComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saving: false,
      connecting: false,
      model: {
        color: "",
        favicon: "",
        name: "",
        uri: "",
        ssh_auth: 1,
        ssh_host: "",
        ssh_password: "",
        ssh_port: "",
        ssh_username: "",
        ssl_authority_file: "",
        ssl_certificate: "",
        ssl_invalid_certificate: false,
        ssl_invalid_hostname: false,
        ssl_password: "",
      },
    };
  }

  onModelChange(model) {
    this.setState({
      ...this.state,
      model,
    });

    console.log(model);
  }

  doConnect() {}
  render() {
    return (
      <Wrapper className="connection-setup-wrapper">
        <div className="app-dialog">
          <div className="header">
            {/*<button>*/}
            {/*  <i className="ti ti-chevron-left"></i>*/}
            {/*  <span>Back</span>*/}
            {/*</button>*/}
            <h3>
              <FormattedMessage id="app.advanced.connection.setup" />
            </h3>
            <button>
              <i className="ti ti-x"></i>
            </button>
          </div>
          <div className="content">
            <FormComponent
              form={form}
              disabled={false}
              waiting={false}
              onModelChange={(e) => this.onModelChange(e)}
            />
          </div>
          <div className="footer">
            {/*<button>*/}
            {/*  <i className="ti ti-chevron-left"></i>*/}
            {/*  <span>Back</span>*/}
            {/*</button>*/}
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
