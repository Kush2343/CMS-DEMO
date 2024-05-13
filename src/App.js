import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Blog from './Components/Blog';
import BlogDetail from './Components/BlogDetail';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Blog/>}/>
      <Route path='/blogs' element={<Blog/>}/>
      <Route path='/blogdetail/:id' element={<BlogDetail/>}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
