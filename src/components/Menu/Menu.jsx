import { Component } from "react";

export default class Menu extends Component {
    state = {
        activeIndex: 0,
    }

    handleClick = () => {

    }


    render() {
        const { menuItems } = this.props;
        const { activeIndex } = this.state;
        const elements = menuItems.map(({ id, link, text }, index) => {
            const className = (activeIndex === index) ? '' : '';
        })
        return (
            <ul>Menu</ul>
        )
    }
}