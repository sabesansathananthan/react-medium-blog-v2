import { Avatar } from "@mui/material";
import React from "react";
import ShortenText from "../utils/ShortenText";
import ToText from "../utils/ToText";
import AvatarImg from "./avatar";
import { Chip } from "@mui/material";
import colors from "../utils/colors.json";
import { styled } from "@mui/material/styles";
import kFormatter from "../utils/KFormerter";

const Cards = ({ data }) => {
  const monthShortname = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const splitDate = data?.pubDate.split(" ");
  const date = splitDate[0];
  const splitMonth = date.split("-");
  const finalDate =
    monthShortname[Number(splitMonth[1] - 1)] +
    " " +
    splitMonth[2] +
    "," +
    " " +
    splitMonth[0];

  const currentTime = new Date();
  const currentOffset = currentTime.getTimezoneOffset();
  const ISTOffset = 330; // IST offset UTC +5:30
  const ISTTime = new Date(
    currentTime.getTime() + (ISTOffset + currentOffset) * 60000
  );

  const isOnline = ISTTime.getHours() >= 5 && ISTTime.getHours() <= 22;

  const StyledChip = styled(Chip)(({ theme }) => ({
    ".MuiChip-label": {
      color: "#FFFFFF",
      textTransform: "uppercase",
      fontFamily: '"Poppins", sans-serif',
      fontSize: "10px",
    },
  }));

  return (
    <div className="col-lg-4">
      <div className="card post-entry">
        <div
          className="thumbnail"
          style={{
            borderRadius: "7px",
            backgroundImage: `url(${data?.postImage})`,
          }}
        >
          <StyledChip
            label={data?.tag}
            size="small"
            style={{
              backgroundColor: colors[data?.tagOrder],
              top: "0.9375rem",
              right: "0.9375rem",
              position: "absolute",
            }}
          />
        </div>

        <div className="card-block">
          <div className="content-height">
            <h2 className="card-title mb-3">
              <a href={data.link}>{data.title}</a>
            </h2>
            <p className="card-text">
              {ShortenText(ToText(data.content), 0, 120) + "..."}
            </p>
          </div>
          <div className="metafooter">
            <div className="wrapfooter">
              <span className="meta-footer-thumb">
                <a href={data.profileLink}>
                  <div className="author-pic">
                    {isOnline ? (
                      <AvatarImg image={data?.avatar} />
                    ) : (
                      <Avatar src={data.avatar} className="author-thumb" />
                    )}
                    {/* <img className="author-thumb" src={data.avatar} alt="Sab" /> */}
                  </div>
                </a>
              </span>
              <span className="author-meta">
                <span className="post-name">
                  <a href={data.profileLink}>{data.author}</a>
                </span>
                <br />
                <span className="post-date">{finalDate}</span>
                <span className="dot"></span>
                <span className="post-read">{data.readingTime} min read</span>
              </span>
              <span className="post-read-more">
                <span className="post-name">
                  <i
                    className="fa-regular fa-hands-clapping"
                    style={{
                      fontSize: "14px",
                      paddingRight: "10px",
                      color: "##757575",
                    }}
                  ></i>
                  {kFormatter(data.clapCount)}
                </span>
                <br />
                <span className="post-date">
                  <i
                    className="fa-regular fa-comment fa-flip-horizontal"
                    style={{
                      fontSize: "14px",
                      paddingLeft: "13px",
                      color: "##757575",
                    }}
                  ></i>
                  {kFormatter(data.responseCount)}
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
