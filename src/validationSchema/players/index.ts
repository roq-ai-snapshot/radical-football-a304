import * as yup from 'yup';
import { trainingPlanValidationSchema } from 'validationSchema/training-plans';

export const playerValidationSchema = yup.object().shape({
  position: yup.string().required(),
  birth_date: yup.date().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  user_id: yup.string().nullable().required(),
  team_id: yup.string().nullable().required(),
  training_plan: yup.array().of(trainingPlanValidationSchema),
});
