interface CheckWish {
  action: string;
  confirm: {
    title: string;
    message: string;
    yes: string;
    no: string;
  };
  success: string;
  error: string;
}

export interface PersonalizationStrings {
  author: string;
  "check-wish": {
    checked: CheckWish;
    unchecked: CheckWish;
  };
  contact: {
    email: string;
    label: string;
  };
  goto: {
    "wish-url": string;
  };
  lead: {
    1: string;
    2: string;
    3: string;
  };
  pools: {
    aquired: {
      "no-wishes": string;
      title: string;
    };
    unaquired: {
      "no-wishes": string;
    };
  };
  title: string;
}
