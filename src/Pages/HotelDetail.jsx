import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import styled from "styled-components";
import { lighten } from "../Utils/styleMethods";
import HomeIcon from "@mui/icons-material/Home";

const HotelDetailWrapper = styled.header`
  margin: auto;
  width: 50%;
  border: 3px solid green;
  padding: 10px;
  text-align: center;
  box-shadow: 5px 10px orange;
  &:hover {
    ${lighten("#009900", 0.8)}
    cursor: pointer;
  }
  .referesh {
    width: 10%;
    margin: 0;
  }
  .hotelList {
    font-family: cursive;
    margin: 1px;
  }
  img {
    width: 200px;
    margin-top: 10px;
    hight: 50px;
    text-align: center;
    border-radius: 4px;
  }
  .classTitle {
    font-family: cursive;
    color: #ff4500;
    margin: 1px;
  }
`;
const SpinnerLoader = styled.div`
  margin-top: 400px;
  width: 200px;
  @keyframes spinner {
    0% {
      transform: translate3d(-50%, -50%, 0) rotate(0deg);
    }
    100% {
      transform: translate3d(-50%, -50%, 0) rotate(360deg);
    }
  }
  .spin::before {
    animation: 1.5s linear infinite spinner;
    animation-play-state: inherit;
    border: solid 5px orange;
    border-bottom-color: #87c91c;
    border-radius: 50%;
    content: "";
    height: 60px;
    width: 60px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    will-change: transform;
  }
`;

const HotelDetail = () => {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const { name, display_phone, rating, image_url, review_count } = details;
  const navigate = useNavigate(); // //navigate to different page with Router useNavigate

  useEffect(() => {
    setLoading(true);
    fetch(`https://bwreact-yelp-backend.herokuapp.com/api/businesses/${id}`)
      .then((res) => res.json())
      .then((pla) => {
        setDetails(pla);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      })
      .catch((error) => console.log(error));
  }, [id]);
  const HomePage = () => {
    navigate("/");
  };
  return (
    <>
      {loading ? (
        <SpinnerLoader>
          <div className="spin"> </div>
        </SpinnerLoader>
      ) : (
        <HotelDetailWrapper>
          <div className="referesh" onClick={HomePage}>
            <HomeIcon color="primary" /> Home
          </div>
          <h3 className="classTitle"> {name}</h3>
          <img
            classname="picture"
            src={
              image_url
                ? image_url
                // : "https://b2303ztyja-flywheel.netdna-ssl.com/wp-content/uploads/2022/05/Birch_Lifestyle_photo3.jpg"
                : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
            }
            alt="#"
          ></img>
          <p className="hotelList">
            Rating: <spam>{rating} </spam>
          </p>
          <p className="hotelList">
            Review count: <spam>{review_count} </spam>
          </p>
          <p className="hotelList">
            <spam>{display_phone} </spam>
          </p>
        </HotelDetailWrapper>
      )}
    </>
  );
};

export default HotelDetail;
