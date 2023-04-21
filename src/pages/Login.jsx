import classes from '../index.module.css';
import {
    useLoaderData,
    Form,
    redirect,
    useActionData,
    useNavigation,
} from 'react-router-dom';
import { loginUser } from '../utility/loginApi';

export const loginAction = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get('email');
    const password = formData.get('password');
    const pathname =
        new URL(request.url).searchParams.get('redirectTo') || '/host';
    try {
        const data = await loginUser({ email, password });
        localStorage.setItem('loggedin', true);
        return redirect(pathname);
    } catch (error) {
        return error.message;
    }
};

export const loginLoader = ({ request }) => {
    return new URL(request.url).searchParams.get('message');
};
const Login = () => {
    const message = useLoaderData();
    const errorMessage = useActionData();
    const navigation = useNavigation();

    return (
        <div className={classes['login-container']}>
            <h1>Sign in to your account</h1>
            {message && <h3 className={classes['login-error']}>{message}</h3>}
            {errorMessage && (
                <h3 className={classes['login-error']}>{errorMessage}</h3>
            )}
            <Form method='post' className={classes['login-form']}>
                <input name='email' type='email' placeholder='Email address' />
                <input name='password' type='password' placeholder='Password' />
                <button disabled={navigation.state === 'submitting'}>
                    {navigation.state === 'submitting'
                        ? 'Logging in...'
                        : 'Log in'}
                </button>
            </Form>
        </div>
    );
};

export default Login;
