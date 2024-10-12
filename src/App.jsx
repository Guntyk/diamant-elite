import { Switch, Route } from 'react-router-dom';
import { directions } from 'constants/directions';
import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Directions } from 'pages/Directions';
import { Main } from 'pages/Main';

export default function App() {
  const directionRoutes = directions.map(({ route }) => route);

  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path='/' exact>
            <Main />
          </Route>
          {directionRoutes.map((route) => (
            <Route path={route} exact key={route}>
              <Directions />
            </Route>
          ))}
        </Switch>
      </main>
      <Footer />
    </>
  );
}
