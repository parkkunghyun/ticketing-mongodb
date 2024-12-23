import TicketFormData from "../../(components)/TicketFormData";

const getTicketById = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/api/Tickets/${id}`, {
            cache: "no-store"
        })

        if (!res.ok) {
            throw new Error("Failed to get ticket.")
        }
        return res.json();
    } catch (error) {
        console.error(error);
    }
};

const TicketPage = async ({ params }) => {
    const EDITMODE = params.id === "new" ? false : true

    let updateTicketData = {};

    if (EDITMODE) {
        updateTicketData = await getTicketById(params.id);
        updateTicketData = updateTicketData.foundTicket;
        console.log(updateTicketData);
    } else {
        updateTicketData = {
            _id: "new"
        };
    }
    console.log(EDITMODE, updateTicketData);
    return (
        <TicketFormData ticket={updateTicketData} />
    );
};

export default TicketPage;
