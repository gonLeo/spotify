import React, { Component } from "react";

import propTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as PlaylistsActions } from '../../store/ducks/playlists';

import {Container, Title, List, Playlist} from './styles'

class Browse extends Component {

    static propTypes = {
        getPlaylistsRequest: propTypes.func.isRequired,
        playlists: propTypes.shape({
          data: propTypes.arrayOf(propTypes.shape({
            id: propTypes.number,
            title: propTypes.string,
            thumbnail: propTypes.string,
            description: propTypes.string,
          })),
        }).isRequired,
      };
    
      componentDidMount(){
        this.props.getPlaylistsRequest();
      }

    render(){
        return(
            <Container>
                <Title> Navegar</Title>
                <List>
                    {this.props.playlists.data.map(playlist => (
                        <Playlist key={playlist.id} to={`/playlists/${playlist.id}`}>
                            <img
                                src={playlist.thumbnail}
                                alt={playlist.title} />
                            <strong> {playlist.title} </strong>
                            <p>{playlist.description}</p>
                        </Playlist>
                    ))}
                </List>
            </Container>
        );
    }
}

const mapSateToProps = state =>({
    playlists: state.playlists,
  });
  
  const mapDispatchToProps = dispatch => bindActionCreators(PlaylistsActions, dispatch);
  
  
  export default connect(mapSateToProps, mapDispatchToProps)(Browse);
