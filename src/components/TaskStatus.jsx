import StatusCard from './StatusCard';

const TaskStatus = ({ status, handleStatusCompleteClick }) => {
  return (
    <div>
      <h1 className="text-2xl font-medium mb-3">Task Status</h1>
      <div className="grid gap-3 grid-cols-1">
        {status.map((ticketItem) => (
          <StatusCard
            key={ticketItem.id}
            ticketItem={ticketItem}
            handleStatusCompleteClick={handleStatusCompleteClick}
          ></StatusCard>
        ))}
      </div>
    </div>
  );
};

export default TaskStatus;
