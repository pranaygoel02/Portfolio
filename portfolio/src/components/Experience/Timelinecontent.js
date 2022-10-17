import React from 'react'
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Design from '@mui/icons-material/DesignServices';
import Award from '@mui/icons-material/EmojiEvents';
import School from '@mui/icons-material/School';
import Work from '@mui/icons-material/Work';

function Timelinecontent({icon,date,position,organization,desc}) {
  return (
    <TimelineItem>
    <TimelineOppositeContent
      sx={{ m: 'auto 0' }}
      align="right"
      variant="body2"
      color="text.secondary"
      className='hide'
    >
        {date}
    </TimelineOppositeContent>
    <TimelineSeparator>
      <TimelineConnector />
      <TimelineDot color='primary'>
        {icon === 'School' && <School/>}
        {icon === 'Design' && <Design/>}
        {icon === 'Award' && <Award/>}
        {icon === 'Work' && <Work/>}
      </TimelineDot>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent sx={{ py: '12px', px: 1 }}>
      <div className='work-card'>
        <div style={{padding:'0.5em 0',display:'flex',flexDirection:'column',gap:'0.5em'}}>
          <h2 style={{color:'rgba(0,0,0,0.95)'}}>{position}</h2>
          <h4 style={{color:'rgb(35, 116, 206)',fontWeight:'500'}}>{organization}</h4>
        </div>
        <p>{desc}</p>
      </div>
    </TimelineContent>
  </TimelineItem>
  )
}

export default Timelinecontent