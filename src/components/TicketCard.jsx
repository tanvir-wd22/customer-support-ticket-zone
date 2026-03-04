const TicketCard = ({ ticketItem }) => {
  console.log(ticketItem);
  const { id, title, description, customer, priority, status, createdAt } =
    ticketItem;
  return (
    <div>
      <div className="card bg-base-300">
        <div className="card-body">
          {/* <div className="flex justify-between items-center">
            <h2 className="card-title">{title}</h2>
            <div className="badge badge-accent">{status}</div>
          </div> */}
          <div className="flex justify-between items-center">
            <h2 className="card-title">{title}</h2>
            <div className="badge badge-accent flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-green-800"></span>
              {status}
            </div>
          </div>

          <p>{description}</p>
          <div className="card-actions justify-between">
            <span>#{id}</span>
            <span
              className={
                priority === 'High Priority'
                  ? 'text-red-500'
                  : priority === 'Medium Priority'
                    ? 'text-yellow-500'
                    : 'text-green-500'
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
