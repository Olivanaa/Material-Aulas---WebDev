import { GraficoBarras } from "@/components/GraficoBarras";
import Tabs from "../components/Tabs";
import { Button } from "@/components/ui/button";


export default function Dashboard() {

  function handleClick(){
    alert("clicou!")
  }

  return (
    <>
    <div className="p-6 flex-1 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Bem-vindo ao Dashboard</h1>
      <Tabs />
      <GraficoBarras />
    </div>
    {/* <div className="flex min-h-svh flex-col items-center justify-center">
      <Button onClick={handleClick} className="bg-purple-300 cursor-pointer">Button</Button>
    </div> */}
    </>
  );
}

// <Button onClick={() => alert("Clicou!")} className="bg-purple-300 cursor-pointer">Button</Button> - função precisa estar dentro de uma arrow function para não executar a função sem clicar
// Um indicador-chave de desempenho (KPI) é um tipo de métrica utilizada para medir, comparar e acompanhar o desempenho de algo.
// shadcn - componentes