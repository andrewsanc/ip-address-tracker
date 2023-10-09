import "./InfoBlock.css";

export default function InfoBlock(props) {
  const { title, value } = props;
  return (
    <div className='info-block'>
      <p className='title'>{title}</p>
      <p className='value'>{value}</p>
    </div>
  );
}
