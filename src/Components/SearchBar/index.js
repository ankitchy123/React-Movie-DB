import React, { Component } from "react";
// Image
import searchIcon from '../../Images/search-icon.svg'
// Styles
import { Wrapper, Content } from "./SeachBar.styles";

class SearchBar extends Component {

    state = { value: '' }
    timeout = null

    componentDidUpdate(__prevProps, prevState) {
        if (this.state.value !== prevState.value) {
            const { setSearchTerm } = this.props

            clearTimeout(this.timeout);

            this.timeout = setTimeout(() => {
                const { value } = this.state;
                setSearchTerm(value)
            }, 500);
        }
    }

    render() {
        return (
            <Wrapper>
                <Content>
                    <img src={searchIcon} alt="search-icon" />
                    <input
                        type="text"
                        placeholder="Search Movie"
                        onChange={event => this.setState({ value: event.currentTarget.value })}
                        value={this.state.value}
                    />
                </Content>
            </Wrapper>
        )
    }
}

export default SearchBar;