import { Box, Heading, Text } from "@chakra-ui/react"

const OurAchievement = () => {
    return (
        <>
            <Heading
                color="brand.whitish"
                align="center"
                fontSize={{ base: "35px", md: "45px", lg: "55px" }}
                lineHeight={{ base: "40px", md: "40px", lg: "55px" }}
            >What We've Done For Our 120 Students</Heading>
            <Text
                fontSize={{ base: "30px", md: null, lg: "42px" }}
                bgClip='text'
                bgGradient='linear(to-t, white, blue)'
                color="brand.orangish"
                fontWeight='extrabold'
                align="center"
                my={{ base: "30px", md: "40px", lg: "50px" }}
                lineHeight={{ base: "40px", md: "40px", lg: "55px" }}
            >
                120 Jobs Given
                <Box>
                Average Package Given - 5,00,000 per annum</Box>
            </Text>
            <Text
                fontSize={{ base: "18px", md: null, lg: "22px" }}
                align="center"
                color="brand.whitish">Learn From Someone Who Has Actually been Editing YouTube Videos for the past 4 years, Shaad Khan is the proud owner of Bundle-Media, a multiple 7-figure a year post production company for YouTubers. Bundle-Media has helped his clients drive 100s of millions of views each month and reach new peaks on their channel!</Text>
        </>
    )
}

export default OurAchievement