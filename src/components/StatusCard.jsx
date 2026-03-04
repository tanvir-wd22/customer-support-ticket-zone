const StatusCard = ({ ticketItem, handleStatusCompleteClick }) => {
  // console.log(ticketItem);
  const { title } = ticketItem;

  return (
    <div>
      <div className="card bg-base-300 shadow-sm">
        <div className="card-body">
          <h2 className="text-md font-medium">{title}</h2>
          <button
            onClick={() => handleStatusCompleteClick(ticketItem)}
            className="btn btn-sm btn-success btn-block"
          >
            Complete
          </button>
        </div>
      </div>
    </div>
  );
};

export default StatusCard;
