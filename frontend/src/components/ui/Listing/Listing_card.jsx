import { Button } from '@mui/joy';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Dealer_contact from '../Modals/Dealer_contact';


export default function Listing_card({ car }) {

  return (
    <Card variant="outlined" sx={{ width: 320 }}>
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src={car.images[0]}
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md">{car.model}</Typography>
        <Typography level="body-sm" 
          className="pb-2"
        >
          <span>{car.make}</span>
          <span
          >
            <Dealer_contact
              dealerId={car.dealerId}
            />

          </span>

        </Typography>

      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'background.level1' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: 'md' }}
          >
            ₹{car.price}
          </Typography>

          <Divider orientation="vertical" />
          <Typography
            level="body-xs"
            textColor="text.secondary"
            sx={{ fontWeight: 'md' }}
          >
            {car.year}
          </Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
}
