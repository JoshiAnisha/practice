export const Card1 = ({ viewData }) => {
  return (
    <div className="card1">
     <h3>{viewData.attributes.name}</h3>
    <p>{viewData.attributes.description}</p>
    </div>
  );
};
