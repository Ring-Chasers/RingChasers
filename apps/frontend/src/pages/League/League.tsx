import Carousel from '../../utils/Carousel.tsx';

const League = () => {
  return (
    <div className="mt-20">
      <div className="flex justify-center">
        <h1 className="text-3xl font-extrabold tracking-tight mb-20">Leagues</h1>
      </div>
      <div className='flex justify-center'>
        <Carousel className="" array={[<div>1</div>, <div>2</div>, <div>3</div>]} />
      </div>
    </div>

  )
}

export default League;