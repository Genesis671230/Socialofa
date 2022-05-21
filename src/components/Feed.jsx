import { Box } from '@mui/material'
import React from 'react'
import Posts from './Posts'





export default function Feed() {
  return (
      <Box flex={4} p={2} >
        <Posts title="Austin Grifith" time="March 04 2022" img="https://source.unsplash.com/random/900x700/?car" para="My brand new car is just amazing the new model has some unique feature which every person would like to know."/>
        <Posts title="Morus blitz" time="April 25 2022" img="https://source.unsplash.com/random/900x700/?Biotech" para="Bio tech has been growing industry and its main focus is on developing new technology that can fascilitate the development of Tech"/>
        <Posts title="Effrin Alips" time="March 20 2022" img="https://source.unsplash.com/random/900x700/?Robotics" para="I have been wondereing this new technology has been adopted by amazon for their product delievery"/>
        <Posts title="Alizzet Anik" time="Feb 04 2022" img="https://source.unsplash.com/random/900x700/?blockchain" para="Blockchain is growing industry because its massive use cases it has revolitionized the way of internet. The new Hyperledger fabric has been integrated in enterprise level companies and products from supply chains, healthcare and real estate to even artificial intellegence."/>
        <Posts title="Daniel " time="May 07 2022" img="https://source.unsplash.com/random/900x700/?Miami" para="Friends have a great day..."/>
        <Posts title="Solomon andrew" time="May 12 2022" img="https://source.unsplash.com/random/900x700/?airport" para="its nice to travel i havent been to berlin. "/>
        <Posts title="Anna Aliz" time="April 24 2022" img="https://source.unsplash.com/random/900x700/?breakfast" para="Morning breakfast is just amazing"/>
        <Posts title="Irish" time="May 16 2022" img="https://source.unsplash.com/random/900x700/?juice" para="take care of your health always"/>
        <Posts title="David Ornis" time="March 03 2022" img="https://source.unsplash.com/random/900x700/?biowar" para="Corona has just made worse to the earth."/>
        <Posts title="Dr Alis" time="May 15 2022" img="https://source.unsplash.com/random/900x700/?neurons" para="Do you think neuralink will succeed in integration of Biochips?"/>

      </Box>
  )
}






















































































































/*

 <Box sx={{display:"flex",alignItems:"center", color:"white",height:"80vh", flexDirection:"column",backgroundRepeat:"no-repeat",backgroundSize:"cover",
 backgroundImage: 'url("https://source.unsplash.com/random/?blockchain")', justifyContent:"center"}}>

      <Typography variant="h6" fontWeight="bold" >
      Welcome to KoleidoPort
      </Typography>
      <Button variant="contained" color="secondary"  endIcon={<Send />}>Enter Metaverse</Button>

</Box>

<Box sx={{display:"flex",alignItems:"center", color:"white",height:"80vh", flexDirection:"column",backgroundRepeat:"no-repeat",backgroundSize:"cover",
 backgroundImage: 'url("https://source.unsplash.com/random/?ethereum")', justifyContent:"center"}}>

      <Typography variant="h6" fontWeight="bold" >
      Start Learning Ethereum Programming
      </Typography>
      <Button variant="contained" color="secondary"  endIcon={<Send />}>Learn Ethereum</Button>

</Box>

<Box sx={{display:"flex",alignItems:"center", color:"white",height:"80vh", flexDirection:"column",backgroundRepeat:"no-repeat",backgroundSize:"cover",
 backgroundImage: 'url("https://source.unsplash.com/random/?biotech")', justifyContent:"center"}}>

      <Typography variant="h6" fontWeight="bold" >
      Explore Beyond in BioTech 
      </Typography>
      <Button variant="contained" color="secondary"  endIcon={<Send />}>Learn BioEngenering</Button>

</Box>

<Box sx={{display:"flex",alignItems:"center", color:"white",height:"80vh", flexDirection:"column",backgroundRepeat:"no-repeat",backgroundSize:"cover",
 backgroundImage: 'url("https://source.unsplash.com/random/?genetics")', justifyContent:"center"}}>

      <Typography variant="h6" fontWeight="bold" >
      Welcome to KoleidoPort
      </Typography>
      <Button variant="contained" color="secondary"  endIcon={<Send />}>Enter Metaverse</Button>

</Box>

<Box sx={{display:"flex",alignItems:"center", color:"white",height:"50vh", flexDirection:"column",backgroundRepeat:"no-repeat",backgroundSize:"cover",
  justifyContent:"center"}}>

      <Typography variant="h6" fontWeight="bold" >
      Welcome to KoleidoPort
      </Typography>
      <Button variant="contained" color="secondary"  endIcon={<Send />}>Enter Metaverse</Button>

</Box> 
*/