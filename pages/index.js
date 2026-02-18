import { useState } from 'react';
import fs from 'node:fs';
import path from 'node:path';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import ChevronLeftRoundedIcon from '@mui/icons-material/ChevronLeftRounded';
import ChevronRightRoundedIcon from '@mui/icons-material/ChevronRightRounded';
import LaunchRoundedIcon from '@mui/icons-material/LaunchRounded';
import PlayCircleFilledWhiteRoundedIcon from '@mui/icons-material/PlayCircleFilledWhiteRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Container,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Stack,
  Typography
} from '@mui/material';
import SiteFrame from '../site/SiteFrame';
import heroLinks from '../site/heroLinks';

const teamMembers = [
  {
    name: 'Shane Nalezyty',
    role: 'Engineering',
    description:
      'Owns gameplay programming, multiplayer systems, and all the code that makes every duel feel sharp.',
    link: 'https://github.com/Digital-Shane'
  },
  {
    name: 'Bryan Bethel',
    role: 'Art Direction',
    description:
      'Builds the visual identity of the frontier with handcrafted worlds, set dressing, and mood-driven map art.',
    link: 'https://www.instagram.com/bryan_bethel_art'
  },
  {
    name: 'Caleb Long',
    role: 'Music',
    description:
      'Shapes the studio sound with western-inspired tracks that keep every high-noon match cinematic.',
    link: 'https://calstevens.bandcamp.com/'
  }
];

const showcaseShots = [
  {
    src: '/Art/Feature-Cards/Bargain_Barn_2560x1440.png',
    alt: 'Bargain Barn map preview'
  },
  {
    src: '/Art/Feature-Cards/Bargain_Barn_2_2560x1440.png',
    alt: 'Bargain Barn firefight arena'
  },
  {
    src: '/Art/Feature-Cards/Fools_Gold_2560x1440.png',
    alt: 'Fools Gold match preview'
  },
  {
    src: '/Art/Feature-Cards/Fort_Deathmatch_2560x1440.png',
    alt: 'Fort Deathmatch battleground'
  },
  {
    src: '/Art/Feature-Cards/Laundry_Day_2560x1440.png',
    alt: 'Laundry Day showdown map'
  },
  {
    src: '/Art/Feature-Cards/Shooting_Range_2560x1440.png',
    alt: 'Shooting Range practice map'
  }
];

const clipNamePattern = /^\d+\.mp4$/i;

