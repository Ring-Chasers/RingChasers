import Carousel from '../../utils/Carousel.tsx';

const League = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <h1 className="text-3xl font-extrabold tracking-tight mb-20">Leagues</h1>
      </div>
      <div className='flex justify-center'>
        <Carousel className="" array={[1, 2, 3]} />
      </div>
    </div>

  )
}

export default League;