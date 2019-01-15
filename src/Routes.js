import Joi from "joi";
import createUser from "./Handler/Register/CreateUser";
import updateProfile from "./Handler/Profile/UpdateProfile";
import updateExperience from "./Handler/Profile/UpdateExperience";
import verifyEmail from "./Services/VerifyEmail";
import authenticate from "./Handler/Auth/Authenticate";
import AuthCheck from "./Handler/Auth/AuthCheck";
import logout from "./Handler/Auth/Logout";
import getProfile from "./Handler/Profile/GetProfile";
import getUser from "./Handler/User/GetUserInfo";
import createQuestion from "./Handler/Question/CreateQuestion";
import createAdminUser from "./Handler/User/Admin/CreateAdminUser";
import bookSlot from "./Handler/TimeSlot/BookSlot";
import getTimeSlots from "./Handler/TimeSlot/GetTimeSlots";
import createSlot from "./Handler/TimeSlot/CreateSlot";
import getOTP from "./Handler/TimeSlot/GetOTP";
import getUserSlot from "./Handler/TimeSlot/GetUserSlots";
import checkExisting from "./Handler/TimeSlot/CheckExisting";
import resendOTP from "./Handler/TimeSlot/ResendOTP";
import getAvailableDates from "./Handler/TimeSlot/GetAvailableDates";
import getAllSlots from "./Handler/TimeSlot/GetAllSlots";
import deleteSlot from "./Handler/TimeSlot/DeleteTimeSlot";
import changePass from "./Handler/User/ChangePassword";
import uploadQues from "./Handler/Question/UploadQuestion";
import Axios from "axios";
import path from "path";
const Routes = [
  {
    method: "GET",
    path: "/",
    config: {
      auth: false
    },
    handler: (req, h) => {
      return h.file("client/build/index.html");
    }
  },
  {
    method: "GET",
    path: "/api/v1/profile",
    handler: getProfile
  },
  {
    method: "GET",
    config: {
      auth: {
        strategy: "fm-cookie"
      }
    },
    path: "/api/v1/user",
    handler: getUser
  },
  {
    method: "GET",
    path: "/verify",
    config: {
      auth: false,
      validate: {
        query: {
          email: Joi.string()
            .email()
            .required(),
          key: Joi.string().required()
        }
      }
    },
    handler: verifyEmail
  },
  {
    method: "GET",
    path: "/api/v1/authCheck",
    handler: AuthCheck
  },
  {
    method: "GET",
    path: "/static/{param*}",
    config: {
      auth: false
    },
    handler: {
      directory: {
        path: "client/build/static"
      }
    }
  },
  {
    method: "GET",
    path: "/images/{param*}",
    config: {
      auth: false
    },
    handler: {
      directory: {
        path: "client/build/images"
      }
    }
  },
  {
    method: "POST",
    path: "/api/v1/signup",
    config: {
      auth: false,
      validate: {
        payload: {
          name: Joi.string().required(),
          email: Joi.string()
            .email()
            .required(),
          password: Joi.string().required()
        }
      }
    },
    handler: createUser
  },
  {
    method: "POST",
    path: "/api/v1/question",
    config: {
      auth: false,
      validate: {
        payload: {
          question: Joi.string().required(),
          answerOptions: Joi.array()
            .items(Joi.string())
            .required(),
          correctAnswers: Joi.array()
            .items(Joi.string())
            .required()
        }
      }
    },
    handler: createQuestion
  },
  {
    method: "POST",
    path: "/api/v1/profile",
    config: {
      validate: {
        payload: {
          status: Joi.string().required(),
          handle: Joi.string().required()
        }
      }
    },
    handler: updateProfile
  },
  {
    method: "POST",
    path: "/api/v1/experience",
    config: {
      validate: {
        payload: {
          title: Joi.string().required(),
          company: Joi.string().required(),
          location: Joi.string(),
          from: Joi.date().required(),
          to: Joi.string(),
          current: Joi.string(),
          description: Joi.string()
        }
      }
    },
    handler: updateExperience
  },
  {
    method: "POST",
    path: "/api/v1/auth",
    config: {
      auth: { mode: "try" },
      validate: {
        payload: {
          email: Joi.string()
            .email()
            .required()
            .not(""),
          password: Joi.string()
            .required()
            .not("")
        }
      }
    },
    handler: authenticate
  },
  {
    method: "POST",
    path: "/api/v1/admin",
    config: {
      auth: {
        strategy: "fm-admin"
      },
      validate: {
        payload: {
          email: Joi.string()
            .email()
            .required()
            .not(""),
          password: Joi.string()
            .required()
            .not(""),
          name: Joi.string()
            .required()
            .not(""),
          canCreateTest: Joi.bool().required(),
          canCreateQuestion: Joi.bool().required(),
          canCreateAdmin: Joi.bool().required()
        }
      }
    },
    handler: createAdminUser
  },
  {
    method: "POST",
    path: "/check",
    config: {
      auth: false,
      validate: {
        payload: {
          email: Joi.string()
            .email()
            .required(),
          password: Joi.string().required()
        }
      }
    },
    handler: (req, res) => {
      return { msg: req.payload };
    }
  },
  {
    method: "GET",
    path: "/api/v1/admin/getallslot",
    config: {
      auth: {
        strategy: "fm-admin"
      }
    },
    handler: getAllSlots
  },
  {
    method: "POST",
    path: "/api/v1/admin/deleteslot",
    config: {
      auth: { strategy: "fm-admin" },
      validate: {
        payload: {
          slotId: Joi.string().required()
        }
      }
    },
    handler: deleteSlot
  },
  {
    method: "GET",
    path: "/api/v1/getslotdate",
    config: {
      auth: false
    },
    handler: getAvailableDates
  },
  {
    method: "GET",
    path: "/api/v1/uploads/{file*}",
    config: {
      auth: "fm-admin"
    },
    handler: (req, h) => {
      console.log(path.resolve() + "src/Uploads/" + req.query.file);
      return h
        .file(path.resolve() + "/src/Uploads/" + req.query.file)
        .header(
          "Content-Disposition",
          `attachment; filename=${req.query.file}`
        );

      // return { ok: "ok" };
    }
  },
  {
    method: "POST",
    path: "/api/v1/resend",
    config: {
      auth: false,
      validate: {
        payload: {
          contact: Joi.string()
            .min(10)
            .max(10)
            .required()
        }
      }
    },
    handler: resendOTP
  },
  {
    method: "POST",
    path: "/api/v1/admin/uploadques",
    config: {
      payload: {
        maxBytes: 1048576 * 5,
        output: "stream",
        allow: "multipart/form-data" // important
      },
      auth: {
        strategy: "fm-admin"
      },
      validate: {
        payload: {
          file: Joi.required(),
          fileName: Joi.string().required()
        }
      }
    },
    handler: uploadQues
  },
  {
    method: "POST",
    path: "/api/v1/admin/getslot",
    config: {
      auth: {
        strategy: "fm-admin"
      },
      validate: {
        payload: {
          startdate: Joi.date().required(),
          enddate: Joi.date().required()
        }
      }
    },
    handler: getUserSlot
  },
  {
    method: "POST",
    path: "/api/v1/admin/createslot",
    config: {
      auth: {
        strategy: "fm-admin"
      },
      validate: {
        payload: {
          startDate: Joi.date().required(),
          endDate: Joi.date().required(),
          startTime: Joi.date().required(),
          endTime: Joi.date().required(),
          slotSize: Joi.number()
            .min(1)
            .max(60)
            .required(),
          busySlot: Joi.array()
            .items(Joi.string())
            .required()
        }
      }
    },
    handler: createSlot
  },
  {
    method: "POST",
    path: "/api/v1/getotp",
    config: {
      auth: false,
      payload: {
        maxBytes: 1048576 * 5,
        output: "stream",
        allow: "multipart/form-data" // important
      },
      validate: {
        payload: {
          name: Joi.string().required(),
          date: Joi.date().required(),
          email: Joi.string()
            .email()
            .required(),
          contact: Joi.string()
            .min(10)
            .max(10)
            .required(),
          doc: Joi.required(),
          slotTime: Joi.date().required(),
          fileName: Joi.string().required()
        }
      }
    },
    handler: getOTP
  },
  {
    method: "POST",
    path: "/api/v1/bookslot",
    config: {
      auth: false,

      validate: {
        payload: {
          name: Joi.string().required(),
          date: Joi.date().required(),
          email: Joi.string()
            .email()
            .required(),
          contact: Joi.string()
            .min(10)
            .max(10)
            .required(),

          slotTime: Joi.date().required(),

          otp: Joi.number().required()
        }
      }
    },
    handler: bookSlot
  },
  {
    method: "POST",
    path: "/api/v1/checkslot",
    config: {
      auth: false,
      validate: {
        payload: {
          contact: Joi.string()
            .min(10)
            .max(10)
            .required(),
          otp: Joi.string(),
          hasOTP: Joi.boolean().required()
        }
      }
    },
    handler: checkExisting
  },
  {
    method: "POST",
    path: "/api/v1/getslots",
    config: {
      auth: false,
      validate: {
        payload: {
          date: Joi.date().required()
        }
      }
    },
    handler: getTimeSlots
  },
  {
    method: "POST",
    path: "/api/v1/logout",
    config: {
      auth: false
    },

    handler: logout
  },
  {
    method: "GET",
    path: "/{any*}",
    handler: (request, h) => {
      return h.redirect("/");
    }
  }
];
export default Routes;
