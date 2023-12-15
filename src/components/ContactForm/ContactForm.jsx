import { Component } from "react";
import css from '../Styles.module.css';

export class ContactForm extends Component {

    writeDataInAddState = (evt) => {
        evt.preventDefault();
        const newName = evt.currentTarget.elements.name.value;
        const newNumb = evt.currentTarget.elements.number.value
        this.props.updateStateForAdd(newName, newNumb);
        evt.currentTarget.reset();
    };

    
  render() {

    return (
        <form className={css.form} onSubmit={this.writeDataInAddState}>
            <label className={css.label}>
                <span className={css.nameInput}>Name</span>
            <input className={css.input} type="text" name="name" required />
            </label>
            <label className={css.label}>
                <span className={css.nameInput}>Number</span>
                <input className={css.input} type="tel" name="number" required />
            </label>
            <button className={css.button} type="submit">Add contact</button>
        </form>
    )
  }
};