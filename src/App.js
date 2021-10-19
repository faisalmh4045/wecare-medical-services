import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import AuthProvider from './context/AuthProvider';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Registration from './components/Registration/Registration';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetails from './components/ServiceDetails/ServiceDetails';

function App() {
  
  return (
    <div>
      <AuthProvider>
        <Router>
          <NavBar></NavBar>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/about'>
              <About></About>
            </Route>
            <PrivateRoute path='/service-details/:serviceId'>
              <ServiceDetails></ServiceDetails>
            </PrivateRoute>
            <Route path='/contact'>
              <Contact></Contact>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Registration></Registration>
            </Route>
            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
