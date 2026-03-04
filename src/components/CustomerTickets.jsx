import { use } from 'react';
import TicketCard from '../components/TicketCard';

const CustomerTickets = ({ ticketsPromise, handleTicketCardClick }) => {
  //   console.log(ticketsPromise);
  const tickets = use(ticketsPromise);
  //   console.log(tickets);
  return (
    <div>
      <h1 className="text-2xl font-semibold mb-3">Customer Tickets</h1>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        {tickets.map((ticketItem) => (
          <TicketCard key={ticketItem.id} ticketItem={ticketItem} handleTicketCardClick={handleTicketCardClick}></TicketCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
