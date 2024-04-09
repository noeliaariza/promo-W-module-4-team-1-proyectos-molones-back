import { useState } from 'react';
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



  const [url, setUrl] = useState('');

  const handleProjectInfo = (value, id) => {
    setInfoProject({ ...infoProject, [id]: value });
    console.log(infoProject);
  };

  // let projectlistData = [];

  // const getProjectList = async() => {
    
  //   const response = await fetch("/projectlist");
  //   const data = await response.json();
  //   console.log(data);
  //   projectlistData = data.message; 
  //   console.log(projectlistData);
  // }
  // getProjectList();
  

  const onClickSave = () => {
    fetch('https://dev.adalab.es/api/projectCard', {
      method: 'POST',
      body: JSON.stringify(infoProject),
      headers: { 'Content-type': 'application/json' },
    })
      .then((response) => response.json())
      .then((result) => {
        setUrl(result.cardURL);
        console.log(result);
        if (result.success) {
          localStorage.set('infoProject', infoProject);
        }
      });
  };

  return (
    <div className='container'>
      <Routes>
        <Route
          path='/'
          element={
            <>
              <Header />

              <Hero />
              <ProjectList infoProject={infoProject} />
            </>
          }
        />
        <Route
          path='/addnewproject'
          element={
            <>
              <Header />
              <Hero />

              <LinkButton to='/projectlist' textContent='Ver proyectos' />
              <main className='main'>
                <Preview infoProject={infoProject} cardUrl={url} />
                <Form
                  onClickSave={onClickSave}
                  onChangeValue={handleProjectInfo}
                  cardUrl={url}
                  infoProject={infoProject}
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
