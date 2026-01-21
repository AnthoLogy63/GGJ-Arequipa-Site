import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="min-h-screen bg-[#11091C] text-white flex flex-col items-center justify-center p-4 text-center">
            <h1 className="text-6xl font-bold text-[#D334E9] mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-6">Página no encontrada</h2>
            <p className="max-w-md mb-8 text-gray-400">
                Parece que te has perdido en el multiverso. La página que buscas no existe o ha sido movida.
            </p>
            <Link
                to="/"
                className="bg-[#D334E9] text-white px-8 py-3 rounded-full font-bold uppercase transition-all hover:scale-105 hover:bg-[#e045f5] shadow-[0_4px_15px_rgba(211,52,233,0.3)]"
            >
                Volver al Home
            </Link>
        </div>
    );
};

export default NotFound;
