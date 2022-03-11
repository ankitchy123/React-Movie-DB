import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Movie from './Components/Movie';
import NotFound from './Components/NotFound';
import Login from './Components/login';
// Context
import UserProvider from './context';

// Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Styles
import { GlobalStyle } from './GlobalStyle'

const App = () => (
  <Router>
    <UserProvider>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:movieId' element={<Movie />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </UserProvider>
  </Router>
)

export default App;