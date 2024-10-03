import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container, Typography } from '@mui/material';

const HomePage = () => (
  <Container>
    <Typography variant="h4">About ISE</Typography>
    <Typography variant="h6">Vision</Typography>
    <Typography variant="h6">Mission</Typography>
    <Typography variant="h6">Editorial Team</Typography>
    <Typography variant="h6">Reviewers Team</Typography>
  </Container>
);

const ResearchPaperPage = () => (
  <Container>
    <Typography variant="h4">Research Paper Submission</Typography>
    {/* Add Form Components here */}
  </Container>
);

const CurrentIssuePage = () => (
  <Container>
    <Typography variant="h4">Current Issue</Typography>
    {/* Display current issues here */}
  </Container>
);

const PublicationArchivedPage = () => (
  <Container>
    <Typography variant="h4">Publication Archived</Typography>
    {/* Display archived publications here */}
  </Container>
);

const EditorialReviewersPage = () => (
  <Container>
    <Typography variant="h4">Editorial and Reviewers</Typography>
    {/* List editorial team and reviewers here */}
  </Container>
);

const GalleryPage = () => (
  <Container>
    <Typography variant="h4">Gallery</Typography>
    {/* Display images or video links here */}
  </Container>
);

const ContactPage = () => (
  <Container>
    <Typography variant="h4">Contact Us</Typography>
    <Typography>
      N.H. Goel World School, Vidhan Sabha Road, Raipur - 493 111
    </Typography>
    {/* Add more contact details */}
  </Container>
);

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/research-paper">Research Paper</Button>
          <Button color="inherit" component={Link} to="/current-issue">Current Issue</Button>
          <Button color="inherit" component={Link} to="/publication-archived">Publication Archived</Button>
          <Button color="inherit" component={Link} to="/editorial-reviewers">Editorial and Reviewers</Button>
          <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
          <Button color="inherit" component={Link} to="/contact">Contact Us</Button>
        </Toolbar>
      </AppBar>

      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/research-paper" element={<ResearchPaperPage />} />
        <Route path="/current-issue" element={<CurrentIssuePage />} />
        <Route path="/publication-archived" element={<PublicationArchivedPage />} />
        <Route path="/editorial-reviewers" element={<EditorialReviewersPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
};

export default App;
