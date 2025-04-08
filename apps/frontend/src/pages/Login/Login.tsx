import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
const Login = () => {
  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const email = String(formdata.get('email'));
    const password = String(formdata.get('password'));
    toast.promise(
      async () => await axios.post('/api/user/login', {email, password}),
      {
        loading: 'Loading',
        success: () => {
          return 'Login was successful'
        },
        error: (err) => `This just happened: ${err.toString()}`,
      },
      {
        style: {
          minWidth: '250px',
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