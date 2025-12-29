import "./ReviewSection.css";
import { ReviewCard } from "../../Components/ReviewCard/ReviewCard";
import { GoogleRating } from "../../Components/GoogleRating/GoogleRating";

const REVIEWS = [
	{
		avatar:
			"https://lh3.googleusercontent.com/a-/ALV-UjVbjk2q8nAkxkaFCNjcb_e_lss_3-W1v1soY_fxauoe60oUU6Qr=w72-h72-p-rp-mo-br100",
		name: "Brady S",
		rating: "★★★★★",
		text: "did a great job replacing my service panel. professional, clean, and reliable work!",
	},
	{
		avatar:
			"https://lh3.googleusercontent.com/a/ACg8ocL9-M_ImWBTCTSBlZEeJQ04EmNHhpezd4S9-Kw9-LFHNz0AHg=w72-h72-p-rp-mo-br100",
		name: "Masoud Sanati",
		rating: "★★★★★",
		text: "They upgraded all my home lighting. Morid did a clean, professional job, and the quote was very reasonable. I’m happy with the results and highly recommend their service..",
	},
	{
		avatar:
			"https://lh3.googleusercontent.com/a-/ALV-UjVbjk2q8nAkxkaFCNjcb_e_lss_3-W1v1soY_fxauoe60oUU6Qr=w72-h72-p-rp-mo-br100",
		name: "Bahareh Razmjoo",
		rating: "★★★★★",
		text: "Installed our EV charger perfectly. Great communication throughout.",
	},
];

export const ReviewsSection = () => {
	return (
		<section className="reviews-section">
			<h2 className="reviews-section-h2">What Our Customers Say</h2>

			<GoogleRating />

			<div className="reviews-grid">
				{REVIEWS.map((review) => (
					<ReviewCard key={review.name} {...review} />
				))}
			</div>

			<a
				href="https://www.google.com/search?num=10&sca_esv=c18e17d2c1e631b6&rlz=1C5CHFA_enCA1006CA1008&sxsrf=AE3TifOJY9--aNfOE0Q5XxwGf-CWBiCK5g:1766466356177&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E2wBp6JJkk-1bakHTDpSz98izCQkfAIfedUYp2xOXSJANwdPH00a0JHHxh1vzfLJASIEBzROJG62Xopf04uSoamVzPiC&q=nscoelectric+Reviews&sa=X&ved=2ahUKEwjVq6v999KRAxUvITQIHX9uCYQQ0bkNegQIIhAE&biw=1440&bih=669&dpr=2"
				target="_blank"
				rel="noopener noreferrer"
				className="link-btn"
			>
				<h2 className="reviews-section-h2"> Read our Google Reviews </h2>
			</a>
		</section>
	);
};
