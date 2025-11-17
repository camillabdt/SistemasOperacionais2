// components/EventLog.tsx

import React from 'react';
import { EventLogEntry } from '../core/types';

interface EventLogProps {
    log: EventLogEntry[];
}

const getLogStyle = (type: string) => {
    if (type === 'Execução') return 'text-gray-400';
    if (type === 'Interrupção') return 'text-yellow-400 font-bold';
    if (type === 'Tratamento') return 'text-cyan-400';
    if (type === 'Retomada') return 'text-green-400 font-bold';
    return 'text-white';
};

const EventLog: React.FC<EventLogProps> = ({ log }) => {
    // Scroll para o fim do log a cada atualização
    const logEndRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        logEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [log]);

    return (
        <div className="bg-gray-800 p-4 rounded-lg shadow-xl mt-6">
            <h2 className="text-2xl font-semibold text-white mb-4">Log de Eventos (Arquivo de Texto)</h2>
            <div className="h-96 overflow-y-scroll text-sm font-mono p-2 border border-gray-700 bg-black rounded">
                {log.map((entry, index) => (
                    <div key={index} className={`whitespace-pre-wrap ${getLogStyle(entry.eventType)}`}>
                        {entry.details}
                        {entry.contextBefore && (
                            <span className="text-gray-500 block ml-4">
                                Contexto ANTES (PC: {entry.contextBefore.instructionPointer}, R1: {entry.contextBefore.registers.r1})
                            </span>
                        )}
                        {entry.contextAfter && (
                            <span className="text-gray-500 block ml-4">
                                Contexto DEPOIS (PC: {entry.contextAfter.instructionPointer}, R1: {entry.contextAfter.registers.r1})
                            </span>
                        )}
                    </div>
                ))}
                <div ref={logEndRef} />
            </div>
        </div>
    );
};

export default EventLog;