// @flow

import { connect } from 'react-redux'

import Details from '../component/details'

const mapStateToProps = () => {
  console.log('mapping')
  return ({ o: 'bil' })
}

export default connect(mapStateToProps)(Details)
