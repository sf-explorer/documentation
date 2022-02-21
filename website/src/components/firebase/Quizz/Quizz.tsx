import React from "react"
import * as QuizzUI from '@site/src/components/Quizz';
import { useDocumentData } from "react-firebase-hooks/firestore"
import { useAuthState } from "react-firebase-hooks/auth"
import db, { auth } from "@site/src/firebase"
import {
  doc,
} from "firebase/firestore"
import { getCurrentUser } from "@site/src/model/user"
import type { Choice, QuizzProps } from '@site/src/components/Quizz';


function Quizz(props: QuizzProps) {
  let {
    id,
  } = props
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
    <QuizzUI.default {...props} userChoice={userChoice} onSubmitted={(value) => SubmitAnswer(value)} />
  )
}

export default Quizz
