import React from 'react';
import {
  Box,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Text,
  UnorderedList,
  ListItem,
  Link,
} from '@chakra-ui/react';
import { FiInfo } from 'react-icons/fi';
import { useSession } from '@roq/nextjs';

export const HelpBox: React.FC = () => {
  const ownerRoles = ['AcademyOwner'];
  const roles = ['AcademyOwner', 'AcademyOwner', 'Coach', 'Player', 'Parent'];
  const applicationName = 'radical-football61';
  const tenantName = 'Academy';
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_URL;
  const userStories = `Academy Owner:
1. As an Academy Owner, I want to be able to create and manage multiple teams within my academy, so I can efficiently organize my players and coaches.
2. As an Academy Owner, I want to be able to assign coaches to specific teams, so they can focus on developing the players in their assigned team.
3. As an Academy Owner, I want to have an overview of all player profiles, so I can track their progress and make informed decisions about their development.
4. As an Academy Owner, I want to be able to communicate with coaches, players, and parents through the platform, so I can keep everyone informed about academy updates and events.
5. As an Academy Owner, I want to be able to manage the academy's schedule, including practices, games, and other events, so everyone can stay up-to-date on the academy's activities.

Coach:
1. As a Coach, I want to be able to view and update individual player profiles, so I can track their progress and provide personalized feedback.
2. As a Coach, I want to be able to create and assign training plans for my players, so they can work on specific skills and improve their performance.
3. As a Coach, I want to be able to communicate with my players and their parents through the platform, so I can provide updates on player progress and address any concerns.
4. As a Coach, I want to be able to view and manage my team's schedule, so I can plan practices, games, and other events efficiently.

Player:
1. As a Player, I want to be able to view and update my individual player profile, so I can track my progress and share my achievements with others.
2. As a Player, I want to be able to view my assigned training plans, so I can work on specific skills and improve my performance.
3. As a Player, I want to be able to communicate with my coach and teammates through the platform, so I can ask questions, share updates, and stay connected with my team.
4. As a Player, I want to be able to view my team's schedule, so I can stay up-to-date on practices, games, and other events.

Parent:
1. As a Parent, I want to be able to view my child's individual player profile, so I can track their progress and celebrate their achievements.
2. As a Parent, I want to be able to communicate with my child's coach through the platform, so I can ask questions, provide feedback, and stay informed about my child's development.
3. As a Parent, I want to be able to view my child's team schedule, so I can plan for practices, games, and other events.`;

  const { session } = useSession();
  if (!process.env.NEXT_PUBLIC_SHOW_BRIEFING || process.env.NEXT_PUBLIC_SHOW_BRIEFING === 'false') {
    return null;
  }
  return (
    <Box width={1} position="fixed" left="10" bottom="20%" zIndex={3}>
      <Popover>
        <PopoverTrigger>
          <IconButton aria-label="Help Info" icon={<FiInfo />} />
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>App Briefing</PopoverHeader>
          <PopoverBody maxH="500px" overflowY="auto">
            <Text mb="2">Hi there!</Text>
            <Text mb="2">
              Welcome to {applicationName}, your freshly generated B2B SaaS application. This in-app briefing will guide
              you through your application. Feel free to remove this tutorial with the{' '}
              <Box as="span" bg="yellow.300" p={1}>
                NEXT_PUBLIC_SHOW_BRIEFING
              </Box>{' '}
              environment variable.
            </Text>
            <Text mb="2">You can use {applicationName} with one of these roles:</Text>
            <UnorderedList mb="2">
              {roles.map((role) => (
                <ListItem key={role}>{role}</ListItem>
              ))}
            </UnorderedList>
            {session?.roqUserId ? (
              <Text mb="2">You are currently logged in as a {session?.user?.roles?.join(', ')}.</Text>
            ) : (
              <Text mb="2">
                Right now, you are not logged in. The best way to start your journey is by signing up as{' '}
                {ownerRoles.join(', ')} and to create your first {tenantName}.
              </Text>
            )}
            <Text mb="2">
              {applicationName} was generated based on these user stories. Feel free to try them out yourself!
            </Text>
            <Box mb="2" whiteSpace="pre-wrap">
              {userStories}
            </Box>
            <Text mb="2">
              If you are happy with the results, then you can get the entire source code here:{' '}
              <Link href={githubUrl} color="cyan.500" isExternal>
                {githubUrl}
              </Link>
            </Text>
            <Text mb="2">
              Console Dashboard: For configuration and customization options, access our console dashboard. Your project
              has already been created and is waiting for your input. Check your emails for the invite.
            </Text>
            <Text mb="2">
              <Link href="https://console.roq.tech" color="cyan.500" isExternal>
                ROQ Console
              </Link>
            </Text>
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </Box>
  );
};
