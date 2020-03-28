import React from 'react'
import { useHistory } from 'react-router-dom'

export const AboutPage: React.FC = () => {
  const history = useHistory()
  return (
    <>
      <h1>Information page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nostrum
        vero, repudiandae expedita beatae iure? Mollitia tempore quae qui
        voluptatum.
      </p>
      <button className="btn" onClick={() => history.push('/')}>
        Back to the todo list
      </button>
    </>
  )
}
