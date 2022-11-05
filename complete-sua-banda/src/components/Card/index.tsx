import React from 'react'
import * as styled from "./style"
import { CgAdd } from 'react-icons/cg';

interface iCardProps{
  name: string;
  image?: string;
  state?: string;
  skill?: string;
  type: string;
  genre?: string;
  requirement?: string[];
  getCardProps: Function;
  id?: number;
}

export const Card = ({name, image, state, skill, type, genre, requirement, getCardProps, id }: iCardProps) => {
  return (
    <styled.Card>
        <div>
            <h2>{name}</h2>
            {type === "musico"? <h2>{state}</h2> : requirement && <h2>Procura-se um {requirement[0]}</h2>  }
            {type === "musico"? <h2>{skill}</h2> : <h2>{genre}</h2> }
        </div>
        <figure>
            <img src={image} alt="foto perfil" />
            <button onClick={()=>getCardProps(id)}> <CgAdd/> </button>
                     
        </figure>
    </styled.Card>
  )
}
