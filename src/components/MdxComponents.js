/* eslint-disable jsx-a11y/heading-has-content */
import React from "react";

const h1 = props => <h1 className="text-5xl font-bold" {...props} />
const h2 = props => <h2 className="text-4xl font-bold" {...props} />
const h3 = props => <h3 className="text-3xl font-bold" {...props} />
const h4 = props => <h4 className="text-2xl font-bold" {...props} />
const h5 = props => <h5 className="text-xl font-bold" {...props} />
const h6 = props => <h6 className="text-lg font-bold" {...props} />
const p = () => <p className="" />

const components = {
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
}

export default components
