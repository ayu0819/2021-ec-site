import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  import {Top,Ajax,GithubApi,JokeJson,Synchronous,YouTubeApi} from "./Pages";

function App() {
  return (
  <Router>
    <Switch> 
      <Route exact path="/" component={Top} /> 
      <Route exact path="/ajax" component={Ajax} />
      <Route exact path="/githubapi" component={GithubApi} />
      <Route exact path="/jokejson" component={JokeJson} />
      <Route exact path="/synchronous" component={Synchronous} />
      <Route exact path="/youtubeapi" component={YouTubeApi} />
    </Switch>
  </Router>
  );
}

export default App;
