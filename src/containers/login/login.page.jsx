import React from "react";
import { FormattedMessage } from "react-intl";
// import { useDispatch, useSelector } from "react-redux";
// import { loginUser } from "../actions/login-actions";
import Wrapper from "./login.style";
import FormComponent from "../../components/core/form/form.component";
import {
  createCheckBoxElement,
  createFormElement,
  createTextElement,
} from "../../utils/form-helper";

class LoginPage extends React.Component {
  form = createFormElement([
    createTextElement({
      config: {
        field: "username",
        label: "app.username",
      },
      params: {
        placeholder: "app.username.enter",
        model: ''
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
        model: ''
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
  ]);

  constructor(props) {
    super(props);
    this.state = {};
  }

  updateModel(model) {}

  render() {
    return (
      <Wrapper className="login-page-wrapper full-screen centered-box">
        <div className="app-dialog">
          <div className="header">
            <h3>
              <FormattedMessage id="app.provide.credentials" />
            </h3>
          </div>
          <div className="content">
            <FormComponent
              form={this.form}
              enabled={this.state.enabled}
              wating={this.state.wating}
              onModelChange={(model) => this.updateModel(model)}
            />
          </div>
          <div className="footer">
            <div className="actions">
              <button className="primary">
                <FormattedMessage id="app.login" />
              </button>
              <button>
                <FormattedMessage id="app.advanced.connection.setup" />
              </button>
            </div>
          </div>
        </div>
      </Wrapper>
    );
  }
}

// const Input = ({ label, value, type, onChange }) => (
//     <div className="input-field">
//         <label>{label}</label>
//         <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
//     </div>
// );
//
// const LoginForm = ({ onSubmit }) => {
//     const [username, setUsername] = React.useState('');
//     const [password, setPassword] = React.useState('');
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//         onSubmit(username, password);
//     };
//
//     return (
//         <form onSubmit={handleSubmit}>
//             <Input label="Username:" value={username} type="text" onChange={setUsername} />
//             <Input label="Password:" value={password} type="password" onChange={setPassword} />
//             <button type="submit">Login</button>
//         </form>
//     );
// };
//
// const LoginPage2 = () => {
//     const dispatch = useDispatch();
//     const loginError = useSelector((state) => state.login.error);
//
//     const handleLogin = (username, password) => {
//         dispatch(loginUser({ username, password }));
//     };
//
//     return (
//         <div>
//             <LoginForm onSubmit={handleLogin} />
//             {loginError && <p>{loginError}</p>}
//         </div>
//     );
// };

export default LoginPage;
