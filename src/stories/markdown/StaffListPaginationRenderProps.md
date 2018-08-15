# Demonstration - Staff List Paginated - Render Props

The demonstration is to show the pagination components in use with multiple tables. This uses Render Props to share the pagination controls, or more explicitly the sized data from state, across each list of data. Like the initial pager it sizes the data to be displayed according to the page size, but the only modification here is that the sized data is stored in state so it can be passed down to the component for rendering.

This case uses a table to render the data, but using Render Props allows us to reuse this code across multiple instances and with the sized data being passed down via the state object, the rendering component could use any format.

The data objects here includes a list of staff in a restaurant and includes names, positions, and if they're clocked in. The second data object is a list of people and their favorite movies.

Future enhancements could include a filter to show clocked in/out employees or adding a genre key to the movie list and filter on preferred genres.

Below is the link to the file that powers this component.

[Staff List Paginated - Render Props](https://github.com/joeHillman/react-workbench/blob/master/src/stories/StaffListPaginationRenderProps.js)
