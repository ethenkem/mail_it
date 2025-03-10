import { ComponentLoader } from 'adminjs'

const componentLoader = new ComponentLoader()

const Components = {
    MyInput: componentLoader.add('MyInput', './components/AddTemplates.jsx'),
    // other custom components
}

export { componentLoader, Components }
