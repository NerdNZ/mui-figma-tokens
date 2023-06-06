import Button from '@mui/base/Button';
import '../tokens.css';
import './Button.css';
import ImageUrl from '../assets/back-chevron.svg'

const content = {
  front: true,
  back: false,
  className: "icon"
};

// const backIcon = {
//   imageUrl: ''
// };

export default function CustomButton({ name }) {
    return (
      <Button className="secondaryButton">
        <img src={ImageUrl} style={{display: content.front ? 'block' : 'none'}} alt="example"/>
        {name}
        <img src={ImageUrl} style={{display: content.back ? 'block' : 'none'}}  alt="example"/>
      </Button>
    );
  }