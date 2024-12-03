// ResultPage.tsx
import React from 'react';
import Table from '../../components/Table/Table';
import { useLocation, useNavigate } from 'react-router-dom';
import { editParticipant } from '../../services/api';
import { Participant } from '../../components/Row/types';

const ResultPage: React.FC = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const participants: Participant[] = Array.isArray(location.state?.participants) ? location.state.participants : [];

    const handleEdit = async (participant: Participant) => {
        try {
            console.log('Participants:', participants);
            const { data: updatedParticipant, status } = await editParticipant(participant.id, participant);
            if (status === 200) {
                navigate(`/edit/${updatedParticipant.id}`, { state: { participant: updatedParticipant } });
            }
        } catch (error) {
            console.error('Error al editar participante:', error);
        }
    };

    const handleBack = () => {
        navigate('/');
    };

    return (
        <div className="min-h-screen flex flex-col bg-purple-300">
            <div className="container mx-auto px-4 py-2 flex-grow">
                <h1 className="text-2xl font-bold text-center mb-4">Resultados de la Búsqueda</h1>
                {participants.length > 0 ? (
                    <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)' }}>
                        <Table data={participants} onEdit={handleEdit} />
                    </div>
                ) : (
                    <p className="text-center text-gray-700">No se encontraron resultados.</p>
                )}
            </div>
            <div className="flex justify-center py-12">
                <button
                    onClick={handleBack}
                    className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                    Regresar
                </button>
            </div>
        </div>
    );
};

export default ResultPage;
