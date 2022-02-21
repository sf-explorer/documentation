import React from "react"
import { Quizz as QuizzUI } from '@hikeman/lms'
import { useDocumentData } from "react-firebase-hooks/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import type { QuizzProps } from '@hikeman/lms'

import {
  doc, getFirestore
} from "firebase/firestore"
import { getCurrentUser } from "@site/src/model/user"
import {
  getAuth
} from "firebase/auth"


function Quizz(props: QuizzProps) {
  let {
    id,
  } = props

  const db = getFirestore()
  const auth = getAuth()
  const loggedUser = getCurrentUser()
  const [user] = useAuthState(auth)
  const [userData] = useDocumentData(doc(db, "users", user?.uid || "anonymous"))
  const userChoice = userData?.answers[id] ? userData?.answers[id].answer : undefined
  if (!user) {
    return (<>Log in to answer quizz</>)
  }

  const SubmitAnswer = (value) => {
    loggedUser.setSubjectStatus(id, value)
  }

  return (
    <QuizzUI {...props} userChoice={userChoice} onSubmitted={(value) => SubmitAnswer(value)} />
  )
}

export default Quizz
