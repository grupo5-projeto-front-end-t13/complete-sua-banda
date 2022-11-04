import React from 'react'
import * as styled from "./style"
import fotoPerfil from "../../assets/roger.jpg"
import { CgAdd } from 'react-icons/cg';

export const Card = () => {
  return (
    <styled.Card>
        <div>
            <h2>Orange</h2>
            <h2>Procura-se 
    Guitarrista</h2>
            <h2>Rock</h2>
        </div>
        <figure>
            <img src={fotoPerfil} alt="" />
            <CgAdd/>           
        </figure>
    </styled.Card>
  )
}
