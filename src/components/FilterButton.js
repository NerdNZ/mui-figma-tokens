import '../tokens.css';
import './Button.css';

export default function FilterButton({ title, imageUrl, front, back, active }) {
    return (
      <button className={`filterButton ${active ? "active" : ""}`}>
        <img src={imageUrl} style={{display: front ? 'block' : 'none'}} alt="example"/>
        <span>{title}</span>
        <img src={imageUrl} style={{display: back ? 'block' : 'none'}}  alt="example"/>
      </button>
    );
  }