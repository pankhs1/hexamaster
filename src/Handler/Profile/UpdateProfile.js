import Profile from "./../../Model/Profile";
import jwt from "jsonwebtoken";

export default async (req, h) => {
  const profileFields = {};
  //extract user id from token
  const token = jwt.verify(req.auth.credentials.token, "somesecret");

  profileFields.user = token._id;
  if (req.payload.handle) profileFields.handle = req.payload.handle;
  if (req.payload.company) profileFields.company = req.payload.company;
  if (req.payload.website) profileFields.website = req.payload.website;
  if (req.payload.location) profileFields.location = req.payload.location;
  if (req.payload.bio) profileFields.bio = req.payload.bio;
  if (req.payload.status) profileFields.status = req.payload.status;
  if (req.payload.githubusername)
    profileFields.githubusername = req.payload.githubusername;
  //Skills- split into array
  if (typeof req.payload.skills !== "undefined") {
    profileFields.skills = req.payload.skills.split(",");
  }
  //Social
  profileFields.social = {};

  if (req.payload.youtube) profileFields.social.youtube = req.payload.youtube;
  if (req.payload.twitter) profileFields.social.twitter = req.payload.twitter;
  if (req.payload.facebook)
    profileFields.social.facebook = req.payload.facebook;
  if (req.payload.linkedin)
    profileFields.social.linkedin = req.payload.linkedin;
  if (req.payload.instagram) social.instagram = req.payload.instagram;

  const profile = await Profile.findOne({ user: token._id });

  if (profile) {
    const updatedProfile = await Profile.findOneAndUpdate(
      { user: token._id },
      { $set: profileFields },
      { new: true }
    );

    return h.response({ Profile: updatedProfile });
  }
  try {
    const newProfile = new Profile(profileFields).save();
    return h.response({ Profile: newProfile });
  } catch (error) {
    // console.log("error", error);
  }

  //   return new Promise((resolve, reject) => {
  //     Profile.findOne({ user: req.payload.user_id }).then(profile => {
  //       if (profile) {
  //
  //           .then(profile => resolve(h.response(profile)))
  //           .catch(err => {
  //             reject(h.response({ Error: "User id doesn't exists" }));
  //           });
  //       } else {
  //         Profile.findOne({ handle: profileFields.handle }).then(profile => {
  //           if (profile) {
  //             reject(
  //               h.response({ Error: "That handle already exists" }).code(400)
  //             );
  //           }
  //           //save profile
  //           new Profile(profileFields)
  //             .save()
  //             .then(profile => resolve(h.response(profile)));
  //         });
  //       }
  //     });
  //   });
};
