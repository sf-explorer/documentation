import React from "react"
import db, {auth} from "@site/src/firebase"
import { signIn, signOutUser } from "@site/src/model/user"
import { useAuthState } from "react-firebase-hooks/auth"
import { useDocumentData } from "react-firebase-hooks/firestore"
import {
  doc
} from "firebase/firestore"
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';


const Avatar = () => {

  const [user] = useAuthState(auth)
  const [userData] = useDocumentData(doc(db, "users", user?.uid || "anonymous"))
  if (user) {
    return (<>
      {userData && userData.points ? <span className="badge badge--primary margin--xs"> {userData.points} pts </span>:<></>}
      <img
        className="avatar__photo avatar__photo--md"
        src={user.photoURL}
        title={user.displayName}
        style={{ display: "block" }}
      />
      <a onClick={signOutUser} className="ml-2">
        Sign out
      </a>
      <TawkMessengerReact
      propertyId="6644b2a29a809f19fb312db7"
      widgetId="1htu5kasp"/>
    </>)
  } else {
    return (<>
    <a className="btn btn-outline-primary" onClick={signIn(db)}>
      Sign in with github
    </a>
    <TawkMessengerReact
      propertyId="6644b2a29a809f19fb312db7"
      widgetId="1htu5kasp"/></>)
  }
}

export default Avatar