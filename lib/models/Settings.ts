import mongoose from "mongoose";

const SettingsSchema = new mongoose.Schema({
  redirectUrl: { type: String, default: "" },
});

export const Settings =
  mongoose.models.Settings || mongoose.model("Settings", SettingsSchema);
