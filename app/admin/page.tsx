"use client";

import { useState, useEffect } from "react";

export default function Admin() {
  const [url, setUrl] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/redirect")
      .then((r) => r.json())
      .then((d) => setUrl(d.redirectUrl || ""));
  }, []);

  const save = async () => {
    await fetch("/api/redirect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ redirectUrl: url }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 p-4" dir="rtl">
      <h1 className="text-2xl font-bold">لوحة التحكم - التحويلة</h1>
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        className="w-full max-w-md px-4 py-2 border rounded-lg text-black"
      />
      <button
        onClick={save}
        className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        حفظ
      </button>
      {saved && <p className="text-green-500">تم الحفظ بنجاح ✓</p>}
    </div>
  );
}
