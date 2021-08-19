# Reading Assignment Four

## Reading from [React Docs](https://reactjs.org/docs/forms.html) and [CodeBurst](https://codeburst.io/javascript-the-conditional-ternary-operator-explained-cac7218beeff)

- What is a ‘Controlled Component’?
  - A form element whose value is controlled by React.
- Should we wait to store the users responses from the form into state when they submit the form OR should we update the state with their responses as soon as they enter them? Why.
  - Since handleChange runs on every keystroke to update the React state, the displayed value will update as the user types.
- How do we target what the user is entering if we have an event handler on an input field?
  - Passing state.value
- Why would we use a ternary operator?
  - To toggle between conditional options.
- Rewrite the following statement using a ternary statement:

  '''javascript
    if(x===y){
      console.log(true);
    } else {
      console.log(false);
    }
  '''

  - '''javascript
    (x===y) ? console.log(true) : console.log(false);
    '''
