const ResolvedCard = ({ ticketItem }) => {
  const { title } = ticketItem;
  return (
    <div>
      <div className="card bg-base-300 shadow-sm">
        <div className="card-body">
          <h2 className="text-md font-bold">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ResolvedCard;