export default function HomePage({ highlightClips = [] }) {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const [selectedClipIndex, setSelectedClipIndex] = useState(null);
  const visibleHeroLinks = heroLinks.filter((item) => item.url && item.url.trim().length > 0);

  const openClipViewer = (clipIndex) => setSelectedClipIndex(clipIndex);
  const closeClipViewer = () => setSelectedClipIndex(null);

  const showPreviousClip = () => {
    if (highlightClips.length === 0) {
      return;
    }

    setSelectedClipIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }

      return (currentIndex - 1 + highlightClips.length) % highlightClips.length;
    });
  };

  const showNextClip = () => {
    if (highlightClips.length === 0) {
      return;
    }

    setSelectedClipIndex((currentIndex) => {
      if (currentIndex === null) {
        return 0;
      }

      return (currentIndex + 1) % highlightClips.length;
    });
  };

  return (
    <>
      <Head>
        <title>Rootie Tootie Western Shootie - Virtual Axolotl</title>
      </Head>

      <SiteFrame fluid contentSx={{ pb: { xs: 7, md: 10 } }}>
        <Box
          sx={{
            position: 'relative',
            minHeight: { xs: 'calc(100vh - 64px)', md: 'calc(100vh - 72px)' },
            display: 'flex',
            alignItems: 'flex-end',
            overflow: 'hidden',
            borderBottom: '1px solid rgba(216, 161, 91, 0.32)'
          }}
        >
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              background:
                'linear-gradient(180deg, rgba(24, 13, 8, 0.08) 8%, rgba(15, 8, 5, 0.36) 84%), radial-gradient(circle at 74% 18%, rgba(124, 184, 201, 0.08), transparent 42%), radial-gradient(circle at 16% 88%, rgba(216, 161, 91, 0.24), transparent 38%)'
            }}
          />
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              zIndex: 2,
              background: 'linear-gradient(120deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.02))'
            }}
          />
          <Image
            src="/Art/Cover-Art/Hero-Cover_5120x2880.png"
            alt="Rootie Tootie Western Shootie Cover Art"
            fill
            priority
            sizes="100vw"
            style={{ objectFit: 'cover' }}
          />

          <Container
            maxWidth="xl"
            sx={{
              position: 'relative',
              zIndex: 3,
              height: '100%'
            }}
          >
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={2}
              sx={{
                width: { xs: 'calc(100% - 32px)', sm: 'auto' },
                position: 'absolute',
                left: '50%',
                bottom: 'calc(25% + 8rem)',
                transform: 'translateX(-50%)',
                alignItems: 'center'
              }}
            >
                {visibleHeroLinks.map((item, index) => (
                  <Button
                    key={item.key}
                    component="a"
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant={index === 0 ? 'contained' : 'outlined'}
                    color={index === 0 ? 'primary' : 'inherit'}
                    endIcon={index === 0 ? <StorefrontRoundedIcon /> : <LaunchRoundedIcon />}
                    sx={{
                      px: 5,
                      py: 2,
                      minWidth: { xs: 260, sm: 320 },
                      fontSize: { xs: '1.05rem', sm: '1.15rem' },
                      borderColor: 'rgba(255, 255, 255, 0.55)',
                      color: index === 0 ? 'primary.contrastText' : '#f4fbff',
                      backgroundColor: index === 0 ? 'primary.main' : 'rgba(24, 15, 9, 0.45)',
                      backdropFilter: 'blur(8px)',
                      '&:hover': {
                        borderColor: '#f0c98e',
                        backgroundColor:
                          index === 0 ? 'primary.light' : 'rgba(34, 22, 14, 0.62)'
                      }
                    }}
                    >
                      {item.label}
                    </Button>
                ))}
            </Stack>
          </Container>
        </Box>

        <Container maxWidth="xl" sx={{ mt: { xs: 6, md: 9 } }}>
          <Stack spacing={{ xs: 7, md: 10 }}>
            <Box>
              <Typography variant="h2" sx={{ mt: 0.8, mb: 3.2, fontSize: { xs: '2rem', md: '2.8rem' } }}>
                Gameplay Highlights
              </Typography>

              <Grid container spacing={2.6} sx={{ mt: 0.6 }}>
                {showcaseShots.map((feature, index) => (
                  <Grid key={feature.src} item xs={12} sm={6} md={4}>
                    <Card
                      sx={{
                        overflow: 'hidden',
                        borderRadius: 1.5,
                        border: '1px solid rgba(216, 161, 91, 0.28)',
                        backgroundImage:
                          'linear-gradient(165deg, rgba(38, 23, 14, 0.95), rgba(14, 22, 34, 0.95))',
                        animation: `riseIn 620ms ease-out ${index * 70}ms both`,
                        transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: '0 18px 40px rgba(0, 0, 0, 0.4)',
                          borderColor: 'rgba(240, 201, 142, 0.7)'
                        }
                      }}
                    >
                      <CardActionArea onClick={() => setSelectedFeature(feature)}>
                        <Box sx={{ position: 'relative', height: 220 }}>
                          <Image
                            src={feature.src}
                            alt={feature.alt}
                            fill
                            sizes="(max-width: 900px) 100vw, 33vw"
                            style={{ objectFit: 'cover' }}
                          />
                        </Box>
                      </CardActionArea>
                    </Card>
                  </Grid>
                ))}
              </Grid>

              {highlightClips.length > 0 ? (
                <Box
                  sx={{
                    mt: 3.6,
                    display: 'grid',
                    gridAutoFlow: 'column',
                    gap: 2.6,
                    overflowX: 'auto',
                    pb: 1,
                    gridAutoColumns: {
                      xs: 'minmax(250px, 82vw)',
                      sm: 'minmax(300px, 58vw)',
                      md: 'minmax(320px, 34vw)',
                      lg: 'minmax(320px, 29vw)'
                    },
                    scrollSnapType: 'x mandatory',
                    '&::-webkit-scrollbar': {
                      height: 8
                    },
                    '&::-webkit-scrollbar-thumb': {
                      backgroundColor: 'rgba(216, 161, 91, 0.45)',
                      borderRadius: 8
                    }
                  }}
                >
                  {highlightClips.map((clipSrc, index) => (
                    <Card
                      key={clipSrc}
                      sx={{
                        overflow: 'hidden',
                        borderRadius: 1.5,
                        border: '1px solid rgba(216, 161, 91, 0.28)',
                        backgroundImage:
                          'linear-gradient(165deg, rgba(38, 23, 14, 0.95), rgba(14, 22, 34, 0.95))',
                        animation: `riseIn 620ms ease-out ${index * 70}ms both`,
                        transition: 'transform 220ms ease, box-shadow 220ms ease, border-color 220ms ease',
                        scrollSnapAlign: 'start',
                        '&:hover': {
                          transform: 'translateY(-6px)',
                          boxShadow: '0 18px 40px rgba(0, 0, 0, 0.4)',
                          borderColor: 'rgba(240, 201, 142, 0.7)'
                        }
                      }}
                    >
                      <CardActionArea onClick={() => openClipViewer(index)}>
                        <Box sx={{ position: 'relative', width: '100%', aspectRatio: '16 / 9' }}>
                          <Box
                            component="video"
                            src={clipSrc}
                            preload="metadata"
                            muted
                            playsInline
                            aria-hidden
                            sx={{
                              display: 'block',
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                              pointerEvents: 'none',
                              backgroundColor: 'rgba(11, 6, 3, 0.95)'
                            }}
                          />
                          <Box
                            sx={{
                              position: 'absolute',
                              inset: 0,
                              background:
                                'linear-gradient(180deg, rgba(0, 0, 0, 0.08) 35%, rgba(0, 0, 0, 0.48) 100%)'
                            }}
                          />
                          <Box
                            sx={{
                              position: 'absolute',
                              inset: 0,
                              display: 'flex',
                              alignItems: 'center',
                              justifyContent: 'center'
                            }}
                          >
                            <PlayCircleFilledWhiteRoundedIcon
                              sx={{
                                fontSize: { xs: 64, md: 72 },
                                color: 'rgba(255, 255, 255, 0.95)',
                                filter: 'drop-shadow(0 6px 12px rgba(0, 0, 0, 0.55))'
                              }}
                            />
                          </Box>
                        </Box>
                      </CardActionArea>
                    </Card>
                  ))}
                </Box>
              ) : (
                <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
                  No gameplay clips found in the /public/Clips folder.
                </Typography>
              )}
            </Box>

            <Box>
              <Typography variant="h2" sx={{ mt: 0.8, mb: 3.2, fontSize: { xs: '2rem', md: '2.8rem' } }}>
                Built by Virtual Axolotl
              </Typography>
              <Grid container spacing={2.6}>
                {teamMembers.map((member) => (
                  <Grid key={member.name} item xs={12} md={4}>
                    <Card
                      sx={{
                        height: '100%',
                        borderRadius: 1.5,
                        border: '1px solid rgba(216, 161, 91, 0.24)',
                        backgroundImage:
                          'linear-gradient(165deg, rgba(42, 26, 16, 0.94), rgba(14, 22, 34, 0.9))'
                      }}
                    >
                      <CardContent sx={{ p: 3.2 }}>
                        <Typography variant="h3" sx={{ fontSize: '1.45rem' }}>
                          {member.name}
                        </Typography>
                        <Typography
                          variant="overline"
                          sx={{ color: 'primary.light', letterSpacing: '0.12em', fontWeight: 700 }}
                        >
                          {member.role}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ mt: 1.5, mb: 2.3 }}>
                          {member.description}
                        </Typography>
                        <Button
                          component="a"
                          href={member.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outlined"
                          endIcon={<LaunchRoundedIcon />}
                          sx={{ borderColor: 'rgba(216, 161, 91, 0.58)' }}
                        >
                          See more from {member.name.split(' ')[0]}
                        </Button>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Grid container spacing={2.6}>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 1.5,
                    border: '1px solid rgba(216, 161, 91, 0.3)',
                    backgroundImage:
                      'linear-gradient(165deg, rgba(42, 26, 16, 0.9), rgba(14, 22, 34, 0.9))'
                  }}
                >
                  <CardContent sx={{ p: 3.2 }}>
                    <Typography variant="h2" sx={{ fontSize: '2rem', mb: 1.5 }}>
                      Contact
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      For partnerships, press, and player support, reach us directly and we will follow up as
                      quickly as we can.
                    </Typography>
                    <Button
                      component="a"
                      href="mailto:shane@virtualaxolotl.com"
                      variant="contained"
                      sx={{ mt: 2.7 }}
                    >
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    height: '100%',
                    borderRadius: 1.5,
                    border: '1px solid rgba(216, 161, 91, 0.3)',
                    backgroundImage:
                      'linear-gradient(165deg, rgba(42, 26, 16, 0.9), rgba(14, 22, 34, 0.9))'
                  }}
                >
                  <CardContent sx={{ p: 3.2 }}>
                    <Typography variant="h2" sx={{ fontSize: '2rem', mb: 1.5 }}>
                      Privacy
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Read how we handle player data, retention, and moderation in our published privacy policy.
                    </Typography>
                    <Button
                      component={Link}
                      href="/privacy-policy.html"
                      variant="outlined"
                      endIcon={<LaunchRoundedIcon />}
                      sx={{ mt: 2.7, borderColor: 'rgba(216, 161, 91, 0.58)' }}
                    >
                      View privacy-policy.html
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Stack>
        </Container>
      </SiteFrame>

      <Dialog
        open={Boolean(selectedFeature)}
        onClose={() => setSelectedFeature(null)}
        maxWidth="lg"
        fullWidth
      >
        <DialogContent sx={{ p: 1, backgroundColor: 'background.paper' }}>
          {selectedFeature ? (
            <Box sx={{ position: 'relative', width: '100%', minHeight: { xs: 220, md: 620 } }}>
              <Image
                src={selectedFeature.src}
                alt={selectedFeature.alt}
                fill
                sizes="100vw"
                style={{ objectFit: 'contain' }}
              />
            </Box>
          ) : null}
        </DialogContent>
      </Dialog>

      <Dialog
        open={selectedClipIndex !== null}
        onClose={closeClipViewer}
        maxWidth="xl"
        fullWidth
      >
        <DialogContent sx={{ p: { xs: 0.6, sm: 1 }, backgroundColor: 'rgba(4, 5, 8, 0.96)' }}>
          {selectedClipIndex !== null ? (
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                maxHeight: '78vh',
                minHeight: { xs: '42vh', sm: '52vh', md: '68vh' },
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: '#000',
                borderRadius: 1,
                overflow: 'hidden'
              }}
            >
              <IconButton
                onClick={showPreviousClip}
                aria-label="Previous clip"
                disabled={highlightClips.length < 2}
                sx={{
                  position: 'absolute',
                  left: { xs: 6, md: 14 },
                  zIndex: 2,
                  width: { xs: 44, md: 54 },
                  height: { xs: 44, md: 54 },
                  color: '#fff',
                  border: '1px solid rgba(216, 161, 91, 0.62)',
                  backgroundColor: 'rgba(17, 10, 7, 0.56)',
                  backdropFilter: 'blur(4px)',
                  '&:hover': {
                    backgroundColor: 'rgba(25, 15, 10, 0.82)'
                  },
                  '&.Mui-disabled': {
                    color: 'rgba(255, 255, 255, 0.32)',
                    borderColor: 'rgba(255, 255, 255, 0.16)'
                  }
                }}
              >
                <ChevronLeftRoundedIcon sx={{ fontSize: { xs: 32, md: 38 } }} />
              </IconButton>

              <Box
                component="video"
                key={highlightClips[selectedClipIndex]}
                src={highlightClips[selectedClipIndex]}
                controls
                autoPlay
                preload="metadata"
                playsInline
                sx={{
                  display: 'block',
                  width: '100%',
                  maxHeight: '78vh',
                  objectFit: 'contain'
                }}
              />

              <IconButton
                onClick={showNextClip}
                aria-label="Next clip"
                disabled={highlightClips.length < 2}
                sx={{
                  position: 'absolute',
                  right: { xs: 6, md: 14 },
                  zIndex: 2,
                  width: { xs: 44, md: 54 },
                  height: { xs: 44, md: 54 },
                  color: '#fff',
                  border: '1px solid rgba(216, 161, 91, 0.62)',
                  backgroundColor: 'rgba(17, 10, 7, 0.56)',
                  backdropFilter: 'blur(4px)',
                  '&:hover': {
                    backgroundColor: 'rgba(25, 15, 10, 0.82)'
                  },
                  '&.Mui-disabled': {
                    color: 'rgba(255, 255, 255, 0.32)',
                    borderColor: 'rgba(255, 255, 255, 0.16)'
                  }
                }}
              >
                <ChevronRightRoundedIcon sx={{ fontSize: { xs: 32, md: 38 } }} />
              </IconButton>
            </Box>
          ) : null}
        </DialogContent>
      </Dialog>
    </>
  );
}

export async function getStaticProps() {
  const clipsDirectory = path.join(process.cwd(), 'public', 'Clips');
  const clipFiles = fs.existsSync(clipsDirectory)
    ? fs.readdirSync(clipsDirectory).filter((fileName) => clipNamePattern.test(fileName))
    : [];

  const highlightClips = clipFiles
    .sort((leftName, rightName) => {
      const leftNumber = Number.parseInt(leftName.replace(/\.mp4$/i, ''), 10);
      const rightNumber = Number.parseInt(rightName.replace(/\.mp4$/i, ''), 10);

      return leftNumber - rightNumber;
    })
    .map((fileName) => `/Clips/${fileName}`);

  return {
    props: {
      highlightClips
    }
  };
}
