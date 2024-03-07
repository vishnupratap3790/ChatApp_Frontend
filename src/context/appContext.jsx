import {io} from 'socket.io-client';
import React from 'react';
const SOCKET_URL = "https://chatapp-backend-x37e.onrender.com";

export const socket = io(SOCKET_URL,  {transports: ['polling']});
 

export const AppContext = React.createContext();