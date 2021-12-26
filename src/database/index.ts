import { config } from "../config";

export const dbConnection = {
  url: config.mongo,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
};
