# Component - Tab Container

The tab container component uses the Tab and TabRender component to build the tab menu interace, uses one piece of state to track the active tab and one prop to receive the menu array.

The TabRender component is a stateless functional shell component that houses the return value of the map used on the menu object.

It uses one piece of state to track the active tab and passes down the active tab for comparison on the Tab component to signal that the tab is active.

The active tab state is also used to render the content of that tab. The content panel is passed into the menu object. If that content keys value is null, it is omitted from the tab menu. This could be useful if you were awaiting content or wished to hide a tab temporarily.

This component was initially built with a content render component which used a switch statement and prop list to render the correct content but I chose later on to include the content with the menu items because it scales up easily and you likely would have at least two tabs with an unknown number for the total.

Below are links to the components that power this component.

Tab:
Tab Render:
Tab Container:
