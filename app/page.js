

import TicketCard from "./(components)/TicketCard";


const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/Tickets", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    return res.json();
  } catch (error) {
    console.error("Failed to get Tickets:", error);
    return { tickets: [] }; // 기본값 반환
  }
};


const Home = async() => {

  const { tickets } = await getTickets();

  const uniqueCategories = [
    ... new Set(tickets?.map(({ category }) => category)),
  ]


  return (
    <div className="p-5 ">
      <div>
        {tickets && uniqueCategories.map((uniqueCategory, categoryIndex) => (
          <div className="mb-4" key={categoryIndex}>
            <h2>{uniqueCategory}</h2>
            <div className="lg:grid lg:grid-cols-2 xl:grid xl:grid-cols-4">
              {
                tickets.filter((ticket) => ticket.category === uniqueCategory)
                  .map((filteredTicket, _index) => (<TicketCard id={_index} ticket={filteredTicket} key={_index} />))
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
