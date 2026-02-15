import Head from 'next/head';
import Link from 'next/link';
import {
  Box,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography
} from '@mui/material';
import SiteFrame from '../site/SiteFrame';

const policySections = [
  {
    heading: 'Information We Collect',
    body: [
      'When you play Rootie Tootie Western Shootie, we collect the following information to provide you with multiplayer functionality and stat tracking:'
    ],
    subsections: [
      {
        title: 'Oculus Platform Data',
        bullets: [
          'Oculus ID - Used for player identification and network communication',
          'Oculus Nickname - Displayed to other players in-game',
          'Oculus Profile Picture - Accessed during gameplay but never stored on our servers. Displayed to other players.'
        ]
      },
      {
        title: 'Game Statistics',
        text: [
          'We collect various gameplay statistics to track your progress and performance, including but not limited to:'
        ],
        bullets: [
          'Match results (games won/lost)',
          'In-game currency and rewards earned',
          'Shooting accuracy and performance metrics',
          'Achievement progress and unlocks',
          'Other standard multiplayer game statistics'
        ]
      }
    ]
  },
  {
    heading: 'How We Use Your Information',
    body: ['We use the collected information solely for the following purposes:'],
    bullets: [
      'Network Communication - Oculus IDs facilitate multiplayer connections and matchmaking',
      'Stat Tracking - Game statistics are used to track your progress and display achievements',
      'Player Identification - Your Oculus Nickname is displayed to other players during matches'
    ],
    ending:
      "We will never sell your personal information. This is a personal project, and we have no interest in selling anyone's data."
  },
  {
    heading: 'Data Storage and Third Parties',
    body: [
      'Your data is stored using PlanetScale, a third-party database hosting service located entirely within the United States. We have agreements with PlanetScale that prevent them from accessing or reading our database contents. Your data will never be shared with PlanetScale for use.',
      'We do not share your information with any third parties!'
    ]
  },
  {
    heading: 'Online Voice Chat and Content',
    body: [
      'Important Notice: Rootie Tootie Western Shootie features online voice chat that is not rated. Voice chat may contain strong language, mature content, or other material that may not be suitable for all audiences.',
      'If you encounter inappropriate behavior or offensive content from other players, please report them using the in-game reporting system. We take these reports seriously and will take appropriate action against offending accounts.'
    ]
  },
  {
    heading: 'Data Retention and Deletion',
    body: [
      'If you wish to have your data deleted (including for GDPR compliance), you may submit a report through the in-game reporting system.',
      'We will process your data deletion request and confirm when your information has been removed from our systems. This will delete ALL DATA including previously purchased in game items. Logging back into the game will restore your account, but your previous purchases will be forever lost.'
    ]
  },
  {
    heading: 'Legal Compliance',
    body: [
      'While we have never received government requests for user information, if legally required to do so, we would share only the minimal information necessary to comply with valid legal requests or court orders.'
    ]
  },
  {
    heading: "Children's Privacy",
    body: [
      'This game is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately at shane@virtualaxolotl.com.'
    ]
  },
  {
    heading: 'Data Security',
    body: [
      'We implement appropriate security measures to protect your information against unauthorized access, alteration, disclosure, or destruction. Privacy starts with collecting the minimal amount of information. Virtual Axolotl is committed to preserving your privacy by collecting only your Oculus user ID and Nickname (outside of stat and reward tracking).'
    ]
  },
  {
    heading: 'Changes to This Policy',
    body: [
      'This Privacy Policy may change at any time. We will post any updates to this page and update the Last Updated date below. Your continued use of the game after any changes constitutes acceptance of the updated policy.',
      'Last Updated: July 27, 2025'
    ]
  }
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <Head>
        <title>Privacy Policy - Rootie Tootie Western Shootie</title>
      </Head>

      <SiteFrame>
        <Stack spacing={3}>
          <Box textAlign="center" sx={{ mb: 1 }}>
            <Typography variant="h1" sx={{ fontSize: { xs: '2.2rem', md: '3.2rem' } }}>
              Privacy Policy
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 0.5 }}>
              Virtual Axolotl
            </Typography>
          </Box>

          {policySections.map((section, index) => (
            <Card key={section.heading} sx={{ animation: `riseIn 580ms ease-out ${index * 70}ms both` }}>
              <CardContent sx={{ p: { xs: 2.2, md: 3 } }}>
                <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.8rem' }, mb: 1.4 }}>
                  {section.heading}
                </Typography>

                {section.body?.map((paragraph) => (
                  <Typography key={paragraph} color="text.secondary" sx={{ mb: 1.2, lineHeight: 1.8 }}>
                    {paragraph}
                  </Typography>
                ))}

                {section.subsections?.map((subsection) => (
                  <Box key={subsection.title} sx={{ mt: 1.6 }}>
                    <Typography
                      variant="h3"
                      sx={{ fontSize: { xs: '1.2rem', md: '1.35rem' }, color: 'secondary.main', mb: 0.6 }}
                    >
                      {subsection.title}
                    </Typography>
                    {subsection.text?.map((paragraph) => (
                      <Typography key={paragraph} color="text.secondary" sx={{ mb: 1.1, lineHeight: 1.8 }}>
                        {paragraph}
                      </Typography>
                    ))}
                    {subsection.bullets?.length ? (
                      <List sx={{ py: 0 }}>
                        {subsection.bullets.map((bullet) => (
                          <ListItem key={bullet} sx={{ py: 0.3, pl: 0 }}>
                            <ListItemText primary={bullet} primaryTypographyProps={{ color: 'text.secondary' }} />
                          </ListItem>
                        ))}
                      </List>
                    ) : null}
                  </Box>
                ))}

                {section.bullets?.length ? (
                  <List sx={{ py: 0 }}>
                    {section.bullets.map((bullet) => (
                      <ListItem key={bullet} sx={{ py: 0.3, pl: 0 }}>
                        <ListItemText primary={bullet} primaryTypographyProps={{ color: 'text.secondary' }} />
                      </ListItem>
                    ))}
                  </List>
                ) : null}

                {section.ending ? (
                  <Typography color="text.secondary" sx={{ mt: 0.8, lineHeight: 1.8 }}>
                    {section.ending}
                  </Typography>
                ) : null}
              </CardContent>
            </Card>
          ))}

          <Card>
            <CardContent sx={{ p: { xs: 2.2, md: 3 } }}>
              <Typography variant="h2" sx={{ fontSize: { xs: '1.4rem', md: '1.8rem' }, mb: 1.4 }}>
                Contact Us
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 1 }}>
                If you have any questions about this Privacy Policy, data deletion requests, or our data
                practices, please contact us at:
              </Typography>
              <Typography color="text.secondary" sx={{ lineHeight: 1.8 }}>
                Virtual Axolotl
                <br />
                Inquiries: shane@virtualaxolotl.com
                <br />
                Website:{' '}
                <Box
                  component={Link}
                  href="/"
                  sx={{ textDecoration: 'underline', display: 'inline', color: 'inherit' }}
                >
                  virtualaxolotl.com
                </Box>
              </Typography>

              <Button component={Link} href="/" variant="contained" color="primary" sx={{ mt: 2.3 }}>
                Back to Home
              </Button>
            </CardContent>
          </Card>
        </Stack>
      </SiteFrame>
    </>
  );
}
