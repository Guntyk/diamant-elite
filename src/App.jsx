import { Switch, Route } from 'react-router-dom';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { BallroomSportDance } from 'pages/Directions/BallroomSportDance';
import { KidsBallroom } from 'pages/Directions/KidsBallroom';
import { OnlineLearn } from 'pages/Directions/OnlineLearn';
import { ProAmAdults } from 'pages/Directions/ProAmAdults';
import { ProAmKids } from 'pages/Directions/ProAmKids';
import { Main } from 'pages/Main';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact>
            <Main />
          </Route>
          <Route path='/kids-ballroom-dance' exact>
            <KidsBallroom />
          </Route>
          <Route path='/online' exact>
            <OnlineLearn />
          </Route>
          <Route path='/kids-pro-am' exact>
            <ProAmKids />
          </Route>
          <Route path='/adults-pro-am' exact>
            <ProAmAdults />
          </Route>
          <Route path='/ballroom-dance' exact>
            <BallroomSportDance />
          </Route>
        </Switch>
      </main>
      <Footer />
    </>
  );
}
