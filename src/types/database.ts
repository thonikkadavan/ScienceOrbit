export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      campuses: {
        Row: {
          academic_tiers: string[] | null
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          academic_tiers?: string[] | null
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          academic_tiers?: string[] | null
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      profiles: {
        Row: {
          academic_tier: string
          achievements: string | null
          avatar_url: string | null
          biography: string
          campus_id: string | null
          course_name: string
          created_at: string | null
          dars_system: string
          dasthar_url: string
          display_name: string
          deploy_url: string
          father_name: string
          github_handle: string
          id: string
          is_admin: boolean | null
          is_approved: boolean | null
          job_title: string
          legal_name: string
          linkedin_url: string
          mentor_id: string | null
          mentor_name: string
          milestones: Json
          organisation: string
          phone: string
          project_description: string
          project_progress: number
          project_title: string
          repo_url: string
          so_id: string | null
          social_links: Json
          subjects: string[] | null
          tech_stack: string[]
          username: string
        }
        Insert: {
          academic_tier?: string
          achievements?: string | null
          avatar_url?: string | null
          biography?: string
          campus_id?: string | null
          course_name?: string
          created_at?: string | null
          dars_system?: string
          dasthar_url?: string
          display_name?: string
          deploy_url?: string
          father_name?: string
          github_handle?: string
          id: string
          is_admin?: boolean | null
          is_approved?: boolean | null
          job_title?: string
          legal_name?: string
          linkedin_url?: string
          mentor_id?: string | null
          mentor_name?: string
          milestones?: Json
          organisation?: string
          phone?: string
          project_description?: string
          project_progress?: number
          project_title?: string
          repo_url?: string
          so_id?: string | null
          social_links?: Json
          subjects?: string[] | null
          tech_stack?: string[]
          username: string
        }
        Update: {
          academic_tier?: string
          achievements?: string | null
          avatar_url?: string | null
          biography?: string
          campus_id?: string | null
          course_name?: string
          created_at?: string | null
          dars_system?: string
          dasthar_url?: string
          display_name?: string
          deploy_url?: string
          father_name?: string
          github_handle?: string
          id?: string
          is_admin?: boolean | null
          is_approved?: boolean | null
          job_title?: string
          legal_name?: string
          linkedin_url?: string
          mentor_id?: string | null
          mentor_name?: string
          milestones?: Json
          organisation?: string
          phone?: string
          project_description?: string
          project_progress?: number
          project_title?: string
          repo_url?: string
          so_id?: string | null
          social_links?: Json
          subjects?: string[] | null
          tech_stack?: string[]
          username?: string
        }
        Relationships: [
          {
            foreignKeyName: "profiles_campus_id_fkey"
            columns: ["campus_id"]
            isOneToOne: false
            referencedRelation: "campuses"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "profiles_mentor_id_fkey"
            columns: ["mentor_id"]
            isOneToOne: false
            referencedRelation: "mentors"
            referencedColumns: ["id"]
          },
        ]
      }
      orbits: {
        Row: {
          id: string
          orbiter_id: string
          orbiting_id: string
          created_at: string | null
        }
        Insert: {
          id?: string
          orbiter_id: string
          orbiting_id: string
          created_at?: string | null
        }
        Update: {
          id?: string
          orbiter_id?: string
          orbiting_id?: string
          created_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "orbits_orbiter_id_fkey"
            columns: ["orbiter_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "orbits_orbiting_id_fkey"
            columns: ["orbiting_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      mentors: {
        Row: {
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
      posts: {
        Row: {
          id: string
          user_id: string
          content: string
          created_at: string | null
        }
        Insert: {
          id?: string
          user_id: string
          content: string
          created_at?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          content?: string
          created_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "posts_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      subjects: {
        Row: {
          created_at: string | null
          id: string
          name: string
        }
        Insert: {
          created_at?: string | null
          id?: string
          name: string
        }
        Update: {
          created_at?: string | null
          id?: string
          name?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Row']

export type TablesInsert<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Insert']

export type TablesUpdate<T extends keyof Database['public']['Tables']> =
  Database['public']['Tables'][T]['Update']

export type Campus = Tables<'campuses'>
export type Subject = Tables<'subjects'>
export type Mentor = Tables<'mentors'>
export type Orbit = Tables<'orbits'>
export interface Milestone {
  title: string
  issuer: string
  url: string
}
export interface SocialLink {
  platform: string
  value: string
}
