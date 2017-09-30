const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const errorHandler = require("mongoose-mongodb-errors");
const md5 = require("md5");
const slug = require("slugs");
const FoodSchema = new mongoose.Schema({
  title: { type: String, required: "Please Provide a post Title" },
  image: { type: String, required: true },
  description: { type: String, required: "Please provide a post Description" },
  email: { type: String, required: "Please provide an Email Address" },
  slug: String
});

// FoodSchema.pre("save", async function(next) {
//     if (!this.isModified("title")) {
//       next(); //skip it
//       return; //stop this function from running
//     }
//     this.slug = slug(this.title);
//     const slugRegex = new Regex(`^(${this.slug})((-[0-9]*$)?)$`, "i");
//     const storesWithSlug = await this.constructor.find({ slug: slugRegex });
//     if (storesWithSlug.length) {
//       this.slug = `${this.slug}-${storesWithSlug.length + 1}`;
//     }
//     next();
//   });

FoodSchema.plugin(errorHandler);

module.exports = mongoose.model("Food", FoodSchema);
