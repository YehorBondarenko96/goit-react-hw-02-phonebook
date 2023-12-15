import { Component } from "react";
import css from '../Styles.module.css'

export class Filter extends Component {
    readFilterValue = (evt) => {
        evt.preventDefault();
        const filterValue = evt.target.value;
        this.props.updateStateForFilter(filterValue)
    };

    render(){
        const filterWithState = this.props.filterWithState;
        return(
            <>
                <label className={css.label}>
                <span className={css.nameInput}>Find contacts by name</span>
                <input 
                value={filterWithState}
                className={css.input} 
                type="text" 
                name="filter" 
                onChange={this.readFilterValue}
                />
            </label>
            </>
        )
    }
}