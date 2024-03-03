import React, {
  useCallback,
  useEffect,
  useReducer,
  useRef,
  useState,
} from "react";
import "./Home.css";
import axios from "axios";

const accessKey = "70pAuaB9ZkjB28yAYI7s3UEm7L7TgWRT9de8WTUQhIg";
const api = "https://api.unsplash.com";
const size = 15;

type PhotoData = {
  id: string;
  created_at: string;
  updated_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  downloads: number;
  likes: number;
  liked_by_user: boolean;
  description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
  };
};

export default function Home() {
  const [photos, setPhotos] = useState<PhotoData[]>([]);
  const [loading, setLoading] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(true);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch(
  //         `${api}/photos/random?client_id=${accessKey}&count=${size}`
  //       );
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! Status: ${response.status}`);
  //       }
  //       const jsonData = await response.json();
  //       setPhotos(jsonData);
  //       console.log(jsonData);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          className="effect-1"
          placeholder="Search photos"
          name="name"
          id="name"
          required
        />
        <span className="focus-border"></span>
      </div>
      <div className="photo-container">
        {/* {photos.map((photo) => (
            <div className="photo" key={photo.id} >
              <img src={photo.urls.small} alt="" />
            </div>
        ))} */}
      </div>
    </div>
  );
}
