import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const Signup = () => {
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const email = formdata.get('email');
    const password = formdata.get('password');
    toast.promise(
      async () => await axios.post('/api/signup', {email, password}),
      {
        loading: 'Loading',
        success: () => {
          return 'Signup was successful'
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
    <form onSubmit={handleSignup} className="flex justify-center mt-20">
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Signup</legend>

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

export default Signup;