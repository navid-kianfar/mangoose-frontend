import React from "react";
import Wrapper from "./connection-setup.style";
import { FormattedMessage } from "react-intl";
import {
  createColorPickerElement,
  createFormElement,
  createIconPreviewElement,
  createTextElement,
} from "../../../utils/form-helper";
import FormComponent from "../../core/form/form.component";

const form = createFormElement([
  {
    size: 1,
    elements: [
      createColorPickerElement({
        config: {
          field: "",
          label: "app.color",
        },
      }),
    ],
  },
  {
    size: 2,
    elements: [
      createTextElement({
        config: {
          field: "",
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
    size: 8,
    elements: [
      createTextElement({
        config: {
          field: "",
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
]);

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
              onModelChange={() => {}}
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
