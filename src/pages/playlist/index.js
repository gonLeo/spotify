import React from 'react';
import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcoon from '../../assets/images/plus.svg';

const Playlist = () => (
    <Container>
        <Header>
            <img
                src="https://img.apmcdn.org/80ef67f5910de61be7dbb1a1adfdb4253e08dad4/square/0b317c-20130929-arctic-monkeys-am-album-cover-art.jpg"
                alt="Playlist"/>
            <div>
                <span>PLAYLIST</span>
                <h1>Arctic Monkeys</h1>
                <p>13 Músicas</p>

                <button>PLAY</button>
            </div>
        </Header>
        <SongList cellPadding={0} cellSpacing={0}>
            <thead>
              <th/>  
                <th>Título</th>
                <th>Artista</th>
                <th>Álbum</th>
                <th><img src={ClockIcon} alt="Duração"/></th>
            </thead>
            <tbody>
                <tr>
                    <td><img src={PlusIcoon} alt="Adicionar"/></td>
                    <td>Papercut</td>
                    <td>Linkin Park</td>
                    <td>Hybrid Theory</td>
                    <td>3:25</td>
                </tr>
                <tr>
                    <td><img src={PlusIcoon} alt="Adicionar"/></td>
                    <td>Papercut</td>
                    <td>Linkin Park</td>
                    <td>Hybrid Theory</td>
                    <td>3:25</td>
                </tr>
                <tr>
                    <td><img src={PlusIcoon} alt="Adicionar"/></td>
                    <td>Papercut</td>
                    <td>Linkin Park</td>
                    <td>Hybrid Theory</td>
                    <td>3:25</td>
                </tr>
                <tr>
                    <td><img src={PlusIcoon} alt="Adicionar"/></td>
                    <td>Papercut</td>
                    <td>Linkin Park</td>
                    <td>Hybrid Theory</td>
                    <td>3:25</td>
                </tr>
                <tr>
                    <td><img src={PlusIcoon} alt="Adicionar"/></td>
                    <td>Papercut</td>
                    <td>Linkin Park</td>
                    <td>Hybrid Theory</td>
                    <td>3:25</td>
                </tr>
                <tr>
                    <td><img src={PlusIcoon} alt="Adicionar"/></td>
                    <td>Papercut</td>
                    <td>Linkin Park</td>
                    <td>Hybrid Theory</td>
                    <td>3:25</td>
                </tr>
                <tr>
                    <td><img src={PlusIcoon} alt="Adicionar"/></td>
                    <td>Papercut</td>
                    <td>Linkin Park</td>
                    <td>Hybrid Theory</td>
                    <td>3:25</td>
                </tr>
            </tbody>
        </SongList>
    </Container>
);

export default Playlist;