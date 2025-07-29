import React, { useRef } from "react";
import "./MoviesCarousel.css";
import Work from "../../assets/Work.png";
import NF from "../../assets/NF.png";
import CF from "../../assets/CF.png";
import GM from "../../assets/GM.png";

const movies = [
  {
    name: "Google Workshop",
    des: "Bring AI to Work Workshop",
    img: Work,
    link: "https://bringaitowork.aicurated.com/pluginfile.php/1/tool_certificate/issues/1751792166/5254912238AG.pdf",
  },
  {
    name: "Neo4j Fundamental",
    des: "Learn about Graph databases and get started with Neo4j.",
    img: NF,
    link: "https://graphacademy.neo4j.com/c/547fb93f-e682-42ca-ad58-20b18fe6c989/",
  },
  {
    name: "Cypher Fundamentals",
    des: " Reading And Writing Data from Neo4j",
    img: CF,
    link: "https://graphacademy.neo4j.com/c/ee4be462-4ee2-4b65-8670-8b2b398a7be5/",
  },
  {
    name: "Graph Data Modeling Fundamentals",
    des: "Learning Basics of Graph Data Modeling",
    img: GM,
    link: "https://graphacademy.neo4j.com/c/46b4e209-ffaf-49b1-8eaf-ae6ddbae8327/",
  },
  // Add more items similarly
];

const MoviesCarousel = () => {
  const containerRef = useRef(null);

  const scroll = (direction) => {
    const container = containerRef.current;
    if (container) {
      const scrollAmount = container.clientWidth;
      container.scrollBy({
        left: direction === "prev" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="movies-list">
      <button className="pre-btn" onClick={() => scroll("prev")}>
        <img src="./src/assets/Lside_pre.png" alt="Previous" />
      </button>

      <div className="card-container" ref={containerRef}>
        {movies.map((m, idx) => (
          <div className="card" key={idx}>
            {/* Blurred Background Image */}
            <div className="card-img-blur-wrapper">
              <img src={m.img} alt={m.name} className="card-img" />
            </div>

            {/* Foreground Content */}
            <div className="card-body">
              <h2 className="name">{m.name}</h2>
              <h6 className="des">{m.des}</h6>
              {m.link ? (
                <a
                  href={m.link}
                  className="watchlist-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Certificate
                </a>
              ) : (
                <button className="watchlist-btn">Coming Soon</button>
              )}
            </div>
          </div>
        ))}
      </div>

      <button className="nxt-btn" onClick={() => scroll("next")}>
        <img src="../src/assets/Rside_next.png" alt="Next" />
      </button>
    </div>
  );
};

export default MoviesCarousel;
