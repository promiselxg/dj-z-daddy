"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";
import { format } from "date-fns";

const Events = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`/api/eventUpload?query=3`);
      setData(response?.data);
    };
    fetchData();
  }, []);

  return (
    <>
      {data?.map((event) => {
        return (
          <Card
            day={format(event?.eventDate, "dd")}
            date={format(event?.eventDate, "MMMM, yyyy")}
            title={event?.title}
            description={event?.description}
            key={event?.id}
          />
        );
      })}
    </>
  );
};

export default Events;
