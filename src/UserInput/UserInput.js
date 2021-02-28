import React from 'react'

const style = {
  border: '2px solid purple',
  padding: '16px',
  fontSize: '32px',
  textAlign: 'center',
}

const UserInput = (props) => {
  return (
    <div>
      <input style={ style } type="text" onChange={ props.changed } value={ props.username }/>
    </div>
  )
}

export default UserInput
