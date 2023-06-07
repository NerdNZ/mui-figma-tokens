import Button from '@mui/base/Button';
import '../tokens.css';

export default function CustomButton({ name, front, back, imgUrl }) {
    return (
      <Button className={front ? 'secondaryButton' : 'mainButton'}>
        <img src={imgUrl} style={{display: front ? 'block' : 'none'}} alt="example"/>
        {name}
        <img src={imgUrl} style={{display: back ? 'block' : 'none'}}  alt="example"/>
      </Button>
    );
  }