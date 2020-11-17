import React, { useState, useEffect } from "react";
import DateInput from "./DateInput";
import moment from "moment";

const Photo = () => {
  const [photo, setPhoto] = useState("");
  const [date, setDate] = useState(moment().toDate());

  const fetchPhoto = async () => {
    const res = await fetch(`api/nasa`);
    const data = await res.json();
    setPhoto(data);
  };

  useEffect(() => {
    fetchPhoto();
  }, []);

  const formatDate = (date) => {
    let today = moment(date);
    let year = today.get("year");
    let month = today.get("month") + 1;
    let day = today.get("date");
    return `${year}-${month}-${day}`;
  };

  const getPhoto = (date) => {
    fetch(`api/nasa/${date}`)
      .then((res) => res.json())
      .then((photo) => {
        setPhoto(photo);
      });
  };

  const changeDate = (date) => {
    setDate(date);
    getPhoto(formatDate(date));
  };

  if (!photo) return <div className="container">LOADING..</div>;
  const { title, url, explanation } = photo;

  return (
    <section className="container">
      <h2>{title}</h2>
      <DateInput changeDate={changeDate} date={date} />
      {photo.media_type === "image" ? (
        <img src={url} alt={title} className="nasa-photo" />
      ) : (
        <iframe
          title="space-video"
          width="560"
          height="315"
          src={url}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />
      )}
      <p className="item">{explanation}</p>
    </section>
  );
};

export default Photo;

// https://api.nasa.gov/planetary/apod?date=2020-09-27&api_key=uvfsJMXzgPemnIz8wI2REdMIQ57SeotMi2rid3dr
