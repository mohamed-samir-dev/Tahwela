import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema({
  redirect: { type: String, default: "" },
});

export const Settings =
  mongoose.models.Settings || mongoose.model("Settings", SettingsSchema);
