import purify from "dompurify";

const createMarkup = (dirty: string): string => {
  return purify.sanitize(dirty);
};

export default createMarkup;
