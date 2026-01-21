import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Carga perezosa de páginas para mejorar el rendimiento inicial
const Home = lazy(() => import('./pages/Home'));
const Inscripcion = lazy(() => import('./pages/Inscripcion'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Loader simple mientras carga la página
const PageLoader = () => (
  <div className="min-h-screen bg-[#11091C] flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-[#D334E9] border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscripcion" element={<Inscripcion />} />
          {/* Ruta de captura para manejar 404 dinámicamente */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </Router>
  );
}


export default App;

