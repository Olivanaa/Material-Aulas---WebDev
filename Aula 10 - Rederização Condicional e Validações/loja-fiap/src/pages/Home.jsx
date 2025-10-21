import { useState, useEffect } from "react";
import SectionContainer from "../components/SectionContainer";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [electronics, setElectronics] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [mensClothing, setMensClothing] = useState([]);
  const [produtos, setProdutos] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    setIsLoading(true)
    fetch(`${API_URL}/category/electronics`)
      .then((res) => res.json())
      .then((data) => setElectronics(data));

    fetch(`${API_URL}/category/jewelery`)
      .then((res) => res.json())
      .then((data) => setJewelery(data));

    fetch(`${API_URL}/category/men's clothing`)
      .then((res) => res.json())
      .then((data) => setMensClothing(data));

    fetch(`${API_URL}`)
      .then(res => res.json())
      .then(data => setProdutos(data))

    setIsLoading(false)
  }, []);

  const produtosFiltrados = produtos
                            .filter((product) => product.title.includes("Jacket") || product.title.includes("Coat"))

  if(isLoading) return <p>Carregando...</p>
  

  return (
    <div>
      <SectionContainer title="Eletrônicos">
        {electronics.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Joias">
        {jewelery.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>

      <SectionContainer title="Roupas Masculinas">
        {mensClothing.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </SectionContainer>
      <SectionContainer title="Queridinhos da FIAP">
        {produtos
          .filter((product) => product.rating.rate >= 4)
          .map((product) => (
          <ProductCard key={product.id} {...product}/>
        ))}
      </SectionContainer>
      <SectionContainer title="Baratinhos">
        {produtos
          .filter((product) => product.price > 0 && product.price <= 100)
          .sort((a,b) => a.price - b.price)
          .map((product) => (
          <ProductCard key={product.id} {...product}/>
        ))}
      </SectionContainer>
      <SectionContainer title="Jaquetas e Casacos">
        { produtosFiltrados.length > 0 ? (
          produtosFiltrados.map((product) => (
          <ProductCard key={product.id} {...product}/>
        ))): (
          <p>Nenhum produto corresponde ao filtro</p>
        )}
      </SectionContainer>
    </div>

    // .filter((pegaItem) => pegaItem.rating.rate >= 4) - cria um novo array com todos os produtos com rating maior que 4, depois mapeia e renderiza na tela
    // .sort((a,b) => a.price - b.price), compara os dois preços e muda a posição e necessario, a-b crescente, b-a decrescente
  );
}
