import React from "react"
import { signIn, signOutUser } from "../../model/user"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../../firebase"


const Avatar = (props) => {
  const [user] = useAuthState(auth)

  if (user) {
    return (<>
      {user.displayName}{" "}
      <img
        className="avatar__photo avatar__photo--md"
        src={user.photoURL}
        title={user.displayName}
        style={{ display: "block" }}
      />
      <a onClick={signOutUser} className="ml-2">
        Sign out
      </a>
    </>)
  } else {
    return (<a className="btn btn-outline-primary" onClick={signIn}>
      Sign in with github
    </a>)
  }

}

export default Avatar