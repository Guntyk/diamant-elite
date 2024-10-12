import { Switch, Route } from 'react-router-dom/cjs/react-router-dom.min';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Cooperation } from 'pages/Main/blocks/Cooperation';
import { Advantages } from 'pages/Main/blocks/Advantages';
import { Locations } from 'pages/Main/blocks/Locations';
import { Feedback } from 'pages/Main/blocks/Feedback';
import { Hero } from 'pages/Main/blocks/Hero';
import { KidsBallroom } from 'pages/Directions/KidsBallroom';
import { OnlineLearn } from 'pages/Directions/OnlineLearn';
import { ProAmKids } from 'pages/Directions/ProAmKids';
import { ProAmAdults } from 'pages/Directions/ProAmAdults';
import { BallroomSportDance } from 'pages/Directions/BallroomSportDance';
import { Team } from 'pages/Main/blocks/Team';

export default function App() {
  return (
    <>
      {' '}
      <Header />
      <main>
        <Switch>
          <Route path='/' exact>
            <Hero />
            <Advantages />
            <Cooperation />
            <Team />
            <Locations />
            <Feedback />
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
