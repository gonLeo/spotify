import React from "react";

import { Container, NewPlaylist, Nav } from "./styles";
import AddPlayListIcon from "../../assets/images/add_playlist.svg";

function Sidebar() {
  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <a href="">Navegar</a>
          </li>
          <li>
            <a href="">Rádio</a>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>SUA BIBLIOTECA</span>
          </li>
          <li>
            <a href="">Seu Daily Mix</a>
          </li>
          <li>
            <a href="">Tocados Recentemente</a>
          </li>
          <li>
            <a href="">Álbuns</a>
          </li>
          <li>
            <a href="">Artistas</a>
          </li>
          <li>
            <a href="">Estações</a>
          </li>
          <li>
            <a href="">Arquivos locais</a>
          </li>
          <li>
            <a href="">Vídeos</a>
          </li>
          <li>
            <a href="">Podcast</a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>PLAYLISTS</span>
          </li>
          <li>
            <a href="">Melhores do rock</a>
          </li>
        </Nav>
      </div>
      <NewPlaylist>
        <img src={AddPlayListIcon} alt="Adicionar playlist" />
        Nova playlist
      </NewPlaylist>
    </Container>
  );
}

export default Sidebar;

// const Sidebar = () => <Container></Container>;

// export default Sidebar;
