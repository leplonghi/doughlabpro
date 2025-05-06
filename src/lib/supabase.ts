
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://oojhhvutzzkvugizucks.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9vamhodnV0enprdnVnaXp1Y2tzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU1NDE4ODMsImV4cCI6MjA2MTExNzg4M30.iTXRG1BXEk3qgURRH9Z6HLtXJtPgSxBFBqFmUYWBV64';

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: true,
    storage: localStorage,
    storageKey: 'doughlab-auth',
  }
});
