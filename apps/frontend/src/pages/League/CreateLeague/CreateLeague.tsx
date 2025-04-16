import React from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
const CreateLeague: React.FC = () => {

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const leagueName = formData.get('leagueName') as string;
    console.log('League Name:', leagueName);
    await toast.promise(
      async () => await axios.post('/api/league/create', { leagueName }),
      {
        loading: 'Creating League...',
        success: () => {
          return (
            <div className="flex flex-col">
              <span>League created successfully</span>
              <Link className="btn btn-neutral mt-4" to="/league">
                Go to League
              </Link>
            </div>
          )
        },
        error: (err) => `Error creating league: ${err.toString()}`,
      },
      {
        style: {
          minWidth: '500 px',
        },
        success: {
          duration: 5000,
          icon: '🔥',
        },
      });
  }
  return (
    <form className="flex justify-center mt-20" onSubmit={handleSubmit}>
      <fieldset className="fieldset w-xs bg-base-200 border border-base-300 p-4 rounded-box">
        <legend className="fieldset-legend">Create League</legend>

        <label className="fieldset-label">League Name</label>
        <input name="leagueName" type="leagueName" className="input" placeholder="League Name" required/>

        <button className="btn btn-neutral mt-4">Create League</button>
      </fieldset>
      <Toaster/>
    </form>
  )
};

export default CreateLeague;