# reactjs-alert

![npm](https://img.shields.io/npm/dt/reactjs-alert?style=flat-square) ![NPM](https://img.shields.io/npm/l/reactjs-alert?style=flat-square) ![npm](https://img.shields.io/npm/v/reactjs-alert?style=flat-square) ![Dependents (via libraries.io)](https://img.shields.io/github/stars/sourav-oss/reactjs-alert) ![npm collaborators](https://img.shields.io/twitter/url?style=social&url=https%3A%2F%2Ftwitter.com%2F_DuttaSourav)

A simple reactjs alert component.
To get started, try installing the reactjs-alert:

- `npm install --save reactjs-alert`

## Working Demo with example code

https://t1ur0h.csb.app/
<br />
<br />

<iframe src="https://codesandbox.io/embed/awesome-dirac-t1ur0h?fontsize=14&hidenavigation=1&module=%2Fsrc%2FApp.js&theme=dark&view=preview"
     style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
     title="awesome-dirac-t1ur0h"
     allow="accelerometer; ambient-light-sensor; camera; encrypted-media; geolocation; gyroscope; hid; microphone; midi; payment; usb; vr; xr-spatial-tracking"
     sandbox="allow-forms allow-modals allow-popups allow-presentation allow-same-origin allow-scripts"
   ></iframe>

## Example screenshot

![alt demo](./demo.png)

## How to use

A simple Reactjs component that will pop up an alert of success, warning, error and information. You can customize it with different props type in your component.

To add this npm to your project run:

- `npm install --save reactjs-alert`

Import it to your specific project file: `import ReactJsAlert from "reactjs-alert"`.

```
import ReactJsAlert from "reactjs-alert"
...
```

Finally, add the `ReactJsAlert` component within render method:

```

<ReactJsAlert
    status={true}   // true or false
    type="success"   // success, warning, error, info
    title="Hey! this is an alert."   // title you want to display
    Close={() => this.setState({ status: false })}   // callback method for hide
/>

...
```

This import of ReactJsAlert hook is able to show alerts.
And that's it!

## Available props

```

status: true or false *
title: string  ( an alert title ) *
type: string   ( value : success, warning, error, info ) *
color: string  ( OPTIONAL: hex code [i.e. #f4f4f4] )
quotes: true or false ( OPTIONAL )
quote: string  ( OPTIONAL: a message on alert )
button: string ( text you want to use i.e. Try Again )

```

**Use a call back method (arrow function) to close it manually**

```

Close: callBackMethod()  ( i.e. [ Close={() => this.setState({ status: false })} ])

```

## Peer dependencies

This package expect the following peer dependencies:

```

"peerDependencies": {
    "react": "^16.6.1",
    "react-dom": "^16.6.3"
},

```

So make sure that you have those installed too!

## Example usage

An example of showing alerts simultaneously:

```

import React, { Component } from "react";
import ReactJsAlert from "reactjs-alert";

export default class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      type: "error",
      status: true,
      title: "Hey! this is an error.",
    };
  }

  render() {
    return (
      <div className="App">
        <ReactJsAlert
          status={this.state.status} // true or false
          type={this.state.type} // success, warning, error, info
          title={this.state.title}
          Close={() => this.setState({ status: false })}
        />
      </div>
    );
  }
}

```

Make sure to follow me on github for latest update! Thanks...

**This component is built as a package to npm by Sourav Dutta.**

### Happy Coding ♡
