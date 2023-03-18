import React, { useEffect, useContext } from 'react'
import { GoblaData } from '../../../App';

function User() {
  const { linkClicked } = useContext(GoblaData);
  useEffect(() => {
    console.log("Welcome to User");
    linkClicked("user")
  }, [])
  return (
    <div>User</div>
  )
}

export default User