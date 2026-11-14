import { Route, Routes } from 'react-router-dom';
import { EstudosPage } from './features/estudos/EstudosPage';
import { InicioPage } from './features/inicio/InicioPage';
import { PlanejadorPage } from './features/planejador/PlanejadorPage';
import { ResumoPage } from './features/resumo/ResumoPage';
import { Layout } from './shared/components/Layout';
import { NaoEncontradaPage } from './shared/components/NaoEncontradaPage';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<InicioPage />} />
        <Route path="estudos" element={<EstudosPage />} />
        <Route path="planejador" element={<PlanejadorPage />} />
        <Route path="resumo" element={<ResumoPage />} />
        <Route path="*" element={<NaoEncontradaPage />} />
      </Route>
    </Routes>
  );
}
