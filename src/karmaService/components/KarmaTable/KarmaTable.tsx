type KarmaRow = {
 id: number;
 username: string;
 karma_points: number;
};

type KarmaTableProps = {
  rows: Array<KarmaRow>;
};

export const KarmaTable = (props: KarmaTableProps) => {
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
