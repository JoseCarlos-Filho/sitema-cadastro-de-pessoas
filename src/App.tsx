import {BrowserRouter  as Router, Routes, Route } from "react-router-dom"
import Header from "components/Header";
import FormCasdastro from "pages/forms/FormCadastro";
import Inicio from "./pages/Inicio";
import {IPesssoasDados, PessoasDados } from "services/api/pessoas/PessoasDados";
import { useState } from "react";
import FormUpdate from "pages/forms/FormUpdate";



// const post = ()=> {
//     const newPerson: IPesssoasDados  = {
//         id: 90,
//         name: 'pedro',
//         email: 'pedro@gmail.com',
//         bDay: new Date('09/12/2000')
        
//     };
//     PessoasDados.createPerson(
//         newPerson
//         )
//     } 
    
    function App() {
    // const [formValues, SetFomValues] = useState<any>([]);

    // console.log(formValues);
    
    return (
        <Router>
            <Header />
            <Routes>
            <Route  path={"/"} element={<Inicio />} />
            <Route  path={"/home"} element={<Inicio  />} />
            <Route  path="/cadastro" element={<FormCasdastro />} />
            </Routes>
        </Router>
    );
}

export default App;
