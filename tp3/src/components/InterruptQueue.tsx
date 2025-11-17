// components/InterruptQueue.tsx

import React from 'react';
import { Interrupt } from '../core/types';

interface InterruptQueueProps {
    queue: Interrupt[];
}

// Estilo visual baseado na prioridade
const getPriorityBadge = (priority: string) => {
    if (priority === 'Alta') return 'bg-red-500';
    if (priority === 'Média') return 'bg-yellow-500';
    return 'bg-blue-500';
};

const InterruptQueue: React.FC<InterruptQueueProps> = ({ queue }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Fila de Interrupções ({queue.length})</h2>
            
            {queue.length === 0 ? (
                <p className="text-gray-500 italic">Nenhuma interrupção pendente.</p>
            ) : (
                <ul className="space-y-2">
                    {queue.map((interrupt, index) => (
                        <li 
                            key={interrupt.id} 
                            className={`p-3 rounded-lg flex justify-between items-center ${index === 0 ? 'border-2 border-green-500 bg-green-50' : 'bg-gray-100'}`}
                        >
                            <span>
                                **{interrupt.device}** (Gerada em T: {interrupt.timeGenerated})
                            </span>
                            <span 
                                className={`px-2 py-1 text-xs font-bold text-white rounded-full ${getPriorityBadge(interrupt.priority)}`}
                            >
                                {interrupt.priority} {index === 0 ? '(Próximo)' : ''}
                            </span>
                        </li>
                    ))}
                </ul>
            )}
            <p className="text-sm text-gray-500 mt-4">A fila é reordenada automaticamente por prioridade para determinar qual será tratada primeiro.</p>
        </div>
    );
};

export default InterruptQueue;