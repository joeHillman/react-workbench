# Component - Modal

The modal component is a class based component and includes 1 piece of state and 4 props plus the use of children.

The isOpen state governs the open and close state of the modal.

The openLabel is the string used for the button that will open the modal and is not required. The heading prop takes a string and if omitted, the modal will render more like an alert box. Note if the heading prop is omitted, it will not render at all in React. The bodyString can be used for a simple string style message or you can use HTML inside the modal if something more complex is desired.

The cancel button and the backdrop will both close the modal onClick.

The proceed button will run a function passed to confirmModal to accomodate submission, cleanup, resets etc and will then close the modal.

Below is the link to the file that powers this component.

[Modal](https://github.com/joeHillman/react-workbench/blob/master/src/components/Modal.js)
