import express, { Router } from "express";
import helmet from "helmet";
import cors from "cors";
import { connect } from "mongoose";
import { createServer, Server } from "http";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { dbConnection } from "./database";
import { engine } from "express-handlebars";
import Routes from './interfaces/routes.interface';
import path from "path";

class App {
  public app: express.Application;
  public port: string | number;
  public env: string;
  public server: Server;
  constructor(routes: Routes[]) {
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.env = process.env.NODE_DEV || "developement";
    this.server = createServer(this.app);
    this.connectDataBase();
    this.initializeMiddlewares();
    this.initializeRoutes(routes);
  }

  public listen():void {
    this.server.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }

  private async connectDataBase():Promise<void> {
    try {
      await connect(dbConnection.url);
      console.log("Server connected successfully ");
    } catch (error) {
      console.log(`Error to run server ${error}`);
    }
  }

  private initializeRoutes(routes: Routes[]){
    routes.forEach((route,index,routes)=>{
      this.app.use('/',route?.router)
    })
  }

  private initializeMiddlewares():void {
    this.app.engine("handlebars", engine());
    this.app.set("view engine", "handlebars");
    this.app.set("views", path.join(__dirname, "resources/views"));
    this.app.use(morgan("combined"));
    this.app.use(cors({ origin: true, credentials: true }));
    this.app.use(helmet());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cookieParser());
  }
}

export default App;
