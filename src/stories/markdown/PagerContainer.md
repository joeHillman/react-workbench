# Component - Pager Container

Deprecated but kept for reference, use the PaginationControls and a render prop if possible.

The pager container component is class based and includes 2 pieces of state and 3 props.

This component will not render data in this view but has been setup to test the pagination and page size pieces. The full demonstration can be viewed under the demonstration menu item.

The pagination controls have also been moved to a more reusable solution using render props.
The initial implementation will be kept for reference purposes.

The DATA prop accepts an array of objects, the classes prop accepts a string for style customizations, and the pageSizes prop will pass along an array of numbers to the page size component.

Below is the link to the file that powers this component.

[Pager Container](https://github.com/joeHillman/react-workbench/blob/master/src/components/pagination/PagerContainer.js)
