import "./ServiceCard.css";
type Props = {
	image: string;
	title: string;
	description: string;
	link: string;
};

export const ServiceCard = ({ image, title, description, link }: Props) => {
	return (
		<a className="service-card-link" href={link}>
			<div className="service-card reveal">
				<img src={image} alt={title} />
				<h3>{title}</h3>
				<p>{description}</p>
			</div>
		</a>
	);
};
