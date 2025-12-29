import "./ImageGallery.css";

type Image = {
	src: string;
	alt: string;
};

type ImageGalleryProps = {
	images: Image[];
};

export const ImageGallery = ({ images }: ImageGalleryProps) => {
	return (
		<section className="image-gallery">
			<div className="image-gallery-container">
				{images.map((img, index) => (
					<img key={index} src={img.src} alt={img.alt} />
				))}
			</div>
		</section>
	);
};
