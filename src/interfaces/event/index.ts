import { TeamInterface } from 'interfaces/team';

export interface EventInterface {
  id?: string;
  team_id: string;
  title: string;
  description: string;
  event_date: Date;
  created_at?: Date;
  updated_at?: Date;

  team?: TeamInterface;
  _count?: {};
}
