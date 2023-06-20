import "./Resume.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { Avatar, Paper, Typography, Button, Link } from "@mui/material/";
import { KeyboardArrowRight, Download } from "@mui/icons-material/";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  LocationOn,
  LocalPhone,
  GitHub,
  Instagram,
} from "@mui/icons-material/";
import pfp from "../resources/pfp.jpg";
import { Tilt } from "react-tilt";

const Resume = () => {
  const downloadAsPdf = () => {
    const input = document.getElementById("pdf-content");
    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF("p", "mm", "a4");
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0, 210, 297);
      pdf.save("resume.pdf");
    });
  };

  const defaultOptions = {
    reverse: false,
    max: 35,
    perspective: 1000,
    scale: 1.1,
    speed: 1000,
    transition: true,
    axis: null,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <div className="main">
      <Paper elevation={0} className="resume" id="pdf-content">
        <div className="left">
          {/* Profile */}
          <div className="pfp">
            <Tilt options={defaultOptions} style={{ height: 150, width: 150 }}>
              <Avatar src={pfp} sx={{ width: 150, height: 150 }} />
            </Tilt>
          </div>

          {/* Contact */}

          <Typography variant="h5" component="h2" className="leftTitle" mt={6}>
            Contact
          </Typography>

          <hr style={{ width: "250px" }} />

          <Typography variant="body1" mt={2}>
            <LocationOn fontSize="small" />
            Address
          </Typography>
          <Typography variant="body2">24/42, Wakdewadi, Pune - 03</Typography>
          <Typography variant="body1" mt={2}>
            <LocalPhone fontSize="small" /> Phone
          </Typography>
          <Typography variant="body2">(+91) 9595969922</Typography>
          <Typography variant="body1" mt={2}>
            <GitHub fontSize="small" /> GitHub
          </Typography>
          <Link
            href="https://www.github.com/SarthakRathi"
            underline="hover"
            color="inherit"
          >
            <Typography variant="body2">github.com/SarthakRathi</Typography>
          </Link>
          <Typography variant="body1" mt={2}>
            <Instagram fontSize="small" /> Instagram
          </Typography>
          <Link
            href="https://www.instagram.com/_sarthak.r_/"
            underline="hover"
            color="inherit"
          >
            <Typography variant="body2">instagram.com/_sarthak.r_</Typography>
          </Link>

          {/* Education */}

          <Typography variant="h5" component="h2" className="leftTitle" mt={6}>
            Education
          </Typography>

          <hr style={{ width: "250px" }} />
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2" mt={2}>
                  2007-2020
                </Typography>
                <Typography variant="body1">BVB</Typography>
                <Typography variant="body2">School</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2" mt={2}>
                  2020-2023
                </Typography>
                <Typography variant="body1">Computer Technology</Typography>
                <Typography variant="body2">
                  Government Polytechnic, Ahmednagar
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

          {/* Pro Skills */}

          <Typography variant="h5" component="h2" className="leftTitle" mt={6}>
            Skills
          </Typography>

          <hr style={{ width: "250px" }} />

          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> HTML5
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> CSS3
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> React JS
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> Python
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> Java
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> Android
          </Typography>
        </div>
        <div className="right">
          {/* Title */}

          <Typography variant="h4" component="h2">
            Sarthak Rathi
          </Typography>
          <Typography variant="h5" component="h2">
            Developer
          </Typography>

          {/* Profile */}
          <Typography variant="h5" component="h2" className="leftTitle" mt={6}>
            Profile
          </Typography>

          <div className="line">
            <hr style={{ width: "250px" }} />
          </div>

          <Typography variant="body1">
            Skilled and versatile Full Stack Developer proficient in HTML, CSS,
            Java, Python, and React.js. With a strong background in both
            front-end and back-end development, I bring 1 year of hands-on
            experience in delivering robust and user-friendly web applications.
            Seeking a challenging role where I can utilize my technical
            expertise and contribute to the success of a forward-thinking
            organization.
          </Typography>

          {/* Experience  */}
          <Typography variant="h5" component="h2" className="leftTitle" mt={6}>
            Experience
          </Typography>

          <div className="line">
            <hr style={{ width: "250px" }} />
          </div>
          <Timeline
            sx={{
              [`& .${timelineItemClasses.root}:before`]: {
                flex: 0,
                padding: 0,
              },
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2">
                  26th Aug 2020 - 9th September 2020
                </Typography>
                <Typography variant="body2">
                  Star Skillcare Education, Pune
                </Typography>
                <Typography variant="body2">
                  Internship: Quality Auditor
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2" mt={3}>
                  1th Feb 2021 - 1th March 2021
                </Typography>
                <Typography variant="body2">Internship Studio, Pune</Typography>
                <Typography variant="body2">
                  Internship: Wordpress, Web Developement
                </Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2" mt={3}>
                  4th Jul 2022 - 14th Aug 2022
                </Typography>
                <Typography variant="body2">
                  Tablabs Technology, Ahmednagar
                </Typography>
                <Typography variant="body2">Web Developement(PHP)</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2" mt={3}>
                  10th Jun 2023 - Present
                </Typography>
                <Typography variant="body2">
                  Internship Studio, Baner
                </Typography>
                <Typography variant="body2">
                  Web Developement(React JS)
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

          {/* Tools */}
          <Typography variant="h5" component="h2" className="leftTitle" mt={6}>
            Tools
          </Typography>

          <div className="line">
            <hr style={{ width: "250px" }} />
          </div>

          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> VS Code
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> Android Studio
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> Canva
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> Sandbox
          </Typography>
          <Typography variant="body1" mt={1}>
            <KeyboardArrowRight fontSize="small" /> Github
          </Typography>
        </div>
      </Paper>
      <Button
        variant="contained"
        onClick={downloadAsPdf}
        endIcon={<Download />}
      >
        Download as PDF
      </Button>
    </div>
  );
};

export default Resume;
