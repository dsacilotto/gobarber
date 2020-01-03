import Reactroton from 'reactotron-react-js';
import { reactotronRedux } from 'reactotron-redux';
import reactrotonSaga from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactroton.configure()
    .use(reactotronRedux())
    .use(reactrotonSaga())
    .connect();

  tron.clear();

  console.tron = tron;
}
