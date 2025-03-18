# reactjs-alert: Lightweight React Alert Component

![npm](https://img.shields.io/npm/dt/reactjs-alert?style=flat-square) ![NPM](https://img.shields.io/npm/l/reactjs-alert?style=flat-square) ![npm](https://img.shields.io/npm/v/reactjs-alert?style=flat-square) ![Dependents (via libraries.io)](https://img.shields.io/github/stars/sourav-oss/reactjs-alert) ![npm collaborators](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2F_DuttaSourav)

**Simple, flexible, lightweight, customizable React.js alert component for better user notifications. <br>
<i>An advance and unique alert for React.js applications - `reactjs-alert`. </i>**

<blockquote>
reactjs-alert is a simple, lightweight, flexible and customizable React.js alert component that helps developers create customizable alerts with ease. It supports multiple alert types like success, warning, error, and info, and comes with options for custom colors, auto-close, and quotes. Ideal for improving user engagement and enhancing notification systems in React applications. Get started in minutes with npm install reactjs-alert.
</blockquote>

---

## 🚀 Installation

Install the package via npm:

```bash
npm install --save reactjs-alert
```

Or with shorthand:

```bash
npm i reactjs-alert
```

---

## 📸 Example Screenshot

![Example Screenshot](./demo.png)


---

## ⚙️ Available Props

| Prop Name       | Type      | Description                                    | Required |
|-----------------|-----------|------------------------------------------------|:---------:|
| `status`         | Boolean   | Controls alert visibility (`true` / `false`)    | **Yes**   |
| `title`          | String    | Main message text displayed as title                             | **Yes**   |
| `type`           | String    | Alert type: choose one of the option from here [`'success'`, `'warning'`, `'error'`, `'info'`] | **Yes**   |
| `color`          | String    | Custom background color (`Hex code e.g. #de1327`)              | No         |
| `isQuotes`         | Boolean   | Displays additional quote text (`true` / `false`)                 | No         |
| `quote`          | String    | The additional quote message if `isQuotes = true`                   | No         |
| `button`         | String    | Custom button text (`e.g. "Try Again", "Submit"`)         | No         |
| `autoCloseIn`    | Number    | Automatically close the alert after X milliseconds            | No         |
| `Close` (method) | Function  | Callback method to manually close the alert      | **Yes**   |

---

## 🧩 Example Usage with Props

```jsx
<ReactJsAlert
  status={true}
  type="error"
  title="Oops! Something went wrong."
  color="#ff4d4f"
  quotes={true}
  quote="Please try again later."
  Close={() => setStatus(false)}
/>
```

---

## 📋 How to Use

`reactjs-alert` provides an intuitive way to display alerts for different types like **success**, **warning**, **error**, and **info**.  

Simply import the component and configure it using the available props.

### Class Component Example

```jsx
import React, { Component } from "react";
import ReactJsAlert from "reactjs-alert";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "success",
      status: true,
      title: "Hey! This is a success alert.",
    };
  }

  render() {
    return (
      <div>
        <ReactJsAlert
          status={this.state.status}
          type={this.state.type}
          title={this.state.title}
          Close={() => this.setState({ status: false })}
        />
      </div>
    );
  }
}
```

---

### Functional Component Example

```jsx
import React, { useState } from "react";
import ReactJsAlert from "reactjs-alert";

export default function App() {
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("success");
  const [title, setTitle] = useState("This is a success alert");

  return (
    <div>
      <button
        onClick={() => {
          setStatus(true);
          setType("success");
          setTitle("This is a success alert");
        }}
      >
        Show Alert
      </button>

      <ReactJsAlert
        status={status}
        type={type}
        title={title}
        Close={() => setStatus(false)}
      />
    </div>
  );
}
```

---

## 🔗 Peer Dependencies

Ensure these dependencies are present in your project:

```json
"peerDependencies": {
    "react": "^16.13.1",
    "react-dom": "^16.13.1"
}
```

---

## 💻 Example with Multiple Alerts

### Class Component Example

```jsx
import React, { Component } from "react";
import ReactJsAlert from "reactjs-alert";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "error",
      status: true,
      title: "Oops! Something went wrong.",
    };
  }

  render() {
    return (
      <div>
        <ReactJsAlert
          status={this.state.status}
          type={this.state.type}
          title={this.state.title}
          Close={() => this.setState({ status: false })}
        />
      </div>
    );
  }
}
```

---

### Functional Component Example

```jsx
import React, { useState } from "react";
import ReactJsAlert from "reactjs-alert";

export default function App() {
  const [status, setStatus] = useState(false);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");

  return (
    <div>
      <button
        onClick={() => {
          setStatus(true);
          setType("info");
          setTitle("This is an info alert!");
        }}
      >
        Show Info Alert
      </button>

      <ReactJsAlert
        status={status}
        type={type}
        title={title}
        quotes={true}
        quote="This is an example of a ReactJs alert."
        Close={() => setStatus(false)}
      />
    </div>
  );
}
```

---

## 🤝 Contributing

Contributions are welcome! If you have suggestions, improvements, or feature requests, feel free to fork the repository, raise issues, or submit pull requests.

---

## ⭐ Support

If you find this package helpful, consider giving it a ⭐ on [GitHub](https://github.com/sourav-oss).

---

## 📢 Follow Me

For updates, projects, and announcements, follow me on [Linkedin](https://in.linkedin.com/in/sourav-dutta-133a95149).

You can also follow me on [Twitter](https://twitter.com/_DuttaSourav).

---

**Built with ❤️ by Sourav Dutta 😊**

### Happy Coding! 🚀
