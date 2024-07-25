import React from 'react';
import { Participant } from './types';

const Row: React.FC<{ participant: Participant, onEdit: (participant: Participant) => void }> = ({ participant, onEdit }) => {
    return (
        <tr className="bg-white border-b hover:bg-gray-100">
            <td className="py-4 px-6">{participant.nombre_participante}</td>
            <td className="py-4 px-6">{participant.primer_apellido}</td>
            <td className="py-4 px-6">{participant.segundo_apellido}</td>
            <td className="py-4 px-6">{participant.edad}</td>
            <td className="py-4 px-6">{participant.correo_participante}</td>
            <td className="py-4 px-6">{participant.telefono_participante}</td>
            <td className="py-4 px-6 text-right">
                <button
                    onClick={() => onEdit(participant)}
                    className="text-white bg-purple-500 hover:bg-purple-700 font-medium rounded-lg text-sm px-4 py-2 text-center">
                    Editar
                </button>
            </td>
        </tr>
    );
};

export default Row;
