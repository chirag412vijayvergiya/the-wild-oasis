import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://mhsqugfickzcplshtbuy.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1oc3F1Z2ZpY2t6Y3Bsc2h0YnV5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTQ5OTc3MTUsImV4cCI6MjAzMDU3MzcxNX0.0gc_7TzFORtMACz_ovYIpxlxSoUSREJc4Qca-kd4MTM";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
