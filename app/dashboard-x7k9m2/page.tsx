"use client";

import { useState, useEffect } from "react";

export default function Admin() {
  const [url, setUrl] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch("/api/redirect")
      .then((r) => r.json())
      .then((d) => setUrl(d.redirect || ""));
  }, []);

  const save = async () => {
    await fetch("/api/redirect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ redirect: url }),
    });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-6 p-4 bg-white" dir="rtl">
      <h1 className="text-2xl font-bold text-gray-800">لوحة التحكم - التحويلة</h1>
      <p className="text-gray-500">حط رابط التحويل اللي عايزه</p>
      <input
        type="url"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg text-gray-800 bg-gray-50 focus:outline-none focus:border-blue-500"
      />
      <button
        onClick={save}
        className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        حفظ
      </button>
      {saved && <p className="text-green-600 font-medium">تم الحفظ بنجاح ✓</p>}
    </div>
  );
}
