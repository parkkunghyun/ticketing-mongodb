
import Link from "next/link";
import DeleteBlock from "./DeleteBlock";
import PriorityDisplay from "./PriorityDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";

const TicketCard = ({ ticket }) => {

  const formatTimestamp = (timestamp) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(timestamp)
    const formattedDate = date.toLocaleString("en-US", options);

    return formattedDate;
  }


  return (
      <div className="flex flex-col p-3 m-2 rounded-md shadow-lg bg-card hover:bg-card-hover">
          <div className="flex mb-3">
              <PriorityDisplay priority={ticket.priority} />
              <div className="ml-auto">
                <DeleteBlock id={ticket._id} />
              </div>
      </div>
      
      <Link href={`/TicketPage/${ticket._id}`} style={{display: "contents"}}>
        <h4>{ticket.title}</h4>
        <hr className="h-px mb-2 border-0 bg-page" />
        {/* 자동 줄바꿈 해줌 */}
        <p className="whitespace-pre-wrap">{ticket.description}</p>

        <div className="flex-grow"></div>

        <div className="flex justify-between mt-2">
          <div className="flex flex-col">
            <p className="my-1 text-xs">{formatTimestamp(ticket.createdAt)}</p>
            <ProgressDisplay progress={ticket.progress} />
          </div>
          <div className="flex items-end ">
            <StatusDisplay status={ticket.status} />
          </div>
        </div>
      </Link>

      
    </div>
  )
}

export default TicketCard