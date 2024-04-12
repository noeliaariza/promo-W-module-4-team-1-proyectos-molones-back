import "../scss/components/CardUrl.scss";
import PropTypes from "prop-types";

function CardUrl({ cardUrl }) {
  console.log(cardUrl);
  return (
    <div className="messageCardCreated">
      <p>La tarjeta ha sido creada:</p>
      <a href={cardUrl} target="_blank">
        {cardUrl}
      </a>
    </div>
  );
}
CardUrl.propTypes = {
  cardUrl: PropTypes.string.isRequired,
};

export default CardUrl;
