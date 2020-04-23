import React from 'react';

import LoadingIcon from '../../assets/images/loading.svg';

import { Spinner } from './styles';

function Loading(){
    return (
        <Spinner src={LoadingIcon} alt="Carregando" />
    );
}

export default Loading