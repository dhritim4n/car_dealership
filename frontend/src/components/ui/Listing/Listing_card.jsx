import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Modal_wrapper from '../Modals/Modal_wrapper';
import Dealer_info from '../Modals/Dealer_info';

export default function Listing_card({ car }) {
  return (
    <Card 
      variant="outlined" 
      sx={{ 
        // Use 100% width for responsiveness
        width: '100%', 
        // Optional: limit how wide it gets on mobile so it stays looking like a card
        maxWidth: { xs: 340, sm: '100%' }, 
        // Center the card in the grid column
        mx: 'auto',
        // Smooth hover effect
        transition: 'transform 0.2s, box-shadow 0.2s',
        '&:hover': {
          transform: 'translateY(-4px)',
          boxShadow: 'md',
        },
      }}
    >
      <CardOverflow>
        <AspectRatio ratio="16/9"> {/* Changed to 16/9 for a more modern cinematic look */}
          <img
            src={car.images[0]}
            loading="lazy"
            alt={`${car.make} ${car.model}`}
            style={{ objectFit: 'cover' }}
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="title-md" sx={{ color: 'var(--color-fg)' }}>
          {car.model}
        </Typography>
        <Typography level="body-sm" className="pb-2">
          <div className='flex justify-between items-center'>
            <span className="font-semibold opacity-70">{car.make}</span>
            {/* Stop Propagation: This is crucial! 
              It prevents the Link from triggering when clicking the modal button 
            */}
            <span onClick={(e) => e.preventDefault()}>
              <Modal_wrapper name='Dealer Contact'>
                <Dealer_info dealerId={car.dealerId}/>
              </Modal_wrapper>
            </span>
          </div>
        </Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: 'var(--color-bg)' }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal" sx={{ justifyContent: 'space-between', py: 1.5 }}>
          <Typography
            level="body-xs"
            sx={{ fontWeight: 'xl', color: 'var(--color-accent)' }}
          >
            ₹{car.price?.toLocaleString('en-IN')}
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