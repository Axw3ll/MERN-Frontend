import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import RutaProtegida from "./layout/RutaProtegida";
import AdministrarPacientes from "./paginas/AdministrarPacientes";

import Login from "./paginas/Login";
import Registrar from "./paginas/Registrar";
import OlvidePassword from "./paginas/OlvidePassword";
import ConfirmarCuenta from "./paginas/ConfirmarCuenta";
import NuevPassword from "./paginas/NuevPassword";
import CambiarPassword from "./paginas/CambiarPassword";
import EditarPerfil from "./paginas/EditarPerfil";

import { AuthProvider } from "./context/AuthProvider";
import { PacientesProvider } from "./context/PacientesProvider";

function App() {
  
  return (
    <BrowserRouter>
        <AuthProvider>
          <PacientesProvider>
              <Routes>

              //Rutas de Area Publica
                <Route path="/" element={<AuthLayout />}>
                    <Route index element={<Login/>}/>
                    <Route path="registrar" element = {<Registrar/>}/>
                    <Route path="olvide-password" element = {<OlvidePassword/>}/>
                    <Route path="olvide-password/:token" element = {<NuevPassword/>}/>
                    <Route path="confirmar/:id" element = {<ConfirmarCuenta/>}/>
                </Route>

              //Rutas de Area Privada
              <Route path="/admin" element={<RutaProtegida/>}>
                    <Route index element={<AdministrarPacientes/>} />
                    <Route path="perfil" element={<EditarPerfil/>}/>
                    <Route path="cambiar-password" element={<CambiarPassword/>} />
              </Route>




              </Routes>
          </PacientesProvider>
        </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
