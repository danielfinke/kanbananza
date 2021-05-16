import { connect } from 'react-redux';

import List from '../components/List';

const mapStateToProps = ({ lists }, { listId }) => ({
  list: lists.entities[listId],
});

export default connect(mapStateToProps)(List);
