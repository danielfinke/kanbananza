import { connect } from 'react-redux';

import Card from '../components/Card';

const mapStateToProps = ({ cards }, { cardId }) => ({
  card: cards.entities[cardId],
});

export default connect(mapStateToProps)(Card);
