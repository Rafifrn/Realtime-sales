import { string } from "zod";

export type formState = {
  error?: {
    _form?: string[];
  };
  status?: string;
};
