import { connect } from 'react-redux'

import Nav from '../component/nav'

const mapStateToProps = state => ({
  nav: state.nav.get('nav'),
})

export default connect(mapStateToProps)(Nav)
