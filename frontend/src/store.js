import { createStore } from 'redux';
import { Reducers } from './reducers/index.js';

export const Store = createStore(Reducers);