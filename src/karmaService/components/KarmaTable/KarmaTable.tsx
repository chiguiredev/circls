"use client";

import { useEffect } from "react";

type KarmaRow = {
 id: number;
 username: string;
 karma_points: number;
};

type KarmaTableProps = {
  rows: Array<KarmaRow>;
};

export const KarmaTable = (props: KarmaTableProps) => {

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/karma/", {
      method: "POST",
      body: JSON.stringify({ email: "rafaelsalass20@gmail.com", karma_points: 100 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }, []);

  return (
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Karma Points</th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((row) => (
          <tr key={row.id}>
            <td>{row.username}</td>
            <td>{row.karma_points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
