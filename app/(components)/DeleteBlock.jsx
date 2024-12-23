"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";

const DeleteBlock = ({ id }) => {
    const router = useRouter();
    const deleteTicket = async () => {
        const res = await fetch(`http://localhost:3000/api/Tickets/${id}`,
            { method: "DELETE", }
        );
        if (res.ok) {
            router.refresh();
        }
    };

    return (
        <FontAwesomeIcon
            onClick={deleteTicket}
            icon={faX} className="text-red-400 hover:text-red-200 hover:cursor-pointer">
        </FontAwesomeIcon>
    );
};

export default DeleteBlock;