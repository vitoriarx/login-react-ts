import ReactDOM from 'react-dom/client';
import App from './app/App';
import './globals.css';

const divRoot = document.getElementById('root') as HTMLElement;
ReactDOM.createRoot(divRoot).render(<App />);