import { Footer } from 'components/Footer';
import { Header } from 'components/Header';
import { Cooperation } from 'pages/Main/blocks/Cooperation';
import { Advantages } from 'pages/Main/blocks/Advantages';
import { Locations } from 'pages/Main/blocks/Locations';
import { Feedback } from 'pages/Main/blocks/Feedback';
import { Hero } from 'pages/Main/blocks/Hero';
import { Team } from 'pages/Main/blocks/Team';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Cooperation />
        <Team />
        <Locations />
        <Feedback />
      </main>
      <Footer />
    </>
  );
}
