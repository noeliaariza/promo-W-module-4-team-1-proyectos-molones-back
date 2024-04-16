import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Preview from './Preview';
import LinkButton from './LinkButton';
import Form from './Form';
import Footer from './Footer';
import localStorage from '../services/localStorage';
import '../scss/App.scss';
import '../scss/components/Main.scss';
import { Routes, Route } from 'react-router-dom';
import ProjectList from './projects/ProjectList';
import Hero from './Hero';
import Landing from './Landing';

const URL = 'http://localhost:3000';
const URL_LOCAL = 'https://proyectosmolonescreactivas.onrender.com';

function App() {
  const [infoProject, setInfoProject] = useState(
    localStorage.get('infoProject') || {
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      autor: '',
      job: '',
      image:
        'https://afiescuela.storage.googleapis.com/cms_multimedia/cms_medias/files/000/001/538/original/margaret.png?1607668400',
      photo:
        'https://cdn.evalart.com/wp-content/uploads/2019/06/MujeresenTIPioneras.png',
    }
  );

  // NEW PUSH

  const [url, setUrl] = useState('');

  const handleProjectInfo = (value, id) => {
    setInfoProject({ ...infoProject, [id]: value });
    //console.log("info", infoProject);
  };

  const [projectlistData, setProjectlistData] = useState([]);

  const getProjectList = async () => {
    try {
      const response = await fetch(`${URL}/projectlist`);
      const data = await response.json();
      //console.log("data", data);
      setProjectlistData(data.message);
      //console.log("hola", projectlistData);
    } catch (error) {
      console.error('Error fetching project list:', error);
    }
  };

  useEffect(() => {
    getProjectList();
  }, []);

  const onClickSave = async () => {
    try {
      const response = await fetch(`${URL}/newproject`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(infoProject),
      });

      if (response.ok) {
        const result = await response.json();
        setUrl(result.url);
        localStorage.set('infoProject', infoProject);
        console.log('Datos enviados correctamente');
      } else {
        console.error('Error al enviar los datos');
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  const handleReset = () => {
    setInfoProject({
      name: '',
      slogan: '',
      repo: '',
      demo: '',
      technologies: '',
      desc: '',
      autor: '',
      job: '',
      image:
        'https://afiescuela.storage.googleapis.com/cms_multimedia/cms_medias/files/000/001/538/original/margaret.png?1607668400',
      photo:
        'https://cdn.evalart.com/wp-content/uploads/2019/06/MujeresenTIPioneras.png',
    });
    localStorage.clear();
  };
  return (
    <div className='container'>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route
          path='/projectlist'
          element={
            <>
              <Header />

              <Hero />
              <ProjectList projectlistData={projectlistData} />
            </>
          }
        />
        <Route
          path='/addnewproject'
          element={
            <>
              <Header />
              <Hero />
              <Link to={'/projectlist'} style={{ textDecoration: 'none' }}>
                <LinkButton textContent='Ver proyectos' />
              </Link>
              <main className='main'>
                <Preview infoProject={infoProject} cardUrl={url} />
                <Form
                  onClickSave={onClickSave}
                  onChangeValue={handleProjectInfo}
                  cardUrl={url}
                  infoProject={infoProject}
                  handleReset={handleReset}
                />
              </main>
            </>
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
