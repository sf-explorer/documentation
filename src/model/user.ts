import { doc, Firestore, getDoc, setDoc, updateDoc, getFirestore, increment } from "firebase/firestore"
import {
   getAuth,
   GithubAuthProvider,
   signInWithPopup,
   signOut,
   onAuthStateChanged,
} from "firebase/auth"


export interface SubjectStatus {
   answer?: number
   [key: string]: any
}

export interface UserStatus {
   email?: string
   name?: string
   points: number
   answers?: { [subjectId: string]: SubjectStatus }
}

export interface User {
   readonly id: string
   readonly email?: string
   readonly name?: string

   getAllSubjectStatus(): Promise<{ [subjectId: string]: SubjectStatus }>
   getSubjectStatus(id: string): Promise<SubjectStatus>
   setSubjectStatus(id: string, status: Partial<SubjectStatus>, points?: number): Promise<SubjectStatus>
}

export class LoggedUser implements User {
   db: Firestore
   constructor(readonly id: string) {
   }
   async getAllSubjectStatus(): Promise<{ [subjectId: string]: SubjectStatus }> {
      const userRef = doc(getFirestore(), 'users', this.id)
      const docSnap = await getDoc<UserStatus>(userRef)
      if (docSnap.exists()) {
         const data = docSnap.data()
         if (data.answers) return data.answers
      }
      return {}
   }
   async getSubjectStatus(id: string): Promise<SubjectStatus> {
      return (await this.getAllSubjectStatus())[id]
   }
   async setSubjectStatus(id: string, status: Partial<SubjectStatus>, points?: number): Promise<SubjectStatus> {
      const userRef = doc(getFirestore(), 'users', this.id)
      const docSnap = await getDoc<UserStatus>(userRef)
      if (docSnap.exists()) {
         const data = docSnap.data()
         const statusUpdate = {
            ...data.answers?.[id],
            ...status,
         }
         await updateDoc(userRef, {
            points: increment(points || 0),
            answers: {
               ...data.answers,
               [id]: statusUpdate
            }
         })
         return statusUpdate
      }
      else {
         throw new Error("user not found")
      }
   }

}

let currentUser: User = null

export function getCurrentUser(): User {
   return currentUser
}

onAuthStateChanged(getAuth(), (user) => {
   if (user) {
      currentUser = Object.assign(new LoggedUser(user.uid), {
         email: user.email,
         name: user.displayName,
         answers: {},
         points: 0,
      })
   }
   else {
      currentUser = null
   }
}, (e) => {
   currentUser = null
})

export const signIn = (db: Firestore) => async () => {
   var provider = new GithubAuthProvider()
   const userInfo = await signInWithPopup(getAuth(), provider)
   if (userInfo?.user) {
      const userRef = doc(db, "users", userInfo.user.uid)
      const docSnap = await getDoc(userRef)
      const profile = {
         email: userInfo.user.email,
         name: userInfo.user.displayName,
         answers: {},
      }
      if (!docSnap.exists()) {
         await setDoc(userRef, profile)
      } else {
         const data = docSnap.data()
         if (data && !data.email) {
            await setDoc(userRef, profile, { merge: true })
         }
      }
   }
}

export function signOutUser() {
   signOut(getAuth())
}
