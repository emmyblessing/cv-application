import './App.css';
import EduExperience from './Components/EduExperience/EduExperience';
import GeneralInfo from './Components/GeneralInfo/GeneralInfo';
import Skills from './Components/Skills/Skills';
import WorkExperience from './Components/WorkExperience/WorkExperience';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>CV APPLICATION</h1>
      </header>
      <div className='container mt-4'>
        <div className='row'>
          <div className='col-md-4'>
            <div className="bg">
              <GeneralInfo />
            </div>
          </div>
          <div className='col-md-8'>
            <WorkExperience />
            <EduExperience />
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
