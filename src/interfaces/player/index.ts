import { TrainingPlanInterface } from 'interfaces/training-plan';
import { UserInterface } from 'interfaces/user';
import { TeamInterface } from 'interfaces/team';

export interface PlayerInterface {
  id?: string;
  user_id: string;
  team_id: string;
  position: string;
  birth_date: Date;
  created_at?: Date;
  updated_at?: Date;
  training_plan?: TrainingPlanInterface[];
  user?: UserInterface;
  team?: TeamInterface;
  _count?: {
    training_plan?: number;
  };
}
