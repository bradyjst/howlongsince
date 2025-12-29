import "./ReviewCard.css";

type ReviewCardProps = {
	name: string;
	rating: string;
	text: string;
	avatar?: string;
};

export const ReviewCard = ({ name, rating, text, avatar }: ReviewCardProps) => {
	return (
		<a
			className="review-card-link"
			href="https://www.google.com/search?num=10&sca_esv=c18e17d2c1e631b6&rlz=1C5CHFA_enCA1006CA1008&sxsrf=AE3TifOJY9--aNfOE0Q5XxwGf-CWBiCK5g:1766466356177&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E2wBp6JJkk-1bakHTDpSz98izCQkfAIfedUYp2xOXSJANwdPH00a0JHHxh1vzfLJASIEBzROJG62Xopf04uSoamVzPiC&q=nscoelectric+Reviews&sa=X&ved=2ahUKEwjVq6v999KRAxUvITQIHX9uCYQQ0bkNegQIIhAE&biw=1440&bih=669&dpr=2"
		>
			<div className="review-card reveal">
				<div className="review-header">
					{avatar && <img src={avatar} alt={name} />}

					<div className="review-meta">
						<strong>{name}</strong>
						<div className="stars">{rating}</div>
					</div>
				</div>

				<p className="review-text">“{text}”</p>
			</div>
		</a>
	);
};
