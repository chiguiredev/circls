"use client";

// import { useEffect } from "react";

type KarmaRow = {
 id: number;
 username: string;
 karma_points: number;
};

type KarmaTableProps = {
  rows: Array<KarmaRow>;
};

export const KarmaTable = (props: KarmaTableProps) => {

  // useEffect(() => {
  //   fetch("http://localhost:3000/api/v1/karma/", {
  //     method: "POST",
  //     body: JSON.stringify({ email: "rafaelsalass20@gmail.com", karma_points: 100 }),
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   });
  // }, []);

  return (
    <table className="min-w-full leading-normal">
      <thead className="bg-gray-800 text-white">
        <tr>
          <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
            Username
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
            Karma Points
          </th>
          <th className="px-5 py-3 border-b-2 border-gray-200  text-left text-xs font-semibold uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row) => (
          <tr className="bg-white border-b border-gray-200" key={row.id}>
            <td className="px-5 py-5 border-b border-gray-200 text-sm">
              {row.username}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 text-sm">
              {row.karma_points}
            </td>
            <td className="px-5 py-5 border-b border-gray-200 text-sm">
              <button className="text-blue-500 hover:text-blue-800">Edit</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
