
# LLMNexus Sentinel – AI Prompt Injection & Vulnerability Scanner

## Overview

LLMNexus Sentinel is an AI-powered web application that helps detect prompt injection attacks, jailbreak attempts, and malicious user prompts before they reach a Large Language Model (LLM).

The app is designed for developers, students, and organizations building AI applications who want to improve prompt security and reduce the risk of prompt injection attacks.

---

## Problem Statement

Large Language Models are vulnerable to prompt injection and jailbreak attacks that can bypass system instructions or manipulate AI behaviour.

LLMNexus Sentinel provides a simple security scanner that analyses prompts and highlights potential threats before they are sent to an AI model.

---

## Live Demo

**Live App:**

https://llm-nexus-sentinel.vercel.app

---

## GitHub Repository

YOUR_GITHUB_REPO_LINK

---

## Features

- Scan user prompts for security risks
- Detect prompt injection attempts
- Detect jailbreak attacks
- Assign threat level (Safe / Moderate / Critical)
- Generate threat score
- Display security analysis
- Generate a sanitized version of the prompt
- Modern responsive user interface
- Copy security report

---

## AI Feature

The application uses Google's Gemini API to analyse prompts.

### System Prompt

The AI is instructed to act as an AI Security Analyst that:

- Detects prompt injection attacks
- Detects jailbreak attempts
- Analyses prompt security
- Assigns threat levels
- Explains detected vulnerabilities
- Produces a safe sanitized version of the prompt

The AI responds in structured JSON which is displayed inside the application.

---

## Technologies Used

- HTML5
- Tailwind CSS
- JavaScript
- Node.js
- Express.js
- Google Gemini API
- Vercel
- GitHub

---

## Screenshots

> Add at least three screenshots here.

Example:

- Home Page 

<img width="1920" height="960" alt="Screenshot (607)" src="https://github.com/user-attachments/assets/0bf3ee62-f28d-4e5c-b6ea-219c15a2b94b" />


- Security Scan Result

<img width="1920" height="911" alt="Screenshot (608)" src="https://github.com/user-attachments/assets/479586ca-52ca-4374-b5c4-7a304bb2a5f5" />


- Threat Analysis Report

<img width="1920" height="911" alt="Screenshot (609)" src="https://github.com/user-attachments/assets/29103388-2d75-4564-9166-e3ee0cca3d70" />


---

## How to Run Locally

1. Clone the repository

```bash
git clone YOUR_GITHUB_REPO_LINK
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` file

```
GEMINI_API_KEY=YOUR_API_KEY
```

4. Start the server

```bash
npm start
```

5. Open the application in your browser.

---

## Future Improvements

- More attack detection categories
- Prompt history
- PDF security reports
- Authentication system
- Dashboard analytics

---

## Author

**Saba Jamshed**

BSCS Student

AI Learner | Python & Data Analysis | Aspiring IT Professional## Screenshots
