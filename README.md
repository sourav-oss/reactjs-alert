# reactjs-alert

A simple reactjs alert component for your website.
To get started, try installing the reactjs-alert: 

- `npm install --save reactjs-alert`

## Example screenshot
![alt demo](./demo.png)

## How to use

A simple Reactjs component that will pop up an alert and hide automatically after a while. You can customize it with different props type in your code.

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
    type="success"   // success, warning, error, info
    title="Hey! this is an alert."   // title you want to display
    status={true}   // true or false
    button="Try Again"
    color="#1d36ad"
    quote="You can change the color, quote, title of you own
    Close={() => this.setState({ status: false })}   // callback method for hide
/>

...
```
This import of ReactJsAlert hook is able to show alerts. 
And that's it!

## Available props

```

type: string   ( success, warning, error, info )
title: string  ( title you want to display )
status: binary  ( true or false )
Close: callBackMethod()  ( structure: [ Close={() => this.setState({ status: false })} ])
color: string  ( optional: hex code [i.e. #f4f4f4] you want to use )
quote: string  ( optional: description you want to display )
button: string ( a button name you want to use i.e. Try Again )

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
      quote: "Something went wrong. Please try again!",
    };
  }
  
  render() {
    return (
      <div className="App">
        <ReactJsAlert
          type={this.state.type} // success, warning, error, info
          title={this.state.title} // title you want to display
          status={this.state.status} // true or false
          Close={() => this.setState({ status: false })}
        />
      </div>
    );
  }
}

```


## Beta version ?v=Beta

This package allows a beta version which includes the following:

- `add props for custom alert icons`
- `use of props to control alert time`
- `add props for custom position of the alert`
- `props for alert customization with custom className`

So make sure to follow me on github for latest update! Thanks...

**This component is built as a package to npm by Sourav Dutta.**


### Happy Coding ♡
