import { createClient } from '@supabase/supabase-js';

const url = "https://fzwloyxhszgqkjyebxyr.supabase.co";
const chave = "sb_publishable_l249jAvX7pnS4wkEwK3Vjg_qMGnGWFD";

export const supabase = createClient(url, chave);

