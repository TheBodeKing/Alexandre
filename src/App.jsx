import Banner from "./components/Banner";
import Header from "./components/Header";
import Sobre from "./components/Sobre";
import Vantagens from "./components/Vantagens";
import Servicos from "./components/Servicos";
import Projetos from "./components/Projetos";
import Depoimentos from "./components/Depoimentos";
import Contato from "./components/Contato";
import Instagram from "./components/Instagram";
import Footer from "./components/Footer";
import ZapC from "./components/ZapC";
import HeaderM from "./components/HeaderM";

function App() {
  return (
    <main>
      <Header />
      <HeaderM />
      <Banner />
      <Sobre />
      <Vantagens />
      <Servicos />
      <Projetos />
      <Depoimentos />
      <Contato />
      <Instagram />
      <Footer />
      <ZapC />
    </main>
  );
}

export default App;
