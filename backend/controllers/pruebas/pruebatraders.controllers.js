import httpRequests from "./mainCRUD.js";
import Trader from "../../models/Traders.js";

const traderObject = new httpRequests(Trader);

console.log(await traderObject.obtainAll());

export { traderObject };