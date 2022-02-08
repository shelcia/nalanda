import React, { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography, alpha } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { H3, H5 } from "../../../../components/CustomTypography";
import useTitle from "../../../../hooks/useTitle";
import Thirukural from "../../../../json/thirukural.json";
import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";

const Home = () => {
  useTitle("Hello User!");

  const navigate = useNavigate();

  const logout = () => {
    navigate("/login");
    localStorage.clear();
  };

  const [content, setContent] = useState({
    Number: 1,
    Line1: "அகர முதல எழுத்தெல்லாம் ஆதி",
    Line2: "பகவன் முதற்றே உலகு.",
    Translation:
      "'A' leads letters; the Ancient Lord Leads and lords the entire world",
    mv: "எழுத்துக்கள் எல்லாம் அகரத்தை அடிப்படையாக கொண்டிருக்கின்றன. அதுபோல உலகம் கடவுளை அடிப்படையாக கொண்டிருக்கிறது.",
    sp: "எழுத்துக்கள் எல்லாம் அகரத்தில் தொடங்குகின்றன; (அது போல) உலகம் கடவுளில் தொடங்குகிறது.",
    mk: "அகரம் எழுத்துக்களுக்கு முதன்மை; ஆதிபகவன், உலகில் வாழும் உயிர்களுக்கு முதன்மை",
    explanation:
      "As the letter A is the first of all letters, so the eternal God is first in the world",
    couplet:
      'A, as its first of letters, every speech maintains;The "Primal Deity" is first through all the world\'s domains',
    transliteration1: "Akara Mudhala Ezhuththellaam Aadhi",
    transliteration2: "Pakavan Mudhatre Ulaku",
  });

  const thirukural = Thirukural;

  useEffect(() => {
    setContent(thirukural.kural[Math.floor(Math.random() * 1330)]);
  }, [thirukural.kural]);

  const theme = useTheme();

  return (
    <React.Fragment>
      <div className="container mt-5">
        <Card variant="outlined">
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="primary.main" gutterBottom>
              Thirukural of the Day
            </Typography>
            <Typography variant="h5" component="div">
              {content.Line1}
              <br />
              {content.Line2}
            </Typography>
            <Typography variant="body2" mt={4}>
              {content.mv}
              <br />
              {content.explanation}
            </Typography>
          </CardContent>
        </Card>

        <H3 my={3}>Shortcuts</H3>

        <div className="row">
          <div className="col-md-4">
            <Card>
              <CardContent>
                <H5>Go to All Questions</H5>
                <Link to="/student_dashboard/questions-corner">
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      marginLeft: "auto",
                      display: "flex",
                      borderRadius: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: alpha(theme.palette.primary.red, 0.2),
                    }}
                  >
                    <i
                      className={`fas fa-arrow-right fa-2x`}
                      style={{ color: theme.palette.primary.red }}
                    ></i>
                  </Box>
                </Link>
              </CardContent>
            </Card>
          </div>
          <div className="col-md-4">
            <Card>
              <CardContent>
                <H5>Go to All Notes</H5>
                <Link to="/student_dashboard/notes">
                  <Box
                    sx={{
                      width: 60,
                      height: 60,
                      marginLeft: "auto",
                      display: "flex",
                      borderRadius: "50%",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor: alpha(theme.palette.primary.main, 0.2),
                    }}
                  >
                    <i
                      className={`fas fa-arrow-right fa-2x`}
                      style={{ color: theme.palette.primary.main }}
                    ></i>
                  </Box>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-end mt-5">
          <Button variant="contained" onClick={logout}>
            Logout
          </Button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
