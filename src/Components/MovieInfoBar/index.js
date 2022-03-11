import React from "react";
import PropTypes from 'prop-types'
// Helpers
import { calcTime, convertMoney } from "../../helpers";
// Styles
import { Wrapper, Content } from "./MovieInfoBar.styles";

const MovieInfoBar = ({ time, budget, revenue }) => (
    <Wrapper>
        {(time !== 0 || budget !== 0 || revenue !== 0) && <Content>
            {time !== 0 && <div className="column">
                <p>Running time: {calcTime(time)}</p>
            </div>}
            {budget !== 0 && <div className="column">
                <p>Budget: {convertMoney(budget)}</p>
            </div>}
            {revenue !== 0 && <div className="column">
                <p>Revenue: {convertMoney(revenue)}</p>
            </div>}
        </Content>}
    </Wrapper>
)

MovieInfoBar.propTypes = {
    time: PropTypes.number,
    budget: PropTypes.number,
    revenue: PropTypes.number
}

export default MovieInfoBar;