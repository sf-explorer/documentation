---
sidebar_position: 1
---
import Quizz from '@site/src/components/firebase/Quizz';

# Tutorial Intro

Let's discover **Docusaurus in less than 5 minutes**.

<Quizz id="managerEmail"
  points={50}
  description="What is your manager email?"
/>

<Quizz id="location"
  points={50}
  choices={["USA", "France", "Poland", "India", "Other"]}
  description="Where are you currently located?"
/>

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

## Generate a new site

Generate a new Docusaurus site using the **classic template**:

```shell
npm init docusaurus@latest my-website classic
```

## Start your site

Run the development server:

```shell
cd my-website

npx docusaurus start
```

Your site starts at `http://localhost:3000`.

Open `docs/intro.md` and edit some lines: the site **reloads automatically** and displays your changes.
