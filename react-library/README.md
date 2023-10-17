# react-library-senga
A React library for creating custom Select components.
## prerequisites
- react
- react-dom
- npm

## Repository
- [react-library-senga](https://github.com/senga200/Select_Component_src)

## CodeSandbox 
[try it on CodeSandBox](https://codesandbox.io/s/react-component-select-npmpackage-xxr5lx?file=/src/App.js:0-649)

## installation
install with npm:
```bash 
npm install react-library-senga
```

install with yarn:
```bash 
yarn add react-library-senga
```

### using options

You can pass an array of options to the options prop to define the possible choices in the dropdown menu. Each option should have a value and a label. Here's an example:

```jsx
import React from 'react';
//import the Select component 
import Select from 'react-library-senga';

function MySelect(){
  //customise your options
   const optionList = [
      {value: 'option1', label: 'Option 1'},
      {value: 'option2', label: 'Option 2'},
      {value: 'option3', label: 'Option 3'},
   ];

    return (
        <Select
        options={optionList}
        />
    );
}

export default MySelect;
```


