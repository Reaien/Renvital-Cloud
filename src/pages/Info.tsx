import NavBar from "../components/Global/NavBar";
import InfoPdf from "../components/Info/InfoPdf";
import Title from "../components/Global/Title";

import Footer from "../components/Global/Footer";



type Props = {};

function Info({}: Props) {
  return (
    <>
      <NavBar />
      <Title
        titulo={"Enfermedades renales"}
        subTitulo={
          "Accede de manera gratuita a nuestro material para conocer más acerca de las enfermedades renales y avanza a una vida más saludable y consciente"
        }
      />
      <InfoPdf />
      <Footer/>
    </>
  );
}

export default Info;
