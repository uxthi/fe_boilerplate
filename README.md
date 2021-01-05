This is a front-end boilerplate bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find everything you need to understand, install and run this project.<br>

## Table of Contents

- [Installing](#installing)
- [Sending Feedback](#sending-feedback)
- [Folder Structure](#folder-structure)
- [Using isMobile Context](#using-ismobile-context)

## Installing

* Clone the project using `git clone https://github.com/uxthi/fe_boilerplate.git`.
* Navigate to the root folder where you installed this project and install all dependencies with `yarn install`.
* Run `yarn start` and your project is now running on localhost:3000!

## Sending Feedback

I'm always open to [your feedback](https://github.com/uxthi/fe_boilerplate/issues).

## Folder Structure

After creation, your project should look like this:

```
fe_boilerplate/
  README.md
  package.json
  .prettierrc
  .jsconfig.json
  .gitignore
  yarn.lock
  node_modules/
  public/
    404.html
    browserconfig.xml
    index.html
    manifest.json
    robots.txt
  src/
    assets/
    components/
    constants/
    navigation/
    screens/
    services/
    utils/
```

## Using isMobile Context

We're using context to let the app know when the user is on mobile or desktop, so you can develop components that will only be shown in one case or another.

To use this feature, follow these steps on your functional or class component:

* `import { useContext } from 'react'`
* `import { TemplateContext } from '../../components/template/context'`
* Declare an isMobile constant as `const { isMobile } = useContext(TemplateContext)`

You will now be able to check for mobile view, such as: `{isMobile ? <p>This is mobile</p> : <p>This is desktop</p>}`

```jsx
import React, { useContext } from 'react'
import { Template } from '../../components/template'
import { TemplateContext } from '../../components/template/context'

export const Example = () => {
  const { isMobile } = useContext(TemplateContext)

  return <Template>{isMobile ? <p>This will be shown only on mobile</p> : <p>This will be shown only on desktop</p>}</Template>
}
```
