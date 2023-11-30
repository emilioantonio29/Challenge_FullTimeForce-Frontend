import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CommonMainLoader from './components/common/main-loader';
import { UserGlobalContextMemorySpace } from './contexts/user-context';

const App = () => {
  return (
    <>

    <CommonMainLoader></CommonMainLoader>
    
    </>
  );
}

export default App;
