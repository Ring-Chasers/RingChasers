import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
const Signup = () => {
  const navigate = useNavigate();
  const handleSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formdata = new FormData(e.currentTarget);
    const firstName = formdata.get('firstName');
    const lastName = formdata.get('lastName');
    const email = formdata.get('email');
    const password = formdata.get('password');
    toast.promise(
      async () => await axios.post('/api/user/signup', {email, password, firstName, lastName, permissions: 'USER'}),
      {
        loading: 'Loading',
        success: () => {
          navigate('/login');
          return 'Signup was successful';
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

        <label className="fieldset-label">First Name</label>
        <input name="firstName" type="text" className="input" placeholder="First Name" required/>

        <label className="fieldset-label">Last Name</label>
        <input name="lastName" type="text" className="input" placeholder="Last Name" required/>

        <label className="fieldset-label">Email</label>
        <input name="email" type="email" className="input" placeholder="Email" required/>

        <label className="fieldset-label">Password</label>
        <input name="password" type="password" className="input" placeholder="Password" required/>

        <button className="btn btn-neutral mt-4">Signup</button>
      </fieldset>
      <Toaster/>
    </form>

  )
}

export default Signup;