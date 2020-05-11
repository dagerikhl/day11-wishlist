export const strings = {
  "aquired-pool.title": process.env.REACT_APP_STRINGS_AQUIRED_POOL_TITLE || "",
  "check-wish.checked": process.env.REACT_APP_STRINGS_CHECK_WISH_CHECKED || "",
  "check-wish.unchecked":
    process.env.REACT_APP_STRINGS_CHECK_WISH_UNCHECKED || "",
  "goto.wish-url": process.env.REACT_APP_STRINGS_GOTO_WISH_URL || "",
  "lead.1": process.env.REACT_APP_STRINGS_LEAD_1 || "",
  "lead.2": process.env.REACT_APP_STRINGS_LEAD_2 || "",
  "lead.3": process.env.REACT_APP_STRINGS_LEAD_3 || "",
};

export type Strings = typeof strings;
