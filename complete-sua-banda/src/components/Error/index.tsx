import React, { ReactNode } from 'react'
import * as styled from "./style"

interface iError {
    children: ReactNode;
  }

export const Error = ({children}: iError) => {
  return (
    <styled.pError>{children}</styled.pError>
  )
}
