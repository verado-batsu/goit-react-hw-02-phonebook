import { Component } from "react";
import { nanoid } from 'nanoid';

export class App extends Component {
	state = {
		contacts: [
			{id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
			{id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
			{id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
			{id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
		],
		filter: '',
		name: '',
		number: ''
	}

	handleChange = (e) => {
		const nameOfInput = e.target.name;

		this.setState({
			[nameOfInput]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const name = e.target.elements.name.value;
		const number = e.target.elements.number.value;

		const contact = {
			name,
			number,
			id: nanoid(),
		}

		this.setState((prevState) => {
			return {
				contacts: [...prevState.contacts, contact], 
				name: '',
				number: '',
			}
		})
	}

	render() {
		const normalizedFilter = this.state.filter.toLowerCase();

		const filteredContacts = this.state.contacts.filter(contact => contact.name.toLowerCase().includes(normalizedFilter));

		return (
			<>
				<div>
					<h2>Phonebook</h2>

					<form onSubmit={this.handleSubmit}>
						<label>
							<p>Name</p>
							<input
								type="text"
								name="name"
								pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
								title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
								required
								onChange={this.handleChange}
								value={this.state.name}
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
								onChange={this.handleChange}
								value={this.state.number}
							/>
						</label>
						<button type="submit">Add contact</button>
					</form>
				</div>

				<div>
					<h2>Contacts</h2>

					<div>
						<label>
							<p>Find contacts by name</p>
							<input
								name="filter"
								type="text"
								onChange={this.handleChange}
								value={this.state.filter}
							/>
						</label>
					</div>
					
					<ul>
						{
							filteredContacts.map(({ id, name, number }) => {
								return (
									<li key={id}>
										{name}: {number}
									</li>
								)
							})
						}
					</ul>
				</div>
			</>
		);
	}
};
