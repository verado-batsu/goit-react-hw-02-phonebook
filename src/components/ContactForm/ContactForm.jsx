import { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Form } from 'components/ContactForm/ContactForm.styled';

export class ContactForm extends Component {
	// state = {
	// 	name: '',
	// 	number: '',
	// }

	// handleChange = (e) => {
	// 	const nameOfInput = e.target.name;

	// 	this.setState({
	// 		[nameOfInput]: e.target.value
	// 	})
	// }

	handleSubmit = (e) => {
		e.preventDefault();
		
		const name = e.target.elements.name.value;
		const number = e.target.elements.number.value;

		const contact = {
			name,
			number,
			id: nanoid(),
		}

		// this.setState({
		// 	name: '',
		// 	number: '',
		// })

		this.props.getDataFromForm(contact);
	}

	render(){
		// const { name, number } = this.state;

		return (
				<Form onSubmit={this.handleSubmit}>
					<label>
						<p>Name</p>
						<input
							type="text"
							name="name"
							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
							title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
							required
							// onChange={this.handleChange}
							// value={name}
						/>
					</label>
					<label>
						<p>Number</p>
						<input
							type="tel"
							name="number"
							pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
							title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
							required
							// onChange={this.handleChange}
							// value={number}
						/>
					</label>
					<button type="submit">Add contact</button>
				</Form>
			)
	}
	
}

ContactForm.propTypes = {
	getDataFromForm: PropTypes.func.isRequired,
}