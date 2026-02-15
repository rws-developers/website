import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { IconButton, Stack, SvgIcon, Tooltip } from '@mui/material';
import socialLinks from './socialLinksData';

function TikTokIcon(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 24 24">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.12v13.15a2.87 2.87 0 1 1-1.98-2.73V9.24a6 6 0 1 0 5.1 5.93V8.5a7.94 7.94 0 0 0 4.77 1.6V6.96c-.35 0-.68-.09-1-.27Z" />
    </SvgIcon>
  );
}

const socialIconMap = {
  facebook: FacebookIcon,
  instagram: InstagramIcon,
  twitter: TwitterIcon,
  reddit: RedditIcon,
  youtube: YouTubeIcon,
  tiktok: TikTokIcon
};

const visibleLinks = socialLinks.filter((item) => item.url && item.url.trim().length > 0);

export default function SocialLinks() {
  if (visibleLinks.length === 0) {
    return null;
  }

  return (
    <Stack direction="row" spacing={1}>
      {visibleLinks.map((item) => {
        const Icon = socialIconMap[item.key];
        const isExternal = item.url.startsWith('http');

        if (!Icon) {
          return null;
        }

        return (
          <Tooltip key={item.key} title={item.label}>
            <IconButton
              component="a"
              href={item.url}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              aria-label={item.label}
              sx={{
                border: '1px solid rgba(217, 181, 111, 0.35)',
                color: 'primary.main',
                '&:hover': {
                  color: 'background.default',
                  backgroundColor: 'primary.main'
                }
              }}
            >
              <Icon fontSize="small" />
            </IconButton>
          </Tooltip>
        );
      })}
    </Stack>
  );
}
