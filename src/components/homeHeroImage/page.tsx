"use client";
import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
  useMantineColorScheme,
  ColorInput,
} from "@mantine/core";
import { useSession } from "next-auth/react";

const useStyles = createStyles((theme) => ({
  root: {
    backgroundColor: "#11284b",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage:
      "linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1080&q=80)",
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",

    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    maxWidth: rem(500),
    fontSize: rem(48),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    maxWidth: rem(500),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));

import { useRouter } from "next/navigation";

export default function HomeHeroImage() {
  const router = useRouter();

  const { data: session, status } = useSession();

  const { classes } = useStyles();
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              {status === "authenticated" ? (
                <>
                  <Text
                    component="span"
                    inherit
                    variant="gradient"
                    gradient={{ from: "pink", to: "blue" }}
                  >
                    {session.user?.name},
                  </Text>{" "}
                  welcome in
                </>
              ) : (
                "A"
              )}{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "pink", to: "blue" }}
              >
                Next-Auth
              </Text>{" "}
              web application
            </Title>

            <Text className={classes.description} mt={30}>
              <ul>
                <li>next-auth package</li>
                <li>credentials provider</li>
                <li>prisma ORM</li>
                <li>Mysql database</li>
                <li>mantine ui component</li>
              </ul>
            </Text>
            {status === "unauthenticated" && (
              <Button
                variant="outline"
                gradient={{ from: "pink", to: "yellow" }}
                size="xl"
                className={classes.control}
                mt={40}
                onClick={() => {
                  router.push("/sign-up");
                }}
              >
                Get started
              </Button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
}
