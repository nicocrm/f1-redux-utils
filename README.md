# f1-redux-utils

My utilities for Redux projects.

## Install

`npm i f1-redux-utils --save`

## Usage

The module uses ES6 syntax.

### Action Creators

A very simple action creation utility.

```
import { createAction, createActions } from 'f1-redux-utils/actionCreators'
const [act1, act2] = createActions('test1', 'test2')
const act3 = createAction('test3')
```

Now you can use act1() to create a new action.
The parameter will be placed in the "payload" field.
It takes an optional error parameter which will be placed in the
"error" field.

```
expect(act1()).to.eql({
  type: 'test1'
})
expect(act2('foo')).to.eql({
  type: 'test2',
  payload: 'foo'
})
expect(act3(null, 'error')).to.eql({
  type: 'test3',
  error: 'error'
})
```

### Load Action Container

Container wrapper that will trigger an action when it is rendered (in componentWillMount).
Use together with connect, for a container that needs to load some data when it is initially loaded.

```
import { connect } from 'react-redux';
import loadaction from 'f1-redux-utils/loadaction'

const AdminContainer = connect(state => {
  id: state.location.id
}, adminActions)

export default loadaction({ id } => adminActions.loadTemplateById(id))(AdminContainer)
```
