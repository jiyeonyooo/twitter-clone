import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase';
import { Link, useNavigate } from 'react-router-dom';
import { FirebaseError } from 'firebase/app';
import { Error, Form, Input, Switcher, Title, Wrapper } from '../components/auth-components';
import GithubButton from '../components/github-btn';

export default function CreateAcount () {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        const {target : {name, value}} = e;
        if (name === 'email') {
            setEmail(value);
        } else if (name === 'password') {
            setPassword(value);
        }
    };
    const onSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(""); //error값 초기화
        if (isLoading || email === "" || password === "") return;
        try {
            setIsLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/");
        } catch (e) {
            if (e instanceof FirebaseError) {
                setError(e.message);
            }
        } finally {
            setIsLoading(false);
        }
        console.log(name, email, password);
    };

    return (
        <Wrapper>
            <Title>Login to X</Title>
            <Form onSubmit={onSubmit}>
                <Input onChange={onChange} name='email' value={email} placeholder='email' type='email' required></Input>
                <Input onChange={onChange} name='password' value={password} placeholder='password' type='password' required></Input>
                <Input type='submit' value={isLoading ? "Loading..." : "Login"}></Input>
            </Form>
            { error !== "" ? <Error>{error}</Error> : null}
            <Switcher>
                Don't have an account? 
                <Link to="/create-account">Create one &rarr;</Link>
            </Switcher>
            <GithubButton></GithubButton>
        </Wrapper>
    );
}