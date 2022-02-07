import "../css/Receipt.css";
const Receipt = ({ person, order }) => {
  const { sauce, main, protein, rice, cost, drink } = order;
  return (
    <div className="receipt ">
      <div className="receipt-header">
        <div className="card-header">
          <h1>{person}</h1>
        </div>
        <div className="card-main">
          <h3>
            <div className="magenta">Main:</div> {main}
          </h3>
          <h3>Protein: {protein}</h3>
          <h3>
            <div className="magenta">Rice: </div>
            {rice}
          </h3>
          <h3>
            <div className="magenta">Sauce:</div> {sauce}
          </h3>
          <h3>
            <div className="magenta">Drink:</div> {drink}
          </h3>
          <h3>
            <div className="magenta">Cost:</div> {cost}
          </h3>
        </div>
      </div>
    </div>
  );
};
export default Receipt;
