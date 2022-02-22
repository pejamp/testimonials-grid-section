import { GlobalStyle } from "./styles/global"

import { Container, Flex } from "./styles/home"
import { Card } from "./components/Card"
import { Image } from "./components/Image"
import { Title } from "./components/Title"
import { Paragraph } from "./components/Paragraph"
import { Text } from "./components/Text"
import { QuotationMarks } from "./components/QuotationMarks"

import quotationIcon from "./assets/images/bg-pattern-quotation.svg";
import danielImg from "./assets/images/image-daniel.jpg"
import jeanetteImg from "./assets/images/image-jeanette.jpg"
import jonathanImg from "./assets/images/image-jonathan.jpg"
import kiraImg from "./assets/images/image-kira.jpg"
import patrickImg from "./assets/images/image-patrick.jpg"

function App() {

  return (
    <>
      <Container>
        <Card theme={"--moderate-violet"} className="col-1">
          <QuotationMarks as="img" src={quotationIcon} />
          <Flex className="col" space={"18px"}>
            <Flex space={"16px"}>
              <Image photo={danielImg} />
              <Flex className="col" space={"4px"}>
                <Text textColor={"--white"}>
                  Daniel Clifford
                </Text>
                <Text className="small" textColor={"--white"}>
                  Verified Graduate
                </Text>
              </Flex>
            </Flex>

            <Title fontColor={"--white"}>
              I received a job offer mid-course, and the subjects I learned were current, if not more so, 
              in the company I joined. I honestly feel I got every penny’s worth.
            </Title>
            
            <Paragraph fontColor={"--light-gray"}>
              “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a 
              transition and have heard some people who had an amazing experience here. I signed up 
              for the free intro course and found it incredibly fun! I enrolled shortly thereafter. 
              The next 12 weeks was the best - and most grueling - time of my life. Since completing 
              the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
            </Paragraph>
          </Flex>
        </Card>
        <Card theme={"--very-dark-grayish-blue"}>
          <Flex className="col" space={"18px"}>
            <Flex space={"16px"}>
              <Image photo={jonathanImg} />
              <Flex className="col" space={"4px"}>
                <Text textColor={"--white"}>
                  Jonathan Walters
                </Text>
                <Text className="small" textColor={"--white"}>
                  Verified Graduate
                </Text>
              </Flex>
            </Flex>

            <Title fontColor={"--white"}>
              The team was very supportive and kept me motivated
            </Title>
            
            <Paragraph fontColor={"--light-gray"}>
              “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer 
              for a big company. This was one of the best investments I’ve made in myself. ”
            </Paragraph>
          </Flex>
        </Card>
        <Card theme={"--white"}>
          <Flex className="col" space={"18px"}>
            <Flex space={"16px"}>
              <Image photo={jeanetteImg} />
              <Flex className="col" space={"4px"}>
                <Text textColor={"--very-dark-grayish-blue"}>
                  Jeanette Harmon
                </Text>
                <Text className="small" textColor={"--very-dark-grayish-blue"}>
                  Verified Graduate
                </Text>
              </Flex>
            </Flex>

            <Title fontColor={"--very-dark-grayish-blue"}>
              An overall wonderful and rewarding experience
            </Title>
            
            <Paragraph fontColor={"--very-dark-grayish-blue"}>
              “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living 
              while doing something I love. ”
            </Paragraph>
          </Flex>
        </Card>
        <Card theme={"--very-dark-blackish-blue"} className="row-2-col-2">
          <Flex className="col" space={"18px"}>
            <Flex space={"16px"}>
              <Image photo={patrickImg} />
              <Flex className="col" space={"4px"}>
                <Text textColor={"--white"}>
                  Patrick Abrams
                </Text>
                <Text className="small" textColor={"--white"}>
                  Verified Graduate
                </Text>
              </Flex>
            </Flex>

            <Title fontColor={"--white"}>
              Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and 
              learning from their experiences was easy.
            </Title>
            
            <Paragraph fontColor={"--light-gray"}>
              “ The staff seem genuinely concerned about my progress which I find really refreshing. The program 
              gave me the confidence necessary to be able to go out in the world and present myself as a capable 
              junior developer. The standard is above the rest. You will get the personal attention you need from 
              an incredible community of smart and amazing people. ”
            </Paragraph>
          </Flex>
        </Card>
        <Card theme={"--white"} className="col-4-row-2">
          <Flex className="col" space={"18px"}>
            <Flex space={"16px"}>
              <Image photo={kiraImg} />
              <Flex className="col" space={"4px"}>
                <Text textColor={"--very-dark-grayish-blue"}>
                  Kira Whittle
                </Text>
                <Text className="small" textColor={"--very-dark-grayish-blue"}>
                  Verified Graduate
                </Text>
              </Flex>
            </Flex>

            <Title fontColor={"--very-dark-grayish-blue"}>
              Such a life-changing experience. Highly recommended!
            </Title>
            
            <Paragraph fontColor={"--very-dark-grayish-blue"}>
              “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from 
              professionals who can help me learn programming step by step. I was encouraged to enroll by a former 
              student of theirs who can only say wonderful things about the program. The entire curriculum and staff 
              did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team 
              project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial 
              could ever have. In fact, I’ve often referred to it during interviews as an example of my developent 
              experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers. 
              100% recommend! ”
            </Paragraph>
          </Flex>
        </Card>
      </Container>
      <GlobalStyle />
    </>
  )
}

export default App
