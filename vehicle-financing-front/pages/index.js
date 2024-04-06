import ContainerSelect from "@/components/ContainerSelect";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default function Home() {
  return (
    <div>
      <Header />
        <div className="container mx-auto">
          <h1>Simulação de Financiamento</h1>
          <div className="detalhe"></div>
          <ContainerSelect />

        </div>
      <Footer />
    </div>
  );
}
