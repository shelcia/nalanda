import React, { useEffect, useState } from "react";
import Bar from "../../../assets/common/bar.png";
import { convertDate } from "../../../helper/convertDate";
import { BoxLoaders } from "../../../common/Loaders";
import { apiCommon } from "../../../services/models/CommonModel";
import CarouselComp from "../../../common/CarouselComp";
import { Card, CardContent } from "@mui/material";
import { H2, H4, Paragraph } from "../../../components/CustomTypography";
import Speaker from "../../../assets/home/speaker.png";

const Announcements = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const ac = new AbortController();
    apiCommon
      .getSingle("announcements", ac.signal)
      .then((res) => {
        console.log(res);
        if (res.message === undefined) return;
        setAnnouncements(res.message?.reverse());
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
    return () => {
      return () => ac.abort();
    };
  }, []);

  return (
    <React.Fragment>
      <div className="mt-5" id="announcement">
        <H2 className="text-center mb-0 font-weight-bold color-darkBlue pb-0">
          Announcements
          <img
            src={Speaker}
            alt="Speaker"
            style={{ height: 20 }}
            className="ms-2"
          />
        </H2>
        <div className="text-center mb-0 pb-0">
          <img src={Bar} alt="bar" id="bar" />
        </div>
        <div className="container-fluid px-4">
          <div className="card-deck py-4">
            {isLoading ? (
              <BoxLoaders />
            ) : (
              <CarouselComp>
                {announcements.map((item) => (
                  <Card className="shadow-sm border-0 my-3 mx-2" key={item._id}>
                    <CardContent>
                      <H4 className="mt-2 color-darkBlue">{item.title}</H4>
                      <Paragraph>{item.desc}</Paragraph>
                      <div className="mt-2 text-muted">
                        {item.date ? convertDate(item.date) : ""}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </CarouselComp>
            )}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Announcements;
