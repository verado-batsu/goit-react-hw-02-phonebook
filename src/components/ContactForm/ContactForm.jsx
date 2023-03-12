import { Component } from "react";
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { Formik, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import { FormStyled } from 'components/ContactForm/ContactForm.styled';
	

const schema = yup.object({
	name: yup.string().required(),
	number:	yup.number().required(),
})
export function ContactForm ({getDataFromForm}) {
	// handleChange = (e) => {
	// 	const nameOfInput = e.target.name;

	// 	this.setState({
	// 		[nameOfInput]: e.target.value
	// 	})
	// }


	const initialValues = {
		name: '',
		number: '',
	}

	const handleSubmit = (values, { resetForm }) => {

		const contact = {
			...values,
			id: nanoid(),
		}

		resetForm();

		getDataFromForm(contact);
	}

	return (
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={schema}
			>
				<FormStyled
					// onSubmit={this.handleSubmit}
					autoComplete="off"
				>
					<label>
						<p>Name</p>
						<Field
							type="text"
							name="name"
							pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
							title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
						/>
						<ErrorMessage component="div" name="name" />
					</label>
					<label>
						<p>Number</p>
						<Field
							type="tel"
							name="number"
							pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
							title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
						/>
						<ErrorMessage component="div" name="number" />
					</label>
					<button type="submit">Add contact</button>
				</FormStyled>
			</Formik>
	)
}
	


ContactForm.propTypes = {
	getDataFromForm: PropTypes.func.isRequired,
}