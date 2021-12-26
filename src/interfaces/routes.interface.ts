import { Router } from "express";
interface routeAdapter{
    path?: string;
    router:Router;
}
export default routeAdapter;