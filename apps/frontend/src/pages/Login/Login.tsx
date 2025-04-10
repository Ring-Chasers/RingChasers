import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Login = () => {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const email = String(formdata.get('email'));
    const password = String(formdata.get('password'));
    await toast.promise(
      async () => await axios.post('/api/user/login', {email, password}),
      {
        loading: 'Loading',
        success: () => {
          return (
            <div className="flex flex-col">
              <span>Login was successful</span>
              <Link
                className="btn btn-neutral mt-4"
                to="/"
              >
                Go to Home
              </Link>
            </div>
          )
        },
        error: (err) => `This just happened: ${err.toString()}`,
      },
      {
        style: {
          minWidth: '500 px',
        },
        success: {
          duration: 5000,
          icon: '🔥',
        },
      }
    );
  }
  return (
    <form onSubmit={handleLogin} className="flex justify-center mt-20">
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Login</legend>

        <label className="fieldset-label">Email</label>
        <input name="email" type="email" className="input" placeholder="Email" required/>

        <label className="fieldset-label">Password</label>
        <input name="password" type="password" className="input" placeholder="Password" required/>

        <button className="btn btn-neutral mt-4">Login</button>
      </fieldset>
      <Toaster/>
    </form>
  )
}

export default Login;