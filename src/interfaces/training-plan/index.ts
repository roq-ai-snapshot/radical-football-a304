import { PlayerInterface } from 'interfaces/player';
import { CoachInterface } from 'interfaces/coach';

export interface TrainingPlanInterface {
  id?: string;
  player_id: string;
  coach_id: string;
  title: string;
  description: string;
  start_date: Date;
  end_date: Date;
  created_at?: Date;
  updated_at?: Date;

  player?: PlayerInterface;
  coach?: CoachInterface;
  _count?: {};
}
