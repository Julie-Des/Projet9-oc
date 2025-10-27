# 724 events : Debugging an event agency’s website 🗓️

## 🎯 Project Objective

Debug and finalize the development of a one-page website for an event agency.
The main goal is to review the existing codebase, identify issues using Chrome DevTools and existing Jest unit tests, and fix all reported bugs to ensure the website runs smoothly.

As part of the debugging process, one additional Jest test was written to strengthen test coverage.

The project also includes writing a test plan (recipe book) that details all scenarios required to validate the website’s behavior through both unit and functional tests.

This project is part of the Web Integrator training course – OpenClassrooms.

## 🧠 Skills Developed

- 🔍 Debug a website using **Chrome DevTools**
- 🧪 Write a **test plan** to validate website functionality
- ⚙️ Identify and fix **JavaScript** and **React bugs**
- 🧩 Inspect and debug components with **React Developer Tools**
- 🧰 Manage dependencies with **Yarn** and Node.js
- 🧾 Perform and write unit tests and functional tests using **Jest**
- 💾 Version control with **Git** and **GitHub**
- 🧑‍💻 Develop and debug efficiently with **Visual Studio Code**

## 🪲 Fixed Bugs

During this project, several issues were identified and resolved based on the test plan scenarios.

### 🧭 Navigation Bar
- Fixed broken navigation links that did not scroll correctly to the associated sections.
- Implemented smooth scrolling behavior when clicking on navigation items.
- Corrected the behavior when clicking repeatedly on the same navigation link — the page now stays on the correct section.

### 🎞️ Event Slider
- Fixed the incorrect month display for events.
- Corrected the event order in the slider — events are now sorted from most recent to oldest.
- Implemented infinite slider looping and ensured the corresponding radio buttons update properly during transitions.

### 🗂️ Event Categories
- Fixed incorrect filtering of events by category — only events from the selected category are now displayed.
- Limited the number of displayed events to a maximum of **9 per page**, according to the design specifications.

### 📩 Contact Form
- Fixed the form submission process — the **“Sending...”** status and success message now appear correctly after submission.
- Added validation to prevent form submission when required fields (**email** and **message**) are empty.

### 🦶 Footer Event
- Fixed the display of the latest event in the footer — image, title, and date now render correctly.
- Fixed the click behavior — clicking the event in the footer now correctly opens the event details modal.

## 📦 Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (v16 or higher)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/Julie-Des/Projet9-oc
    ```

2. Install the dependencies:

    ```bash
   yarn install
    ```

### Running Locally

1.  Start the development server:

     ```bash
    yarn start
     ```

2. Run the tests:
   
    ```bash
   yarn test
     ```
  
4.  Open your browser and navigate to `http://localhost:3000` (or the port specified by your environment).

## 🌍 Deployment

The project is deployed on Vercel:
https://projet9-oc-724events.vercel.app/

## 📂 Project Structure

```
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   ├── Button/
│   │   │   ├── index.js
│   │   │   └── style.scss
│   │   ├── EventCard/
│   │   │   ├── index.js
│   │   │   └── style.scss
│   │   ├── Field/
│   │   │   ├── index.js
│   │   │   └── style.scss
│   │   ├── Icon/
│   │   │   └── index.js
│   │   ├── Logo/
│   │   │   └── index.js
│   │   ├── PeopleCard/
│   │   │   ├── index.js
│   │   │   └── style.scss
│   │   └── ServiceCard/
│   │       └── index.js
│   ├── contexts/
│   │   └── DataContext/
│   │       └── index.js
│   ├── containers/
│   │   ├── Events/
│   │   │   ├── index.js
│   │   │   └── style.css
│   │   ├── Form/
│   │   │   └── index.js
│   │   ├── Menu/
│   │   │   ├── index.js
│   │   │   └── style.scss
│   │   ├── Modal/
│   │   │   ├── index.js
│   │   │   └── style.scss
│   │   ├── ModalEvent/
│   │   │   ├── index.js
│   │   │   └── style.scss
│   │   └── Slider/
│   │       ├── index.js
│   │       └── style.scss
│   ├── pages/
│   │   └── Home/
│   │       ├── index.js
│   │       └── style.scss
│   ├── App.js
│   ├── App.scss
│   ├── index.js
│   ├── index.css
│   └── reportWebVitals.js
├── package.json
├── README.md
└── ...
```

## 📬 Contact

Deshayes Julie - julie.deshayes14@gmail.com

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💖 Thanks

This is partly written by [readme.ai](https://readme-generator-phi.vercel.app/) to help developers create beautiful documentation.
