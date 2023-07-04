import * as yup from 'yup';

export const vehicleValidationSchema = yup.object().shape({
  model: yup.string().required(),
  status: yup.string().required(),
  owner_id: yup.string().nullable(),
});
