"use client";
import React, { useEffect } from "react";

const InstagramFeed = () => {
    
  useEffect(() => {
    const script = document.createElement("script");
    script.async = true;
    script.src = "//www.instagram.com/embed.js";
    script.onload = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process();
      }
    };

    document.body.appendChild(script);

    return () => {
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink="https://www.instagram.com/theforgesalem/?utm_source=ig_embed&amp;utm_campaign=loading"
        data-instgrm-version="14"
        style={{
          background: "#FFF",
          border: "0",
          borderRadius: "3px",
          boxShadow:
            "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
          margin: "10px",
          maxWidth: "900px",
          minWidth: "400px",
          padding: "0",
          width: "80%",
        }}
      >
        <div style={{ padding: "16px" }}>
          <a
            href="https://www.instagram.com/theforgesalem/?utm_source=ig_embed&amp;utm_campaign=loading"
            style={{
              background: "#FFFFFF",
              lineHeight: "0",
              padding: "0",
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Instagram Profile
          </a>
        </div>
      </blockquote>
    </div>
  );
};

export default InstagramFeed;
