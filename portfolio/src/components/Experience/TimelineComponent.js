import React from 'react'
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';
import Typography from '@mui/material/Typography';
import Timelinecontent from './Timelinecontent';

function TimelineComponent() {
  return (
    <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
      <Timelinecontent icon={'Award'} date={'October 2022'} position={"Ranked 6th in Intra-University coding competition- UCODE5.0"} organization={'University of Engineering and Management, Kolkata'} desc={''}/>
      <Timelinecontent icon={'Design'} date={'August 2022 - Present'} position={'Graphic Designer (Core Member)'} organization={'GDSC UEMK'} desc={"I joined my University's Google Developers Campus Chapter as a graphic designer. Here I design multiple social media creatives for the events the happen."}/>
      <Timelinecontent icon={'Award'} date={'August 2022'} position={"Vice Chancellor's Award for Overall Performance 2021-22"} organization={'University of Engineering and Management, Kolkata'} desc={''}/>
      <Timelinecontent icon={'Award'} date={'July 2022'} position={'1st Prize in Painting Competition 2021-22'} organization={'University of Engineering and Management, Kolkata'} desc={"I made a charcol skectch on the topic 'Unity'."}/>
      <Timelinecontent icon={'Design'} date={'2021 - Present'} position={'Graphic Designer'} organization={'URECKON'} desc={"I joined my University's Techno-Management Festival, URECKON as a graphic designer. Here I design multiple social media creatives, posters and banners for the events the happen."}/>
      <Timelinecontent icon={'School'} date={'2021'} position={'ISC (XII)'} organization={'Carmel School Sarangabad'} desc={'Ranked 1st in Science stream and recieved proficiency.'}/>
      <Timelinecontent icon={'School'} date={'2019'} position={'ICSE (X)'} organization={'Carmel School Sarangabad'} desc={'Ranked 3rd in school.'}/>

    </Timeline>
  )
}

export default TimelineComponent