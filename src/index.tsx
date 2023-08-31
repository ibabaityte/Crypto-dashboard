import * as React from "react";
import './index.css';
import App from './App';  

import { Root, createRoot } from 'react-dom/client';

const domNode: HTMLElement= document.getElementById('root')!;
const root: Root = createRoot(domNode);

root.render(<App />);