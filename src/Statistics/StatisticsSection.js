import PropTypes from 'prop-types';
import s from './Statistics.module.css';

function StatisticsSection ({title, children}) {
    return(
        <section className={s.section}>
            {title && <h2 className={s.title}>{title}</h2>}
            {children}
        </section>
    )
}

StatisticsSection.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
};

export default StatisticsSection;