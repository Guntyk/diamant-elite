import { Header } from 'components/Header';
import { Advantages } from 'pages/Main/blocks/Advantages';
import { Hero } from 'pages/Main/blocks/Hero';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Advantages />
      </main>
    </>
  );
}
