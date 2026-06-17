import { createBrowserRouter } from 'react-router';
import { Layout } from './components/Layout';
import { HomePage } from './components/home/HomePage';
import { MarcaPage } from './components/pages/MarcaPage';
import { AcervoPage } from './components/pages/AcervoPage';
import { ProjetosPage } from './components/pages/ProjetosPage';
import { ProjectDetailPage } from './components/pages/ProjectDetailPage';
import { ManejoPage } from './components/pages/ManejoPage';
import { ArquitetosPage } from './components/pages/ArquitetosPage';
import { ConstrutorasPage } from './components/pages/ConstrutorasPage';
import { ShowroomPage } from './components/pages/ShowroomPage';
import { ImprensaPage } from './components/pages/ImprensaPage';
import { ContatoPage } from './components/pages/ContatoPage';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      { index: true, Component: HomePage },
      { path: 'a-marca', Component: MarcaPage },
      { path: 'acervo', Component: AcervoPage },
      { path: 'projetos', Component: ProjetosPage },
      { path: 'projetos/:slug', Component: ProjectDetailPage },
      { path: 'manejo', Component: ManejoPage },
      { path: 'para-arquitetos', Component: ArquitetosPage },
      { path: 'para-construtoras', Component: ConstrutorasPage },
      { path: 'showroom', Component: ShowroomPage },
      { path: 'imprensa', Component: ImprensaPage },
      { path: 'contato', Component: ContatoPage },
    ],
  },
]);
