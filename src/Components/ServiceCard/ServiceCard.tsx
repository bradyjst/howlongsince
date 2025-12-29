import "./ServiceCard.css";
type Props = {
	image: string;
	title: string;
	description: string;
};

export const ServiceCard = ({ image, title, description }: Props) => {
	return (
		<div className="service-card reveal">
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
		</div>
	);
};
