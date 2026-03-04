import ResolvedCard from './ResolvedCard';

const ResolvedTask = ({ resolved }) => {
  return (
    <div>
      <h1 className="text-2xl font-medium mb-3">Resolved Task</h1>
      <div className="grid gap-3 grid-cols-1">
        {resolved.map((ticketItem) => (
          <ResolvedCard
            key={ticketItem.id}
            ticketItem={ticketItem}
          ></ResolvedCard>
        ))}
      </div>
    </div>
  );
};

export default ResolvedTask;
