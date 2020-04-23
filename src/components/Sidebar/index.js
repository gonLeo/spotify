import React, { Component } from "react";
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, NewPlaylist, Nav } from "./styles";
import AddPlayListIcon from "../../assets/images/add_playlist.svg";


class Sidebar extends Component{
  static propTypes = {
    getPlaylistsRequest: propTypes.func.isRequired,
    playlists: propTypes.shape({
      data: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        title: propTypes.string,
      })),
    }).isRequired,
  };

  componentDidMount(){
    this.props.getPlaylistsRequest();
  }

  render(){
    return(
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
          {this.props.playlists.data.map(playlist => (
            <li key={playlist.id}>
              <Link to={`Playlists/${playlist.id}`}>{playlist.title} </Link>
            </li>
          ))}
        </Nav>
      </div>
      <NewPlaylist>
        <img src={AddPlayListIcon} alt="Adicionar playlist" />
        Nova playlist
      </NewPlaylist>
    </Container>
    );
  }
}

const mapSateToProps = state =>({
  playlists: state.playlists,
});

const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);


export default connect(mapSateToProps, mapDispatchToProps)(Sidebar);

// const Sidebar = () => <Container></Container>;

// export default Sidebar;
