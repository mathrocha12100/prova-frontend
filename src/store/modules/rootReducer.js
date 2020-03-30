import { combineReducers } from 'redux';

import auth from './auth/reducer';
import cliente from './cliente/reducer';
import usuario from './usuario/reducer';

export default combineReducers({
  auth,
  cliente,
  usuario,
});
