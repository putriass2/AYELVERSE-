import { useState, useEffect } from "react";

interface ServerStatus {
  online: boolean;
  players?: {
    online: number;
    max: number;
  };
  motd?: string;
  version?: string;
}

export function useServerStatus(serverIp: string) {
  const [status, setStatus] = useState<ServerStatus>({
    online: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/3/${serverIp}`);
        const data = await response.json();
        
        setStatus({
          online: data.online || false,
          players: data.players ? {
            online: data.players.online || 0,
            max: data.players.max || 0,
          } : undefined,
          motd: data.motd?.clean?.[0] || data.motd?.raw?.[0],
          version: data.version,
        });
      } catch (error) {
        console.error("Failed to fetch server status:", error);
        setStatus({ online: false });
      } finally {
        setLoading(false);
      }
    };

    fetchStatus();
    const interval = setInterval(fetchStatus, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, [serverIp]);

  return { status, loading };
}
