import React, { ChangeEvent, useState, useEffect } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editParticipant } from '../../services/api';
import { Participant } from '../../components/Row/types';

const EditPage = () => {
    const { id } = useParams<{ id: string }>();
    const location = useLocation();
    const navigate = useNavigate();
    
    const initialParticipant: Participant = {
        id: '',
        primer_apellido: '',
        segundo_apellido: '',
        nombre_participante: '',
        edad: 0,
        correo_participante: '',
        telefono_participante: '',
        escuela: '',
        grupo: '',
        nivel: '',
        idioma: '',
        tratamiento_medico: '',
        salida_participante: '',
        carta_responsiva: false,
        nombre_tutor: '',
        telefono_tutor: '',
        correo_tutor: ''
    };

    const [participant, setParticipant] = useState<Participant>(location.state?.participant || initialParticipant);

    useEffect(() => {
        if (location.state?.participant) {
            setParticipant(location.state.participant);
        }
    }, [location.state?.participant]);

    const setValuesInput = (e: ChangeEvent<HTMLInputElement>, field: keyof Participant) => {
        setParticipant({
            ...participant,
            [field]: e.target.value,
        });
    };

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            updateUser(id);
        }
    };

    async function updateUser(userId: string | undefined) {
        if (!userId) {
            toast.error('ID de usuario no válido');
            return;
        }

        try {
            const { status } = await editParticipant(userId, participant);

            if (status === 200) {
                toast.success('Datos del usuario actualizados.');
            } else {
                throw new Error('Failed to update user');
            }
        } catch (error) {
            toast.error('Hubo un error en el sistema.');
            console.error('Error updating user:', error);
        }
    }

    const handleBack = () => {
        navigate(-1);
    };

    const handleHome = () => {
      navigate('/');
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-purple-300">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                <h1 className="text-xl font-semibold text-gray-800">Actualizar datos</h1>
                <form className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Primer Apellido
                        </label>
                        <input
                            type="text"
                            name="primer_apellido"
                            placeholder={participant.primer_apellido}
                            onChange={(e: any) => setValuesInput(e, 'primer_apellido')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Segundo Apellido
                        </label>
                        <input
                            type="text"
                            name="segundo_apellido"
                            placeholder={participant.segundo_apellido}
                            onChange={(e: any) => setValuesInput(e, 'segundo_apellido')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Nombre del Participante
                        </label>
                        <input
                            type="text"
                            name="nombre_participante"
                            placeholder={participant.nombre_participante}
                            onChange={(e: any) => setValuesInput(e, 'nombre_participante')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Edad
                        </label>
                        <input
                            type="number"
                            name="edad"
                            placeholder={participant.edad.toString()}
                            value={participant.edad}
                            onChange={(e: any) => setValuesInput(e, 'edad')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Correo del Participante
                        </label>
                        <input
                            type="email"
                            name="correo_participante"
                            placeholder={participant.correo_participante}
                            onChange={(e: any) => setValuesInput(e, 'correo_participante')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Teléfono del Participante
                        </label>
                        <input
                            type="text"
                            name="telefono_participante"
                            placeholder={participant.telefono_participante}
                            onChange={(e: any) => setValuesInput(e, 'telefono_participante')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Escuela
                        </label>
                        <input
                            type="text"
                            name="escuela"
                            placeholder={participant.escuela}
                            onChange={(e: any) => setValuesInput(e, 'escuela')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Grupo
                        </label>
                        <input
                            type="text"
                            name="grupo"
                            placeholder={participant.grupo}
                            onChange={(e: any) => setValuesInput(e, 'grupo')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Nivel
                        </label>
                        <input
                            type="text"
                            name="nivel"
                            placeholder={participant.nivel}
                            onChange={(e: any) => setValuesInput(e, 'nivel')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Idioma
                        </label>
                        <input
                            type="text"
                            name="idioma"
                            placeholder={participant.idioma}
                            onChange={(e: any) => setValuesInput(e, 'idioma')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Tratamiento Médico
                        </label>
                        <input
                            type="text"
                            name="tratamiento_medico"
                            placeholder={participant.tratamiento_medico}
                            onChange={(e: any) => setValuesInput(e, 'tratamiento_medico')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Salida del Participante
                        </label>
                        <input
                            type="text"
                            name="salida_participante"
                            placeholder={participant.salida_participante}
                            onChange={(e: any) => setValuesInput(e, 'salida_participante')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Carta Responsiva
                        </label>
                        <label className="inline-flex items-center cursor-pointer">
                            <input 
                                type="checkbox" 
                                checked={participant.carta_responsiva} 
                                onChange={() => setParticipant({ ...participant, carta_responsiva: !participant.carta_responsiva })}
                                className="sr-only peer" 
                            />
                            <div className={`relative w-11 h-6 rounded-full peer focus:outline-none focus:ring-4 ${
                                participant.carta_responsiva
                                    ? 'bg-purple-600 peer-focus:ring-blue-300 dark:peer-focus:ring-purple-800'
                                    : 'bg-gray-200 dark:bg-gray-700 peer-focus:ring-blue-300 dark:peer-focus:ring-purple-800'
                                }`}>
                                <div className={`absolute top-[2px] left-[2px] w-5 h-5 rounded-full transition-transform ${
                                    participant.carta_responsiva
                                        ? 'transform translate-x-full bg-white border-white'
                                        : 'bg-white border-gray-300'
                                }`}></div>
                            </div>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Nombre del Tutor
                        </label>
                        <input
                            type="text"
                            name="nombre_tutor"
                            placeholder={participant.nombre_tutor}
                            onChange={(e: any) => setValuesInput(e, 'nombre_tutor')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Teléfono del Tutor
                        </label>
                        <input
                            type="text"
                            name="telefono_tutor"
                            placeholder={participant.telefono_tutor}
                            onChange={(e: any) => setValuesInput(e, 'telefono_tutor')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Correo del Tutor
                        </label>
                        <input
                            type="email"
                            name="correo_tutor"
                            placeholder={participant.correo_tutor}
                            onChange={(e: any) => setValuesInput(e, 'correo_tutor')}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            onKeyDown={handleKeyDown}
                        />
                    </div>
                    <div className="col-span-2 flex justify-between">
                        <button
                            type="button"
                            onClick={handleBack}
                            className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Regresar
                        </button>
                        <button
                            type="button"
                            onClick={handleHome}
                            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Terminar
                        </button>
                        <button
                            type="button"
                            onClick={() => updateUser(id)}
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                            Guardar
                        </button>
                    </div>
                </form>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss={false}
                    draggable
                    pauseOnHover={false}
                    theme="light"
                />
            </div>
        </div>
    );
};

export default EditPage;
