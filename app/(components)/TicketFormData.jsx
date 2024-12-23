"use client";

import { useRouter } from "next/navigation";
import React, {useState} from "react";

const TicketFormData = ({ticket}) => {
    const EDITMMODE = ticket._id === "new" ? false : true;

    const router = useRouter();

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (EDITMMODE) {
            const res = await fetch(`/api/Tickets/${ticket._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({formData})
            })
    
            if (!res.ok) { 
                throw new Error("Failed to updated Ticket")
            }
        }
        else {
            const res = await fetch("/api/Tickets", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({formData})
            })
    
            if (!res.ok) { 
                throw new Error("Failed to create Ticket")
            }
         }

        router.refresh()
        router.push("/")
    }

    const startingTicketData = {
        title: "",
        description: "",
        category: "Hardware Problem",
        priority: 1,
        progress: 0,
        status: "not started",
    };

    if (EDITMMODE) {
        startingTicketData["title"] = ticket.title
        startingTicketData["description"] = ticket.description
        startingTicketData["category"] = ticket.category
        startingTicketData["priority"] = ticket.priority
        startingTicketData["progress"] = ticket.progress
        startingTicketData["status"] = ticket.useState
    }



    const [formData, setFormData] = useState(startingTicketData);

  return (
      <div className="flex justify-center">
          <form className="flex flex-col w-1/2 gap-3 " method="post" onSubmit={handleSubmit}>
              
              <h3>{EDITMMODE ? "Edit Your Ticket" : "Create Your Ticket"}</h3>
              <label>Title</label>
              <input
                  id="title"
                  value={formData.title}
                  name="title" type="text"
                  onChange={handleChange} required />
              
              <label>Description</label>
              <textarea
                  id="description"
                  value={formData.description}
                  name="description"
                  onChange={handleChange}
                  rows="5"
                  required
              />

              <label >Category</label>
              <select name="category"
                  value={formData.category} onChange={handleChange}>
                  <option value="Hardware Problem">
                      Hardware Problem
                  </option>
                  <option value="Software Problem">
                      Software Problem
                  </option>
                  <option value="Project">
                      Project
                  </option>
              </select>
              
              <label >Priority</label>
              <div>
                  <input id="priority-1"
                      name="priority"
                      type="radio"
                      onChange={handleChange}
                      value={1}
                      checked={formData.priority == 1}
                  />
                  <label >1</label>

                  <input id="priority-2"
                      name="priority"
                      type="radio"
                      onChange={handleChange}
                      value={2}
                      checked={formData.priority == 2}
                  />
                  <label >2</label>

                  <input id="priority-3"
                      name="priority"
                      type="radio"
                      onChange={handleChange}
                      value={3}
                      checked={formData.priority == 3}
                  />
                  <label >3</label>

                  <input id="priority-4"
                      name="priority"
                      type="radio"
                      onChange={handleChange}
                      value={4}
                      checked={formData.priority == 4}
                  />
                  <label >4</label>

                  <input id="priority-5"
                      name="priority"
                      type="radio"
                      onChange={handleChange}
                      value={5}
                      checked={formData.priority == 5}
                  />
                  <label >5</label>
              </div>

              <label >Progress</label>
              <input
                  type="range"
                  id="progress"
                  name="progress"
                  value={formData.progress}
                  min="0"
                  max="100"
                  onChange={handleChange}
              />

              <label >Status</label>
              <select value={formData.status} onChange={handleChange} name="status" id="status">
                  <option value="not started">Not Started</option>
                  <option value="started">Started</option>
                  <option value="done">Done</option>
              </select>

              <input type="submit" className="btn" value={EDITMMODE ? "UPDATE TICKET" : "CREATE TICKET"} />
          </form>
    </div>
  )
}

export default TicketFormData;