import * as Yup from "yup";

// const passwordRule =
//   /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/;

export const basicSchema = Yup.object().shape({
  title: Yup.string().min(5, "Too Short!").required("required"),
  weddingDecription: Yup.string().min(10).required("required"),
  startTime: Yup.date().required("required"),
  endTime: Yup.date().required("required"),
});
