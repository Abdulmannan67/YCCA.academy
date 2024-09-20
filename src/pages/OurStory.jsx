import { Box, Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react'
// import shaadWithIphone from "../assets/Shaad_with_iphone.png"
import {ShaadMinecraft, ShaadTSetup, ShaadVlogging, ShaadWithIphone, ShaadYtVideos, ShaadYtVideos2, ourStory5, ourStory6, ourStory7} from "../utils/index"
import { Link } from 'react-router-dom'

const OurStory = () => {
  return (
    <Box bg={"brand.black"} border={"0px solid red"} pt={"50px"} pos={"relative"} pb={"50px"}>
        {/* FIRST SECTION  */}
       <Flex w={{base:"auto",md:null,lg:"90%",xl:"60%"}} flexDir={{base:"column",md:"column",lg:"row"}} alignItems={"center"} gap={"50px"} m={"auto"}>
          <Box w={293} h={339}>
            <Image w={"100%"} h={"100%"} src={ShaadWithIphone} alt='Shaad Khaan' />
          </Box>
          <Box w={{base:"95%",md:"85%",lg:null, xl:"calc(100% - 343px)"}} display={"flex"} alignItems={"center"} boxSizing='border-box' flexDir={"column"} >
            <Heading style={{fontSize:"50px"}} color={"brand.whitish"} mb={"30px"} fontSize={{base:"40px",md:null,lg:"64px"}} fontWeight={"100"} textAlign={"center"}>My name is Shaad Khan</Heading>
            <Text style={{fontSize:"25px"}} w={{base:null,md:"80%",lg:"80%"}} textAlign={"center"}fontSize={{base:"24px",md:null,lg:"30px"}} color={"brand.whitish"} lineHeight={"40px"}>your average freelance video editor,who went on to making a <Box as='span' color={"brand.orangish"} >million dollar</Box> Post Production Company for YouTubers at age 17.</Text>
            <Text fontSize={{base:"24px",md:null,lg:"30px"}} color={"brand.whitish"} mt={"20px"}>Let’s see how I got here..</Text>
          </Box>
       </Flex>

       {/* SECOND SECTION TEXTS  */}
        <ReusableVStack>
          <ReusableText>Hi, my name is Shaad Khan, born and brought up in a typical lower middle-class family in Mumbai, India.</ReusableText>
          <ReusableText>The Story starts in 2019 with 13 year old shaad watching Logan Paul Vlogs and absolutely binging all his videos, being fascinated over the fact that he was able to cultivate such a cult like audience independently, with 0 support from anyone, he recorded himself, edited it himself, uploaded it on a FREE platform called youtube and voila millions of views.</ReusableText>
          <ReusableText>But this perception of mine was about to change soon..</ReusableText>
          <ReusableText>So this 13 year old kid started making youtube videos in the hope of becoming a viral sensation...</ReusableText>
       </ReusableVStack> 

       {/* THIRD SECTION IMAGE  */}
       <ReusableVStack>
          <Image src={ShaadYtVideos} /> 
       </ReusableVStack>

       {/* FOURTH SECTION TEXTS  */}
       <ReusableVStack>
          <ReusableText>
            Yep, as expected, It was a flopshow resulting in my school mates making tons of instagram groups just to put memes about my videos and how cringe they were.
          </ReusableText>
          <ReusableText>
             But, I never let that get to me, I had this burning desire and passion to just CREATE something, something of my own, something of actual value and respect.
          </ReusableText>
          <ReusableText>
            So I continued, made a new channel, where I tried daily vlogging for 30 days, print on demand business videos, photography, and crazy airrack style videos as well. 👇
          </ReusableText>
       </ReusableVStack>

       {/* FIFTH SECTION IMAGE  */}
       <ReusableVStack>
         <Image src={ShaadYtVideos2} alt="my channels" />
       </ReusableVStack>

       <ReusableVStack>
         <ReusableText>some more things that i had tried...</ReusableText>
       </ReusableVStack>
       
       <ReusableVStack mb={"300px"}>
          <Flex gap={"30px"} alignItems={"center"} justifyContent={"center"} >
             <VStack spacing={"15px"}>
               <ReusableText>■ had a minecraft yt channel</ReusableText>
               <Image src={ShaadMinecraft} alt={"My Mincraft channel"} />
             </VStack>
             <VStack spacing={"15px"}>
               <ReusableText>■ tried vlogging like mubaiker nikhil</ReusableText>
               <Image src={ShaadVlogging} alt={"My vlogging video"} />
             </VStack>
          </Flex>
       </ReusableVStack>
        
        <ReusableVStack>
          <ReusableText mt={2} >■ made 40+ Very embarrassing tiktoks</ReusableText>
          <ReusableText mt={2} >■ youtube news channels</ReusableText>
          <ReusableText mt={2} >■ spammed 100+ reaction shorts on a diff channel</ReusableText>
        </ReusableVStack>
        <ReusableVStack>
           <ReusableText>basically i have tried and tested every possible yt niche with 0 success in any,i even remember making cooking videos ffs!</ReusableText>
        </ReusableVStack>
        <ReusableVStack>
          <ReusableText>But Eventually, I realised that I needed money to continue making YouTube videos. I couldn't rely on my parents to buy me camera gear and equipment.</ReusableText>
          <ReusableText>Even if they wanted to, they were just not capable of it. They couldn't babysit me for my entire life; I had to earn my own money eventually to buy and do whatever i want.</ReusableText>
          <ReusableText>If not, I would have had to go to college, get a job, to support me and my parents. My father and mother can't really work 9-9 jobs for their entire lives, so they just couldn't afford to allow me to make youtube videos all my life without any money coming in.</ReusableText>
          <ReusableText>They would have had to force me to finish graduation to be able to get a job to support myself and them, but going though a graduation degree according to me is a total waste of time and money.</ReusableText>
          <ReusableText color={"brand.orangish"}>(If you have a lot of money and time, college is a great place to enjoy yourself. I always had some other goals in mind, which the people in any college wont resonate with at all.)</ReusableText>
        </ReusableVStack>

        <ReusableVStack>

          <Image w={{base:"90%",md:null,lg:"70%"}} m={"auto"} src={ShaadTSetup} alt='My setup transformation' />
          <ReusableText>Anyways, as you can see above thats my 3 year set-up transition from age 13-16 where I tried and failed with multiple ventures.</ReusableText>
          <ReusableText2>■ tried freelance video editing from kinemaster <SpanBox color='brand.failure'>(failed)</SpanBox>.</ReusableText2>
          <ReusableText2>■ tried freelance graphic design on my $150 android phone <SpanBox color='brand.failure'>(failed)</SpanBox>.</ReusableText2>
          <ReusableText2>■ tried “make money online from mobile” youtube videos <SpanBox color='brand.failure'>(failed)</SpanBox>.</ReusableText2>
          <ReusableText2>■ flipped things on OLX <SpanBox>(success)</SpanBox>.</ReusableText2>
          <ReusableText2>■ I had a blog website where I wrote articles for 1 year <SpanBox color='brand.failure'>(failed)</SpanBox>.</ReusableText2>
          <ReusableText2>■ I made tiktoks, daily youtube vlogs, reels from age 13-16 <SpanBox color='brand.failure'>(failed)</SpanBox>.</ReusableText2>
          <ReusableText2>■ turned 30K which i made from flipping things on olx into 1.2 lakh in the stock market during covid <SpanBox>(success)</SpanBox>.</ReusableText2>
          <ReusableText2>■ lost 50K in 1 hour in the stock market <SpanBox color='brand.failure' >(failed)</SpanBox>.</ReusableText2>
          <ReusableText2>■ lost 50K in a shitty crypto coin <SpanBox color='brand.failure' >(failed)</SpanBox>.</ReusableText2>
          <ReusableText2>■ did 4 month of FREE Internships in different companies as a social media manager, cameraman + editor(doing 12 hour work days for free), joined clubs so that i gain experience and certificates to apply for ivy league colleges <SpanBox color='brand.failure'>(absolute waste of time and traveling money)</SpanBox>.</ReusableText2>
          <ReusableText2>■ Got a Job at BeerBicep’s company called “level” made reels for their instagram for 1 month got paid 5,000rs <SpanBox>(success).</SpanBox></ReusableText2>
        </ReusableVStack>

        <ReusableVStack>
           <ReusableText color='brand.orangish'>
             At around this time I was 16 absolutely lost about what to do, youtube wasnt working out for me neither anything else seemed tangable or fun enough to pursue,
           </ReusableText>
           <ReusableText color='brand.orangish'>
              But then I had started to get an idea that these big youtubers who make a shit ton of money each month, they are probably not sitting 12 hours each day editing their own videos, they probably pay their editors a lot of money as well!
           </ReusableText>
           <ReusableText color='brand.orangish'>
             and guess what? whats the 1st thing i obsessed over after getting my PC from my stock market money, it was to make the best youtube videos possible through video editing, I wanted my videos to look like the biggest and best youtubers out there!
           </ReusableText>
        </ReusableVStack>
         
         {/* ATTENDING ZOOM SECTION  */}
        <VStack w={{base:null,md:null,lg:null,xl:"70%"}} mx={"auto"} mt={"50px"} border={"0px solid green"}>
           <ReusableText w={"70%"}>
             I remember attending zoom classes on my sister’s laptop and learning how to edit on My PC parallely
           </ReusableText>
           <Flex gap={"20px"} mt={"15px"} border={"0px solid blue"} flexWrap={"wrap"}
            alignItems={"center"} justifyContent={"center"}
           >
             <Image width={{base:"80%",md:"auto",xl:null}} src={ourStory5}  alt='' borderRadius={"15px"} border={"3px solid white"} />
             <Image width={{base:"80%",md:"auto",xl:null}} src={ourStory6} alt='Attending classes' borderRadius={"15px"} border={"3px solid white"}  />
             <Image width={{base:"80%",md:"auto",xl:null}} mx={"auto"} src={ourStory7} alt='During attending zoom class' />
           </Flex>
        </VStack>
        
        <ReusableVStack>
           <ReusableText color='brand.orangish'>
           I was putting in 5-12 hour days for 2 years straight to master the SKILL of editing + 1 year of editing on kinemaster, approaching clients, putting out 500 cold emails to youtubers, Just going all in on this 1 idea of 
              <Box as='span' display={"block"}>“helping youtubers make the best youtube videos possible.”</Box>
           </ReusableText>
           <ReusableText color='brand.orangish'>
              finally in April 2023 after 3 years of going through hell, hiring and training 10+ editors with me and my team, I can say that I found my big break.. <Box>Bundle-Media was valued at 1 million dollars, with a team of 15+ people working full-time to make this possible!!</Box>
           </ReusableText>
        </ReusableVStack>
         
         <ReusableVStack>
           <ReusableHeading >A Company & Vision</ReusableHeading>
           <ReusableText  mt={"5px"}>
              YourCheatCode.Academy operates with a single mission, expanded from my own i.e. to reform the education system by creating the best online programs the world has ever seen. <Box> But staying true to our ethos and our vision, we’re going to go one step further</Box>
           </ReusableText>
           <ReusableText>
             I’ve made a commitment to take 10% of yearly company profits & put the money straight towards providing scholarships and equipment to underprivileged individuals residing in tier 3 and tier 4 cities in India who are unfortunate to keep up with the fast-paced global economy. In general bringing good WiFi connection with a Computer in as many Houses as we possibly can.
           </ReusableText>
         </ReusableVStack>

         <ReusableVStack>
          <ReusableHeading>
            Unfinished Business
          </ReusableHeading>
           <ReusableText mt={"5px"}>
              It’s been one hell of a ride, but I’ve only just started. YourCheatCode.Academy is going to explode – and there’s one person I want to grow with it.<b>YOU.</b>
           </ReusableText>
          {/* <ReusableText mt={"0"}>
            <a href='https://yourcheatcode.academy/free-editing-pack' target='_blank'>
              https://yourcheatcode.academy/free-editing-pack
            </a>
          </ReusableText> */}
         </ReusableVStack>
         <Box/>
         {/* <ReusableVStack>
           <ReusableHeading>
             Get started NOW
           </ReusableHeading>
           <ReusableText>
           Edit your first video today itself with <Box>zero experience, zero expertise, a computer,  and ₹501</Box>
           </ReusableText>
           <Link to={"#"} >
          <Button bg={"brand.whitish"} color={"brand.blackish"} w={"260px"} h={"50px"} rounded={"full"} mt={"30px"}
            _hover={{transform:"scale(1.2)"}}
          >1O1 Training</Button>
        </Link>
         </ReusableVStack> */}
    </Box>
  )
}

export default OurStory

// REUSABLE VSTACK CONTAINER 
const ReusableVStack = ({children,border}) =>{
  return(
    <VStack
        w={{base:"90%",md:"90%",lg:null,xl:"60%"}} 
        mx={"auto"} mt={"50px"}
        maxW={"1380px"}
        border={`${border?border:null}`}
    > {children}
    </VStack>
  )
}
 
// REUSABLE TEXT 
const ReusableText  = ({children,mt=25,color="brand.whitish",textAlign="center",w="auto"}) =>{
  return(
    <Text fontSize={{base:"18px",md:null,lg:"24px"}} color={color} lineHeight={"35px"} w={w} textAlign={textAlign} mt={`${mt}px`}>{children}</Text>
  )
}

// REUSABLE TEXT2.
const ReusableText2  = ({children,mt=10}) =>{
    return(
      <Text as={"i"} fontSize={{base:"16px",md:null,lg:"22px"}} lineHeight={{base:"20px",md:null,lg:"30px"}} mt={{base:"15px",md:null,lg:`${mt}px`}} textAlign={"center"} color={"brand.whitish"}>{children}</Text>
    )
}

const ReusableHeading = ({children}) =>{
  return(
    <Heading size={{base:"lg",md:"xl",lg:"xl",xl:null}} color={"brand.whitish"} fontWeight={"500"}>{children}</Heading>
  )
}

// Span box
const SpanBox = ({children, color="brand.success"}) =>{
  return(
    <Box color={color}  as='span'>
      {children}
    </Box>
  )
}