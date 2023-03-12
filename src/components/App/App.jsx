import { Component } from "react";
import { nanoid } from 'nanoid';

export class App extends Component {
	state = {
		contacts: [],
		name: ''
	}

	handleChange = (e) => {
		this.setState({
			name: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		const name = e.target.elements.name.value;

		const contact = {
			name,
			id: nanoid(),
		}

		this.setState((prevState) => {
			return {
				contacts: [...prevState.contacts, contact], 
				name: '',
			}
		})
	}

	render() {
		return (
			<>
				<div>
					<h2>Phonebook</h2>

					<form onSubmit={this.handleSubmit}>
						<label>
							Name
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
						<button type="submit">Add contact</button>
					</form>
				</div>

				<div>
					<h2>Contacts</h2>
					<ul>
						{
							this.state.contacts.map(({id, name}) => {
								return (
									<li key={id}>
										{name}
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
