import * as yup from 'yup';
import { coachValidationSchema } from 'validationSchema/coaches';
import { eventValidationSchema } from 'validationSchema/events';
import { playerValidationSchema } from 'validationSchema/players';

export const teamValidationSchema = yup.object().shape({
  name: yup.string().required(),
  created_at: yup.date().required(),
  updated_at: yup.date().required(),
  academy_id: yup.string().nullable().required(),
  coach: yup.array().of(coachValidationSchema),
  event: yup.array().of(eventValidationSchema),
  player: yup.array().of(playerValidationSchema),
});
