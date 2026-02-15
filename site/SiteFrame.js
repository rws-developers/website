import Image from 'next/image';
import Link from 'next/link';
import {
  AppBar,
  Box,
  Button,
  Container,
  Stack,
  Toolbar,
  Typography
} from '@mui/material';
import SocialLinks from './SocialLinks';

export default function SiteFrame({ children, fluid = false, contentSx }) {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ minHeight: '100vh', position: 'relative' }}>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: 'rgba(24, 14, 9, 0.8)',
          borderBottom: '1px solid rgba(216, 161, 91, 0.3)',
          backdropFilter: 'blur(14px)'
        }}
      >
        <Toolbar sx={{ py: 1, display: 'flex', justifyContent: 'space-between', gap: 2 }}>
          <Box component={Link} href="/" sx={{ lineHeight: 0 }}>
            <Image
              src="/Art/Company-Logo/va_logo.png"
              alt="Virtual Axolotl"
              width={220}
              height={58}
              priority
            />
          </Box>

          <Stack direction="row" spacing={1} alignItems="center">
            <Button component={Link} href="/" color="primary" variant="text">
              Home
            </Button>
            <Button component={Link} href="/privacy-policy.html" color="primary" variant="text">
              Privacy Policy
            </Button>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              <SocialLinks />
            </Box>
          </Stack>
        </Toolbar>
      </AppBar>

      <Toolbar />

      {fluid ? (
        <Box
          sx={{
            animation: 'riseIn 700ms ease-out',
            ...contentSx
          }}
        >
          {children}
        </Box>
      ) : (
        <Container
          maxWidth="lg"
          sx={{
            py: { xs: 5, md: 8 },
            animation: 'riseIn 700ms ease-out',
            ...contentSx
          }}
        >
          {children}
        </Container>
      )}

      <Box
        component="footer"
        sx={{
          mt: 4,
          borderTop: '1px solid rgba(216, 161, 91, 0.3)',
          py: 3,
          px: 2,
          textAlign: 'center'
        }}
      >
        <Stack spacing={1} alignItems="center">
          <Typography variant="body2" color="text.secondary">
            {`Copyright ${currentYear} Virtual Axolotl. All rights reserved.`}
          </Typography>
          <Box sx={{ display: { xs: 'block', md: 'none' } }}>
            <SocialLinks />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}
