"use client";

import { useState } from "react";
import { IconPlay } from "./icons";

export default function VideoCard({ id, title, context }) {
  const [playing, setPlaying] = useState(false);
  // hqdefault is reliably available for all videos (maxres sometimes 404s).
  const poster = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className="video">
      <div className="video__frame">
        {playing ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?rel=0&autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            className="video__poster"
            onClick={() => setPlaying(true)}
            aria-label={`Play ${title}`}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={poster} alt={title} loading="lazy" />
            <span className="video__playbtn"><IconPlay /></span>
          </button>
        )}
      </div>
      <h3 className="video__title">{title}</h3>
      <p className="video__ctx">{context}</p>
    </div>
  );
}
