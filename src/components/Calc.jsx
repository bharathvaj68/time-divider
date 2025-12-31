import { useState } from "react";

export default function TimeDivider() {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [parts, setParts] = useState([]);

  const divideIntoFour = () => {
    const fromDate = new Date(from);
    const toDate = new Date(to);

    if (isNaN(fromDate) || isNaN(toDate)) {
      alert("Please select both dates!");
      return;
    }

    const diffMs = toDate - fromDate;
    const interval = diffMs / 4; // divide into 4 equal parts
    const dividedPoints = [];

    // include "from" and "to" in the output (in 12-hour format)
    for (let i = 0; i <= 4; i++) {
      const point = new Date(fromDate.getTime() + interval * i);
      const formattedTime = point.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true, // <-- this ensures AM/PM format
      });
      dividedPoints.push(formattedTime);
    }

    setParts(dividedPoints);
  };

  return (
    <div className="mx-auto my-auto flex flex-col content-center text-xl items-start w-3/4">
      <p>From date:</p>
      <input
        type="datetime-local"
        value={from}
        onChange={(e) => setFrom(e.target.value)}
        className="border rounded px-2 py-1 w-full"
      />

      <p className="mt-3">To date:</p>
      <input
        type="datetime-local"
        value={to}
        onChange={(e) => setTo(e.target.value)}
        className="border rounded px-2 py-1 w-full"
      />

      <hr className="my-3 w-full" />

      <button
        onClick={divideIntoFour}
        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
      >
        Divide into 4 Parts
      </button>

      {parts.length > 0 && (
        <div className="mt-3">
          <p className="font-semibold">Time Points:</p>
          <ul className="list-disc ml-6">
            {parts.map((p, i) => (
              <li key={i}>
                Part {i}: {p}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
