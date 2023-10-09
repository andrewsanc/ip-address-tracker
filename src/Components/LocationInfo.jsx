import InfoBlock from "./InfoBlock";

export default function LocationInfo(props) {
  const {
    locationData: { ip, isp, location },
  } = props;

  return (
    <div className='infoContainer'>
      <InfoBlock title='IP ADDRESS' value={ip} />
      <InfoBlock
        title='LOCATION'
        value={`${location.city}, ${location.region} ${location.postalCode}`}
      />
      <InfoBlock title='TIMEZONE' value={`UTC${location.timezone}`} />
      <InfoBlock title='ISP' value={isp} />
    </div>
  );
}
