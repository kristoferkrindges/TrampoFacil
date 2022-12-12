import styled from "styled-components";

export const Layout = styled.div`
	/* background: var(--grey); */
	/* overflow-x: hidden; */
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100vw;
`;

export const Content = styled.section`
	position: relative;
	width: 100%;
	transition: all 0.3s ease;
	button.rec-dot {
		background-color: ${({ theme }) => theme.buttons};
		/* box-shadow: 0 0 1px 3px rgba(235, 16, 16, 0.5); */
	}
	button.rec-dot:hover {
		border-color: ${({ theme }) => theme.text};
	}

	button.rec-dot:hover,
	button.rec-dot:active,
	button.rec-dot:focus {
		box-shadow: 0 0 1px 3px ${({ theme }) => theme.text};
	}
	.rec.rec-arrow {
		color: ${({ theme }) => theme.text};
		background-color: ${({ theme }) => theme.buttons};
	}
	.rec.rec-arrow:hover {
		opacity: 0.5;
	}

	@media only screen and (max-width: 768px) {
		/* width: calc(100% - 100px);
		left: 100px; */
	}
`;

export const Title = styled.h1`
	font-size: 2.5rem;
	font-weight: 600;
	margin-top: 30px;
	margin-bottom: 10px;
	text-align: center;
	color: ${({ theme }) => theme.buttons};
`;

export const Cont = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
