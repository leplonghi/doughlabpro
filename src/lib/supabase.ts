
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://faokyoqyndcbotxkggyl.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZhb2t5b3F5bmRjYm90eGtnZ3lsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0Mjg0MzUsImV4cCI6MjA2MTAwNDQzNX0.P1hGJMIICip4VMStszOxi0NHHHioCld8JPN4L2JK9S0';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    storage: localStorage, 
    storageKey: 'pizza-auth',
    detectSessionInUrl: true,
  }
});
