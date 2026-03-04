const TicketCard = ({ ticketItem, handleTicketCardClick }) => {
  // console.log(ticketItem);
  const { id, title, description, customer, priority, status, createdAt } =
    ticketItem;

  return (
    <div onClick={() => handleTicketCardClick(ticketItem)}>
      <div className="card bg-base-300">
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2 className="card-title">{title}</h2>
            <div
              className={`flex items-center gap-1 text-xs ${status === 'Open' ? 'badge badge-success' : 'badge badge-warning'}`}
            >
              <span
                className={`h-2 w-2 rounded-full ${status === 'Open' ? 'bg-green-900' : 'bg-yellow-900'}`}
              ></span>
              <span>{status}</span>
            </div>
          </div>
          <p>{description}</p>
          <div className="card-actions justify-between">
            <span>#{id}</span>
            <span
              className={
                priority === 'High Priority'
                  ? 'text-red-600'
                  : priority === 'Medium Priority'
                    ? 'text-yellow-600'
                    : 'text-green-600'
              }
            >
              {priority}
            </span>

            <span>{customer}</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
