import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';
import { Mail, Phone, MapPin } from 'lucide-react';
import { dealers } from '../../../data/dealers';
import { useEffect, useState } from 'react';

export default function Dealer_info({ dealerId }) {
  const [dealer, setDealer] = useState(null);

  useEffect(() => {
    const foundDealer = dealers.find((d) => d.id === dealerId);
    setDealer(foundDealer);
  }, [dealerId]);

  if (!dealer) return null;

  return (
    <Card 
      sx={{ 
        width: 320, 
        maxWidth: '100%', 
        boxShadow: 'md',
        backgroundColor: '#ffffff', // Forced white background for the modal card
        border: '1px solid var(--color-button-muted)',
        borderRadius: 'xl'
      }}
    >
      <CardContent sx={{ alignItems: 'center', textAlign: 'center' }}>
        <Avatar 
          src={dealer.logo} 
          sx={{ 
            '--Avatar-size': '4.5rem', 
            mb: 2, 
            border: '3px solid var(--color-fill)', // Light slate border for the avatar
            boxShadow: 'sm'
          }} 
        />
         
        <Typography 
          level="title-lg" 
          sx={{ color: 'var(--color-text-base)', fontWeight: 'bold', mb: 2 }}
        >
          {dealer.name}
        </Typography>

        {/* Contact Info Section */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, width: '100%' }}>
          
          {/* Location */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 1 }}>
            <MapPin size={18} style={{ color: 'var(--color-button-accent)' }} />
            <Typography level="body-sm" sx={{ color: 'var(--color-text-muted)' }}>
              {dealer.location}
            </Typography>
          </Box>

          {/* Phone */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 1 }}>
            <Phone size={18} style={{ color: 'var(--color-button-accent)' }} />
            <Typography level="body-sm" sx={{ color: 'var(--color-text-base)', fontWeight: 500 }}>
              {dealer.phone}
            </Typography>
          </Box>

          {/* Email */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, px: 1 }}>
            <Mail size={18} style={{ color: 'var(--color-button-accent)' }} />
            <Typography 
              level="body-sm" 
              sx={{ 
                color: 'var(--color-text-muted)',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                whiteSpace: 'nowrap'
              }}
            >
              {dealer.email}
            </Typography>
          </Box>

        </Box>
      </CardContent>
    </Card>
  );
}