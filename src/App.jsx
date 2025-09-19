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

function App() {
  return (
    <main>
      <Header />
      <Banner />
      <Sobre />
      <Vantagens />
      <Servicos />
      <Projetos />
      <Depoimentos />
      <Contato />
      <Instagram />
      <Footer />
    </main>
  );
}

export default App;
