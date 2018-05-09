import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Workspace from "./app/Workspace";
import {store} from './model/store/Store'
import {Provider} from "react-redux";

const globalStore = store.init();

ReactDOM.render((<Provider store={globalStore}><Workspace/></Provider>), document.getElementById('root'));
