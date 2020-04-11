import  React,{ useState }from 'react';
import Header  from './components/Header';

function App(){

  function HandleAddProject(){

    setProjects([...projects,`Novo projeto ${Date.now()}`]);
  }
  const [projects, setProjects ]  = useState(['desenvolvimento de app ','front-end web'])
  return (
    <>
    <Header title="projects"/>
      <ul>
      {projects.map(project => <li key={project}>{project}</li>)}

      </ul>
        <button type="button" onClick={HandleAddProject} >Adicionar Projeto</button>
      
    </>
  );
}
export default App;