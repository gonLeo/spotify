import React, { Component } from "react";
import propTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as PlaylistDetailsActions } from "../../store/ducks/playlistDetails";
import { Creators as PlayerActions } from "../../store/ducks/player";

import { Container, Header, SongList, SongItem } from "./styles";

import Loading from "../../components/Loading";

import ClockIcon from "../../assets/images/clock.svg";
import PlusIcoon from "../../assets/images/plus.svg";

class Playlist extends Component {
  static propTypes = {
    match: propTypes.shape({
      params: propTypes.shape({
        id: propTypes.number,
      }),
    }).isRequired,
    getPlaylistDetailsRequest: propTypes.func.isRequired,
    playlistDetails: propTypes.shape({
      data: propTypes.shape({
        thumbnail: propTypes.string,
        title: propTypes.string,
        description: propTypes.string,
        songs: propTypes.arrayOf(
          propTypes.shape({
            id: propTypes.number,
            title: propTypes.title,
            author: propTypes.string,
            album: propTypes.string,
          })
        ),
      }),
      loading: propTypes.bool,
    }).isRequired,
    loadSong: propTypes.func.isRequired,
    currentSong: propTypes.shape({
      id: propTypes.number,
    }).isRequired,
  };

  state = {
    selectedSong: null,
  };

  componentDidMount() {
    this.loadPlaylistDetails();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.loadPlaylistDetails();
    }
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;

    this.props.getPlaylistDetailsRequest(id);
  };

  renderDetails = () => {
    const playlist = this.props.playlistDetails.data;
    return (
      <Container>
        <Header>
          <img src={playlist.thumbnail} alt={playlist.title} />
          <div>
            <span>PLAYLIST</span>
            <h1>{playlist.title}</h1>
            {!!playlist.songs && <p>{playlist.songs.length} músicas</p>}

            <button>PLAY</button>
          </div>
        </Header>
        <SongList cellPadding={0} cellSpacing={0}>
          <thead>
            <th />
            <th>Título</th>
            <th>Artista</th>
            <th>Álbum</th>
            <th>
              <img src={ClockIcon} alt="Duração" />
            </th>
          </thead>
          <tbody>
            {!playlist.songs ? (
              <tr>
                <td colSpan={5}>Nenhuma música encontrada</td>
              </tr>
            ) : (
              playlist.songs.map((song) => (
                <SongItem
                  key={song.id}
                  onClick={() => this.setState({ selectedSong: song.id })}
                  onDoubleClick={() => this.props.loadSong(song)}
                  selected={this.state.selectedSong === song.id}
                  playing={
                    this.props.currentSong &&
                    this.props.currentSong.id === song.id
                  }
                >
                  <td>
                    <img src={PlusIcoon} alt="Adicionar" />
                  </td>
                  <td>{song.title}</td>
                  <td>{song.author}</td>
                  <td>{song.album}</td>
                  <td>3:25</td>
                </SongItem>
              ))
            )}
          </tbody>
        </SongList>
      </Container>
    );
  };

  render() {
    return this.props.playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetails()
    );
  }
}

const mapSateToProps = (state) => ({
  playlistDetails: state.playlistDetails,
  currentSong: state.player.currentSong,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ ...PlaylistDetailsActions, ...PlayerActions }, dispatch);

export default connect(mapSateToProps, mapDispatchToProps)(Playlist);
