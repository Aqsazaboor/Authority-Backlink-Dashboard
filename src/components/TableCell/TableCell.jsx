export default function TableCell({ img, title, url }) {
  return (
    <div className="first-cell">
      <img src={img} alt="admin" />
      <div>
        <span className="title">{title}</span>
        <a href={url}>Visit site</a>
      </div>
    </div>
  );
}
