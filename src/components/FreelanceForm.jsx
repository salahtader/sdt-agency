import DefaultPicture from "../assets/profile.png";
import Card from "./Card";
import styled from 'styled-components'
import colors from '../utils/style/colors'

const FreelancesContainer = styled.div`
    padding: 40px;
    background-color: ${colors.backgroundLight};
    position: relative;
 
`

const Title = styled.h1`
    color: ${colors.primary};
    font-size: 36px;
    margin-bottom: 40px;
    text-align: center;
`

const CardsContainer = styled.div`
    display: grid;
    gap: 24px;
    grid-template-rows: repeat(auto-fill, minmax(350px, 1fr));
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    
`
const freelanceProfiles = [
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: DefaultPicture,
  },
  {
    name: "Jane Doe",
    jobTitle: "Devops",
    picture: DefaultPicture,
  },
  {
    name: "John Doe",
    jobTitle: "Developpeur frontend",
    picture: DefaultPicture,
  },
  {
    name: "Jeanne Biche",
    jobTitle: "Développeuse Fullstack",
    picture: DefaultPicture,
  },
];
function FreelanceForm() {
  return (
    <FreelancesContainer>
    <Title>Nos Freelances</Title>
    <CardsContainer>
      {freelanceProfiles.map((freelanceProfile, index) => {
       return <Card
          key={index}
          label={freelanceProfile.name}
          title={freelanceProfile.jobTitle}
          picture={freelanceProfile.picture}
        />
  })}
   </CardsContainer>
   </FreelancesContainer>
  );
}
export default FreelanceForm;
