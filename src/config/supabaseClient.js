import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5pdWxqcHVueHZrZmdxZW1venRrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzQzNjk4MzMsImV4cCI6MjA0OTk0NTgzM30.UIMrlAgJrGFrtRIZIYE2-eos1BomVM0Pd4--G16ZHv8"; //hardcoding the api key as the key is not correctly is not getting imported.
console.log(supabaseUrl, supabaseAnonKey);
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
