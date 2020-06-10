import React from 'react'
import {
    AppProps,
    Navigator
} from '.'

export const App: React.FC<AppProps> = props => {

return ( 
    <Navigator routes={props.routes} />   
  )
}