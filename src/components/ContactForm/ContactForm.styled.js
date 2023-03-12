import styled from "@emotion/styled";

export const Form = styled.form`
	padding: 10px;
	margin-bottom: 20px;

	border: 1px solid #000;

	label {
		display: block;
		margin-bottom: 10px
	}

	button {
		padding: 5px 10px;
		background-color: #fff;

		:hover,
		:focus {
			background-color: #000;
			color: #fff;
		}
	}
`;