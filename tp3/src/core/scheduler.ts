// core/scheduler.ts

import {
    SimulationState,
    ProcessContext,
    EventLogEntry,
} from './types';
import { maybeGenerateInterrupt, sortInterruptQueue, treatInterrupt } from './interrupts';

// Cria uma cópia profunda do contexto para garantir a imutabilidade
function deepCopyContext(context: ProcessContext): ProcessContext {
    // Usa JSON.parse/stringify para cópia profunda, como no seu trabalho anterior [cite: 169, 195]
    return JSON.parse(JSON.stringify(context));
}

/**
 * Simula a execução do processo principal por um passo de tempo.
 */
function executeProcess(context: ProcessContext): ProcessContext {
    const newContext = deepCopyContext(context);
    
    // Simulação da execução: avança o Program Counter e altera registradores
    newContext.instructionPointer += 1;
    newContext.registers.r1 = (newContext.registers.r1 + 1) % 100;

    return newContext;
}

/**
 * A função central que avança a simulação em um passo de tempo.
 */
export function processTimeStep(currentState: SimulationState): SimulationState {
    // 1. Clonar o estado para garantir imutabilidade (requisito para React)
    const newState: SimulationState = JSON.parse(JSON.stringify(currentState));
    newState.currentTime += 1;

    let logEntries: EventLogEntry[] = [];
    const time = newState.currentTime;
    
    // --- 2. Simular a Chegada de Novas Interrupções (Mesmo na mesma unidade de tempo) ---
    const newInterrupt = maybeGenerateInterrupt(currentState);
    if (newInterrupt) {
        newState.interruptIdCounter = newInterrupt.id;
        newState.interruptQueue.push(newInterrupt);

        logEntries.push({
            time: time,
            eventType: 'Interrupção',
            device: newInterrupt.device,
            priority: newInterrupt.priority,
            details: `[Tempo ${time}] Interrupção: ${newInterrupt.device} - Prioridade: ${newInterrupt.priority}.`,
        });
    }

    // --- 3. Tratamento de Interrupções ---
    if (newState.interruptQueue.length > 0) {
        // Ordena a fila por prioridade [cite: 15]
        newState.interruptQueue = sortInterruptQueue(newState.interruptQueue);
        const highestPriorityInterrupt = newState.interruptQueue[0];

        // Se o processo estava em execução, ele é interrompido [cite: 16, 21]
        if (newState.processContext.status === 'Em Execução') {
            const contextBefore = deepCopyContext(newState.processContext);
            
            // Armazenando contexto e mudando status [cite: 16, 21, 41]
            newState.processContext.status = 'Interrompido'; 

            logEntries.push({
                time: time,
                eventType: 'Interrupção',
                device: highestPriorityInterrupt.device,
                priority: highestPriorityInterrupt.priority,
                details: `[Tempo ${time}] Armazenando contexto do processo principal.`,
                contextBefore: contextBefore,
                contextAfter: deepCopyContext(newState.processContext),
            });
        }
        
        // Simula o tratamento (ocorre na próxima unidade de tempo)
        // Agora aguarda 2 passos antes de tratar para que a fila seja visível
        if (newState.processContext.status === 'Interrompido') {
            newState.processContext.status = 'Tratando Interrupção';
            
            logEntries.push({
                time: time,
                eventType: 'Interrupção',
                device: highestPriorityInterrupt.device,
                priority: highestPriorityInterrupt.priority,
                details: `[Tempo ${time}] Iniciando tratamento da interrupção de ${highestPriorityInterrupt.device}.`,
            });
        } else if (newState.processContext.status === 'Tratando Interrupção') {
            const interruptToTreat = newState.interruptQueue.shift()!; // Pega o mais prioritário
            
            // Log de tratamento
            logEntries.push(treatInterrupt(interruptToTreat, time));
            
            // O status muda para "Em Execução" simulando a restauração do contexto [cite: 22]
            const contextBeforeRestoration = deepCopyContext(newState.processContext);
            newState.processContext.status = 'Em Execução'; 
            
            logEntries.push({
                time: time,
                eventType: 'Retomada',
                device: interruptToTreat.device,
                details: `[Tempo ${time}] Interrupção tratada. Restaurando contexto. Processo principal retomado.`,
                contextBefore: contextBeforeRestoration,
                contextAfter: deepCopyContext(newState.processContext),
            });
        }

    } else {
        // --- 4. Execução Contínua do Processo Principal [cite: 19] ---
        newState.processContext = executeProcess(newState.processContext);
        logEntries.push({
            time: time,
            eventType: 'Execução',
            details: `[Tempo ${time}] Processo principal em execução. PC: ${newState.processContext.instructionPointer}`,
        });
    }

    // Adiciona todos os novos logs ao histórico
    newState.log.push(...logEntries);

    return newState;
}