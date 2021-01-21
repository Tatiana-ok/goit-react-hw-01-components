import PropTypes from 'prop-types';
// import s from './TransactionHistory.module.css';

function TransactionHistoryItem ({type, amount, currency}) {
    return (
    <div>
        <p>{type}</p>
        <p>{amount}</p>
        <p>{currency}</p>
    </div>)
}

TransactionHistoryItem.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}

export default TransactionHistoryItem;