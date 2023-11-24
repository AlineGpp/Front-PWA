import React from "react";
import software from '../../image/software.png';
function Home() {
  return (
  
    <div style={{
      backgroundImage: `url(${software})`,
      backgroundSize: 'cover',  // Isso faz com que a imagem cubra todo o elemento
      backgroundRepeat: 'no-repeat', // Evita repetição da imagem
      backgroundPosition: 'center', // Alinha a imagem ao centro
      width: '100vw', // Define a largura para ocupar 100% da largura da viewport
      height: '90vh' // Define a altura para ocupar 100% da altura da viewport
    }}>
      <h1 style={{color:"white"}}>CadSystems</h1>
    </div>
    
    
  );
}
export default Home;
