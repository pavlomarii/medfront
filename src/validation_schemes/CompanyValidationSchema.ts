import * as Yup from "yup";
import { Messages } from "./Messages";

export const CompanyValidationSchema = Yup.object().shape({
  name: Yup.string()
    .required(Messages.required)
    .min(3, Messages.min3Characters)
    .max(300, Messages.max300Characters),
});
