import React from "react";

import { Container, NewPlaylist, Nav } from "./styles";
import AddPlayListIcon from "../../assets/images/add_playlist.svg";

function Sidebar() {
  return (
    <Container>
      <div>
        <Nav main>
          <li>
            <a href="https://www.speedtest.net/">Navegar</a>
          </li>
          <li>
            <a href="https://www.speedtest.net/">Rádio</a>
          </li>
        </Nav>

        <Nav>
          <li>
            <span>SUA BIBLIOTECA</span>
          </li>
          <li>
            <a href="https://www.speedtest.net/">Seu Daily Mix</a>
          </li>
          <li>
            <a href="https://www.speedtest.net/">Tocados Recentemente</a>
          </li>
          <li>
            <a href="https://www.speedtest.net/">Álbuns</a>
          </li>
          <li>
            <a href="https://www.speedtest.net/">Artistas</a>
          </li>
          <li>
            <a href="https://www.speedtest.net/">Estações</a>
          </li>
          <li>
            <a href="https://www.speedtest.net/">Arquivos locais</a>
          </li>
          <li>
            <a href="https://www.speedtest.net/">Vídeos</a>
          </li>
          <li>
            <a href="https://www.speedtest.net/">Podcast</a>
          </li>
        </Nav>
        <Nav>
          <li>
            <span>PLAYLISTS</span>
          </li>
          <li>
            <a href="https://www.speedtest.net/">Melhores do rock</a>
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
