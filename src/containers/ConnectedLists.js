import { connect } from 'react-redux';

import Lists from '../components/Lists';

const mapStateToProps = ({ lists }) => ({ lists: lists.ids });

export default connect(mapStateToProps)(Lists);
