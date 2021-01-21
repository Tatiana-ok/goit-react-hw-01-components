import PropTypes from 'prop-types';
import Statistics from './Statistics';
import s from './Statistics.module.css';
// import items from '../data/statistical-data.json';

function StatisticsList ({stats}) {
    return(
        <ul className={s.list}>
            {stats.map(stat => (
                <li key={stat.id} style={{backgroundColor: randomColor(255)}}>
                <Statistics
                    label = {stat.label}
                    percentage = {stat.percentage}
                />
                </li> 
            ))}
        </ul>
    )
};

StatisticsList.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.string.isRequired,
        }),
    ),
};

export default StatisticsList;

function randomColor (max){
    let formR = Math.floor(Math.random() * Math.floor(max));
    let formG = Math.floor(Math.random() * Math.floor(max));
    let formB = Math.floor(Math.random() * Math.floor(max));
    return `rgb(${formR},${formG},${formB})`;
}