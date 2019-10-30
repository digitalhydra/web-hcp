/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

const h1 = props => <h1 className="text-5xl font-bold text-primary" {...props} />
const h2 = props => <h2 className="text-4xl font-bold text-primary" {...props} />
const h3 = props => <h3 className="text-3xl font-bold text-secondary" {...props} />
const h4 = props => <h4 className="text-2xl font-bold text-secondary" {...props} />
const h5 = props => <h5 className="text-xl font-bold text-secondary" {...props} />
const h6 = props => <h6 className="text-lg font-bold text-secondary" {...props} />
const p = props => <p className="text-lg text-secondary" {...props}/>
const li = props => <li className="text-lg text-secondary" {...props}/>

const components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  li
}

export default components
