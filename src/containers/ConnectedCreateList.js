import { connect } from 'react-redux';

import { createList } from '../actions/list-actions';
import CreateList from '../components/CreateList';

export default connect(null, { createList })(CreateList);
