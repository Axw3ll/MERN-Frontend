import { Outlet,Navigate } from "react-router-dom"
import Header from "../components/Header";
import Footer from "../components/Footer";
import useAuth from "../hooks/useAuth"

function RutaProtegida() {

    const {auth,cargando} = useAuth()

    // console.log(auth);
    // console.log(cargando);

    if (cargando) return 'cargando.....'
  return (
    <>
      <Header/>
        
      
        {auth?._id ? (
        <main className="container mx-auto mt-20">
          <Outlet/> 
        </main>
        ): <Navigate to ="/"/>}
      <Footer/>
    </>
  
  )
}

export default RutaProtegida