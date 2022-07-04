import { AlertStyle } from "./Alert.styles"

export const Alert = ( {message} ) => {
  return (
    <AlertStyle>
      <span>⚠ {message}</span>
    </AlertStyle>
  )
}

