# Component - Modal

The modal component is a class based component and includes 2 piece of state and 12 props plus the use of children.

The isOpen state governs the open and close state of the modal.
The scriptedOpen state is for comparison with the getDerivedStateFromProps lifecycle method and toggles the isOpen state.

The openLabel is the string used for the button that will open the modal and is not required. The heading prop takes a string and if omitted, the modal will render more like an alert box. Note if the heading prop is omitted, it will not render at all in React. The bodyString can be used for a simple string style message or you can use HTML inside the modal if something more complex is desired.

The handleCancel and handleBackdrop have been split to separate props that take functions.

The onlyNotify prop drops the confirm button and will only render the cancel button. This is for simple messaging that doesn't require a cancel and confirm option.

The openWithScript prop accepts a boolean value and will toggle the modal open programatically. The open button is hidden in this case using the useOpenScript prop and is also a boolean.

The cancel button and the backdrop will both close the modal onClick.

The proceed button will run a function passed to confirmModal to accomodate submission, cleanup, resets etc and will then close the modal.

Below is the link to the file that powers this component.

[Modal](https://github.com/joeHillman/react-workbench/blob/master/src/components/Modal.js)
