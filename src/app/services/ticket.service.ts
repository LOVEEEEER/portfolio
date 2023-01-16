import httpService from "./http.service";
import { Ticket } from "../types/Ticket";

const ticketEndPoint = "tickets/";

const ticketService = {
  put: async (id: string, payload: Ticket) => {
    const { data } = await httpService.put(ticketEndPoint + id, payload);
    return data;
  },
};

export default ticketService;
