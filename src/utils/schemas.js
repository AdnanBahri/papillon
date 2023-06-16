import * as Yup from "yup";

export const contactSchema = Yup.object().shape({
  name: Yup.string().email("Enter Your Name").required("The Name is Required"),
  email: Yup.string()
    .email("Enter The User email")
    .required("The User Email is Required"),
  phone: Yup.string().min(10).required("The Phone Number is Required"),
});
