
import App from './app';
import UserRoute from './routes/user';

const app = new App([new UserRoute()]);
app.listen();