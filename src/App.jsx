import { Header } from 'components/Header';
import { Cooperation } from 'pages/Main/blocks/Cooperation';
import { Advantages } from 'pages/Main/blocks/Advantages';
import { Hero } from 'pages/Main/blocks/Hero';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
        <Cooperation />
      </main>
    </>
  );
}
