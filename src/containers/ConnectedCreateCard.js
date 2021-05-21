import { connect } from 'react-redux';

import { createCard } from '../actions/card-actions';
import CreateCard from '../components/CreateCard';

export default connect(null, { createCard })(CreateCard);
