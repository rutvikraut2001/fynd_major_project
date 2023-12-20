import React from 'react'
import { NoFoundDiv, NoFoundMessage } from './notFound.style'
import { textAlign } from '@mui/system';


const NotFound = () => {
  return (
    <NoFoundDiv>
        <NoFoundMessage>NOT FOUND 🤷‍♂️</NoFoundMessage>
    </NoFoundDiv>
  )
}

export default NotFound;