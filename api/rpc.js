export default async function handler(req, res) {

  const RAILWAY_RPC = "https://bsc-simulation-production.up.railway.app";

  try {

    const response = await fetch(RAILWAY_RPC, {
      method: req.method,
      headers: {
        "Content-Type": "application/json"
      },
      body: req.method === "POST" ? JSON.stringify(req.body) : undefined
    });

    const data = await response.text();

    res.status(response.status).send(data);

  } catch (error) {

    res.status(500).json({
      error: "Proxy error",
      message: error.message
    });

  }

}
