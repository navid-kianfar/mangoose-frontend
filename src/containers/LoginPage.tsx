import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../actions/loginActions';
import {RootState} from "../types/states";

// Form Input Component
const Input: React.FC<{label: string, value: string, type: string, onChange: (value: string) => void}> = ({ label, value, type, onChange }) => (
    <div className="input-field">
        <label>{label}</label>
        <input type={type} value={value} onChange={(e) => onChange(e.target.value)} />
    </div>
);

// Form Component
const LoginForm: React.FC<{onSubmit: (username: string, password: string) => void}> = ({ onSubmit }) => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (e: React.FormEvent) => {
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
const LoginPage: React.FC = () => {
    const dispatch = useDispatch();
    const loginError = useSelector((state: RootState) => state.login.error);

    const handleLogin = (username: string, password: string) => {
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
