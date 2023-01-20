import PropTypes from "prop-types";
import './cards.css'
function Card({card}) {
  return (
    <div className="card text-center bg-dark animate__animated animate__fadeInUp">
        <div className="overflow">
        <img src={card.image} alt="image1" className="card-img-top"/>
        </div>
        
        <div className="card-body text-white">
            <h4 className="card-title" >{card.title}</h4>
            <p className="card-text">{card.description}</p>
            <a href={card.url} className="btn btn-outline-secondary rounded-0" target="_blank">Go somewhere</a>
        </div>
    </div>
  )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    image:PropTypes.string,
    url:PropTypes.string
}
export default Card