import React from 'react'
import { NoFoundDiv, NoFoundMessage, GoBack } from './notFound.style';
import { textAlign } from '@mui/system';
import { Link } from 'react-router-dom';


const NotFound = () => {
  return (
    <NoFoundDiv>
        <NoFoundMessage>NOT FOUND 🤷‍♂️</NoFoundMessage>
        <Link to="/" style={{textDecoration:"none"}}> <GoBack>Go To HomePage </GoBack> </Link>
    </NoFoundDiv>
  )
}

export default NotFound;