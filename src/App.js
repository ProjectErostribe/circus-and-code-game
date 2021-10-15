import React, {useState} from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import logo from '.logo.svg';
import '.App.css';
import RoomData from '.components/RoomData.json';
import EventsData from '.components/EventsData.json';
import StartStory from '.components/StartStory';

function App() {
  const /* [What is something that the main character has to find in the story] */
  const /* [What is something else that the main character has to find in the story]*/
  const [scenes, setScenes] = useState(SceneData.scenes);
  const [events, setEvents] = useState(EventsData.json);

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <StartStory />
        </Route>
        <Route exact path="/">
          <div>Scene</div>
        </Route>
        <Route path="/scene/:name">
          <div>Space Name</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;