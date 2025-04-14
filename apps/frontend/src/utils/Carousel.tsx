import React from "react";

const Carousel = ({ array, className }: { array: React.JSX.Element[], className: string }) => {
  return (
    <div className={'carousel' + ' ' + className}>
      {array.map((item, i) => (
        <div id={`slide${i + 1}`} className="carousel-item relative w-full" key={i}>
          {item}
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href={`#slide${i === 0 ? array.length : i}`} className="btn btn-circle">❮</a>
            <a href={`#slide${i === array.length - 1 ? 1 : i + 2}`} className="btn btn-circle">❯</a>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Carousel;