export default async function handler(req, res) {

  const RAILWAY_RPC = "https://your-railway-app.up.railway.app";

  try {

    const response = await fetch(RAILWAY_RPC, {
      method: req.method,
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(req.body)
    });

    const data = await response.json();

    res.status(200).json(data);

  } catch (error) {
    res.status(500).json({ error: "Proxy error" });
  }
}
