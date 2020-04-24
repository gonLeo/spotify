import React, { Component } from "react";
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import { Container, NewPlaylist, Nav } from "./styles";

import Loading from '../../components/Loading';

import AddPlayListIcon from "../../assets/images/add_playlist.svg";


class Sidebar extends Component{
  static propTypes = {
    getPlaylistsRequest: propTypes.func.isRequired,
    playlists: propTypes.shape({
      data: propTypes.arrayOf(propTypes.shape({
        id: propTypes.number,
        title: propTypes.string,
      })),
      loading: propTypes.bool,
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
            <Link to="/">Navegar</Link>
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
            {this.props.playlists.loading && <Loading />}
          </li>
          {this.props.playlists.data.map(playlist => (
            <li key={playlist.id}>
              <Link to={`/playlists/${playlist.id}`}>{playlist.title} </Link>
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
