export default function LogoSlideItem({ image, name }) {
  return (
    <div className="logo-slide-item">
      <img src={image} alt={name} />
      <p>{name}</p>
    </div>
  );
}
