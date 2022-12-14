import { buildUser, User, UserDocument } from "./models/user.ts";

// Clean collection
(await User.truncateCollection()).ok().result();

const user = (await buildUser().create()).ok().toModel();

let updatedUser: User;
let updatedUserDocument: UserDocument;

user.username = "updated_panda";

updatedUser = (await User.update(user)).ok().toModel(),
  console.log(
    "updated user, toModel, from static method:\n",
    updatedUser,
    "\n",
  );

user.username = "updated_panda_inception";
updatedUser = (await user.update()).ok().toModel(),
  console.log(
    "updated user, toModel, from instance method:\n",
    updatedUser,
    "\n",
  );

user.username = "updated_panda";
updatedUserDocument = (await user.update()).ok().result(),
  console.log(
    "updated user, document data, from instance method:\n",
    updatedUserDocument,
    "\n",
  );

user.username = "updated_panda_inception";
updatedUserDocument = (await user.update()).ok()
  .result(),
  console.log(
    "updated user, document data, from instance method:\n",
    updatedUserDocument,
    "\n",
  );

user.username = "updated_panda";
updatedUserDocument = (await user.update()).ok().result(),
  console.log(
    "updated user, document data, from instance method without return new:\n",
    updatedUserDocument,
    "\n",
  );

user.username = "updated_panda_inception";
user.random_properties.panda_weapon = "bamboo stick";
updatedUser = (await user.update()).ok().toModel(),
  console.log("updated nested document:\n", updatedUser, "\n");

user.username = "replaced_panda";
user.random_properties = { panda_weapon: "bamboo sword" };
updatedUser = (await user.replace()).ok().toModel(),
  console.log("replaced nested document:\n", updatedUser, "\n");

// Clean collection
await User.truncateCollection();
