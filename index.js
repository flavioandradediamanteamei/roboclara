import { useState } from "react";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";

export default function ProjetoDiamantes() {
  const [etapa, setEtapa] = useState(1);
  const [dados, setDados] = useState({ nome: "", whatsapp: "", email: "", cidade: "", estado: "", lider: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setDados({ ...dados, [name]: type === "checkbox" ? checked : value });
  };

  return (
    <div className="bg-white text-black min-h-screen p-6 md:p-12">
      <header className="text-center mb-10">
        <img src="/logo-amei.png" alt="Amei Cosméticos" className="mx-auto h-20 mb-4" />
        <h1 className="text-3xl md:text-5xl font-bold">Projeto Diamantes com o Robô Clara</h1>
        <p className="text-orange-500 mt-2 text-xl font-medium">
          Oportunidade para transformar vidas — começando pela sua.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold">Escolha seu Nível:</h2>

          {[1, 2, 3, 4].map((nivel) => (
            <div key={nivel} className="border border-black rounded-xl p-4">
              <h3 className="text-xl font-bold">Opção {nivel}:</h3>
              <p className="text-sm mt-1">
                {nivel === 1 && (<>De R$ 200 a R$ 500 — Iniciante: Comprar para uso ou revenda. Suporte apenas via grupo e redes sociais. Sem plano de carreira.</>)}
                {nivel === 2 && (<>De R$ 500 a R$ 1.500 — Intermediário: Suporte de líder da equipe para vender e lucrar R$ 1.000 a R$ 3.000/mês.</>)}
                {nivel === 3 && (<>De R$ 1.500 a R$ 3.000 — Avançado: Treinamento para se tornar líder e ter ganhos superiores a R$ 3.000/mês.</>)}
                {nivel === 4 && (<>Acima de R$ 3.000 — Profissional: Grupo direto com Flávio Andrade, mentoria e rota para qualificação Diamante.</>)}
              </p>
              <Button onClick={() => setEtapa(2)} className="mt-3 bg-orange-500 hover:bg-orange-600">
                Escolher essa opção
              </Button>
            </div>
          ))}
        </div>

        {etapa === 2 && (
          <form className="space-y-4 bg-gray-100 p-6 rounded-xl shadow">
            <h2 className="text-xl font-bold">Preencha seus dados:</h2>
            <Input placeholder="Nome completo" name="nome" value={dados.nome} onChange={handleChange} />
            <Input placeholder="WhatsApp com DDD" name="whatsapp" value={dados.whatsapp} onChange={handleChange} />
            <Input placeholder="Email" name="email" value={dados.email} onChange={handleChange} />
            <div className="grid grid-cols-2 gap-2">
              <Input placeholder="Cidade" name="cidade" value={dados.cidade} onChange={handleChange} />
              <Input placeholder="Estado" name="estado" value={dados.estado} onChange={handleChange} />
            </div>
            <label className="flex items-center gap-2">
              <input type="checkbox" name="lider" checked={dados.lider} onChange={handleChange} />
              Já fui líder em outra empresa
            </label>
            {dados.lider && (
              <div className="space-y-1">
                <label className="block text-sm">Selecione a faixa de ganhos anteriores:</label>
                <select className="w-full p-2 border rounded">
                  <option>1.000 a 3.000</option>
                  <option>3.000 a 5.000</option>
                  <option>Acima de 10.000</option>
                </select>
              </div>
            )}
            <Button className="w-full bg-black text-white hover:bg-gray-800 mt-2">
              Quero fazer parte do movimento!
            </Button>
          </form>
        )}
      </div>

      <footer className="text-center text-sm mt-10 border-t pt-4">
        Projeto Diamantes com o Robô Clara - Amei Cosméticos com Flávio Andrade
      </footer>
    </div>
  );
}
