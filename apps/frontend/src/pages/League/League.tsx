import Carousel from '../../utils/Carousel.tsx';
import { Link } from 'react-router-dom';

const League = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <h1 className="text-3xl font-extrabold tracking-tight mb-20">Leagues</h1>
      </div>
      <div className="flex justify-center">
        <Carousel className="" array={[<div>1</div>, <div>2</div>, <div>3</div>]} />
      </div>
      <div className='flex justify-center mt-10'>
        <Link to="/league/create" className="btn btn-primary">Create a League</Link>
        <button className="btn btn-secondary ml-25">Join a League</button>
      </div>
    </div>

  )
}

export default League;