import { BiMinus } from "react-icons/bi";
import { BsPlusLg } from "react-icons/bs";

export default function SingleQuestion({ question, answer, isActive, onClick }) {
  return (
    <div className="border border-gray-400 text-[#41CB5B] rounded-lg bg-transparent">
      {/* Question and Toggle Button */}
      <article className="flex items-center justify-between p-4 lg:p-6">
        <h2 className="cursor-pointer" onClick={onClick}>
          {question}
        </h2>
        <ul>
          {!isActive && (
            <li>
              <button onClick={onClick}>
                <BsPlusLg color="#41CB5B" />
              </button>
            </li>
          )}
          {isActive && (
            <li>
              <button onClick={onClick}>
                <BiMinus color="#41CB5B" />
              </button>
            </li>
          )}
        </ul>
      </article>

      {/* Answer Section */}
      <article
        className={`${
          isActive
            ? "border-t border-white text-white p-4 lg:p-6 transition-all duration-300 ease-in-out ml-5"
            : "transition-all duration-300 ease-in-out ml-0"
        }`}
      >
        {isActive && <p>{answer}</p>}
      </article>
    </div>
  );
}
