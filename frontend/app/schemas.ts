type APIs = {
  getUserInfo: {
    Request: {
      user_id: string;
      user_age: number;
      user_type: "instructor" | "student" | "staff";
    };
  };
};
