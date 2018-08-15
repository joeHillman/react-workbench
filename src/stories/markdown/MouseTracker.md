# Notes - Render Props

Render props are an effective way to share code across components.
It uses a prop whose value is a function.

This is effective for cross cutting concerns.
The example I have built separately is for pagination.
[Render props and pagination controls]()

The general process outlined in the documentation is to encapsulate the code that you wish to share.
Then integrate that code into a React component using Render Props.

It is akin to the Provider/Consumer model used in Redux.

* At the provider layer you pass in what is to be shared, in this case it is state.
  * ```{this.props.render(this.state)}```

* At the consumer layer you use it as so...
  * ```... style={{ prop.x }}```
  * ```<EncapsulatedCode render={passedParam => ( <ConsumingComponent prop={passedParam} )}```

This is just the example from the React documentation.


[React Documentation](https://reactjs.org/docs/render-props.html)
