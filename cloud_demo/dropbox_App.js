
import React, { useState } from "react";
import { Dropbox } from "dropbox";

export default function App() {
  const [files, setFiles] = useState([]);
  const dbx = new Dropbox({ accessToken: "YOUR_ACCESS_TOKEN" });

  const listFiles = async () => {
    const res = await dbx.filesListFolder({ path: "" });
    setFiles(res.result.entries);
  };

  return (
    <div>
      <h2>Dropbox Storage</h2>
      <button onClick={listFiles}>Show Files</button>
      <ul>{files.map(f => <li key={f.id}>{f.name}</li>)}</ul>
    </div>
  );
}
