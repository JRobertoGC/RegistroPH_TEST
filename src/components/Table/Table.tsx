import React from 'react';
import Row from '../Row/Row';
import { TableProps } from './types';

const Table: React.FC<TableProps> = ({ data, onEdit }) => {
    return (
        <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500">
                <thead className="text-xs text-white uppercase bg-purple-500">
                    <tr>
                        <th scope="col" className="py-3 px-6">Nombre</th>
                        <th scope="col" className="py-3 px-6">Apellido Paterno</th>
                        <th scope="col" className="py-3 px-6">Apellido Materno</th>
                        <th scope="col" className="py-3 px-6">Edad</th>
                        <th scope="col" className="py-3 px-6">Correo Electrónico</th>
                        <th scope="col" className="py-3 px-6">Número de Teléfono</th>
                        <th scope="col" className="py-3 px-6 text-right">Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((participant, index) => (
                        <Row key={index} participant={participant} onEdit={onEdit} />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
