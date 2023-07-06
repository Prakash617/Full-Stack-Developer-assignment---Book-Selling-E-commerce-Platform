import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const signupSchema = yup.object().shape({
  fullname: yup.string().required("Required"),
  address: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  // age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, { message: "Please create a stronger password" })
    .required("Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Required"),
});

export const loginSchema = yup.object().shape({
  // username: yup.string().required("Required"),
  email: yup.string().email("Please enter a valid email").required("Required"),
  // age: yup.number().positive().integer().required("Required"),
  password: yup
    .string()
    .min(5)
    .required("Required"),

});
// export const signupSchema = yup.object().shape({
//   first_name: yup.string().required("Required"),
//   last_name: yup.string().required("Required"),
//   username: yup.string().email("Please enter a valid email").required("Required"),
//   // age: yup.number().positive().integer().required("Required"),
//   password: yup
//     .string()
//     .min(5)
//     .required("Required"),
//   password2: yup
//     .string()
//     .min(5)
//     .oneOf([yup.ref('password'), null], 'Passwords must match')
//     .required('Required'),
//   image: yup.mixed()
//     .test("fileFormat", "Unsupported file format", (value) =>
//       value && ["image/jpeg", 'image/jpg', "image/png"].includes(value.type)
//     )
//     .test("fileSize", "File too large", (value) =>
//       value && value.size <= 1024 * 1024 * 5
//     )
//     .required('Required'),



// });

export const postSchema = yup.object().shape({
  title: yup.string().required("Required"),
  author: yup.string().required("Required"),
  content: yup.string().required("Required"),
  status: yup
    .string()
    .oneOf(["draft", "published"], "Invalid category")
    .required("Required"),
  subcategory_name: yup
    .string()
    // .oneOf(["1", "2", "3"], "Invalid category")
    .required("Required"),
  category: yup
    .string()
    // .oneOf(["1", "2", "3"], "Invalid category")
    .required("Required"),
  subcategory_name: yup
    .string()
    // .oneOf(["1", "2", "3"], "Invalid category")
    .required("Required"),
  tags: yup.array()
    .of(yup.string())
    .min(1, 'At least 1 numbers are required')
    .max(8, 'No more than 8 numbers are allowed')
    .test('unique', 'Each tag must be unique', function (value) {
      const tagSet = new Set(value);
      return tagSet.size === value.length;
    }),
  post_image: yup.mixed()
    .test("fileFormat", "Unsupported file format", (value) =>
      value && ["image/jpeg", 'image/jpg', "image/png"].includes(value.type)
    )
    .test("fileSize", "File too large", (value) =>
      value && value.size <= 1024 * 1024 * 5
    )
    .required("Required")
});