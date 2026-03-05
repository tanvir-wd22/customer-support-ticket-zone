import { use, useEffect } from 'react';
import TicketCard from '../components/TicketCard';

const CustomerTickets = ({
  ticketsPromise,
  handleTicketCardClick,
  cardTickets,
  setCardTickets,
}) => {
  //   console.log(ticketsPromise);
  const tickets = use(ticketsPromise);
  //   console.log(tickets);

  // ========= manage state from App parent componet ===========
  useEffect(() => {
    setCardTickets(tickets);
  }, [tickets, setCardTickets]);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-3">Customer Tickets</h1>
      <div className="grid gap-6 grid-cols-1 lg:grid-cols-2">
        {cardTickets.map((ticketItem) => (
          <TicketCard
            key={ticketItem.id}
            ticketItem={ticketItem}
            handleTicketCardClick={handleTicketCardClick}
          ></TicketCard>
        ))}
      </div>
    </div>
  );
};

export default CustomerTickets;
