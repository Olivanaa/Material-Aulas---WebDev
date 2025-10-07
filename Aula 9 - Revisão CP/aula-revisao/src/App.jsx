import { useEffect, useState } from "react";
import Navbar from "./components/NavBar";
import Section from "./components/Section";
import Card from "./components/Card";

export default function App() {

  const url_api = import.meta.env.VITE_GITHUB_API
  const [reposReact, setReposReact] = useState([])
  const [reposNode, setReposNode] = useState([])
  const [reposPython, setReposPython] = useState([])

  useEffect(()=>{
    fetch(`${url_api}react&per_page=5`)
    .then(response => response.json())
    .then(data => setReposReact(data.items))

    fetch(`${url_api}node&per_page=5`)
    .then(response => response.json())
    .then(data => setReposNode(data.items))

    fetch(`${url_api}python&per_page=5`)
    .then(response => response.json())
    .then(data => setReposPython(data.items))

  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="p-6">
        <Section titulo = "React">
          {/* <p>Card</p> */}
          {reposReact.map(pegaItem => (
            <Card {...pegaItem}/>
          ))}
        </Section>
        <Section titulo = "Node JS">
          {reposNode.map(pegaItem => (
            <Card {...pegaItem}/>
          ))}
        </Section>
        <Section titulo = "Python">
          {reposPython.map(pegaItem => (
            <Card {...pegaItem}/>
          ))}
        </Section>
      </main>
    </div>
  );
}
