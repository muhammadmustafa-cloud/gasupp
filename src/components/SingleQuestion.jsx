import React, { useState } from "react";
import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

export default function SingleQuestion({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <>
      <div className="border border-gray-400 text-[#41CB5B] rounded-lg  bg-transparent">
        <article className="flex items-center justify-between p-4 lg:p-6">
          <h2
            className="cursor-pointer"
            onClick={() => setShowAnswer(!showAnswer)}
          >
            {question}
          </h2>
          <ul>
            {!showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(true)}>
                  <BsPlusLg color="#41CB5B"/>
                </button>
              </li>
            )}
            {showAnswer && (
              <li>
                <button onClick={() => setShowAnswer(false)}>
                  <BiMinus color="#41CB5B" />
                </button>
              </li>
            )}
          </ul>
        </article>

        <article
          className={`${showAnswer && "border-t border-white p-4 lg:p-6"}`}
        >
          {showAnswer && <p>{answer}</p>}
        </article>
      </div>
    </>
  );
}