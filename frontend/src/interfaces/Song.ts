import { ObjectId } from "mongodb";

export interface Song {
  _id: ObjectId; // Optional since it's assigned by MongoDB
  title?: string;
  artist?: string;
}
