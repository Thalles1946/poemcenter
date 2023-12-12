import { useEffect, useState } from "react";
import "./index.css";
import { fetchPoem } from "../../Services/get";

const PoemPage = () => {
  const [poem, setPoem] = useState({});

  const poemId = getId();

  useEffect(() => {
    fetchPoem({ setPoem, poemId });
  }, []);

  function getId() {
    const link = window.location.href;
    const splitLink = link.split("/");
    return splitLink[4];
  }

  function format(text) {
    if (text) {
      const lines = text.split("\n");

      const formattedText =
        lines.length > 1
          ? lines.map((line, index) => <p key={index}>{line}</p>)
          : lines.join("<br/>");

      return formattedText;
    }
  }

  return (
    <div className="divParent">
      <div className="poemPageContainer">
        {poem && (
          <>
            <div className="pageTitle">
              <h2>{poem.title}</h2>
            </div>
            <div className="pagePoem">
              <p className="poemText">{format(poem.poem)} </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PoemPage;
