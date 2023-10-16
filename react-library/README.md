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

## customization

You have the ability to customize the behavior and appearance of the Select component. Here's how you can do it:

### using options

You can pass an array of options to the options prop to define the possible choices in the dropdown menu. Each option should have a value and a label. Here's an example:

```jsx
import React from 'react';
//import the Select component 
import Select from 'react-library-senga';

function MySelect(){
   const optionList = [
      {value: 'option1', label: 'Option 1'},
      {value: 'option2', label: 'Option 2'},
      {value: 'option3', label: 'Option 3'},
   ];

  const [selectedOption, setSelectedOption] = React.useState(null);
  

    return (
        <Select
        options={optionList}
        value={selectedOption}
        onChange={setSelectedOption}
        />
    );
}

export default MySelect;
```

### using children

You can also pass options as children to the Select component. Each option should have a value and a label. Here's an example:

```jsx
import React from 'react';
import Select from 'react-library-senga';

function MySelect(){
  const [selectedOption, setSelectedOption] = React.useState(null);

    return (
        <Select
        value={selectedOption}
        onChange={setSelectedOption}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </Select>
    );
}

export default MySelect;
```

