import React, { useState } from "react";
import "./App.css";
import WarningIcon from "./svgs/warning.svg";
import BulbIcon from "./svgs/bulb.svg";
import DotsIcon from "./svgs/dots.svg";
import XIcon from "./svgs/times.svg";
import BackIcon from "./svgs/back.svg";
import TickIcon from "./svgs/tick.svg";

function App() {
  const [page, setPage] = useState(0);

  switch (page) {
    case 1:
      return (
        <div
          className="container pb-4 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-md transform transition-all sm:my-8 sm:align-middle sm:max-w-lg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-2">
            <div className="sm:flex justify-center">
              <h3
                className="text-xl text-gray-900 m-auto font-bold"
                id="modal-headline"
              >
                Whats on your mind?
              </h3>
              <button onClick={() => setPage(0)}>
                <XIcon className="w-4 text-gray-800" />
              </button>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex justify-center">
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                onClick={() => setPage(2)}
                type="button"
                className="buttons justify-center w-full rounded-md border border-transparent px-4 py-2 bg-gray-100 text-base leading-6 font-medium shadow-sm hover:bg-gray-200 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                <WarningIcon className="w-12 text-red-600 m-auto" />
                Issue
              </button>
            </span>
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                onClick={() => setPage(3)}
                type="button"
                className="buttons justify-center w-full rounded-md border border-transparent px-4 py-2 bg-gray-100 text-base leading-6 font-medium shadow-sm hover:bg-gray-200 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                <BulbIcon className="w-8 text-yellow-500 m-auto" />
                Idea
              </button>
            </span>
            <span className="flex w-full rounded-md shadow-sm sm:ml-3 sm:w-auto">
              <button
                onClick={() => setPage(4)}
                type="button"
                className="buttons justify-center w-full rounded-md border border-transparent px-4 py-2 bg-gray-100 text-base leading-6 font-medium shadow-sm hover:bg-gray-200 focus:outline-none focus:border-red-700 focus:shadow-outline-red transition ease-in-out duration-150 sm:text-sm sm:leading-5"
              >
                <DotsIcon className="w-12 text-gray-800 m-auto" />
                Other
              </button>
            </span>
          </div>
        </div>
      );

    case 2:
      return (
        <div
          className="container pb-4 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-md transform transition-all sm:my-8 sm:align-middle sm:max-w-lg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-2">
            <div className="sm:flex justify-center">
              <button onClick={() => setPage(1)}>
                <BackIcon className="w-4 text-gray-800" />
              </button>
              <h3
                className="text-xl text-gray-900 m-auto font-bold flex"
                id="modal-headline"
              >
                <WarningIcon className="w-4 mx-2 text-red-600" />
                Report an issue
              </h3>
              <button onClick={() => setPage(0)}>
                <XIcon className="w-4 text-gray-800" />
              </button>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 justify-center">
            <textarea
              className="textArea bg-gray-100 border-4 border-purple-500 rounded w-full mb-2"
              placeholder="I noticed that..."
            />
            <button
              onClick={() => setPage(5)}
              className="w-full bg-gray-100 h-10 rounded text-gray-800 hover:bg-gray-300 transition ease-in-out duration-150"
            >
              Send feedback
            </button>
          </div>
        </div>
      );

    case 3:
      return (
        <div
          className="container pb-4 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-md transform transition-all sm:my-8 sm:align-middle sm:max-w-lg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-2">
            <div className="sm:flex justify-center">
              <button onClick={() => setPage(1)}>
                <BackIcon className="w-4 text-gray-800" />
              </button>
              <h3
                className="text-xl text-gray-900 m-auto font-bold flex"
                id="modal-headline"
              >
                <BulbIcon className="w-4 mx-2 text-yellow-500" />
                Share an idea
              </h3>
              <button onClick={() => setPage(0)}>
                <XIcon className="w-4 text-gray-800" />
              </button>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 justify-center">
            <textarea
              className="textArea bg-gray-100 border-4 border-purple-500 rounded w-full mb-2"
              placeholder="I would love..."
            />
            <button
              onClick={() => setPage(5)}
              className="w-full bg-gray-100 h-10 rounded text-gray-800 hover:bg-gray-300 transition ease-in-out duration-150"
            >
              Send feedback
            </button>
          </div>
        </div>
      );

    case 4:
      return (
        <div
          className="container pb-4 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-md transform transition-all sm:my-8 sm:align-middle sm:max-w-lg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-2">
            <div className="sm:flex justify-center">
              <button onClick={() => setPage(1)}>
                <BackIcon className="w-4 text-gray-800" />
              </button>
              <h3
                className="text-xl text-gray-900 m-auto font-bold flex"
                id="modal-headline"
              >
                Tell us anything!
              </h3>
              <button onClick={() => setPage(0)}>
                <XIcon className="w-4 text-gray-800" />
              </button>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 justify-center">
            <textarea
              className="textArea bg-gray-100 border-4 border-purple-500 rounded w-full mb-2"
              placeholder="What do you want us to know?"
            />
            <button
              onClick={() => setPage(5)}
              className="w-full bg-gray-100 h-10 rounded text-gray-800 hover:bg-gray-300 transition ease-in-out duration-150"
            >
              Send feedback
            </button>
          </div>
        </div>
      );

    case 5:
      return (
        <div
          className="container pb-4 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-md transform transition-all sm:my-8 sm:align-middle sm:max-w-lg"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-2">
            <div className="text-right">
              <button onClick={() => setPage(0)} className="ml-auto">
                <XIcon className="w-4 text-gray-800" />
              </button>
            </div>
            <div className="sm:flex flex-col text-green-400 justify-center">
              <TickIcon className="w-1/4 mx-auto tick mb-2" />
              <h3
                className="text-lg text-gray-900 m-auto font-bold flex"
                id="modal-headline"
              >
                Thanks! We recieved your feedback.
              </h3>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 justify-center">
            <button
              onClick={() => setPage(1)}
              className="w-full bg-gray-100 h-10 rounded text-gray-800 hover:bg-gray-300 transition ease-in-out duration-150"
            >
              Submit more feedback
            </button>
          </div>
        </div>
      );

    default:
      return (
        <button
          className="bg-gray-100 border-2 border-gray-500 rounded py-2 px-4 hover:bg-gray-300 transition ease-in-out duration-150"
          onClick={() => setPage(1)}
        >
          Feedback
        </button>
      );
  }
}

export default App;
