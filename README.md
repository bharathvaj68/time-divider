# Time Divider

A simple React component that divides a selected time range into four equal parts and displays each time point in a 12-hour AM/PM format.
Built using React and Tailwind CSS.

---

## Features

* Select “From” and “To” datetimes using input fields
* Automatically divides the range into 4 equal intervals
* Displays results in clean 12-hour AM/PM format
* Simple, responsive layout using Tailwind CSS
* Lightweight and easy to integrate

---

## Example

| From     | To       | Output                                            |
| -------- | -------- | ------------------------------------------------- |
| 12:00 AM | 12:00 PM | 12:00 AM → 3:00 AM → 6:00 AM → 9:00 AM → 12:00 PM |

---

## Installation

Clone this repository and install dependencies:

```bash
git clone https://github.com/yourusername/time-divider.git
cd time-divider
npm install
```

Run the development server:

```bash
npm run dev
```

---

## Usage

Import and use the component in your React project:

```jsx
import Calc from "./Calc";

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Calc />
    </div>
  );
}

export default App;
```

---

## Technologies Used

* React (Hooks)
* Tailwind CSS
* JavaScript (ES6+)

---

## Project Structure

```
time-divider/
├── src/
│   ├── Calc.jsx
│   ├── App.jsx
│   └── main.jsx
├── package.json
├── index.html
└── README.md
```

---

## Example Output

```
Part 0: 12:00 AM
Part 1: 3:00 AM
Part 2: 6:00 AM
Part 3: 9:00 AM
Part 4: 12:00 PM
```

---

## Future Improvements

* Allow user-defined number of parts
* Support custom time formats
* Add dark/light mode support
* Include date labels next to each time

---

## Author

**Bharathvaj V**
Computer Science Student  

LinkedIn: [bharathvaj-v](https://www.linkedin.com/in/bharathvaj-v)

