export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  __InternalSupabase: { PostgrestVersion: "14.5" }
  public: {
    Tables: {
      achievement_verifications: {
        Row: {
          created_at: string | null
          id: string
          is_verified: boolean | null
          milestone_index: number
          profile_id: string
          verified_at: string | null
          verified_by: string | null
        }
        Insert: {
          created_at?: string | null
          id?: string
          is_verified?: boolean | null
          milestone_index: number
          profile_id: string
          verified_at?: string | null
          verified_by?: string | null
        }
        Update: {
          created_at?: string | null
          id?: string
          is_verified?: boolean | null
          milestone_index?: number
          profile_id?: string
          verified_at?: string | null
          verified_by?: string | null
        }
        Relationships: []
      }
      campuses: {
        Row: { academic_tiers: string[] | null; created_at: string | null; id: string; name: string }
        Insert: { academic_tiers?: string[] | null; created_at?: string | null; id?: string; name: string }
        Update: { academic_tiers?: string[] | null; created_at?: string | null; id?: string; name?: string }
        Relationships: []
      }
      event_registrations: {
        Row: { created_at: string | null; event_id: string; id: string; user_id: string }
        Insert: { created_at?: string | null; event_id: string; id?: string; user_id: string }
        Update: { created_at?: string | null; event_id?: string; id?: string; user_id?: string }
        Relationships: []
      }
      events: {
        Row: {
          category: string | null; created_at: string | null; description: string | null
          event_date: string; event_type: string | null; icon: string | null; id: string
          is_live: boolean | null; is_pinned: boolean | null; location: string | null; location_label: string | null; registration_url: string | null; title: string
        }
        Insert: {
          category?: string | null; created_at?: string | null; description?: string | null
          event_date?: string; event_type?: string | null; icon?: string | null; id?: string
          is_live?: boolean | null; is_pinned?: boolean | null; location?: string | null; location_label?: string | null; registration_url?: string | null; title: string
        }
        Update: {
          category?: string | null; created_at?: string | null; description?: string | null
          event_date?: string; event_type?: string | null; icon?: string | null; id?: string
          is_live?: boolean | null; is_pinned?: boolean | null; location?: string | null; location_label?: string | null; registration_url?: string | null; title?: string
        }
        Relationships: []
      }
      featured_members: {
        Row: { created_at: string | null; display_order: number | null; id: string; is_active: boolean | null; user_id: string }
        Insert: { created_at?: string | null; display_order?: number | null; id?: string; is_active?: boolean | null; user_id: string }
        Update: { created_at?: string | null; display_order?: number | null; id?: string; is_active?: boolean | null; user_id?: string }
        Relationships: []
      }
      mentors: {
        Row: { created_at: string | null; id: string; name: string }
        Insert: { created_at?: string | null; id?: string; name: string }
        Update: { created_at?: string | null; id?: string; name?: string }
        Relationships: []
      }
      orbits: {
        Row: { created_at: string | null; id: string; orbiter_id: string; orbiting_id: string }
        Insert: { created_at?: string | null; id?: string; orbiter_id: string; orbiting_id: string }
        Update: { created_at?: string | null; id?: string; orbiter_id?: string; orbiting_id?: string }
        Relationships: []
      }
      post_likes: {
        Row: { created_at: string; id: string; post_id: string; user_id: string }
        Insert: { created_at?: string; id?: string; post_id: string; user_id: string }
        Update: { created_at?: string; id?: string; post_id?: string; user_id?: string }
        Relationships: []
      }
      posts: {
        Row: {
          content: string; created_at: string | null; file_name: string | null; file_url: string | null
          id: string; image_url: string | null; is_hidden: boolean | null; is_pinned: boolean | null
          tags: string[] | null; title: string | null; user_id: string
        }
        Insert: {
          content: string; created_at?: string | null; file_name?: string | null; file_url?: string | null
          id?: string; image_url?: string | null; is_hidden?: boolean | null; is_pinned?: boolean | null
          tags?: string[] | null; title?: string | null; user_id: string
        }
        Update: {
          content?: string; created_at?: string | null; file_name?: string | null; file_url?: string | null
          id?: string; image_url?: string | null; is_hidden?: boolean | null; is_pinned?: boolean | null
          tags?: string[] | null; title?: string | null; user_id?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          academic_tier: string | null; achievements: string | null; avatar_url: string | null
          batch: string | null; biography: string | null; campus_id: string | null
          course_name: string | null; created_at: string | null; dars_system: string | null
          dasthar_url: string | null; display_name: string; father_name: string | null
          id: string; is_admin: boolean | null; is_approved: boolean | null
          job_title: string | null; legal_name: string; mentor_id: string | null
          mentor_name: string; milestones: Json | null; organisation: string | null
          phone: string | null; so_id: string | null; social_links: Json | null
          username: string
        }
        Insert: {
          academic_tier?: string | null; achievements?: string | null; avatar_url?: string | null
          batch?: string | null; biography?: string | null; campus_id?: string | null
          course_name?: string | null; created_at?: string | null; dars_system?: string | null
          dasthar_url?: string | null; display_name?: string; father_name?: string | null
          id: string; is_admin?: boolean | null; is_approved?: boolean | null
          job_title?: string | null; legal_name?: string; mentor_id?: string | null
          mentor_name?: string; milestones?: Json | null; organisation?: string | null
          phone?: string | null; so_id?: string | null; social_links?: Json | null; username: string
        }
        Update: {
          academic_tier?: string | null; achievements?: string | null; avatar_url?: string | null
          batch?: string | null; biography?: string | null; campus_id?: string | null
          course_name?: string | null; created_at?: string | null; dars_system?: string | null
          dasthar_url?: string | null; display_name?: string; father_name?: string | null
          id?: string; is_admin?: boolean | null; is_approved?: boolean | null
          job_title?: string | null; legal_name?: string; mentor_id?: string | null
          mentor_name?: string; milestones?: Json | null; organisation?: string | null
          phone?: string | null; so_id?: string | null; social_links?: Json | null; username?: string
        }
        Relationships: []
      }
      subjects: {
        Row: { created_at: string | null; id: string; name: string }
        Insert: { created_at?: string | null; id?: string; name: string }
        Update: { created_at?: string | null; id?: string; name?: string }
        Relationships: []
      }
      trending_topics: {
        Row: { created_at: string | null; display_count: string | null; display_order: number | null; hashtag: string; id: string; is_active: boolean | null }
        Insert: { created_at?: string | null; display_count?: string | null; display_order?: number | null; hashtag: string; id?: string; is_active?: boolean | null }
        Update: { created_at?: string | null; display_count?: string | null; display_order?: number | null; hashtag?: string; id?: string; is_active?: boolean | null }
        Relationships: []
      }
    }
    Views: { [_ in never]: never }
    Functions: {
      delete_user: { Args: { user_id: string }; Returns: undefined }
      get_user_email: { Args: { user_id: string }; Returns: string }
      is_admin: { Args: never; Returns: boolean }
      lookup_username_email: { Args: { p_username: string }; Returns: string }
    }
    Enums: { [_ in never]: never }
    CompositeTypes: { [_ in never]: never }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Row']
export type TablesInsert<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Insert']
export type TablesUpdate<T extends keyof Database['public']['Tables']> = Database['public']['Tables'][T]['Update']

export type Campus = Tables<'campuses'>
export type Subject = Tables<'subjects'>
export type Mentor = Tables<'mentors'>
export type Orbit = Tables<'orbits'>
export type Profile = Tables<'profiles'>
export type Post = Tables<'posts'>
export type Event = Tables<'events'>

export interface Milestone {
  title: string
  issuer: string
}
export interface SocialLink {
  platform: string
  value: string
}
