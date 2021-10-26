import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './profile/Profile';



function App() {
  const person = { fullName: 'Zarai Bilel',     bio : "Ingenieur web MERN étudier a LUniversite Arabe de Science est je termine par une formation Professionel à l'ecole de formation GOMYCODE ",
                   profession :'Ingenieur Informatique '}
 
   const handleName = (perso) => { alert(`Your Name's : ${person.fullName}`) };

                   return (
    <div className="App">

                       <h1 className="text-center">Profile User</h1>

                         <br/>
                         <Profile person={person} handleName={handleName}>
                         </Profile>
     
     
        </div>
  );
}

export default App;
