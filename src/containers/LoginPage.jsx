import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/loginActions';

// Form Input Component
const Input = ({ label, value, type, onChange }) => (
    <div className="input-field">
        <label>{label}</label>
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
);

const LoginForm = ({ onSubmit }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(username, password);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input label="Username:" value={username} type="text" onChange={setUsername} />
            <Input label="Password:" value={password} type="password" onChange={setPassword} />
            <button type="submit">Login</button>
        </form>
    );
};

// Login Page Component
const LoginPage = () => {
    const dispatch = useDispatch();
    const loginError = useSelector((state) => state.login.error);

    const handleLogin = (username, password) => {
        dispatch(loginUser({ username, password }));
    };

    return (
        <div>
            <LoginForm onSubmit={handleLogin} />
            {loginError && <p>{loginError}</p>}
        </div>
    );
};

export default LoginPage;
