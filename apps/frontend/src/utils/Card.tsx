import { Link } from 'react-router-dom';
const Card = ({title, description, buttonName, to, className}: {title: string, description: string, buttonName: string, to: string, className: string}) => {
  return (
    <div className={'card bg-base-200 shadow-sm' + ' ' + className}>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link to={to} className=" bg-base-300 badge badge-outline">{buttonName}</Link>
        </div>
      </div>
    </div>
  )
}
export default Card;