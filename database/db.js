// const pg = require('pg');

// const db = new pg.Client({
//     user:"postgres",
//     host:"Localhost",
//     database:"practicetraining",
//     password:"admin",
//     port:5432
// });

// module.exports=db;

const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://avzkffoifgnqxljbkdfr.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImF2emtmZm9pZmducXhsamJrZGZyIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg3NTQ2MjIsImV4cCI6MjAyNDMzMDYyMn0.CFp9Io9noVkhSROpm3HNiXwLSsTvcphhyvAGnQLT-g0';

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;