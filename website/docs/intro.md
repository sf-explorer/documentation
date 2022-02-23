---
sidebar_position: 1
---
import Quizz from '@site/src/components/firebase/Quizz';

# Tutorial Intro

Let's discover **Docusaurus LMS in less than 5 minutes**.

Create a mdx and import the quizz component:
```jsx
import Quizz from '@site/src/components/firebase/Quizz';
```

## Add an open quizz
```jsx
<Quizz id="managerEmail"
  points={50}
  description="What is your manager email?"
/>
```

<Quizz id="managerEmail"
  points={50}
  description="What is your manager email?"
/>

## Add a quizz with a list of choices

Here there is no correct answer, the user can select any option

```jsx
<Quizz id="location"
  points={50}
  choices={["USA", "France", "Poland", "India", "Other"]}
  description="Where are you currently located?"
/>
```
<Quizz id="location"
  points={50}
  choices={["USA", "France", "Poland", "India", "Other"]}
  description="Where are you currently located?"
/>


## Add a quizz with a list of choices and a correct response

You can also define a correct option using the response property:

```jsx
<Quizz id="mathFloor"
  points={50}
  choices={["undefined", "3", "-3", "-4"]}
  description="Math.floor(-3.4) returns?"
  response={3}
/>
```
<Quizz id="mathFloor"
  points={50}
  choices={["undefined", "3", "-3", "-4"]}
  description="Math.floor(-3.4) returns"
  response={3}
/>


