import React from "react"
import db, {auth} from "@site/src/firebase"
import { signIn, signOutUser } from "@site/src/model/user"
import { useAuthState } from "react-firebase-hooks/auth"
import { useDocumentData } from "react-firebase-hooks/firestore"
import Link from '@docusaurus/Link'
import styles from './index.module.css'
import {
  doc
} from "firebase/firestore"

const Version = '04t09000000W8FT'

const Install = () => {

  const [user] = useAuthState(auth)
  const [userData] = useDocumentData(doc(db, "users", user?.uid || "anonymous"))
  if (user) {
    return (
      <>
       <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg margin-right--xs"
            to={`https://test.salesforce.com/packaging/installPackage.apexp?p0=${Version}`}>
            Install in Sandbox 📥
          </Link>
          {' '}
          <Link
            className="button button--info button--lg margin-right--xs"
            to={`https://login.salesforce.com/packaging/installPackage.apexp?p0=${Version}`}>
            Install in Production 📥
          </Link>
          <Link
            download target="_blank"
            className="button button--secondary button--lg"
            to={`/chrome/industry-explorer-0.0.2.zip`}>
            Download chrome extension 🔥
          </Link>
          
        </div>
        </>
     )
  } else {
    return (<a className="button button--secondary button--lg margin-right--xs" onClick={signIn(db)}>
      Login to install the package 📥
    </a>)
  }
}

export default Install