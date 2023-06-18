import { FormattedMessage } from "react-intl";
import FormComponent from "../../core/form/form.component";
import React from "react";
import {
  createCheckBoxElement,
  createFormElement,
  createTextElement,
} from "../../../utils/form-helper";

const form = createFormElement([
  {
    size: 12,
    elements: [
      createTextElement({
        config: {
          field: "username",
          label: "app.username",
        },
        params: {
          placeholder: "app.username.enter",
          model: "",
        },
        validation: {
          required: {
            value: true,
            message: "app.username.required",
          },
        },
      }),
      createTextElement({
        config: {
          field: "password",
          label: "app.password",
        },
        params: {
          password: true,
          placeholder: "app.password.enter",
          model: "",
        },
        validation: {
          required: {
            value: true,
            message: "app.password.required",
          },
        },
      }),
      createCheckBoxElement({
        config: {
          field: "remember",
          label: "",
        },
        params: {
          model: false,
          label: "app.remember.me",
        },
      }),
    ],
  },
]);

const LoginFormComponent = ({ disabled, waiting, onModelChange, onLogin }) => {
  return (
    <div className="app-dialog">
      <div className="header">
        <h3>
          <FormattedMessage id="app.provide.credentials" />
        </h3>
      </div>
      <div className="content">
        <FormComponent
          form={form}
          disabled={disabled}
          waiting={waiting}
          onModelChange={onModelChange}
        />
      </div>
      <div className="footer">
        <div className="actions">
          <button onClick={onLogin} className="primary">
            {waiting && <i className="spinner ti ti-loader"></i>}
            <FormattedMessage id="app.login" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginFormComponent;
