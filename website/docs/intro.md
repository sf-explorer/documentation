---
sidebar_position: 1
---
import Quizz from '@site/src/components/firebase/Quizz';

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

Import the quizz component
```
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

## Add a multi choice quizz
```jsx
<Quizz id="location"
  points={50}
  choices={["USA", "France", "Poland", "India", "Other"]}
  description="Where are you currently located?"
/>
```

