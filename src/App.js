import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

export function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/about" exact component={About}/>
            <Route component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}