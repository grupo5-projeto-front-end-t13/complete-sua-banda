import React, { ReactNode } from 'react'
import * as styled from "./style"

interface iSelectProps{
  icon: any;
  children: ReactNode;
  name: string;
  register: Function;
}

export const Select = ({name , icon: Icon, register ,children, ...rest }: iSelectProps) => {
  return (
    <styled.Container>
        {Icon && <Icon />}
        <select {...rest} {...register(name)}>{children}</select>
    </styled.Container>
  )
}
