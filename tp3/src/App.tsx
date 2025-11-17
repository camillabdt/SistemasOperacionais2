import React, { useState, useCallback, useEffect } from "react";
// Lógica CORE: Importações com extensões explícitas
import { initializeSimulation, SimulationState } from "./core/types"; 
import { processTimeStep } from "./core/scheduler"; 

// Componentes da Interface: Importações com extensões explícitas
import Controls from "./components/Controls";
import ProcessState from "./components/ProcessState";
import InterruptQueue from "./components/InterruptQueue";
import EventLog from "./components/EventLog";

// Inicializa o estado com a lógica de E/S
const initialConfig = initializeSimulation();

export default function App() {
  const [simState, setSimState] = useState<SimulationState>(initialConfig);
  const [autoRun, setAutoRun] = useState<boolean>(false);
  
  // Função que avança a simulação em um passo de tempo
  const handleNextStep = useCallback(() => {
    // A lógica processTimeStep lida com a execução, interrupção e restauração de contexto
    const newState = processTimeStep(simState);
    setSimState(newState);
  }, [simState]);

  // Função para reiniciar a simulação
  const handleReset = useCallback(() => {
    setSimState(initializeSimulation());
    setAutoRun(false);
  }, []);

  // Função para atualizar os registradores
  const handleUpdateRegisters = useCallback((r1: number, r2: number) => {
    setSimState(prev => ({
      ...prev,
      processContext: {
        ...prev.processContext,
        registers: { r1, r2 }
      }
    }));
  }, []);

  // Efeito para rodar automaticamente (simulando o tempo contínuo)
  useEffect(() => {
    // CORREÇÃO: Usando 'number' em vez de 'NodeJS.Timeout' para resolver o erro de tipagem no ambiente
    let interval: number | null = null; 
    
    if (autoRun) {
      // Usamos setInterval para simular os passos de tempo a cada 800ms
      interval = setInterval(() => {
        setSimState(prev => processTimeStep(prev));
      }, 800); 
    } else if (interval) {
      clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoRun]);


  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-gray-100 to-gray-200 text-gray-800 p-6">
      <div className="max-w-6xl mx-auto space-y-8">
        <header className="flex flex-col md:flex-row items-center justify-between p-4 bg-white rounded-xl shadow-lg">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-indigo-700">
            Simulador de Gerenciamento de E/S com Interrupção
          </h1>
          <div className="text-sm opacity-70 mt-2 md:mt-0">
            Tempo Atual: <b className="text-lg text-indigo-500">{simState.currentTime}</b>
          </div>
        </header>
        
        <section className="grid md:grid-cols-3 gap-6">
            <ProcessState context={simState.processContext} onUpdateRegisters={handleUpdateRegisters} />
            <InterruptQueue queue={simState.interruptQueue} />
        </section>

        <EventLog log={simState.log} />

        <section className="grid md:grid-cols-1 gap-6">
          <Controls 
            onNextStep={handleNextStep} 
            onReset={handleReset}
            onToggleRun={() => setAutoRun(prev => !prev)}
            isRunning={autoRun}
            currentTime={simState.currentTime}
            log={simState.log}
          />
        </section>
        
        <footer className="text-xs text-slate-500 pt-4 text-center">
            Trabalho Prático 3 - Disciplina de Sistemas Operacionais da UNIPAMPA.
        </footer>
      </div>
    </div>
  );
}