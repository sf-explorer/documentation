---
sidebar_position: 2
---

# Firebase setup

## Create a firestore app

## Configure your security rules


```json title="security rules"
service cloud.firestore {
  match /databases/{database}/documents {
    // Allow only authenticated content owners access
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId
    }
  }
}
```