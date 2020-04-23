import React from "react";

import {Container, Title, List, Playlist} from './styles'

const Browse = () => (
  <Container>
    <Title> Navegar</Title>
    <List>
        <Playlist to="/playlists/1">
            <img src="https://img.apmcdn.org/80ef67f5910de61be7dbb1a1adfdb4253e08dad4/square/0b317c-20130929-arctic-monkeys-am-album-cover-art.jpg" alt="Playlist"/>
            <strong>Arctic monkeys</strong>
            <p>Só as melhores do AM</p>
        </Playlist>
        <Playlist to="/playlists/1">
            <img src="https://img.apmcdn.org/80ef67f5910de61be7dbb1a1adfdb4253e08dad4/square/0b317c-20130929-arctic-monkeys-am-album-cover-art.jpg" alt="Playlist"/>
            <strong>Arctic monkeys</strong>
            <p>Só as melhores do AM</p>
        </Playlist>
        <Playlist to="/playlists/1">
            <img src="https://img.apmcdn.org/80ef67f5910de61be7dbb1a1adfdb4253e08dad4/square/0b317c-20130929-arctic-monkeys-am-album-cover-art.jpg" alt="Playlist"/>
            <strong>Arctic monkeys</strong>
            <p>Só as melhores do AM</p>
        </Playlist>
        <Playlist to="/playlists/1">
            <img src="https://img.apmcdn.org/80ef67f5910de61be7dbb1a1adfdb4253e08dad4/square/0b317c-20130929-arctic-monkeys-am-album-cover-art.jpg" alt="Playlist"/>
            <strong>Arctic monkeys</strong>
            <p>Só as melhores do AM</p>
        </Playlist>
    </List>
  </Container>
);

export default Browse;
