import { useEffect, useState } from "react";

export function PlayerCount() {
  const [status, setStatus] = useState("Loading...");
  const [players, setPlayers] = useState("Loading...");

  useEffect(() => {
    async function fetchServer() {
      try {
        const res = await fetch("https://api.mcsrvstat.us/2/pro-1.pterodactyl.in:25000");
        const data = await res.json();

        if (data.online) {
          setStatus("🟢 Online");
          setPlayers(`${data.players.online} / ${data.players.max}`);
        } else {
          setStatus("🔴 Offline");
        }
      } catch (err) {
        console.error(err);
      }
    }

    fetchServer();
    const interval = setInterval(fetchServer, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="text-center">
      <p className="text-lg font-semibold">{status}</p>
      <p className="text-sm text-muted-foreground">{players} players</p>
    </div>
  );
}