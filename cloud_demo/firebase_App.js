
import React, { useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, getDocs } from "firebase/firestore";

const app = initializeApp({
  apiKey: "YOUR_KEY",
  authDomain: "YOUR_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
});
const db = getFirestore(app);

export default function App() {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");

  const addItem = async () => {
    await addDoc(collection(db, "users"), { name });
    setName("");
    loadData();
  };

  const loadData = async () => {
    const snap = await getDocs(collection(db, "users"));
    setData(snap.docs.map(d => d.data().name));
  };

  useEffect(() => { loadData(); }, []);

  return (
    <div>
      <h2>DBaaS Example</h2>
      <input value={name} onChange={e => setName(e.target.value)} />
      <button onClick={addItem}>Add</button>
      <ul>{data.map((n, i) => <li key={i}>{n}</li>)}</ul>
    </div>
  );
}
